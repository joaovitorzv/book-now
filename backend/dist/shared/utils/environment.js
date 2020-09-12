"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv = __importStar(require("dotenv"));
dotenv.config();
var path = __dirname + "/../../../env";
dotenv.config({ path: path });
exports.AUTH_SECRET = process.env.AUTH_SECRET;
exports.TOKEN_EXPIRATION_TIME = process.env.TOKEN_EXPIRATION_TIME;
exports.DATABASE_URL = process.env.DATABASE_URL;
