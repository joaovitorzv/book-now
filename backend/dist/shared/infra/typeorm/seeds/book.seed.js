"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Book_1 = __importDefault(require("@modules/books/infra/typeorm/entities/Book"));
var BooksData = [
    {
        title: "Clean Code: A Handbook of Agile Software Craftsmanship",
        author: "Robert C. martin",
        price: 78.90,
        bookCoverUrl: 'https://images-na.ssl-images-amazon.com/images/I/41SH-SvWPxL._SX376_BO1,204,203,200_.jpg',
        category: 'Tecnologia • Programação • Computadores',
        createdAt: "" + new Date(),
        updatedAt: "" + new Date(),
    },
    {
        title: "Pequenas respostas para grandes questões",
        author: "Stephen Hawking",
        price: 23.99,
        bookCoverUrl: 'https://m.media-amazon.com/images/I/41xYbLNlC1L._SY346_.jpg',
        category: 'Biografias • Ciencia • Exploração',
        createdAt: "" + new Date(),
        updatedAt: "" + new Date(),
    },
    {
        title: "Relatividade: a especial e geral",
        author: "Albert Einstein",
        price: 16.20,
        bookCoverUrl: 'https://m.media-amazon.com/images/I/41b9QByGizL._SY346_.jpg',
        category: 'Matematica • Ciencia • Exploração',
        createdAt: "" + new Date(),
        updatedAt: "" + new Date(),
    },
    {
        title: "Sol da meia noite",
        author: "Stephenie Meyer",
        price: 59.90,
        bookCoverUrl: 'https://images-na.ssl-images-amazon.com/images/I/41dd3tjpdUL._SX329_BO1,204,203,200_.jpg',
        category: 'Romance • Drama',
        createdAt: "" + new Date(),
        updatedAt: "" + new Date(),
    },
    {
        title: "Harry Potter and the Philosopher's Stone",
        author: "J.K. Rolling",
        price: 27.90,
        bookCoverUrl: 'https://m.media-amazon.com/images/I/51UoqRAxwEL._SY346_.jpg',
        category: 'Ficção • Drama • Atemporal',
        createdAt: "" + new Date(),
        updatedAt: "" + new Date(),
    },
    {
        title: "Percy Jackson e os Olimpianos",
        author: "Rick Riordan",
        price: 32.70,
        bookCoverUrl: 'https://images-na.ssl-images-amazon.com/images/I/615f9dKkoKL.jpg',
        category: 'Divertido • Suspense • Atemporal',
        createdAt: "" + new Date(),
        updatedAt: "" + new Date(),
    },
    {
        title: "Anne I. Pacote de 3 livros: Edição Especial",
        author: "Stephenie Meyer",
        price: 59.90,
        bookCoverUrl: 'https://images-na.ssl-images-amazon.com/images/I/51FleoOznwL._SX433_BO1,204,203,200_.jpg',
        category: 'Romance • Drama',
        createdAt: "" + new Date(),
        updatedAt: "" + new Date(),
    },
];
var CreateBooks = /** @class */ (function () {
    function CreateBooks() {
    }
    CreateBooks.prototype.run = function (factory, connection) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, connection
                            .createQueryBuilder()
                            .insert()
                            .into(Book_1.default)
                            .values(BooksData)
                            .execute()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return CreateBooks;
}());
exports.default = CreateBooks;
