import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// get process
export const getTasks = createAsyncThunk('get/tasks', async () => {
   const response = axios.get('http://localhost:8000/Tasks');
   const data = response.then((response) => response.data);

   return data;
})

// update task
export const updateEditTask = createAsyncThunk('update/task', async (id, { getState }) => {
   const store = getState();
   const state = store.toDoInput;
   const data = { title: state.editingTask.title };

   await axios.patch(`http://localhost:8000/Tasks/${id}`, data)
   .then((response) => {
      console.log('task updated');
   }).catch((error) => {
      console.log(error);
   })
})

// state
const initialState = {
   inputTask: '',
   edit: false,
   editingTask: {},
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
      },
      editTask: (state, action) => {
         state.tasks.forEach(item => {
            if(item.id === action.payload) {
               state.inputTask = item.title;
               state.edit = true;
               state.editingTask = item;
            }
         })
      },
      updateEditedTask: (state) => {
         state.edit = false;
         state.editingTask.title = state.inputTask;
         
         const newTasks = state.tasks.filter(item => item.id !== state.editingTask.id);
         const currentTask = state.tasks.filter(item => item.id === state.editingTask.id);

         const beforeTask = currentTask[0].title;
         currentTask[0].title = state.editingTask.title;
         const afterTask = currentTask[0].title;

         newTasks.forEach((item) => {
            if(item.title === afterTask) {
               currentTask[0].title = beforeTask;
               state.editingTask.title = beforeTask;
            }
         })

         state.inputTask = '';
      }
   },
   extraReducers: {
      [getTasks.fulfilled]: (state, action) => {         
         state.tasks = state.tasks.concat(action.payload);
      }
   }
})

export const { setInputValue, createTask, clearInput, updateDoneTask, updateToDoTask, removeTask, editTask, updateEditedTask } = ToDoInputSlice.actions;
export default ToDoInputSlice.reducer;