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

// delete done tasks
export const removeDoneTasksDB = createAsyncThunk('remove/done', async () => {
   await axios.get('http://localhost:8000/Tasks/')
   .then(async (response) => {
      const doneTasks = response.data.filter(item => item.state === 'done');
      doneTasks.forEach(async (elem) => {
         await axios.delete(`http://localhost:8000/Tasks/${elem.id}`)
         .then((response) => {
            console.log('task deleted');
         }).catch((error) => {
            console.log(error);
         })
      });
   }).catch((error) => {
      console.log(error);
   })   
})

// clear all tasks 
export const clearAllTasks = createAsyncThunk('clear/tasks', async () => {
   await axios.get('http://localhost:8000/Tasks/')
   .then(async (response) => {
      response.data.forEach(async (elem) => {
         await axios.delete(`http://localhost:8000/Tasks/${elem.id}`)
         .then((response) => {
            console.log('task deleted');
         }).catch((error) => {
            console.log(error);
         })
      });
   }).catch((error) => {
      console.log(error);
   }) 
})


// state
const initialState = {
   filterState: 'all'
}

// todo list action handler
export const ToDoListSlice = createSlice({
   name: 'ToDoList',
   initialState,
   reducers: {
      showAllTasks: (state) => {
         state.filterState = 'all';
      },
      showDoneTasks: (state) => {
         state.filterState = 'done';
      },
      showToDoTasks: (state) => {
         state.filterState = 'todo';
      }
   }
})

export const { showAllTasks, showDoneTasks, showToDoTasks } = ToDoListSlice.actions;
export default ToDoListSlice.reducer;