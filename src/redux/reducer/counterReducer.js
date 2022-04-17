const initialState = {
    count: 0,
    isLoading: true
}

export const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'counter/increment':
            return { count: state.count + 1 }
        case 'counter/decrement':
            return { count: state.count - 1 }
        default:
            return state;
    }
}