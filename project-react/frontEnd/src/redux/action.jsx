import axios from 'axios';

export const GET_PRODUCTS = 'GET_PRODUCTS';
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
export const USERS = 'USERS';

let url = "http://localhost:2000/products";

/**--Action Creator-- */
const getProducts = (data) => {
    return {
        type: GET_PRODUCTS,
        payload: data
    }
}
/**--action--GET ALL PRODUCTS */
export const getProductsAsync = () => {
    return function (dispatch) {
        axios.get('/api/products')
            .then(response => {
                dispatch(getProducts(response.data.data))
            });
    }
}

const updateProductByID = (id) => {
    return {
        type: UPDATE_PRODUCT,
        payload: id
    }
}
/** -- UPDATE PRODUCT BY ID -- */
export const updateProductsAsync = (id) => {
    return function (dispatch) {
        axios.put('/api/products/' + id)
            .then(response => {
                dispatch(updateProductByID(response.data.result))
            });
    }
}

const onAddProduct = (data) => {
    return {
        type: ADD_PRODUCT,
        payload: data
    }
}

export const addProductAsync = (data) => {
    return function (dispatch) {
        axios.post('/api/products', data)
            .then(response => {
                dispatch(onAddProduct(response.data.result))
            });
    }
}
const onDeleteProduct = (data) => {
    return {
        type: DELETE_PRODUCT,
        payload: data
    }
}

export const deletProductAsync = (id) => {
    return function (dispatch) {
        axios.delete('/api/products/' + id)
            .then(response => { 
                console.log();
                dispatch(onDeleteProduct(response.data.data))
            });
    }
}

/**--Action Creator-- */
const getUsers = (data) => {
    return {
        type: USERS,
        payload: data
    }
}
/**--action--GET ALL USERS */
export const getUsersAsync = () => {
    return function (dispatch) {
        axios.get('api/users')
            .then(response => {
                dispatch(getUsers(response.data.data))
            });
    }
}