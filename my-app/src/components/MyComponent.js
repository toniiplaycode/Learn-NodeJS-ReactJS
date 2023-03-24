import React from "react";
import FormComponent from "./FormComponent"; // nạp component FormComponent
import ChildComponent from "./ChildComponent"; // nạp component ChildComponent

class MyComponent extends React.Component{
    state = {
        arrJobs: [
            { id: '1', title: 'Developers', salary: 500},
            { id: '2', title: 'Testers', salary: 400},
            { id: '3', title: 'Project managers', salary: 1000}
        ]
    }

    addNewJob = (job) => {
        // console.log(job);
        this.setState({ // thêm job mới từ component con (FormComponent)
            arrJobs: [...this.state.arrJobs, job] // dùng spread để thêm job mới từ các job đã có
        });
    }

    deleteAJob = (jobId) => { // xoá job
        let currentJobs = this.state.arrJobs;
        currentJobs = currentJobs.filter((item) => item.id !== jobId); // dùng filter để loại job theo id
        this.setState({ // loại xong set lại state
            arrJobs: currentJobs
        })
    }

    render() {
        return(
            <>
                <FormComponent addNewJob={this.addNewJob}/> {/* truyền hàm addNewJob qua cho component con */}

                <ChildComponent arrJobs={this.state.arrJobs} deleteAJob={this.deleteAJob}/>  {/* truyền mảng arrJobs và hàm deleteAJob qua cho component con */}
            </>
        )
    }
}

export default MyComponent;