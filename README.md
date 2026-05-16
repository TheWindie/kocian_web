# Web Radima Kociána

Dockerizovaný web s konzultantským obsahem a e-shopem.

## Spuštění

1. Nakopíruj `.env.example` do `.env` a vyplň reálné hodnoty (Stripe klíče, hesla).
2. Vygeneruj bezpečný `PAYLOAD_SECRET` (např. `openssl rand -base64 48`).
3. Spusť `docker compose up -d --build`
4. Otevři `http://localhost` – web běží.
5. Admin CMS na `/admin` – default přihlášení `radim@radimkocian.cz` / `change-me-first` (změň hned).

## Produkční nasazení

- Uprav `NEXT_PUBLIC_SITE_URL` na ostrou doménu.
- Spusť s `docker compose -f docker-compose.yml -f docker-compose.prod.yml up -d`
- Pro HTTPS odkomentuj SSL blok v `nginx.conf` a nastav certifikáty pomocí certbota (viz dokumentace).

## Struktura

- **Payload CMS** – spravuje produkty, blog, stránky.
- **Next.js** – frontend, načítá data z Payload REST API.
- **Stripe** – platby za digitální produkty.
- **Redis** – cache a sessions.
