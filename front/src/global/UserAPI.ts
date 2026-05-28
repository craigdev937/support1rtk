import { createApi, 
    fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IData } from "../models/Interfaces";
const URL = "http://localhost:9000/api";

export const UserAPI = createApi({
    reducerPath: "UserAPI",
    tagTypes: ["Users"],
    baseQuery: fetchBaseQuery({ baseUrl: URL }),
    endpoints: (builder) => ({
        all: builder.query<IData, void>({
            query: () => ({
                url: "/users",
                method: "GET"
            }),
            providesTags: (result) => result ? [
                ...result.data.map(({ id }) => 
                    ({ type: "Users" as const, id })),
                { type: "Users", id: "LIST" },
            ] : [{ type: "Users", id: "LIST" }]
        }),
    })
});


