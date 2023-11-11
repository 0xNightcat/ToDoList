import { Row, Col, Button } from 'react-bootstrap';

function ToDoListTabs() {
  return (
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
  )
}

export default ToDoListTabs;