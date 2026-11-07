FROM node:22-alpine

WORKDIR /app

RUN corepack enable

COPY package.json pnpm-lock.yaml ./

# Route package downloads through the host's local proxy and restrict
# optional deps to the container platform (linux/<TARGETARCH>/musl) so
# pnpm does not fetch darwin/win32 binaries it will never use.
ARG TARGETARCH
RUN printf 'supportedArchitectures:\n  os:\n    - linux\n  cpu:\n    - %s\n  libc:\n    - musl\nfetchRetries: 5\nfetchRetryMaxTimeout: 120000\nfetchTimeout: 300000\nnetworkConcurrency: 4\n' "$TARGETARCH" > pnpm-workspace.yaml \
    && HTTPS_PROXY=http://host.docker.internal:1082 \
       HTTP_PROXY=http://host.docker.internal:1082 \
       pnpm install --frozen-lockfile

COPY . .

EXPOSE 5173

CMD ["pnpm", "dev", "--host", "0.0.0.0"]
