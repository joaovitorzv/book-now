"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DATABASE_URL = exports.TOKEN_EXPIRATION_TIME = exports.AUTH_SECRET = void 0;

var dotenv = _interopRequireWildcard(require("dotenv"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

dotenv.config();
const path = `${__dirname}/../../../env`;
dotenv.config({
  path
});
const {
  AUTH_SECRET
} = process.env;
exports.AUTH_SECRET = AUTH_SECRET;
const {
  TOKEN_EXPIRATION_TIME
} = process.env;
exports.TOKEN_EXPIRATION_TIME = TOKEN_EXPIRATION_TIME;
const {
  DATABASE_URL
} = process.env;
exports.DATABASE_URL = DATABASE_URL;