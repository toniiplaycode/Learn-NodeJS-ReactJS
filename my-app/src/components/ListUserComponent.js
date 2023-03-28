import React from "react";
import axios from "axios";

class ListUserComponent extends React.Component{
    state = {
        listUser: []
    }

    // componentDidMount() { // componentDidMount là methods trong lifecycle được gọi sau hàm render(), componentDidMount thường dùng để gọi API để lấy dữ liệu, khởi tạo event listener, thiết lập các state cho component
    //     axios.get('https://reqres.in/api/users?page=1') // dùng promise 
    //         .then(res => {
    //             this.setState({
    //                 listUser: res.data.data
    //             });
    //             // console.log('check: ', res.data.data);
    //             console.log(this.state.listUser);
    //         })
    // }

    async componentDidMount() { // dùng async/await
        const res = await axios.get('https://reqres.in/api/users?page=1');
        this.setState({
            listUser: res.data.data
        });
        // console.log('check: ', res.data.data);
        // console.log(this.state.listUser);
    }


    render(){
        const {listUser} = this.state;
        console.log(listUser);

        return(
            <>
                <div className="list-user-container"> 
                    {listUser && listUser.length > 0 &&
                         listUser.map((item, index) => {
                            return (
                                <div className="user-item" key={item.id}>
                                    {index + 1} - {item.first_name} {item.last_name}
                                </div>
                            )
                        })
                    }
                </div>
            </>
        )
    }
} 

export default ListUserComponent;