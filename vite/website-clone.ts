import { cpSync, createReadStream, existsSync, readFileSync, statSync, writeFileSync } from 'node:fs'
import { extname, join, resolve, sep } from 'node:path'
import type { Plugin } from 'vite'

/**
 * Serves the static Website-Clone prototype at /website-clone/ without touching its files,
 * and copies it into dist/ on build. A "back to the talk" link is injected into its HTML so
 * the speaker can always return to the hub.
 */

const MOUNT = 'website-clone'
const SOURCE_DIR = 'Website-Clone'
const SKIP = new Set(['DESIGN-HANDOFF.md', 'DESIGN-MANIFEST.json', '.claude'])

const MIME: Record<string, string> = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.woff2': 'font/woff2',
  '.mp4': 'video/mp4',
  '.webm': 'video/webm',
}

const backLink = (href: string) =>
  `<a href="${href}" style="position:fixed;left:16px;bottom:16px;z-index:2147483647;display:inline-flex;align-items:center;gap:8px;padding:12px 16px;background:#0e3438;color:#f7faf8;font:700 14px/1 system-ui,sans-serif;text-decoration:none">← 簡報主頁</a>`

const inject = (html: string, href: string) =>
  html.includes('</body>') ? html.replace('</body>', `${backLink(href)}</body>`) : html + backLink(href)

export function websiteClone(): Plugin {
  let root = ''
  let base = '/'
  let outDir = ''
  const source = () => resolve(root, SOURCE_DIR)

  return {
    name: 'website-clone',
    configResolved(config) {
      root = config.root
      base = config.base
      outDir = resolve(config.root, config.build.outDir)
    },
    configureServer(server) {
      server.middlewares.use(`/${MOUNT}`, (req, res, next) => {
        const dir = source()
        if (!existsSync(dir)) return next()

        let pathname = '/'
        try {
          pathname = decodeURIComponent((req.url ?? '/').split('?')[0])
        } catch {
          return next()
        }

        let file = resolve(dir, `.${pathname}`)
        if (file !== dir && !file.startsWith(dir + sep)) return next()
        if (existsSync(file) && statSync(file).isDirectory()) file = join(file, 'index.html')
        if (!existsSync(file) || !statSync(file).isFile()) return next()

        const type = MIME[extname(file).toLowerCase()] ?? 'application/octet-stream'
        res.setHeader('Content-Type', type)

        if (type.startsWith('text/html')) {
          res.setHeader('Cache-Control', 'no-cache')
          res.end(inject(readFileSync(file, 'utf8'), base))
          return
        }

        const { size } = statSync(file)
        res.setHeader('Accept-Ranges', 'bytes')
        const range = /^bytes=(\d*)-(\d*)$/.exec(req.headers.range ?? '')
        if (range) {
          const start = range[1] ? Number(range[1]) : Math.max(size - Number(range[2]), 0)
          const end = range[1] && range[2] ? Math.min(Number(range[2]), size - 1) : size - 1
          if (start > end || start >= size) {
            res.statusCode = 416
            res.setHeader('Content-Range', `bytes */${size}`)
            res.end()
            return
          }
          res.statusCode = 206
          res.setHeader('Content-Range', `bytes ${start}-${end}/${size}`)
          res.setHeader('Content-Length', end - start + 1)
          createReadStream(file, { start, end }).pipe(res)
          return
        }
        res.setHeader('Content-Length', size)
        createReadStream(file).pipe(res)
      })
    },
    closeBundle() {
      const dir = source()
      if (!existsSync(dir)) {
        this.warn(`${SOURCE_DIR}/ not found, so dist/ has no ${MOUNT}/ page.`)
        return
      }
      const target = join(outDir, MOUNT)
      cpSync(dir, target, { recursive: true, filter: (path) => !SKIP.has(path.split(sep).pop() ?? '') })
      const html = join(target, 'index.html')
      writeFileSync(html, inject(readFileSync(html, 'utf8'), base))
    },
  }
}
