import './Alert.scss';
import { useSelector } from 'react-redux';

function Alert({ text, color }) {
   const UIReducer = useSelector((state) => state.UI);
   const { isActive } = UIReducer;

  return (
    <div className={`alert ${color} ${
      isActive ? `active` : `inActive`
    }`}>
      <span className='alert-text'>{text}</span>
    </div>
  )
}

export default Alert;