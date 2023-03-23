import React from 'react'; // nạp thư viện react

class MyComponent extends React.Component { // tạo class Component
    // các biến, hàm khai báo trên render() không cần dùng let, const, var
    state = { // state được định nghĩa ở trên render()
        today: `${new Date().getDate()} / ${new Date().getMonth()+1} / ${new Date().getFullYear()}`,
        address: 'CAN THO'
    }

    handleClickButton = (logger) => {
        alert(logger);

    }
    
    render() {
        let name = 'THANH TOAN';    

        return ( // HTML được viết trong "()"
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
                    This my Component, My name is: {`${name}, ${this.state.address}`} 
                    {/* JS được viết trong "{}" */}
                </div> 
                <div className='block-first'>
                    <a href='https://github.com/toniiplaycode/Learn-NodeJS-ReactJS'>
                        My Link GITHUB
                    </a>
                </div>
                <div className='block-third'>
                    Today: {this.state.today}, this is state real time
                </div>
                <div className='bloack-fourth'>
                    <button onClick={(logger) => this.handleClickButton('hello !')}> {/* dùng theo cú pháp này mới truyền tham số được */}
                        Say hello !
                    </button>
                </div>
            </>
        )
    }
}

export default MyComponent;