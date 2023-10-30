import './App.scss';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';

// App component
function App() {
  return (
    <div className='app'>
      <Container className='text-center'>
        <h1 className=''>ToDoList</h1>

        <div className='input-area'>
          <Form>
            <Form.Group>
              <Form.Control type='text' placeholder='New Todo' />           
            </Form.Group>
          </Form>
        </div>
      </Container>
    </div>
  )
}

export default App;