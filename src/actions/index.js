export const increment = (num) => {
    return {
        type: 'INCREMENT',
        payload: num //data
    };
};
export const decrement = (num) => {
    return {
        type: 'DECREMENT',
        payload: num //data
    };
};

export const login = () => {
    return {
        type: 'SIGN_IN'
    };
};