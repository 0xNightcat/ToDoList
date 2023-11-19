import { configureStore } from '@reduxjs/toolkit';
import ToDoInputSlice from './components/ToDoInput/ToDoInputSlice';
import ToDoListSlice from './components/ToDoList/ToDoListSlice';
import postSlice from './components/Api/PostSlice';
import UISlice from './components/UI/UISlice';

// create store
export const store = configureStore({
   reducer: {
      toDoInput: ToDoInputSlice,
      postTask: postSlice,
      toDoList: ToDoListSlice,
      UI:UISlice,
   },
})