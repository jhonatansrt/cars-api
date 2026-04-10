# Cars API

API REST simples com arquitetura em camadas (routes, controller, service, repository).

## Endpoints

- `GET /health`
- `GET /cars`
- `GET /cars/:id`
- `POST /cars`
- `PUT /cars/:id`
- `DELETE /cars/:id`

## Executando

```bash
npm install
npm run dev
```

Exemplo de payload:

```json
{
  "brand": "Toyota",
  "model": "Corolla",
  "year": 2024,
  "color": "preto"
}
```
