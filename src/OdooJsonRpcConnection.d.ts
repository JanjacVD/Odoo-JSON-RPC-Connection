import { DomainType, OdooRequestProps, OdooResponse } from "./types";

declare module "odoojsonrpcconnection" {
  class OdooJsonRpcConnection {
    static handleRequest<T>(
      props: OdooRequestProps,
      page: number,
      domain: DomainType,
      limit?: number
    ): Promise<OdooResponse<T>>;
  }
  export default OdooJsonRpcConnection;
}
