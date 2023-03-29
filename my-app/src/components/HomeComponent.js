import React from "react";
import { withRouter } from 'react-router-dom';
import Color from "../views/HOC/Color.js"; // nạp HOC Color.js
import imgKeyBoard from "./assets/images/keyboard.jpg"; // import hình

class HomeComponent extends React.Component{
    // componentDidMount(){ // khi hàm render chạy xong thì hàm componentDidMount này sẽ được chạy
    //     setTimeout(()=>{
        //         this.props.history.push('/todo'); // sau 3s sẽ tự động chuyển trang todo
        //     }, 3000)
        // }
        
    render(){
        // console.log(this.props); // khi dùng withRouter sẽ có 3 props tự động có là history, location, match

        return(
            <>
                <h1>
                    HOME Route ReactJS
                </h1>
                <span>
                    import image
                </span>
                <div>
                    <img src={imgKeyBoard} style={{width:'300px', borderRadius: '10px'}}/>
                </div>
            </>
        )
    }
}  

// export default withRouter(HomeComponent); // dùng HOC thư viện có sẵn (https://chat.openai.com/chat/c696b14e-6c88-4aea-976a-67dd0c5703be)

export default Color(HomeComponent); // dùng HOC tự viết