FROM node:20.12-alpine3.18 AS stage

WORKDIR /app

COPY . .

RUN yarn install

RUN yarn build

FROM node:20.12-alpine3.18 AS runtime

WORKDIR /app

RUN addgroup --system --gid 1001 nodejs && adduser --system --uid 1001 yarn

COPY --from=stage --chown=yarn:nodejs /app/node_modules ./node_modules

COPY --from=stage --chown=yarn:nodejs /app/dist ./dist

COPY --from=stage --chown=yarn:nodejs /app/public ./public

COPY --from=stage --chown=yarn:nodejs /app/package.json ./package.json

EXPOSE 4173

USER 1001

ENTRYPOINT [ "yarn", "preview" ]