import React from "react"; // nạp thư viện react

class ChildComponent extends React.Component{
    render() {
        // let name = this.props.name;
        // let age = this.props.age;
        let {name, age, arrJobs} = this.props; // có thể dùng destructuring để lấy được value từ props
        return(
            <>
                {/* <div>Child Component, check props: {name} {age}</div> */} {/* truy cập prop là name được truyền bên component CHA */}

                {/* dùng hàm map để render các item có trong arrayJobs được truyền từ component CHA */}
                {console.log(this.props.arrJobs)}
                <div className="job-list">
                    {
                        arrJobs.map((item) => {
                            return (
                                <div key={item.id}> {/* dùng key cho mỗi item,  không nên dùng index của hàm map để làm key vì các item trong 1 mảng có thể đổi, nên ta dùng id của từng item có sẵn */}
                                    {item.title} - {item.salary}
                                </div>
                            )
                        })
                    }
                </div>
            </>
        )
    }
}

export default ChildComponent