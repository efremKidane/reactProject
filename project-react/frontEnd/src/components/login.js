
import { Link } from 'react-router-dom';

export default function Login(props) {

    const submitHandler= (e)=>{
      e.preventDefault();
    }
    return (
        <div className="container">
            <br />  <p className="text-center"><h2> our ProductApp</h2> </p>
            <hr />

            <div className="row">
                <aside className="col-sm-4">
                    <div className="card">
                        <article className="card-body">
                            <h4 className="card-title text-center mb-4 mt-1"><Link to='/signUp'>Sign in</Link></h4>
                            <hr />
                            <p className="text-success text-center">Some message goes here</p>
                            <form onSubmit={submitHandler}>
                                <div className="form-group">
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"> <i className="fa fa-user"></i> </span>
                                        </div>
                                        <input className="form-control" name='email'
                                            type='text'
                                            value={props.email}
                                            placeholder='email'
                                            onChange={(event) => { props.handleLoginChange(event) }} />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
                                        </div>
                                        <input className="form-control" name='password'
                                            type='text'
                                            value={props.password}
                                            placeholder='password'
                                            onChange={(event) => { props.handleLoginChange(event) }} />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="btn btn-primary btn-block"  onClick={props.loginEventHandler}> Login  </button>
                                </div>
                                <p className="text-center"><a href="#" className="btn">Forgot password?</a></p>
                            </form>
                        </article>
                    </div>
                </aside>
            </div>

        </div>
    )
}