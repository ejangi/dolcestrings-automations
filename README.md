# DolceStrings Automations

> This Google Cloud Function provides various endpoints for use as part of automating DolceStrings Violin Studio operations.

## Development

1. Copy the Service Account file into the `src` directory and ensure the filename starts with *service-account-...*.

2. Build the `docker compose` image:

```bash
docker compose build
```

3. Run the container:

```bash
docker compose up
```

4. Run a second terminal for testing:

```bash
docker compose exec app yarn test
```