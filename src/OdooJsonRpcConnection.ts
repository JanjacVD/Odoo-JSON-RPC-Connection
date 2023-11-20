import {
  DomainType,
  ExpectedLoginReturn,
  LoginData,
  OdooRequestProps,
  OdooResponse,
  OdooSuccessResponse,
  UserContext,
} from "./types";
import axios from "axios";
export default class OdooJsonRpcConnection {
  public static async handleRequest<T>(
    props: OdooRequestProps,
    page: number,
    domain: DomainType,
    user: UserContext,
    sessionId: string,
    limit?: number
  ) {
    let reqArgs: any = {};
    limit && (reqArgs["limit"] = limit);
    props.fields && (reqArgs["fields"] = props.fields);
    limit && (reqArgs["offset"] = page * limit);
    domain.length > 0 && (reqArgs["domain"] = domain);
    return axios.post<OdooResponse<T>>(
      "/web/dataset/call_kw",
      {
        jsonrpc: "2.0",
        method: "call",
        params: {
          model: props.model,
          method: props.method,
          args: props.args || [],
          kwargs: { ...reqArgs, context: user },
        },
      },
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "X-Openerp": sessionId,
        },
      }
    );
  }

  public static async handleLogin(url: string, payload: LoginData) {
    return axios.post<OdooSuccessResponse<ExpectedLoginReturn>>(
      url + "/web/session/authenticate",
      { jsonrpc: "2.0", params: payload },
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
  }

  public static async handleLogout(sessionId:string) {
    axios.post(
      "/web/session/destroy",
      {
        jsonrpc: "2.0",
      },
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "X-Openerp": sessionId,
        },
      }
    );
  }
}
