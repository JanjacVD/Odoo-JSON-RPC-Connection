export type OdooRequestProps = {
    model: string;
    method: string;
    fields?: string[];
    args?: (Object[] | Object)[];
};
export type DomainType = Array<any[]>;
export type OdooSuccessResponse<T> = {
    result: T;
};
export type OdooErrorResponse = {
    error: string;
};
export type OdooResponse<T> = OdooSuccessResponse<T> | OdooErrorResponse;
export type UserContext = {
    lang: string;
    tz: string;
    uid: number;
};
export type ExpectedLoginReturn = {
    name: string;
    session_id: string;
    server_version: string;
    user_context: UserContext;
    user_companies: {
        allowed_companies: any[];
    } | false;
};
export type LoginData = {
    db: string;
    login: string;
    password: string;
};
//# sourceMappingURL=types.d.ts.map