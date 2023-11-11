import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// get process
export const getTasks = createAsyncThunk('get/tasks', async () => {
   const response = axios.get('http://localhost:8000/Tasks');
   const data = response.then((response) => response.data);

   return data;
})

// state
const initialState = {
   inputTask: '',
   tasks: [],
}

// actions handler
export const ToDoInputSlice = createSlice({
   name: 'toDoInput',
   initialState,
   reducers: {
      setInputValue: (state, action) => { 
         state.inputTask = action.payload;
      },
      createTask: (state, action) => {
         if(state.tasks.length === 0) {
            state.tasks = [action.payload];
         } else {
            state.tasks = [...state.tasks].filter(item => {
               return item.title !== action.payload.title;
            }).concat(action.payload);
         }
      },
      clearInput: (state) => {
         state.inputTask = '';
      },
      updateDoneTask: (state, action) => {
         state.tasks.forEach((item) => {
            if(action.payload === item.id) {
               item.state = 'done';
            }
         });
      },
      removeTask: (state, action) => {
         state.tasks = state.tasks.filter(item => {
            return item.id !== action.payload;
         })
      },
      updateToDoTask: (state, action) => {
         state.tasks.forEach((item) => {
            if(action.payload === item.id) {
               item.state = 'todo';
            }
         });
      }
   },
   extraReducers: {
      [getTasks.fulfilled]: (state, action) => {         
         state.tasks = state.tasks.concat(action.payload);
      }
   }
})

export const { setInputValue, createTask, clearInput, updateDoneTask, updateToDoTask, removeTask } = ToDoInputSlice.actions;
export default ToDoInputSlice.reducer;