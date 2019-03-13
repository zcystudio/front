# 1. setup base image
FROM node:8.11.4 AS base
RUN curl -o- -L https://yarnpkg.com/install.sh | sh
ENV PATH="/root/.yarn/bin:/root/.config/yarn/global/node_modules/.bin:${PATH}"
RUN mkdir /app
WORKDIR /app


# 2. build the app
FROM base AS builder

COPY ./ /app
RUN yarn install --ignore-engines --pure-lockfile
ENV NODE_ENV=build
RUN yarn build

# 3. production image

FROM base
COPY ./package.json /app/package.json
COPY ./yarn.lock /app/yarn.lock
COPY ./server.js /app/server.js
RUN yarn install --ignore-engines --pure-lockfile --production

COPY --from=builder /app/.next /app/.next

ENV NODE_ENV=production

EXPOSE 3000
ENV PORT=3000
CMD yarn start

