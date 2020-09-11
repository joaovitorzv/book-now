import { createConnection } from 'typeorm';
import CreateBooks from './seeds/book.seed';

const config: any = {
  "type": "postgres",
  "url": process.env.DATABASE_URL,
  "entities": [
    "dist/modules/**/infra/typeorm/entities/*.ts"
  ],
  "migrations": [
    "dist/shared/infra/typeorm/migrations/*.ts"
  ],
  "seeds": [
    "dist/shared/infra/typeorm/seeds/*.ts"
  ],
  "cli": {
    "migrationsDir": "./src/shared/infra/typeorm/migrations"
  }
}

const createBooks = new CreateBooks();

createConnection(config);
createBooks.run;