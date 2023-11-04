import reactDom from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store';

import './index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

const root = reactDom.createRoot(document.querySelector('#root'));
root.render(<Provider store={store}>
   <App />
</Provider>)