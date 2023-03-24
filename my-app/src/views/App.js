import logo from './logo.svg';
import './App.scss';
import FirstComponent from '../components/FirstComponent.js'; // nạp component từ file FirstComponent.js
import MyComponent from '../components/MyComponent.js'; // nạp component từ file MyComponent.js

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <p>
          Hello World With ReactJS
        </p>

        <FirstComponent/> {/* dùng kiểu short cut không component không có con */}
        {/* <FirstComponent></FirstComponent> */} {/* dùng kiểu full khi component có con */}
        {/* --> 2 cách để sử dụng component như thẻ tag HTML */}
        
        <hr/>
        <MyComponent/>
      </header>
    </div>
  );
}

export default App;
