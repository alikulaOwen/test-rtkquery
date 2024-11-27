import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authAPI = createApi({
    reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fakestoreapi.com/auth/"
  }),
  tagTypes: ['Auth'],
  endpoints: (builder)=>{
    return {
       postAuth: builder.mutation({
        query: (body: {
            username: string,
            password: string
        }) => ({
          url: '/login',
          method: 'POST',
          body
        }),
       }),
    }
  }

})

export const { usePostAuthMutation } = authAPI