import './App.scss';
import { Container, Card, Button, Form } from 'react-bootstrap';
import ToDoList from './components/ToDoList/ToDoList';

// App component
function App() {
  return (
    <div className='app mt-5'>
      <Container className='text-center'>
        <h2 className='mb-4'>ToDoInput</h2>

        <Card className='input-area w-75 m-auto p-4'>
          <Form>
            <Form.Group>
              <Form.Control type='text' placeholder='New Task' />           
            </Form.Group>
          </Form>
          <div className='btns mt-3 d-flex'>
            <Button className='btn-success btn-add w-25'>Add new task</Button>
            <Button className='btn-danger btn-update w-25'>Update task</Button>
          </div>
        </Card>

        <ToDoList />
      </Container>
    </div>
  )
}

export default App;