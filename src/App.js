import './App.scss';
import { Container} from 'react-bootstrap';
import ToDoList from './components/ToDoList/ToDoList';
import ToDoInput from './components/ToDoInput/ToDoInput';

// App component
function App() {
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