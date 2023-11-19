import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   isActive: false,
   color: '',
   text: ''
}

export const UISlice = createSlice({
   name: 'uiSlice',
   initialState,
   reducers: {
      emptyInput: (state) => {
         state.isActive = true;
         state.color = 'info';
         state.text = 'Input Field is Empty';
      },
      taskAdded: (state) => {
         state.isActive = true;
         state.color = 'success';
         state.text = 'New Task Added';
      },
      taskUpdated: (state) => {
         state.isActive = true;
         state.color = 'success';
         state.text = 'Task has Updated';
      },
      taskDeleted: (state) => {
         state.isActive = true;
         state.color = 'danger';
         state.text = 'Task has Deleted';
      },
      doneTasksDeleted: (state) => {
         state.isActive = true;
         state.color = 'danger';
         state.text = 'Done Tasks heve Deleted';
      },
      clearListTasks: (state) => {
         state.isActive = true;
         state.color = 'info';
         state.text = 'All Tasks Deleted';
      },
      sameTask: (state) => {
         state.isActive = true;
         state.color = 'info';
         state.text = 'Task has Already Added';
      },
      hideAlert: (state) => {
         if(state.isActive) {
            state.isActive = false;
         }
      }
   }
})

export const { emptyInput, taskAdded, taskUpdated, taskDeleted, doneTasksDeleted, clearListTasks, hideAlert, sameTask } = UISlice.actions;
export default UISlice.reducer;
