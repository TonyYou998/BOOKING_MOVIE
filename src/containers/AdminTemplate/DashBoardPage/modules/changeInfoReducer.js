const initialState = {
    data:null
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case typeName:
        return { ...state, ...payload }

    default:
        return state
    }
}
