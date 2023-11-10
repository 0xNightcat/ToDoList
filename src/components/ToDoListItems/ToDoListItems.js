import './ToDoListItems.scss';
import { Form, Card } from 'react-bootstrap';

function ToDoListItems({ tasks }) {
  return (
    <div className='list-items mt-5'>
      <ul className='p-0'>
         {
            tasks ? tasks.map(item => {
               return <li key={item.id} className='list-item mt-3'>
                  <Card className='list-item-content'>
                     <span className='list-item-title'>{item.title}</span>
                     <div className='list-item-features'>
                        <Form.Check className='list-item-check list-itm' />
                        <a href='#!' className='list-item-edit list-itm'>
                           <i className='fa fa-pencil text-secondary'></i>
                        </a>
                        <a href='#!' className='list-item-remove list-itm'>
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