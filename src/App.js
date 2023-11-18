import './App.scss';
import { Container} from 'react-bootstrap';
import ToDoList from './components/ToDoList/ToDoList';
import ToDoInput from './components/ToDoInput/ToDoInput';
import { createTasksInstance, getTasks } from './components/ToDoInput/ToDoInputSlice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

// App component
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTasks());
    setTimeout(() => {
      dispatch(createTasksInstance());
    }, 50);
  }, [dispatch])



  return (
    <div className='app mt-5'>
      <Container className='text-center'>
        <ToDoInput />
        <ToDoList />
      </Container>
    </div>
  )
}

export default App;