import ToDoListItems from './ToDoListItems/ToDoListItems';
import './ToDoList.scss';
import { Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import ToDoListTabs from './ToDoListTabs/ToDoListTabs';
import { clearAll, createTasksInstance, editTask, filterTasks, removeDoneTasks, removeTask, updateDoneTask, updateToDoTask } from '../ToDoInput/ToDoInputSlice';
import { clearAllTasks, removeDoneTasksDB, removeTaskDB, showAllTasks, showDoneTasks, showToDoTasks, updateTasksDoneDB, updateTasksTodoDB } from './ToDoListSlice';
import { clearListTasks, doneTasksDeleted, hideAlert, taskDeleted } from '../UI/UISlice';

// to do list component
function ToDoList() {
   const dispatch = useDispatch();

   const toDoInputReducer = useSelector((state) => state.toDoInput);
   const { tasks } = toDoInputReducer;

   // input check handler
   const checkInputHandler = (e, id) => { 
      setTimeout(() => {
         dispatch(createTasksInstance());
       }, 50);
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
      dispatch(taskDeleted());
      setTimeout(() => {
         dispatch(hideAlert());
      }, 1800);
      setTimeout(() => {
         dispatch(createTasksInstance());
      }, 50);
   }

   // edit task handler
   const editTaskHandler = (id) => {
      dispatch(editTask(id));
   }

   // remove done tasks
   const removeDoneTasksHandler = () => {
      dispatch(removeDoneTasks());
      dispatch(removeDoneTasksDB());
      dispatch(doneTasksDeleted());
      setTimeout(() => {
         dispatch(hideAlert());
      }, 1800);
      setTimeout(() => {
         dispatch(createTasksInstance());
      }, 50);
   }

   // clear tasks
   const clearTasks = () => {
      dispatch(clearAll());
      dispatch(clearAllTasks());
      dispatch(clearListTasks());
      setTimeout(() => {
         dispatch(hideAlert());
      }, 1800);
      setTimeout(() => {
         dispatch(createTasksInstance());
      }, 50);
   }

   // show all tasks handler
   const showAllHandler = () => {
      dispatch(showAllTasks());
      dispatch(filterTasks('all'));
   }

   // show done tasks handler
   const showDoneHandler = () => {
      dispatch(showDoneTasks());
      dispatch(filterTasks('done'));
   }

   // show todo tasks handler
   const showToDoHandler = () => {
      dispatch(showToDoTasks());
      dispatch(filterTasks('todo'));
   }

  return (
    <div className='list w-75 m-auto mt-5 text-center'>
      <h2>ToDoList</h2>

      <ToDoListTabs 
      showAll={showAllHandler} 
      showDone={showDoneHandler}
      showTodo={showToDoHandler}
      />

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
         <Button className='all-tasks btn-warning' onClick={clearTasks}>Delete all tasks</Button>
      </div>
    </div>
  )
}

export default ToDoList;