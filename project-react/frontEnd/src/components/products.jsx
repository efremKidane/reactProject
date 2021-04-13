import Product from './product';
import React from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
// import BookDetail from './BookDetail';
import { connect } from 'react-redux';

import * as actions from '../redux/action'

class Products extends React.Component {

    componentDidMount() {
        this.props.onGetProducts();
    }

    shouldComponentUpdate(nextProps){
        console.log(nextProps.allProducts);
       if(this.props.allProducts === nextProps.allProducts){
           return false;
       }
       return true;
    }

   componentDidUpdate (preProps) {
        //   this.props.onGetProducts();
    }

    deleteProductHandler = (id) => {
        this.props.onDelteProduct(id);
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
                        onDelete={() => this.deleteProductHandler(item._id)}
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