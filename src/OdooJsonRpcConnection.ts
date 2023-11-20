import {
  DomainType,
  ExpectedLoginReturn,
  LoginData,
  OdooRequestProps,
  OdooResponse,
} from "./types";
import axios from "axios";
export class OdooJsonRpcConnection {
  public static async handleRequest<T>(
    props: OdooRequestProps,
    page: number,
    domain: DomainType,
    limit?: number
  ) {
    let reqArgs: any = {};
    limit && (reqArgs["limit"] = limit);
    props.fields && (reqArgs["fields"] = props.fields);
    limit && (reqArgs["offset"] = page * limit);
    domain.length > 0 && (reqArgs["domain"] = domain);
    // reqArgs["order"] = "create_date desc";
    return axios.post<OdooResponse<T>>(
      "/web/dataset/call_kw",
      {
        jsonrpc: "2.0",
        method: "call",
        params: {
          model: props.model,
          method: props.method,
          args: props.args || [],
          kwargs: reqArgs,
        },
      },
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
  }

  public static async handleLogin(url: string, payload: LoginData) {
    return axios.post<OdooResponse<ExpectedLoginReturn>>(
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
}
