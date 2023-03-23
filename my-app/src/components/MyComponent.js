import React from 'react'; // nạp thư viện react
import ChildComponent from './ChildComponent'; // nạp component con

class MyComponent extends React.Component { // tạo class Component
    // các biến, hàm khai báo trên render() không cần dùng let, const, var
    state = { // state được định nghĩa ở trên render()
        name: 'Thanh Toan',
        today: `${new Date().getDate()} / ${new Date().getMonth()+1} / ${new Date().getFullYear()}`,
    }        

    handleClickButton = (logger) => {
        alert(logger);
    }
    
    handleChangeName = (event) => {
        this.setState({ // ghi đè lại thuộc tính name của state, các thuộc tính khác của state vẫn giữ nguyên 
            name: event.target.value
        })
    }
    
    render() {

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
                    This my Component, My name is: {this.state.name} 
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
                <div>
                    You can change a new name
                    <input onChange={(event) => this.handleChangeName(event)} value={this.state.name}/>
                </div>
            </>
        )
    }
}

export default MyComponent;