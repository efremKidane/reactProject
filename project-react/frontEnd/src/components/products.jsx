import Product from './product';
import React from 'react';
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom';
// import BookDetail from './BookDetail';
import { connect } from 'react-redux';

import * as actions from '../redux/action'

class Products extends React.Component {

    componentDidMount() {
        this.props.onGetProducts();
    }

    shouldComponentUpdate(nextProps){
       if(this.props.allProducts === nextProps.allProducts){
           return false;
       }
       return true;
    }

   componentDidUpdate (prevProps, prevState) {
    // if(prevState.allProducts !== this.props.allProducts) {
    //     this.props.onGetProducts();
    // }
    }

    deleteProductHandler = (id, userId) => {
        if(this.props.id !== userId){
         alert('not authorized to delete')
        }else{
            this.props.onGetProducts();
            this.props.onDelteProduct(id);
        }
       
    }


    // updateEventHandler = (id) => {
    //     this.props.onUpdateSelectedBookId(id);
    //     this.props.history.push('/updateBook');
    // }

    render() {
        // console.log(this.props.allProducts);
        return (
            <div>
                {this.props.allProducts.map(item => {
                    return <Product
                        key={item._id}
                        product={item}
                        onDelete={() => this.deleteProductHandler(item._id, item.userId)}
                    />

                })}
            </div>
        )
    }

}


const mapStateToProps = (state) => {
    return {
        allProducts: state.products
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onGetProducts: () => dispatch(actions.getProductsAsync()),
        onDelteProduct: (id) => dispatch(actions.deletProductAsync(id))
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Products);