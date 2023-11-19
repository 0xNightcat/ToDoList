import './App.scss';
import { Container} from 'react-bootstrap';
import ToDoList from './components/ToDoList/ToDoList';
import ToDoInput from './components/ToDoInput/ToDoInput';
import { createTasksInstance, getTasks } from './components/ToDoInput/ToDoInputSlice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Alert from './components/UI/Alert/Alert';

// App component
function App() {
  const dispatch = useDispatch();

  const UIReducer = useSelector((state) => state.UI);
  const { color, text } = UIReducer;

  
  useEffect(() => {
    dispatch(getTasks());
    setTimeout(() => {
      dispatch(createTasksInstance());
    }, 50);
  }, [dispatch])



  return (
    <div className='app mt-5'>
      <Alert color={color} text={text} />
      <Container className='text-center'>
        <ToDoInput />
        <ToDoList />
      </Container>
    </div>
  )
}

export default App;