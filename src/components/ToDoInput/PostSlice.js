import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// post process
export const postTasks = createAsyncThunk('post/tasks', async (tasks) => {
   await axios.post(`http://localhost:8000/Tasks`, tasks)
   .then((response) => {
      console.log('task posted');
   }).catch((error) => {
      console.log(error);
   })
})

// state
const initialState = {
   postingTask: false,
   errorMessage:  null
}

// post tasks actions handler
export const postSlice = createSlice({
   name: 'postTasks',
   initialState,
   extraReducers: {
      [postTasks.fulfilled]: (state) => {
         state.postingTask = false
      },
      [postTasks.pending]: (state) => {
         state.postingTask = true
      },
      [postTasks.rejected]: (state) => {
         state.errorMessage = 'Something went wrong!'
      }
   }
})

export default postSlice.reducer;