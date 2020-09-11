modules.export = {
  "type": "postgres",
  "url": process.env.DATABASE_URL,
  "entities": [
    "./modules/**/infra/typeorm/entities/*.js"
  ],
  "migrations": [
    "./shared/infra/typeorm/migrations/*.js"
  ],
  "seeds": [
    "./shared/infra/typeorm/seeds/*.js"
  ],
}