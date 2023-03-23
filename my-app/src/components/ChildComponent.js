import React from "react"; // nạp thư viện react

class ChildComponent extends React.Component{
    render() {
        return(
            <>
                <div>Child Component, props: {this.props.name}</div> {/* truy cập prop là name được truyền bên component CHA */}
            </>
        )
    }
}

export default ChildComponent