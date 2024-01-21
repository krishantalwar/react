import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'api', // optional
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://reqres.in/',
        prepareHeaders: (headers, { getState, endpoint }) => {
            console.log(headers)
            console.log(getState())
            const token = getState().auth.token
            console.log(token)
            // If we have a token set in state, let's assume that we should be passing it.
            if (token) {
                headers.set('authorization', `Bearer ${token}`)
            }
            console.log(headers)

            return headers
        }
    }),
    tagTypes: ['auth', 'userlist'],
    endpoints: builder => ({})
})