export type OdooRequestProps = {
  model: string;
  method: string;
  fields?: string[];
  args?: (Object[] | Object)[];
};

export type DomainType = Array<any[]>;

export type OdooResponse<T> = { result: T };

declare module "odoojsonrpcconnection" {
  class OdooJsonRpcConnection {
    static handleRequest<T>(
      props: OdooRequestProps,
      page: number,
      domain: DomainType,
      limit?: number
    ): Promise<OdooResponse<T>>;
  }

  export { OdooRequestProps, DomainType, OdooResponse };
  export default OdooJsonRpcConnection;
}
