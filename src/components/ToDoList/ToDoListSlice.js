import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// 
export const updateTasksDoneDB = createAsyncThunk('update/tasks', async (id) => {
   const data = { state: 'done' };

   await axios.patch(`http://localhost:8000/Tasks/${id}`, data)
   .then((response) => {
      console.log('task updated');
   }).catch((error) => {
      console.log(error);
   })
})

// 
export const updateTasksTodoDB = createAsyncThunk('update/tasks', async (id) => {
   const data = { state: 'todo' };

   await axios.patch(`http://localhost:8000/Tasks/${id}`, data)
   .then((response) => {
      console.log('task updated');
   }).catch((error) => {
      console.log(error);
   })
})


// 
const initialState = {

}

// 
export const ToDoListSlice = createSlice({
   name: 'ToDoList',
   initialState,
   reducers: {

   }
})