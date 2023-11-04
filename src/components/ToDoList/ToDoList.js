import ToDoListItems from '../ToDoListItems/ToDoListItems';
import './ToDoList.scss';
import { Row, Col, Button } from 'react-bootstrap';

// to do list component
function ToDoList() {
  return (
    <div className='list w-75 m-auto mt-5 text-center'>
      <h2>ToDoList</h2>

      <Row className='justify-content-center mt-5'>
         <Col md={3}>
            <Button className='btn-show-all w-100 active'>All</Button>
         </Col>
         <Col md={3}>
            <Button className='btn-show-done w-100'>Done</Button>
         </Col>
         <Col md={3}>
            <Button className='btn-show-todo w-100'>Todo</Button>
         </Col>
      </Row>

      <ToDoListItems />

      <div className='delete-tasks d-flex'>
         <Button className='done-tasks btn-warning'>Delete done tasks</Button>
         <Button className='all-tasks btn-warning'>Delete all tasks</Button>
      </div>
    </div>
  )
}

export default ToDoList;