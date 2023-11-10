import './ToDoInput.scss';
import { Card, Button, Form } from 'react-bootstrap';
import { setInputValue, createTask, clearInput } from './ToDoInputSlice';
import { useSelector, useDispatch } from 'react-redux';
import { postTasks } from '../Api/PostSlice';

// to do input component
function ToDoInput() {
   const dispatch = useDispatch();
   const toDoInputReducer = useSelector((state) => state.toDoInput);
   const { inputTask } = toDoInputReducer;

   // input value handler
   const inputValueHandler = (event) => {
      const inputValue = event.target.value;
      
      dispatch(setInputValue(inputValue));
   }
   
   // add task handler
   const addTaskHander = () => {
      const id = Date.now();
      const data = { id: id, title: inputTask, state: 'todo' };

      if(inputTask) {
         dispatch(createTask(data))
         dispatch(clearInput());
         dispatch(postTasks(data));
      }
   }
   

  return (
    <div className='todo-top'>
      <h2 className='mb-4'>ToDoInput</h2>

      <Card className='input-area w-75 m-auto p-4'>
      <Form>
         <Form.Group>
            <Form.Control type='text' value={inputTask} onChange={inputValueHandler} placeholder='New Task' />           
         </Form.Group>
      </Form>
      <div className='btns mt-3 d-flex'>
         <Button className='btn-success btn-add w-25' onClick={addTaskHander}>Add new task</Button>
         <Button className='btn-danger btn-update w-25'>Update task</Button>
      </div>
      </Card>
    </div>
  )
}

export default ToDoInput;