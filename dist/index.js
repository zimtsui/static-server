"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_1 = __importDefault(require("koa"));
const koa_static_1 = __importDefault(require("koa-static"));
const process_1 = __importDefault(require("process"));
const koa = new koa_1.default();
koa.use(koa_static_1.default('/home/zim/bithub/monitor/dist'));
koa.listen(process_1.default.env.PORT);
//# sourceMappingURL=index.js.map