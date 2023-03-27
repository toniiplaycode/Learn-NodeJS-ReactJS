import logo from './logo.svg';
import './App.scss';
import FirstComponent from '../components/FirstComponent.js'; // nạp component từ file FirstComponent.js
import MyComponent from '../components/MyComponent.js'; // nạp component từ file MyComponent.js
import ListToDo from './TodoApp/ListToDo.js'; // nạp component todo app
import {ToastContainer} from 'react-toastify'; // nạp component ToastContainer của thư viện toastify
import 'react-toastify/dist/ReactToastify.css'; // nạp CSS của thư viện toastify
import './TodoApp/ListToDo.scss'; 
import Nav from './Nav/Nav.js'; // nạp component Nav
import HomeComponent from '../components/HomeComponent.js'; // nạp component HomeComponent để làm route HOME

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"; // để chuyển trang (route) thì phải nạp các hàm của thư viện router, ask IT dùng router V5 nên dùng switch, còn mình dùng bản router mới là V6 nên dùng Routes để chuyển trang

function App() {
  return (
    // hàm BrowserRouter của thư viện router sẽ bọc tất cả, muốn chuyển các route thì dùng hàm Switch
    <BrowserRouter>
      <div className="App">
        <Nav/>

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          
          {/* <p>
            Hello World With ReactJS
          </p> */}

          {/* <FirstComponent/> */} {/* dùng kiểu short cut không component không có con */}
          {/* <FirstComponent></FirstComponent> */} {/* dùng kiểu full khi component có con */}
          {/* --> 2 cách để sử dụng component như thẻ tag HTML */}
          
          {/* <HomeComponent/> */}

          {/* <MyComponent/> */}

          {/* <ListToDo/>  */}

          {/* chia các component thành các Route riêng và được bọc ở ngoài là Routes (có 's' giống như dùng Switch của router V5) để chuyển Route */}
          <Routes> 
            <Route path='/' element={<HomeComponent/>}/>
            
            <Route path='/form-add' element={<MyComponent/>} />

            <Route path='/todo' element={<ListToDo/>} />
            
            <Route path='/about' element={<FirstComponent/>} />
          </Routes>

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
    </BrowserRouter>
  );
}

export default App;
