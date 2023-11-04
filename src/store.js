import { configureStore } from '@reduxjs/toolkit';
import ToDoInputSlice from './components/ToDoInput/ToDoInputSlice';

// create store
export const store = configureStore({
   reducer: {
      toDoInput: ToDoInputSlice,
   },
})