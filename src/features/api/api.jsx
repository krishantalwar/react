import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'api', // optional
    baseQuery: fetchBaseQuery({ baseUrl: 'https://reqres.in/' }),
    tagTypes: [ 'login_user'],
    endpoints: builder => ({})
})