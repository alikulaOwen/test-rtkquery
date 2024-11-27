import { IUser } from "@/lib/interfaces";
import { api } from "./baseAPI";

export const userAPIs = api.injectEndpoints({
    endpoints: (builder) => ({
        // Add endpoints here
        getUser: builder.query<IUser[], void>({
            query: () => '/users',
          }),
    }),
})

export const { useGetUserQuery } = userAPIs