// counterSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
	const response = await axios.get(
		'https://jsonplaceholder.typicode.com/posts'
	);
	return response.data;
});

const postsSlice = createSlice({
	name: 'posts',
	initialState: {
		posts: [],
		loading: false,
		error: null,
		count: 0,
	},
	reducers: {
		increment: state => {
			state.count += 1;
		},
		decrement: state => {
			state.count -= 1;
		},
	},
	extraReducers: builder => {
		builder.addCase(fetchPosts.pending, state => {
			state.loading = true;
		})
			.addCase(fetchPosts.fulfilled, (state, action) => {
				state.posts = action.payload;
				state.loading = false;
			})
			.addCase(fetchPosts.rejected, (state, action) => {
				state.error = action.error.message;
				state.loading = false;
			});
	},
});

export const selectPosts = state => state.posts.posts;

export const { increment, decrement } = postsSlice.actions;
export default postsSlice.reducer;
