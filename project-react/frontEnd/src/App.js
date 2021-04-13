
import React from 'react';
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import NavBar from './components/navbar';
import Pagination from './components/pagination';
import { paginate } from './utils/paginate';
import ListGroup from './components/createProduct';
import Login from './components/login';
import MainPage from './mainPage';

// class App extends React.Component {
  // state = {
  //   students: [],
  //   currentPage: 1,
  //   pageSize: 3,
  //   isAuthenticated: false,
  //       loginUser: {
  //           email: '',
  //           password: ''
  //       },
  //       isUserLoggedIn: true
  // }

//   handleLoginChange = (event) => {
//     const loginUser = { ...this.state.loginUser };
//     loginUser[event.target.name] = event.target.value
//     this.setState({ loginUser: loginUser });
// }

// loginEventHandler = () => {

//     axios.post('http://localhost:2000/auth', this.state.loginUser)
//         .then(response => {
//             if (response.data.status === 'success') {
//                 localStorage.setItem('token', response.data.result);
//                 this.setState({ isAuthenticated: true })
//             }
//         });
// }

  // handelePageChange = (page) => {
  //   this.setState({ currentPage: page })
  // }

  // handleMajorSelect = (item)=>{
  //   this.setState({ currentPage: 1})
  // }

  // componentDidMount() {
  //   axios.get('http://localhost:2000/students')
  //     .then(res => {
  //       const { data } = res;
  //       this.setState({ students: data.data })
  //     })
  // }

  // handleDelete = async (index) => {
  //   await axios.delete('http://localhost:2000/students/' + index._id);
  //   const books = this.state.students.filter(book => book !== index);
  //   this.setState({ students: books });
  // }

  // changeMajor = async (item) => {
  //   item.author[0].firstName = 'Tupac'
  //   await axios.put('http://localhost:2000/book/' + item._id, item)
  //   const book = [...this.state.students];
  //   // const index = book.indexOf(item);
  //   // book[index]={...item}
  //   this.setState({ students: book });
  // }

  // render() {

    // const { currentPage, pageSize, selectedMajor, students: allStudents } = this.state;
   
    // const filterd = selectedMajor && selectedMajor.id ? 
    // allStudents.filter(s => s.major.id === selectedMajor.id)
    // : allStudents;

  //   const movies = paginate(allStudents, currentPage, pageSize);
  //   if (!this.state.isAuthenticated) {
  //     return (
  //         <Login
  //             email={this.state.loginUser.email}
  //             password={this.state.loginUser.password}
  //             handleLoginChange={this.handleLoginChange}
  //             loginEventHandler={this.loginEventHandler}
  //         />
  //     )
  // }else{

  //   return (
  //     <React.Fragment>
  //       <NavBar />
  //       <div className='row'>
  //         <div className='col'>
  //           <main className="container" >
  //             <Student
  //             />
  //             <Pagination
  //               itemCount={allStudents.length}
  //               pageSize={pageSize}
  //               currentPage={currentPage}
  //               onPageChange={this.handelePageChange}
  //             />
  //           </main>
  //         </div>
  //       </div>
  //     </React.Fragment>
  //   );
  // }
  // }
  
  // }

  class App extends React.Component{
    render(){
      return(
        <div>
        <BrowserRouter>
          <MainPage />
        </BrowserRouter>
      </div >
      );
    }
  }

export default App;
