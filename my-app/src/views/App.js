import logo from './logo.svg';
import './App.scss';
import MyComponent from '../components/MyComponent.js'; // nạp component từ fike myComponent.js

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <p>
          Hello World With ReactJS
        </p>

        <MyComponent/> {/* dùng kiểu short cut không component không có con */}
        {/* <MyComponent></MyComponent> */} {/* dùng kiểu full khi component có con */}
        {/* --> 2 cách để sử dụng component như thẻ tag HTML */}

      </header>
    </div>
  );
}

export default App;
