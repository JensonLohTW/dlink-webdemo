FROM node:22-alpine

WORKDIR /app

RUN corepack enable

COPY package.json pnpm-lock.yaml ./

# Restrict optional deps to the container platform (linux/<TARGETARCH>/musl)
# so pnpm does not fetch darwin/win32 binaries it will never use.
#
# Downloads go straight to the registry by default. If your network needs a
# proxy, pass it in at build time (it is not kept in the final image), e.g.
#   BUILD_PROXY=http://host.docker.internal:1082 ./scripts/start.sh
ARG TARGETARCH
ARG BUILD_PROXY=""
RUN printf 'supportedArchitectures:\n  os:\n    - linux\n  cpu:\n    - %s\n  libc:\n    - musl\nfetchRetries: 5\nfetchRetryMaxTimeout: 120000\nfetchTimeout: 300000\nnetworkConcurrency: 4\n' "$TARGETARCH" > pnpm-workspace.yaml \
    && if [ -n "$BUILD_PROXY" ]; then export HTTPS_PROXY="$BUILD_PROXY" HTTP_PROXY="$BUILD_PROXY"; fi \
    && pnpm install --frozen-lockfile

COPY . .

EXPOSE 5173

CMD ["pnpm", "dev", "--host", "0.0.0.0"]
