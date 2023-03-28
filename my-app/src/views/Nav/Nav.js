import React from "react";
import './Nav.scss'; // nạp file scss
import {
    Link,
    NavLink
} from "react-router-dom"; // dùng Link hoặc NavLink để chuyển route mà không load lại trang


class Nav extends React.Component{
    render(){
        return(
            <>
                <div className="topnav">
                    {/* <a className="active" href="/">Home</a>
                    <a href="/todo">Todo</a>
                    <a href="/form-add">Form Add</a>
                    <a href="/about">About</a> */}
                    {/* dùng thẻ a bình thường khi chuyển route sẽ load lại trang, không active được route */}
                    
                    {/* <Link to="/">Home</Link>
                    <Link to="/todo">Todo</Link>
                    <Link to="/form-add">Form Add</Link>
                    <Link to="/about">About</Link> */}
                    {/* --> dùng Link không active được route */}

                    <NavLink to="/" activeClassName="active" exact={true}>Home</NavLink>
                    <NavLink to="/todo" activeClassName="active">Todo</NavLink>
                    <NavLink to="/users" activeClassName="active">Users</NavLink>
                    <NavLink to="/form-add" activeClassName="active">Form Add</NavLink>
                    <NavLink to="/about" activeClassName="active">About</NavLink>
                    {/* --> dùng NavLink active được route */}
                </div>
            </>
            
        )
    }
}

export default Nav;