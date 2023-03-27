import React from "react";
import {toast} from 'react-toastify'; // nạp thư viện toastify

class AddToDo extends React.Component{
    state = {
        title: ''
    }

    handleOnChangeTitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    handleAddToDo = () => {
        if(!this.state.title){ // validation, nếu title rỗng (false) => !false = true thì hiện thông báo và return để dừng luôn
            toast.error('You need an add todo!'); // gọi hàm error của toastify
            return;
        }

        let todo = {
            id: Math.floor(Math.random() * 100),
            title: this.state.title
        }

        this.props.addNewToDo(todo);

        this.setState({
            title: ''
        });
    }

    render(){
        let { title } = this.state;
        return(
            <div className="add-todo">
                <input 
                    className="input-add" type="text"
                    value={title} onChange={(event) => this.handleOnChangeTitle(event)}
                />
                <button type="button" className="add" onClick={() => this.handleAddToDo()}>
                    ADD
                </button>
            </div>
        )
    }
}

export default AddToDo;