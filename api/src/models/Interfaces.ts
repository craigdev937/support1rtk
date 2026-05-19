export interface IUser {
    id: number,
    first: string,
    last: string,
    email: string,
    password: string,
    isAdmin: boolean,
    created_at?: string,
    updated_at?: string,
};

export interface ITicket {
    id: string,
    userid: number,
    product: string,
    description: string,
    status: string,
    created_at?: string,
    updated_at?: string,
};



