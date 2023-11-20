import { DomainType, ExpectedLoginReturn, LoginData, OdooRequestProps, OdooResponse } from "./types";
export default class OdooJsonRpcConnection {
    static handleRequest<T>(props: OdooRequestProps, page: number, domain: DomainType, limit?: number): Promise<import("axios").AxiosResponse<OdooResponse<T>, any>>;
    static handleLogin(url: string, payload: LoginData): Promise<import("axios").AxiosResponse<OdooResponse<ExpectedLoginReturn>, any>>;
}
//# sourceMappingURL=OdooJsonRpcConnection.d.ts.map