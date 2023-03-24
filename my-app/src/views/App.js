import logo from './logo.svg';
import './App.scss';
import MyComponent from '../components/MyComponent.js'; // nạp component từ file MyComponent.js
import FormComponent from '../components/FormComponent.js'; // nạp component từ file FormComponent.js
import ParentComponent from '../components/ParentComponent'; // nạp component từ file ParentComponent.js

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
        
        <hr/>
        <FormComponent/>
        
        <hr/>
        <ParentComponent/>

      </header>
    </div>
  );
}

export default App;
