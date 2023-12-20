FROM node:20

WORKDIR /app
EXPOSE 8080

ENV SECRET_KEY=abc123

COPY src app

RUN yarn install

CMD yarn start