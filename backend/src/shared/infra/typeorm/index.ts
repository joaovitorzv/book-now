import { createConnection } from 'typeorm';
import CreateBooks from './seeds/book.seed';

const createBooks = new CreateBooks();

createConnection();
createBooks.run;