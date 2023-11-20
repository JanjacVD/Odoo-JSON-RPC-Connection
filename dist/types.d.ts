export type OdooRequestProps = {
    model: string;
    method: string;
    fields?: string[];
    args?: (Object[] | Object)[];
};
export type DomainType = Array<any[]>;
export type OdooResponse<T> = {
    result: T;
};
//# sourceMappingURL=types.d.ts.map