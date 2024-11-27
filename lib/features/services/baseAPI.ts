import { RootState } from '@/lib/store';
import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
    baseUrl: "https://fakestoreapi.com/",
    prepareHeaders: (headers, { getState }) => {
      const state = getState() as RootState;
    
      const token = false
      console.log("Running apis ==> ", state);
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
});

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 6 });

export const api = createApi({
    reducerPath: 'securedApis',
    baseQuery: baseQueryWithRetry,
    refetchOnMountOrArgChange: 3,
    refetchOnFocus: true,
    tagTypes: [""],
    endpoints: () => ({}),
});


export const enhancedApi  = api.injectEndpoints({
    endpoints: (builder) => ({
        // Add endpoints here
        getPost: builder.query<string, void>({
            query: () => 'test',
          }),
    }),
})