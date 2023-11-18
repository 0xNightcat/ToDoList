import { Row, Col, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';

function ToDoListTabs({ showAll, showDone, showTodo }) {
   const toDoInputReducer = useSelector((state) => state.toDoList);
   const { filterState } = toDoInputReducer;

  return (
   <Row className='justify-content-center mt-5'>
   <Col md={3}>
      <Button className={`btn-show-all w-100 ${
         filterState === 'all' ? `active` : null
      }`} onClick={showAll}>All</Button>
   </Col>
   <Col md={3}>
      <Button className={`btn-show-done w-100 ${
         filterState === 'done' ? `active` : null
      }`} onClick={showDone}>Done</Button>
   </Col>
   <Col md={3}>
      <Button className={`btn-show-todo w-100 ${
         filterState === 'todo' ? `active` : null
      }`} onClick={showTodo}>Todo</Button>
   </Col>
</Row>
  )
}

export default ToDoListTabs;