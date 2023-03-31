import React from "react";
// import { withRouter } from 'react-router-dom';
import Color from "../views/HOC/Color.js"; // nạp HOC Color.js
import imgKeyBoard from "./assets/images/keyboard.jpg"; // import hình

import { connect } from "react-redux"; // hàm này là HOC, dùng để kết nối Redux và React với nhau

class HomeComponent extends React.Component{
    // componentDidMount(){ // khi hàm render chạy xong thì hàm componentDidMount này sẽ được chạy
    //     setTimeout(()=>{
        //         this.props.history.push('/todo'); // sau 3s sẽ tự động chuyển trang todo
        //     }, 3000)
        // }
        
    handleDeleteUser = (userId) => { // xoá state của Redux 
        this.props.deleteUserRedux(userId); // dùng actions của Redux
    }
    
    handleAddRandomUser = () => {
        this.props.addRandomUserRedux();
    }

    render(){
        // console.log(this.props); // khi dùng withRouter sẽ có 3 props tự động có là history, location, match
        console.log(this.props.dataFromRedux); // lấy state của Redux thông qua hàm mapStateToProps bên dưới
        let listUsers = this.props.dataFromRedux; // lấy state của Redux để render ra

        return(
            <>
                <h1>
                    HOME Route ReactJS
                </h1>
                <span>
                    import image
                </span>
                <div>
                    <img src={imgKeyBoard} style={{width:'300px', borderRadius: '10px'}} alt="image_imported"/>
                </div>
                <h3>List Users from REDUX</h3>
                <div>
                    {listUsers && listUsers.length > 0 &&
                        listUsers.map((item, index) => {
                            return(
                                <>
                                    <div key={item.id}>
                                        {index+1} - {item.name} <button onClick={() => this.handleDeleteUser(item.id)}>x</button>
                                    </div>
                                </>
                            )
                        })  
                    }
                    <div>
                        <button onClick={() => this.handleAddRandomUser()}>Add random user</button>
                    </div>
                </div>
            </>
        )
    }
}  

// export default withRouter(HomeComponent); // dùng HOC thư viện có sẵn (https://chat.openai.com/chat/c696b14e-6c88-4aea-976a-67dd0c5703be)

const mapStateToProps = (state) => { // hàm lấy state của Redux
    return {
        dataFromRedux: state.users
    }
}

const mapDispatchToProps = (dispatch) => { // hàm để dùng được các action của Redux
    return {
        deleteUserRedux: (userId) => dispatch({type: 'DELETE_USER', payload: userId}),
        addRandomUserRedux: () => dispatch({type: 'ADD_RANDOM_USER'})
    } // hàm deleteUserRedux có tham số là userId
}
// --> các actions được định nghĩa trong switch case bên file rootReducer.js

export default connect(mapStateToProps, mapDispatchToProps)(Color(HomeComponent)); // dùng hàm Color HOC tự viết, dùng hàm connect để kết nối Component Home này với Redux, Component nào có connect thì mới kết nối được với Redux, những Component kết nối được với Redux thì sẽ dùng được state(state Redux) của nó