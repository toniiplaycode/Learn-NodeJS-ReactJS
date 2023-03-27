import logo from './logo.svg';
import './App.scss';
// import FirstComponent from '../components/FirstComponent.js'; // nạp component từ file FirstComponent.js
// import MyComponent from '../components/MyComponent.js'; // nạp component từ file MyComponent.js
import ListToDo from './TodoApp/ListToDo'; // nhạp component todo app
import {ToastContainer} from 'react-toastify'; // nạp component ToastContainer của thư viện toastify
import 'react-toastify/dist/ReactToastify.css'; // nạp CSS của thư viện toastify
import './TodoApp/ListToDo.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        {/* <p>
          Hello World With ReactJS
        </p> */}

        {/* <FirstComponent/> */} {/* dùng kiểu short cut không component không có con */}
        {/* <FirstComponent></FirstComponent> */} {/* dùng kiểu full khi component có con */}
        {/* --> 2 cách để sử dụng component như thẻ tag HTML */}
        
        {/* <hr/> */}
        {/* <MyComponent/> */}

        <p>
          Todo App With ReactJS
        </p>
        <ListToDo/>

      </header>

      <ToastContainer // thư viện build sẵn, chỉ cần copy code về dùng
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        />
        {/* Same as */}
      <ToastContainer />

    </div>
  );
}

export default App;
