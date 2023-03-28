import React from "react";
import './ListToDo.scss';
import AddToDo from "./AddToDo";
import {toast} from 'react-toastify'; // nạp thư viện toastify
import Color from "../HOC/Color";

class ListToDo extends React.Component{
    state = {
        ListTodos: [
            {id: 1, title: 'Learn ReactJS'},
            {id: 2, title: 'Learn ExpressJS'},
            {id: 3, title: 'Relax after coding'},
        ],
        editTodo:{}
    }

    addNewToDo = (todo) => {
        this.setState({
            ListTodos: [...this.state.ListTodos, todo]
        })
        toast.success("You added a todo!"); // gọi hàm success của toastify
    }

    handleDeleteToDo = (toDoId) => {
        let currentTodos = this.state.ListTodos;
        currentTodos = currentTodos.filter(item => item.id !== toDoId); //dùng filter để loại todo cần xoá
        this.setState({
            ListTodos: currentTodos
        })
        toast.success("You deleted a todo!"); // gọi hàm success của toastify
    }

    handleEditTodo = (todo) => {
        let {editTodo, ListTodos} = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0; // kiểm tra object có bằng rỗng, nếu rỗng là true
        //save
        if(isEmptyObj === false && editTodo.id === todo.id){
            let ListTodosCopy = [...ListTodos];
            let objIndex = ListTodosCopy.findIndex(obj => obj.id === todo.id); // tìm đúng index của todo cần edit
            ListTodosCopy[objIndex].title = editTodo.title;

            this.setState({
                ListTodos: ListTodosCopy,
                editTodo: {} //save thì editTodo rỗng làm mất đi ô input
            })
            toast.success("You updated a todo!"); // gọi hàm success của toastify
            return;
        }

        //edit
        this.setState({
            editTodo: todo
        })
    }

    handleOnchangeEditTodo = (event) => {
        let editTodoInput = {...this.state.editTodo};
        editTodoInput.title = event.target.value;
        this.setState({
            editTodo: editTodoInput
        })
    }

    render(){
        let {ListTodos, editTodo} = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0; // kiểm tra object có bằng rỗng, nếu rỗng là true
        // console.log(isEmptyObj);

        return(
            <>
                <div className="list-todo-container">
                    <p> Todo App With ReactJS </p>

                    <AddToDo 
                        addNewToDo={this.addNewToDo} // truyền function as props qua cho component con
                    />
                    <div className="list-todo-content">
                        {ListTodos.length > 0 && // nếu list todo > 0 mới map
                            ListTodos.map((item, index) => {
                                return(
                                    <div className="todo-child" key={item.id}>
                                        <div>
                                            {isEmptyObj === true ?
                                                <span>{index + 1} - {item.title}</span>
                                            :
                                            <>
                                                {editTodo.id === item.id ?
                                                    <span>
                                                        {index + 1} - <input value={editTodo.title} onChange={(event) => this.handleOnchangeEditTodo(event)}/>
                                                    </span>
                                                :
                                                    <span>{index + 1} - {item.title}</span>
                                                }
                                            </>
                                            }
                                        </div>
                                        <div>
                                            <button onClick={() => this.handleEditTodo(item)}>
                                                {isEmptyObj === false && editTodo.id === item.id ?
                                                'Save' : 'Edit'
                                                }
                                            </button>
                                            <button onClick={() => this.handleDeleteToDo(item.id)}>
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </>
        )
    }
}

// export default ListToDo;
export default Color(ListToDo); // 