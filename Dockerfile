FROM node:20

WORKDIR /app
EXPOSE 8080

COPY src app

RUN yarn install

CMD yarn start