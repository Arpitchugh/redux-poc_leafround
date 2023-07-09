// PostsWrapper.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	fetchPosts,
	selectPosts,
	increment,
	decrement,
} from '../store/postsSlice';
import Counter from './Posts';

const PostsWrapper = () => {
	const dispatch = useDispatch();
	const posts = useSelector(selectPosts);
	const counter = useSelector(state => state.posts.count);
	const handleIncrement = () => {
		dispatch(increment());
	};
	const handleDecrement = () => {
		dispatch(decrement());
	};
	useEffect(() => {
		dispatch(fetchPosts());
	}, [dispatch]);

	return (
		<Counter
			posts={posts}
			color={'white'}
			handleDecrement={handleDecrement}
			handleIncrement={handleIncrement}
			counter={counter}
		/>
	);
};

export default PostsWrapper;
