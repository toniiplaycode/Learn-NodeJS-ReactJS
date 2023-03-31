const initState = { //khởi tạo state của Redux
    users: [
        {id: 1, name: 'toan'},
        {id: 2, name: 'tonii'},
        {id: 3, name: 'toniiplayps4'}
    ],
    posts: [] // thêm state posts để ví dụ cho return của action 'DELETE_USER' và 'ADD_RANDOM_USER', là khi return thì các dữ liệu khác của state như posts chẳng hạn, vẫn còn giữ nguyên, nó chỉ thay đổi state users do đã filter hoặc thêm mới user vào state users
}
const rootReducer = (state = initState, action) => { // hàm rootReducer này sẽ trả về 1 state của Redux, tham số thứ thứ nhất là state của Redux trả về cho React, tham số action là được React truyền vào, tham số state mặc định đã có dữ liệu (hard code)

    switch(action.type){ // các case là type của action bên file HomeComponent
        case 'DELETE_USER': 
            console.log('run delete user Redux: ', action);
            let users = state.users; // lấy state users của redux
            users = users.filter(item => item.id !== action.payload);
            return {
                ...state, users // giữ nguyên các dữ liệu khác của state, chỉ ghi đè lại users 
            };
        case 'ADD_RANDOM_USER':
            let randomID = Math.floor(Math.random() * 100);
            let user = { id: randomID, name: `user ${randomID}` }
            return{
                ...state, users: [...state.users, user] // giữ nguyên các dữ liệu khác của state và thêm user mới vào state users
            }
        default:
            return state;       
    }
} 

export default rootReducer; 