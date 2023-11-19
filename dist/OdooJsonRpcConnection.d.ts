import { DomainType, OdooRequestProps, OdooResponse } from "./types";
export declare class OdooJsonRpcConnection {
    static handleRequest<T>(props: OdooRequestProps, page: number, domain: DomainType, limit?: number): Promise<import("axios").AxiosResponse<OdooResponse<T>, any>>;
}
