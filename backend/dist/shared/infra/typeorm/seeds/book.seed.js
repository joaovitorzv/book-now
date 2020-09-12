"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Book = _interopRequireDefault(require("../../../../../dist/modules/books/infra/typeorm/entities/Book"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const BooksData = [{
  title: "Clean Code: A Handbook of Agile Software Craftsmanship",
  author: "Robert C. martin",
  price: 78.90,
  bookCoverUrl: 'https://images-na.ssl-images-amazon.com/images/I/41SH-SvWPxL._SX376_BO1,204,203,200_.jpg',
  category: 'Tecnologia • Programação • Computadores',
  createdAt: `${new Date()}`,
  updatedAt: `${new Date()}`
}, {
  title: "Pequenas respostas para grandes questões",
  author: "Stephen Hawking",
  price: 23.99,
  bookCoverUrl: 'https://m.media-amazon.com/images/I/41xYbLNlC1L._SY346_.jpg',
  category: 'Biografias • Ciencia • Exploração',
  createdAt: `${new Date()}`,
  updatedAt: `${new Date()}`
}, {
  title: "Relatividade: a especial e geral",
  author: "Albert Einstein",
  price: 16.20,
  bookCoverUrl: 'https://m.media-amazon.com/images/I/41b9QByGizL._SY346_.jpg',
  category: 'Matematica • Ciencia • Exploração',
  createdAt: `${new Date()}`,
  updatedAt: `${new Date()}`
}, {
  title: "Sol da meia noite",
  author: "Stephenie Meyer",
  price: 59.90,
  bookCoverUrl: 'https://images-na.ssl-images-amazon.com/images/I/41dd3tjpdUL._SX329_BO1,204,203,200_.jpg',
  category: 'Romance • Drama',
  createdAt: `${new Date()}`,
  updatedAt: `${new Date()}`
}, {
  title: "Harry Potter and the Philosopher's Stone",
  author: "J.K. Rolling",
  price: 27.90,
  bookCoverUrl: 'https://m.media-amazon.com/images/I/51UoqRAxwEL._SY346_.jpg',
  category: 'Ficção • Drama • Atemporal',
  createdAt: `${new Date()}`,
  updatedAt: `${new Date()}`
}, {
  title: "Percy Jackson e os Olimpianos",
  author: "Rick Riordan",
  price: 32.70,
  bookCoverUrl: 'https://images-na.ssl-images-amazon.com/images/I/615f9dKkoKL.jpg',
  category: 'Divertido • Suspense • Atemporal',
  createdAt: `${new Date()}`,
  updatedAt: `${new Date()}`
}, {
  title: "Anne I. Pacote de 3 livros: Edição Especial",
  author: "Stephenie Meyer",
  price: 59.90,
  bookCoverUrl: 'https://images-na.ssl-images-amazon.com/images/I/51FleoOznwL._SX433_BO1,204,203,200_.jpg',
  category: 'Romance • Drama',
  createdAt: `${new Date()}`,
  updatedAt: `${new Date()}`
}];

class CreateBooks {
  async run(factory, connection) {
    await connection.createQueryBuilder().insert().into(_Book.default).values(BooksData).execute();
  }

}

exports.default = CreateBooks;