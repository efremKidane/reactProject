import React, { Fragment } from 'react'
import { Link, Redirect, Route, Switch } from 'react-router-dom';
import Login from './components/login';
import axios from 'axios';
import NavBar from './components/navbar';
import Home from './components/home';
import SignUp from './components/signUpForm';
import Products from './components/products'
import AddProduct from './components/createProduct';
import Users from './components/listAllUsers';
import Auth from './components/notAuthorized'
const jwtManager = require('./jwtManager/jwt');




class PageNotFound extends React.Component {

    render() {
        return (
            <h1>Sorry Page Not Found</h1>
        )
    }
}

export default class MainPage extends React.Component {

    state = {
        isAuthenticated: false,
        loginUser: {
            email: '',
            password: ''
        },
        sighnUp: {
            email: '',
            password: '',
            role: '',
            lName:'',
            fName:''       
         },
        isUserLoggedIn: true,
        userId: {},
        role:''
    }

    handleLoginChange = (event) => {
        const loginUser = { ...this.state.loginUser };
        loginUser[event.target.name] = event.target.value
        this.setState({ loginUser: loginUser });
    }
    handleSignInChange = (event) => {
        const sighnUp = { ...this.state.sighnUp };
        sighnUp[event.target.name] = event.target.value
        this.setState({ sighnUp: { email: sighnUp.email, password: sighnUp.password, role: 'user' } });
    }

    loginEventHandler = () => {

        axios.post('/api/auth/login', this.state.loginUser)
            .then(response => {
                if (response.data.status === 'success') {
                    localStorage.setItem('token', response.data.result);
                    const data = jwtManager.verify(response.data.result);
                    this.setState({ isAuthenticated: true , userId: data.id , role:data.role})
                }
            });
    }

    signInHandler = () => {
        axios.post('/api/auth/signup', this.state.sighnUp)
            .then(response => {
                if (response.data.status === 'success') {

                    this.setState({ isAuthenticated: false})
                }
            });
    }

    logOutHandler= ()=>{
        this.setState({isAuthenticated: false})
    }
    
   

    render() {
       console.log(this.state);
        if (!this.state.isAuthenticated) {
            return (
                <div>
                    <Route path='/' exact component={(props) => <Login
                        email={this.state.loginUser.email}
                        password={this.state.loginUser.password}
                        handleLoginChange={this.handleLoginChange}
                        loginEventHandler={this.loginEventHandler}
                    />} />
                    <Route path='/signUp' component={(props) => <SignUp
                        fName={this.state.sighnUp.fName}
                        lName={this.state.sighnUp.lName}
                        email={this.state.sighnUp.email}
                        password={this.state.sighnUp.password}
                        onChangeHandle={this.handleSignInChange}
                        onSignUp={this.signInHandler}
                    />} />
                </div>

            )
        }
        else {

            if (this.state.isUserLoggedIn) {
                return (<Fragment>
                    <NavBar 
                    onLogOut={this.logOutHandler}
                    />
                    <Switch>
                        <Route path='/Home' exact component={Home} />
                        <Route path='/products' exact component={()=><Products
                        id = {this.state.userId}
                        />} />
                        <Route path='/createNewProduct' component={()=><AddProduct
                        userId= {this.state.userId}
                        />} />
                        <Route path='/users' exact component={()=><Users role= {this.state.role}/>}/>
                        <Route path='/unAuthorized' component={Auth}/>
                        <Route path='/pageNotFound' exact component={PageNotFound} />
                        <Redirect from='/' to='/Home' />
                        <Redirect to='/pageNotFound' />
                    </Switch>
                </Fragment>
                )
            }

        }
    }
}