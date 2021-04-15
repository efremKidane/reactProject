import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

class NavBar extends Component {
     submitHandler= (e)=>{
        e.preventDefault();
      }
    render() {

        return (<nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-expand-sm" >
            <Link className="navbar-brand" to="/Home">
                OurProductApp
        </Link>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <NavLink className="nav-item nav-link" to="/products">
                        Products
            </NavLink>
                    <NavLink className="nav-item nav-link" to="/createNewProduct">
                        CreateNewProduct
            </NavLink>
                    <NavLink className="nav-item nav-link" to="/users">
                        Users list
            </NavLink>

                </div>
            </div>
            <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
              <Link to='/'><button className="btn btn-outline-success my-2 my-sm-0" onClick={this.props.onLogOut} type="submit">Log 0ut</button></Link>  
            </form>
        </nav>);
    }
}

export default NavBar;