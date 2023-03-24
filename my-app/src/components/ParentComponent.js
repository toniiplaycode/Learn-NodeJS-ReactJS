import React from "react"; // nạp thư viện react
import ChildComponent from './ChildComponent'; // nạp component con

class ParentComponent extends React.Component{
    state = {
        name: 'tonii.playps4',
        age: 20,
        arrJobs: [
            { id: 'abcJob1', title: 'Developers', salary: 500},
            { id: 'abcJob2', title: 'Testers', salary: 400},
            { id: 'abcJob3', title: 'Project managers', salary: 1000}
        ]
       
    }

    render() {
        return(
            <>
                {/* gọi các component con và truyền props */}

                {/* hard code */}
                {/* <ChildComponent name={'ThanhToan'} age={20}/>*/} 

                {/* truyền dữ liệu từ state */}
                {/* <ChildComponent name={this.state.name} age={this.state.age}/>  */}

                {/* truyền 1 array từ state qua component con xử lý và render */}
                <ChildComponent arrJobs={this.state.arrJobs}/> 
            </>
            // nếu gán value của ô input bằng thuộc tính của state thì không thể nhập value từ bàn phím vào ô input được, muốn nhập được khi đã gán value bằng thuộc tính state thì phải dùng events onChange
        )
    }
}

export default ParentComponent