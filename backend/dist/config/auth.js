"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var environment_1 = require("../shared/utils/environment");
exports.default = {
    secret: environment_1.AUTH_SECRET,
    expiresIn: environment_1.TOKEN_EXPIRATION_TIME,
};
