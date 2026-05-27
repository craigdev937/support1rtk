export interface IUser {
    id: number,
    first: string,
    last: string,
    email: string,
    password: string,
    isadmin: boolean,
    created_at?: string,
    updated_at?: string
};

export interface IData {
    success: boolean,
    message: string,
    count: number,
    data: IUser[]
};



