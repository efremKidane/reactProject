import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as action from '../redux/action'


class Product extends Component {

    render() {
        console.log(this.props);
        return (
            <div className="container mt-5 mb-5">
                <div className="d-flex justify-content-center row">
                    <div className="col-md-10">
                        <div className="row p-2 bg-white border rounded">
                            <div className="col-md-3 mt-1"><img className="img-fluid img-responsive rounded product-image" src={this.props.product.img} /></div>
                            <div className="col-md-6 mt-1">
                                <h5>{this.props.product.name}</h5>
                                <div className="d-flex flex-row">
                                    <div className="ratings mr-2"><i className="fa fa-star"></i></div><span>{this.props.product.rating}</span>
                                </div>
                                <div className="mt-1 mb-1 spec-1"><span>Quantity {this.props.product.quantity}</span><span className="dot"></span><span>Best finish<br /></span></div>
                                <div className="mt-1 mb-1 spec-1"><span>Unique design</span><span className="dot"></span><span>{this.props.product.details}</span><span className="dot"></span><br /></div>
                            </div>
                            <div className="align-items-center align-content-center col-md-3 border-left mt-1">
                                <div className="d-flex flex-row align-items-center">
                                    <h4 className="mr-1">${this.props.product.price}</h4>
                                </div>
                                <h6 className="text-success">Free shipping</h6>
                                <div className="d-flex flex-column mt-4"><button className="btn btn-primary btn-sm" type="button" onClick={this.props.onDelete}>Delete</button>
                                    <button className="btn btn-outline-primary btn-sm mt-2" type="button">Add Review</button></div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        )
    }
}

export default Product;

// export default Student;