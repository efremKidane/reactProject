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
                    (<div className="container">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="main-box clearfix">
                          <div className="table-responsive">
                            <table className="table user-list">
                              <thead>
                                <tr>
                                  <th>
                                    <span>User</span>
                                  </th>
            
                                  <th className="text-center">
                                    <span>Status</span>
                                  </th>
                                  <th>
                                    <span>Email</span>
                                  </th>
                                  <th>&nbsp;</th>
                                </tr>
                              </thead>
                              <tbody>
                              {this.props.allUsers.map(item =>{
                             return <tr key={item._id}>
                                  <td>
                                    <img
                                        src="https://image.shutterstock.com/image-vector/user-icon-260nw-523867123.jpg"
                                        alt=""
                                        style={{width:"50px", borderadius : "50%"}}
                                      />
                                    <a className="user-link">
                                      {item.name}
                                      </a><br/>
                                    <span className="user-subhead">{item.role}</span>
                                  </td>
            
                                  <td className="text-center">
                                    <span className="label label-default">Inactive</span>
                                  </td>
                                  <td>
                                    <a>{item.email}</a>
                                  </td>
                                  <td style={{width: "20%"}}>
                                    <a className="table-link">
                                      <span className="fa-stack">
                                        <i className="fa fa-square fa-stack-2x"></i>
                                        <i className="fa fa-pencil fa-stack-1x fa-inverse"></i>
                                      </span>
                                    </a>
                                    <a className="table-link danger">
                                      <span className="fa-stack">
                                        <i className="fa fa-square fa-stack-2x"></i>
                                        <i className="fa fa-trash-o fa-stack-1x fa-inverse"></i>
                                      </span>
                                    </a>
                                  </td>
                                </tr> 
        })}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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