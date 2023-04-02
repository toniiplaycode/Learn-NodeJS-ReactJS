import React from "react";
import { withRouter } from "react-router-dom"; // dùng hàm withRouter thì component DetailUserComponent này sẽ nhận được các props của HOC (history, location, match), có props của withRouter mới lấy được tham số trên route
import axios from "axios"; 

class DetailUserComponent extends React.Component{
    state = {
        user: {}
    }

    async componentDidMount(){ //hàm render() chạy xong thì hàm componentDidMount này sẽ được chạy
        // console.log('check props from route paramaters: ', this.props);
        // console.log('check route paramaters: ', this.props.match.params.id);

        const RouteID = this.props.match.params.id; // lấy được id từ route rồi thì dùng axios để lấy dữ liệu từ API
        let res = await axios.get(`https://reqres.in/api/users/${RouteID}`);
        // console.log(res.data.data);
        this.setState({
            user: res.data.data
        })

       //--> về sau nên dùng try catch để xử lý khi vào route sai
    }

    handleBack(){
        this.props.history.push(`/user`); // dùng history.push để quay về trang ListUser
    }

    render(){
        const {user} = this.state; 
        let isEmptyObj = Object.keys(user).length === 0; // kiểm tra object có bằng rỗng, nếu rỗng là true, check nếu object user rỗng thì in ra thông báo lỗi
        
        return(
            <>
                {isEmptyObj === false ? 
                    <>
                        <div>
                            <img src={user.avatar} alt="avater_user"/>
                        </div>
                        <div>Name: {user.first_name} {user.last_name}</div>
                        <div>Email: {user.email}</div>
                    </>
                :
                    <>
                        <div>
                            <h2 style={{color: "red"}}>No user has id as so !</h2>
                        </div>
                    </>
                }

                <div>
                    <button onClick={() => this.handleBack()}>
                        BACK
                    </button>
                </div>
            </>
        )
    }
}

export default withRouter(DetailUserComponent);