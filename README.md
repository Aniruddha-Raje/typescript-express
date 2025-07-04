# 🚀 Express TypeScript API with TSOA & Swagger

A structured oilerplate for building TypeScript-based Express APIs with OpenAPI documentation using **TSOA** decorators.

---

## 📦 Installation

### 1. Install runtime dependencies

npm install \
axios \
body-parser \
cors \
dotenv \
express \
helmet \
jsonwebtoken \
swagger-ui-express \
tsoa \
uuid \
winston \
winston-daily-rotate-file \
yamljs

### 2. Install development dependencies

npm install -D \
@types/body-parser \
@types/cors \
@types/express \
@types/jsonwebtoken \
@types/node \
@types/swagger-ui-express \
@types/uuid \
@types/yamljs \
@typescript-eslint/eslint-plugin \
@typescript-eslint/parser \
ts-node \
ts-node-dev \
typescript

## Generate TSOA Docs & Routes

npm run tsoa:build

## Generate OpenAPI spec (YAML format)

npm run tsoa:spec

| Script                | Description                              |
| --------------------- | ---------------------------------------- |
| `npm run tsoa:routes` | Generate route handlers from controllers |
| `npm run tsoa:spec`   | Generate OpenAPI spec (YAML format)      |
| `npm run build`       | Compile TypeScript to JavaScript         |
| `npm start`           | Start the compiled app                   |

## Swagger UI

http://localhost:3000/docs

