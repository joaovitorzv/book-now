"use strict";
var tsConfig = require("../tsconfig.json");
var tsConfigPaths = require("tsconfig-paths");
var baseUrl = "../"; // Either absolute or relative path. If relative it's resolved to current working directory.
var cleanup = tsConfigPaths.register({
    baseUrl: baseUrl,
    paths: tsConfig.compilerOptions.paths,
});
// When path registration is no longer needed
cleanup();
