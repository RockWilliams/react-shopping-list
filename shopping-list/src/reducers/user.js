function userReducer(state = {}, action) {
    if(action.type === 'login'){
        return {...state, user: action.payload.description}
    }
    return state;
} 

export default userReducer;