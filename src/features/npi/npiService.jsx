import {
    createEntityAdapter
} from "@reduxjs/toolkit";

import {
    apiSlice
} from "../api/api";



import { setuselist } from './npiSlics';

const userAdapter = createEntityAdapter({
    sortComparer: (a, b) =>
        b.id > (a.id)
    // {
    //     console.log("aa", a)
    //     console.log(b)
    // }
    // b.id.localeCompare(a.id)
})
const initialState = userAdapter.getInitialState()
console.log(initialState)

export const extendedApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getUserList: builder.query({
            // query: (credentials) => ({
            //     url: 'api/login',
            //     method: 'POST',
            //     body: credentials
            // }),
            query: (name) => `api/users?page=1`,
            // query: (name) => {
            //     console.log(name);
            //     return ({
            //         url: `api/users?page=1`,
            //     })
            // },
            // onSuccess: (data, variables, api, store) => {
            //     console.log("ddd");
            //     //     console.log(data)
            //     //     console.log(variables)
            //     //     console.log(api)
            //     //     console.log(store)
            //     //     // Assuming the server response contains user information
            //     //     const user = data.user;
            //     //     // dispatch(setuselist({ isAuthenticated: true, user: user }));
            //     //     // Update the React Query cache directly
            //     //     store.dispatch(setuselist({ isAuthenticated: true, user: user }));

            //     //          store.dispatch(authApi.util.updateQueryData('me', null, (draft) => {
            //     //   draft.entities = [];
            //     // }));

            // },
            transformResponse: responseData => {
                // console.log(responseData)
                // setuselist("asdsa",{ isAuthenticated: true, user: responseData });
                return userAdapter.setAll(initialState, responseData.data)
                // return responseData;
            },
            providesTags: (result, error, arg) => [
                { type: 'userlist', id: "LIST" },
                ...result.ids.map(id => ({ type: 'userlist', id }))
            ],
            // onError: (error, _, api) => {
            //     console.error('Login Error:', error);
            // },
            // onSettled: (result, error, variables) => {
            //     console.log('Mutation Settled:', result, error, variables);
            // },
            async onQueryStarted(args, { dispatch, getState, queryFulfilled, requestId, extra, getCacheEntry }) {
                // console.log(args);
                // console.log(await getState());
                // console.log(await requestId);
                // console.log(await extra);
                try {
                    const { data } = await queryFulfilled;
                    console.log('data', data);

                    dispatch(setuselist(data.data));
                } catch (error) {
                    console.log("error", error)
                }
            },
        }),
    }),
    overrideExisting: false,
})

export const {
    useGetUserListQuery
} = extendedApiSlice


export default extendedApiSlice;

