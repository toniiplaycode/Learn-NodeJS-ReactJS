import React from "react"; // nạp thư viện react
import ChildComponent from './ChildComponent'; // nạp component con

class FormComponent extends React.Component{
    state = {
        firstName: '',
        lastName: '',
        arrJobs: [
            { id: 'abcJob1', title: 'Developers', salary: '500$'},
            { id: 'abcJob2', title: 'Testers', salary: '400$'},
            { id: 'abcJob3', title: 'Project managers', salary: '1000$'}
        ]
       
    }


    handleGetFirstName = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }

    handleGetLastName = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault(); // do type="submit" nên mặc định browser nó sẽ load lại trang khi submit form, ngăn chặn này thì nó sẽ không được submit, bây giờ nó chỉ là 1 nút bình thường (type="button")
        console.log('check data input: ', this.state);    
    }


    render() {
        // console.log(this.state);
        return(
            <>
                <form>
                    <div>
                        <label>First Name:</label>
                    </div>
                    <div>
                        <input type="text" value = {this.state.firstName} onChange={(event) => this.handleGetFirstName(event)}/>
                    </div>
                    <div>
                        <label>Last Name:</label>
                    </div>
                    <div>
                        <input type="text" value = {this.state.lastName} onChange={(event) => this.handleGetLastName(event)} />
                    </div>
                    <div>
                        <button type="submit" onClick={(event) => this.handleSubmit(event)}>
                            Submit
                        </button>
                    </div>
                </form>

                {/* gọi các component con và truyền props */}
                {/* <ChildComponent name={'ThanhToan'} age={20}/>*/} {/* hard code */}
                {/* <ChildComponent name={this.state.firstName}/>  */} {/* truyền dữ liệu từ state */}
                <ChildComponent arrJobs={this.state.arrJobs}/> {/* truyền 1 array từ state qua component con xử lý và render */}
            </>
            // nếu gán value của ô input bằng thuộc tính của state thì không thể nhập value từ bàn phím vào ô input được, muốn nhập được khi đã gán value bằng thuộc tính state thì phải dùng events onChange
        )
    }
}

export default FormComponent