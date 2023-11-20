"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
class OdooJsonRpcConnection {
    static handleRequest(props, page, domain, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            let reqArgs = {};
            limit && (reqArgs["limit"] = limit);
            props.fields && (reqArgs["fields"] = props.fields);
            limit && (reqArgs["offset"] = page * limit);
            domain.length > 0 && (reqArgs["domain"] = domain);
            // reqArgs["order"] = "create_date desc";
            return axios_1.default.post("/web/dataset/call_kw", {
                jsonrpc: "2.0",
                method: "call",
                params: {
                    model: props.model,
                    method: props.method,
                    args: props.args || [],
                    kwargs: reqArgs,
                },
            }, {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            });
        });
    }
    static handleLogin(url, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            return axios_1.default.post(url + "/web/session/authenticate", { jsonrpc: "2.0", params: payload }, {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            });
        });
    }
}
exports.default = OdooJsonRpcConnection;
