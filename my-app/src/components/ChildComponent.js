import React from "react"; // nạp thư viện react

class ChildComponent extends React.Component{
    render() {
        // let name = this.props.name;
        // let age = this.props.age;
        let {name, age} = this.props; // có thể dùng destructuring để lấy được value từ props
        return(
            <>
                <div>Child Component, check props: {name} - {age} years old</div> {/* truy cập prop là name được truyền bên component CHA */}
                {console.log(this.props)}
            </>
        )
    }
}

export default ChildComponent