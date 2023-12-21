FROM node:20

WORKDIR /app
EXPOSE 8080

ENV SECRET_KEY=abc123
ENV GS_BUCKET=dolcestrings-automations
ENV GOOGLE_APPLICATION_CREDENTIALS=/app/service-account.json

COPY src app

RUN yarn install

CMD yarn start