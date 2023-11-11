import ToDoListItems from './ToDoListItems/ToDoListItems';
import './ToDoList.scss';
import { Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import ToDoListTabs from './ToDoListTabs/ToDoListTabs';
import { updateDoneTask, updateToDoTask } from '../ToDoInput/ToDoInputSlice';
import { updateTasksDoneDB, updateTasksTodoDB } from './ToDoListSlice';

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

  return (
    <div className='list w-75 m-auto mt-5 text-center'>
      <h2>ToDoList</h2>

      <ToDoListTabs />

      <ToDoListItems inputCheck={checkInputHandler} tasks={tasks} />

      <div className='delete-tasks d-flex'>
         <Button className='done-tasks btn-warning'>Delete done tasks</Button>
         <Button className='all-tasks btn-warning'>Delete all tasks</Button>
      </div>
    </div>
  )
}

export default ToDoList;