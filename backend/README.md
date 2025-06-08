# Backend Starter (Node.js + TypeScript)

## Description

Lorem ipsum dolor est

- Node.js
- TypeScript
- ESLint
- Prettier
- Husky + lint-staged (for pre-commit formatting)

## Structure

```txt
my-backend-app/
├── src/
│   ├── routes/
│   │   └── index.js
│   ├── controllers/
│   │   └── homeController.js
│   ├── app.js
│   └── server.js
├── .env
├── .gitignore
├── package.json
└── README.md
```

## Setup

- Setup the env variables
- Install dependencies

  ```sh
  npm ci
  ```

### Development

- init the db

  ```sh
  npm run db:init && npm run db:seed
  ```

- Run development

  ```sh
  npm run dev
  ```

### Production

- Build the production bundle

  ```sh
  npm run build
  ```

- Start production

  ```sh
  npm start
  ```

## Swagger

To browse API documentation on local dev environment just run the app: ```npm run dev``` then visit `/api-docs`
