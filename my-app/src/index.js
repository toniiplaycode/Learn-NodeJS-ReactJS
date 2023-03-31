import React from 'react';
import ReactDOM from 'react-dom';
import App from './views/App';
import reportWebVitals from './reportWebVitals';
import './styles/global.scss';

// import 3 thư viện để dùng Redux
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './store/reducers/rootReducer.js'; //import hàm Redux vào

const reduxStore = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); // tạo store của Redux và config để dùng được Redux Devtools

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {reduxStore}>  {/* hàm Provider của Redux sẽ bọc bên ngoài App để React có thể dùng Redux, store = {reduxStore} nạp dữ liệu cho store của Redux */}
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
  
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
