import { configureStore } from '@reduxjs/toolkit';
import ToDoInputSlice from './components/ToDoInput/ToDoInputSlice';
import { postSlice } from './components/ToDoInput/PostSlice';

// create store
export const store = configureStore({
   reducer: {
      toDoInput: ToDoInputSlice,
      postTask: postSlice
   },
})