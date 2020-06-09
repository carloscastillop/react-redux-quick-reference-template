const counterReducer = (state = 0, action) => {
    const num = (action.payload) ? action.payload : 1;
    switch (action.type) {
        case 'INCREMENT':
            return state + num;
        case 'DECREMENT':
            return state - num;
        default:
            return state;
    }
}

export default counterReducer;