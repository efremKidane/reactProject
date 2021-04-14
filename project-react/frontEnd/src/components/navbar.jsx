import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

class NavBar extends Component {
    state = {}
    render() {

        return (<nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-expand-md" >
            <Link className="navbar-brand" to="/">
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
            <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </nav>);
    }
}

export default NavBar;