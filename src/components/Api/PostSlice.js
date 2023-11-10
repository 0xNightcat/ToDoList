import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// post process
export const postTasks = createAsyncThunk('post/tasks', async (task) => {
   await axios.get('http://localhost:8000/Tasks')
   .then((response) => {
      response.data.length === 0 ? axios.post(`http://localhost:8000/Tasks`, task)
      : 
      response.data.forEach(item => {
         if(item.title === task.title) {
            axios.delete(`http://localhost:8000/Tasks/${item.id}`);
         } else {            
            axios.post(`http://localhost:8000/Tasks`, task)
            .then((response) => {
               console.log('task posted');
            }).catch((error) => {
               console.log(error);
            })
         }
      })
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