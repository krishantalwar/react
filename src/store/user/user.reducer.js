// import { USER_ACTION_TYPES } from './user.types';

import { createEntityAdapter } from "@reduxjs/toolkit";

import { apiSlice } from "../../apis/api";


const INITIAL_STATE = {
  currentUser: null,
  isLoading: false,
  error: null,
};



// const postsAdapter = createEntityAdapter({
//   sortComparer: (a, b) =>{ 
//     console.log("a:",a);
//     console.log("b:",b);
//     b.date.localeCompare(a.date)}
// })
const postsAdapter = createEntityAdapter();

const initialState = postsAdapter.getInitialState()

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
      getPosts: builder.query({
        query: () => '/posts',
        transformResponse: responseData => {
          console.log("trsf")
          const loadedPosts = responseData.map(post => {
              return post;
          });
          return postsAdapter.setAll(initialState, loadedPosts)
      },
      providesTags: (result, error, arg) => [
          { type: 'Post', id: "LIST" },
          ...result.ids.map(id => ({ type: 'Post', id }))
      ]
      })
  }),
  overrideExisting: false,

})

export const {
  useGetPostsQuery,
  // useGetPostsByUserIdQuery,
  // useAddNewPostMutation,
  // useUpdatePostMutation,
  // useDeletePostMutation,
  // useAddReactionMutation
} = extendedApiSlice


// https://redux-toolkit.js.org/usage/usage-guide#using-selectors-with-createentityadapter
