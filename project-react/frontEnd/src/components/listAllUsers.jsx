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
                    (<div class="container">
                    <div class="row">
                      <div class="col-lg-12">
                        <div class="main-box clearfix">
                          <div class="table-responsive">
                            <table class="table user-list">
                              <thead>
                                <tr>
                                  <th>
                                    <span>User</span>
                                  </th>
            
                                  <th class="text-center">
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
                             return <tr>
                                  <td>
                                    <img
                                        src="https://image.shutterstock.com/image-vector/user-icon-260nw-523867123.jpg"
                                        alt=""
                                        style={{width:"50px", borderadius : "50%"}}
                                      />
                                    <a class="user-link">
                                      {item.name}
                                      </a><br/>
                                    <span class="user-subhead">{item.role}</span>
                                  </td>
            
                                  <td class="text-center">
                                    <span class="label label-default">Inactive</span>
                                  </td>
                                  <td>
                                    <a>{item.email}</a>
                                  </td>
                                  <td style={{width: "20%"}}>
                                    <a class="table-link">
                                      <span class="fa-stack">
                                        <i class="fa fa-square fa-stack-2x"></i>
                                        <i class="fa fa-pencil fa-stack-1x fa-inverse"></i>
                                      </span>
                                    </a>
                                    <a class="table-link danger">
                                      <span class="fa-stack">
                                        <i class="fa fa-square fa-stack-2x"></i>
                                        <i class="fa fa-trash-o fa-stack-1x fa-inverse"></i>
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