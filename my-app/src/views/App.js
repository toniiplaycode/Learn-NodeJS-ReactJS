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
import ListUserComponent from '../components/ListUserComponent.js'; // nạp component ListUserComponent để render users 

import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom"; // để chuyển trang (route) thì phải nạp các hàm của thư viện router

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

          {/* chia các component thành các Route riêng và được bọc ở ngoài là Switch */}
          <Switch> 
            <Route path='/' exact>
              <HomeComponent/>
            </Route>
            
            <Route path='/form-add'>
              <MyComponent/>
            </Route>

            <Route path='/todo'>
              <ListToDo/>
            </Route>
            
            <Route path='/about'>
              <FirstComponent/>
            </Route>
            
            <Route path='/users'>
              <ListUserComponent/>
            </Route>
          </Switch>

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
