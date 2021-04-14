import React, { Component } from "react";
import * as actions from '../redux/action';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
const { ObjectID } = require('bson');

class AddProduct extends Component {
    state = {
        newProduct: {
            name: '',
            price: null,
            quantity: null,
            img: '',
            details: '',
            rating: 0,
            review: [],
            userId: new ObjectID(this.props.userId)
        }
    }
    
    changeHandler = (event) => {
        const newProduct = { ...this.state.newProduct };
        newProduct[event.target.name] = event.target.value
        this.setState({ newProduct: newProduct });
    }

    productCreateHandler = ()=>{
        this.props.onAddProuct(this.state.newProduct);
    }

    render() {
console.log(this.props);
        return (
            <div className="container center_div">
                <h2>CreateNewProduct</h2>
                <form>
                    <div className="form-group col-md-4">
                        <input type="text" className="form-control" id="name" placeholder="productName" name="name" onChange={(event) => this.changeHandler(event)} />
                    </div><br />
                    <div className="form-group col-md-4">
                        <input type="number" className="form-control" id="price" placeholder="price" name="price" onChange={(event) => this.changeHandler(event)} />
                    </div><br />
                    <div className="form-group col-md-4">
                        <input type="number" className="form-control" id="quantity" placeholder="Quantity" name="quantity" onChange={(event) => this.changeHandler(event)} />
                    </div><br />
                    <div className="form-group col-md-4">
                        <input type="text" className="form-control" id="description" placeholder="Description" name="details" onChange={(event) => this.changeHandler(event)} />
                    </div><br />
                    <div className="form-group col-md-4">
                        <input type="text" className="form-control" id="imageUrl" placeholder="imageUrl" name="img" onChange={(event) => this.changeHandler(event)} />
                    </div><br />
                    <div className="form-group col-md-4">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="gridCheck" />
                            <label className="form-check-label" htmlFor="gridCheck">
                                Check me out </label>
                        </div>
                    </div>
                  <button type="submit" className="btn btn-primary" onClick={this.productCreateHandler} ><Link to='/products'>Create</Link> </button>

                </form>
            </div >
        );
    }
}

const mapStateToProps = (state) => {
    return {
        allProducts: state.products
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddProuct: (data) => dispatch(actions.addProductAsync(data))
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(AddProduct);



