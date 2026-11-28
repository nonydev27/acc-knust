# ACC KNUST Backend Track — King-Leo58148

## Setup & Run

1. Copy `.env.example` to `.env` and fill in your values:
   ```bash
   cp .env.example .env
   ```
2. Start the server:
   ```bash
   npm start
   ```

## Environment Variables

- `PORT`: Port the HTTP server listens on (defaults to `3000`).
- `CLUB_SECRET_KEY`: Secret key for the club backend (never commit `.env`).

## Endpoints

- `GET /`: Returns member info, backend readiness status, active port, and whether `CLUB_SECRET_KEY` is configured.
