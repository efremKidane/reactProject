import * as actions from './action'

const initialState = {
    users: [],
    products: [],
    newProduct: {},
};

const reducer = (state = initialState, action) => {
    if (action.type === actions.GET_PRODUCTS) {
        return {
            ...state,
            products: action.payload,
        };
    }

    // if(action.type === actions.UPDATE_PRODUCT){
    //     return{ ..state,}
    // }

    if (action.type === actions.ADD_PRODUCT) {
        return {
            ...state
        }
    }

    if (action.type === actions.DELETE_PRODUCT) {
        return {
            ...state
        }
    }

    if (action.type === actions.USERS) {
        return {
            ...state,
            users: action.payload,
        };
    }

    return state;
};

export default reducer;
