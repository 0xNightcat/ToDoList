import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// update done tasks
export const updateTasksDoneDB = createAsyncThunk('update/tasks', async (id) => {
   const data = { state: 'done' };

   await axios.patch(`http://localhost:8000/Tasks/${id}`, data)
   .then((response) => {
      console.log('task updated');
   }).catch((error) => {
      console.log(error);
   })
})

// update todo tasks
export const updateTasksTodoDB = createAsyncThunk('update/tasks', async (id) => {
   const data = { state: 'todo' };

   await axios.patch(`http://localhost:8000/Tasks/${id}`, data)
   .then((response) => {
      console.log('task updated');
   }).catch((error) => {
      console.log(error);
   })
})

// delete task
export const removeTaskDB = createAsyncThunk('remove/tasks', async (id) => {
   await axios.delete(`http://localhost:8000/Tasks/${id}`)
   .then((response) => {
      console.log('task deleted');
   }).catch((error) => {
      console.log(error);
   })
})


// state
const initialState = {

}

// todo list action handler
export const ToDoListSlice = createSlice({
   name: 'ToDoList',
   initialState,
   reducers: {

   }
})