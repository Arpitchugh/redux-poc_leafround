// create slice
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
	name: 'user',
	initialState: { value: { name: '', class: '', count: 0 } },
	reducers: {
		showName: (state, action) => {
			state.value = action.payload;
		},
	},
});

export const { showName } = userSlice.actions; // export action
export default userSlice.reducer; // export reducer