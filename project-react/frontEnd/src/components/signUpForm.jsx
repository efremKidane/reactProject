import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class SignUp extends Component {

   submitHandler= (e)=>{
        e.preventDefault();
   }
    render() { 
        return ( 
            <div>
                <form onSubmit={this.submitHandler}>
                    <h3> SignUp</h3>
                    <div className="form-group">
                        <label>First name</label>
                        <input type="text" className="form-control" onChange={(event)=>this.props.onChangeHandle(event)} placeholder="fName" name="fName"  value={this.props.fName}/>
                    </div>
 
                    <div className="form-group">
                        <label>Last name</label>
                        <input type="text" className="form-control" name="lName" value={this.props.lName} onChange={(event)=>this.props.onChangeHandle(event)} placeholder="lName" />
                    </div>
                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" className="form-control" onChange={(event)=>this.props.onChangeHandle(event)} placeholder="email" name="email" value={this.props.email}/>
                    </div>
 
                    <div className="form-group">
                        <label>Password</label>
                        <input className="form-control" type="password" onChange={(event)=>this.props.onChangeHandle(event)} placeholder="password" name="password"  value={this.props.password}/>
                    </div>
                   <button type="submit" className="btn btn-primary btn-block" onClick={this.props.onSignUp}><span><Link to='/'>Sign Up</Link></span></button>
                    <p className="forgot-password text-right">
                        Already registered <a href="#">sign in?</a>
                    </p>
                </form>
            </div>
         );
    }
}
 
export default SignUp;