import React from 'react'; // nạp thư viện react

class MyComponent extends React.Component { // tạo class Component
    state = { // state được định nghĩa ở trên render()
        today: `${new Date().getDate()} / ${new Date().getMonth()+1} / ${new Date().getFullYear()}`,
        address: 'CAN THO'
    }

    render() {

        let name = 'THANH TOAN';
        
        return ( // trả về HTML được viết trong "()"
            // <div className='block-container'> {/* #cách 1 block cha bọc 2 block con*/}
            //     <div className='block-first'>
            //         This my Component, My name is: {name} {/* JS được viết trong "{}" */}
            //     </div> 
            //     <div className='block-first'>
            //         <a href='https://github.com/toniiplaycode/Learn-NodeJS-ReactJS'>
            //             My Link GITHUB
            //         </a>
            //     </div>
            // </div>

            <> {/* #cách 2 dùng Fragment, cách này sẽ không có block cha nào bọc ở ngoài*/}
                <div className='block-first'>
                    This my Component, My name is: {name} {/* JS được viết trong "{}" */}
                </div> 
                <div className='block-first'>
                    <a href='https://github.com/toniiplaycode/Learn-NodeJS-ReactJS'>
                        My Link GITHUB
                    </a>
                </div>
                <div className='block-third'>
                    Today: {this.state.today}, this is state real time
                </div>
            </>
        )
    }
}

export default MyComponent;