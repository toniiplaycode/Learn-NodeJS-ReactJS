import React from "react";

function getRandomColor() { // hàm random ra mã hex color
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const Color = (WrappedComponent) => { // tham số WrappedComponent(rule của ReactJS) là một Component, WrappedComponent chính là Component được hàm Color bọc
    const colorRandom = getRandomColor();

    return (props) => ( //tham số props chính là các props của WrappedComponent (rule của ReactJS)
            <div style={{color: colorRandom}}>
                <WrappedComponent {...props}/>
            </div>
        )
}

export default Color;