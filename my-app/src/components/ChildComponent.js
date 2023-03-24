import React from "react"; // nạp thư viện react

class ChildComponent extends React.Component{ //#cách 1 dùng class component (Statefull)
    state = {
        showJobs: true
    }

    handleShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs // toggle khi hàm handleShowHide này thực thi
        })
    }

    render() {
        // let name = this.props.name;
        // let age = this.props.age;
        // let {name, age} = this.props; // có thể dùng destructuring để lấy được value từ props
        let {arrJobs} = this.props;
        let {showJobs} = this.state;
        return(
            <>
                {/* truy cập prop là name được truyền bên component CHA */}
                {/* <div>Child Component, check props: {name} {age}</div> */}

                {/* dùng condition ternary Operator để xử lý SHOW HIDE job-list */}
                {showJobs === false ? 
                    <>
                        <div>
                            <button onClick={() => this.handleShowHide()}>SHOW</button>
                        </div>
                    </>
                :
                    <>
                        <div className="job-list">
                            {
                                /* dùng hàm map để render các item có trong arrayJobs được truyền từ component CHA */
                                arrJobs.map((item) => {
                                    return (
                                        <div key={item.id}> {/* dùng key cho mỗi item,  không nên dùng index của hàm map để làm key vì các item trong 1 mảng có thể đổi, nên ta dùng id của từng item có sẵn */}
                                            {item.title} - {item.salary}$z
                                        </div>
                                    )
                                })
                            }
                        </div>

                        <div>
                            <button onClick={() => this.handleShowHide()}>HIDE</button>
                        </div>
                    </>
                }
            </>
        )
    }
}

// const ChildComponent = (props) => { //#cách 2 dùng function component, tham số nhận được là props từ component CHA
//     let {arrJobs} = props;
//     return (
//         <>
//             <div className="job-list">
//                 {
//                     arrJobs.map((item) => {
//                         return (
//                             <div key={item.id}> {/* dùng key cho mỗi item,  không nên dùng index của hàm map để làm key vì các item trong 1 mảng có thể đổi, nên ta dùng id của từng item có sẵn */}
//                                 {item.title} - {item.salary}
//                             </div>
//                         )
//                     })
//                 }
//             </div>
//         </>
//     )
//     // --> vì đây là 1 function component nên việc truy cập đến state hoặc props thì không cần dùng 'this', chỉ cần return để render ra dữ liệu, không dùng hàm render() như class component
// }

export default ChildComponent