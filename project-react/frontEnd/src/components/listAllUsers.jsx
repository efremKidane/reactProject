import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../redux/action';

class Users extends Component {

    componentDidMount() {
        this.props.onGetUsers();
    }
    render() {
        if (this.props.role !== 'superUser') {
            return (
                <div>
                    Not Authorized
                </div>
            )
        } else {
            return (
                <div>
                    {this.props.allUsers.map(item =>
                    (<div>
                        <p>{item._id}</p>
                        <p>{item.email} </p>
                        <p>{item.password} </p>
                    </div>))}
                </div>

            );
        }
    }
}

const mapStateToProps = (state) => {
    return {
        allUsers: state.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onGetUsers: () => dispatch(actions.getUsersAsync()),
        // onDelteProduct: (id)=>dispatch(actions.deletProductAsync(id))
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Users);