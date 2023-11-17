import ToDoListItems from './ToDoListItems/ToDoListItems';
import './ToDoList.scss';
import { Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import ToDoListTabs from './ToDoListTabs/ToDoListTabs';
import { editTask, removeDoneTasks, removeTask, updateDoneTask, updateToDoTask } from '../ToDoInput/ToDoInputSlice';
import { removeDoneTasksDB, removeTaskDB, updateTasksDoneDB, updateTasksTodoDB } from './ToDoListSlice';

// to do list component
function ToDoList() {
   const dispatch = useDispatch();

   const toDoInputReducer = useSelector((state) => state.toDoInput);
   const { tasks } = toDoInputReducer;

   // input check handler
   const checkInputHandler = (e, id) => { 
      if(e.target.checked) {
         dispatch(updateDoneTask(id));
         dispatch(updateTasksDoneDB(id));
      } else {
         dispatch(updateToDoTask(id));
         dispatch(updateTasksTodoDB(id));
      }
   }

   // delete task handler
   const removeTaskHandler = (id) => {
      dispatch(removeTask(id));
      dispatch(removeTaskDB(id));
   }

   // edit task handler
   const editTaskHandler = (id) => {
      dispatch(editTask(id));
   }

   // remove done tasks
   const removeDoneTasksHandler = () => {
      dispatch(removeDoneTasks());
      dispatch(removeDoneTasksDB());
   }


  return (
    <div className='list w-75 m-auto mt-5 text-center'>
      <h2>ToDoList</h2>

      <ToDoListTabs />

      {
         tasks.length > 0 ? <ToDoListItems 
         inputCheck={checkInputHandler} 
         removeTask={removeTaskHandler} 
         editTask={editTaskHandler}
         tasks={tasks} />
         :
         <h4 className='mt-5'>Task List is Empty</h4>
      }

      <div className='delete-tasks d-flex'>
         <Button className='done-tasks btn-warning' onClick={removeDoneTasksHandler}>Delete done tasks</Button>
         <Button className='all-tasks btn-warning'>Delete all tasks</Button>
      </div>
    </div>
  )
}

export default ToDoList;