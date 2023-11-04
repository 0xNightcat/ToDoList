import { createSlice } from '@reduxjs/toolkit';

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
      }
   }
})

export const { setInputValue, createTask, clearInput } = ToDoInputSlice.actions;
export default ToDoInputSlice.reducer;