module.exports = {
  "type": "postgres",
  "url": process.env.DATABASE_URL,
  "entities": [
    "dist/modules/**/infra/typeorm/entities/*.js"
  ],
  "migrations": [
    "dist/shared/infra/typeorm/migrations/*.js"
  ],
  "seeds": [
    "dist/shared/infra/typeorm/seeds/*.js"
  ]
}