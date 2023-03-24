import React from "react"; // nạp thư viện react
class FormComponent extends React.Component{
    state = {
        title: '',
        salary: ''
    }

    handleGetJobTitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    handleGetSalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault(); // do type="submit" nên mặc định browser nó sẽ load lại trang khi submit form, ngăn chặn này thì nó sẽ không được submit, bây giờ nó chỉ là 1 nút bình thường (type="button")
        console.log('check data input: ', this.state);    
        if(!this.state.title || !this.state.salary){ // validation dữ liệu nhập từ ô input có đủ không  
            alert('Data input is not enough!');
            return;
        }
        
        this.props.addNewJob({ // gọi hàm được truyền từ props và truyền tham số lên cho component cha để thêm job mới
            id: Math.floor(Math.random() * 100),
            title: this.state.title,
            salary: this.state.salary
        }) 

        this.setState({ // gọi hàm được truyền từ props để thêm mới job xong thì đặt lại title và salary trống tên ô input
            title: '',
            salary: ''
        })
    }

    render() {
        // console.log(this.state);
        return(
            <>
                <form>
                    <div>
                        <label>Job Title:</label>
                    </div>
                    <div>
                        <input type="text" value = {this.state.title} onChange={(event) => this.handleGetJobTitle(event)}/>
                    </div>
                    <div>
                        <label>Salary:</label>
                    </div>
                    <div>
                        <input type="text" value = {this.state.salary} onChange={(event) => this.handleGetSalary(event)} />
                    </div>
                    <div>
                        <button type="submit" onClick={(event) => this.handleSubmit(event)}>
                            Submit
                        </button>
                    </div>
                </form>
            </>
            
            // nếu gán value của ô input bằng thuộc tính của state thì không thể nhập value từ bàn phím vào ô input được, muốn nhập được khi đã gán value bằng thuộc tính state thì phải dùng events onChange
        )
    }
}

export default FormComponent