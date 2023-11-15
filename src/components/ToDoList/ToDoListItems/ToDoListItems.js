import './ToDoListItems.scss';
import { Form, Card } from 'react-bootstrap';

function ToDoListItems({ tasks, inputCheck, removeTask, editTask }) {
  return (
    <div className='list-items mt-5'>
      <ul className='p-0'>
         {
            tasks ? tasks.map(item => {
               return <li key={item.id} className='list-item mt-3'>
                  <Card className='list-item-content'>
                     <span className={`list-item-title ${
                        item.state === 'done' ? 'done' : null
                     }`}>{item.title}</span>
                     <div className='list-item-features'>
                        <Form.Check onChange={(e) => inputCheck(e, item.id)} className='list-item-check list-itm' checked={
                           item.state === 'done' ? 'checked' : ''
                        } />
                        <a href='#!' className='list-item-edit list-itm' onClick={() => editTask(item.id)}>
                           <i className='fa fa-pencil text-secondary'></i>
                        </a>
                        <a href='#!' className='list-item-remove list-itm' onClick={() => removeTask(item.id)}>
                           <i className='fa fa-trash text-danger'></i>
                        </a>
                     </div>
                  </Card>
               </li>
            }) : null
         }
      </ul>
    </div>
  )
}

export default ToDoListItems;