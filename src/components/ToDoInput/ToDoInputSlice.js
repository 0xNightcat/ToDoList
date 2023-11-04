import { createSlice } from '@reduxjs/toolkit';

// state
const initialState = {
   inputTask: '',
   tasks: [{ id: 1, title: 'test', state: 'Todo' }],
}

// actions handler
export const ToDoInputSlice = createSlice({
   name: 'toDoInput',
   initialState,
   reducers: {
      setInputValue: (state, action) => { 
         state.inputTask = action.payload;
      }
   }
})

export const { setInputValue } = ToDoInputSlice.actions;
export default ToDoInputSlice.reducer;