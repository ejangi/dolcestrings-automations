FROM node:21

WORKDIR /app

COPY src app

RUN yarn install

CMD yarn dev