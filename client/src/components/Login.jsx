import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';

class Login extends Component {
    state = { 
        username: '',
        password: ''
    }

    getUsername = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    getPassword = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    render() { 
        return ( 
        <div className="signup-form">
            <h2>Login</h2>
                
                <form>
                    <div className="form-group">
                        <div className="input-group">
                            <span className="input-group-addon"><i className="fa fa-user"></i></span>
                            <input type="text" className="form-control" name="username" placeholder="Username" required="required" value={this.state.username} onChange={this.getUsername}></input>
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="input-group">
                            <span className="input-group-addon"><i className="fa fa-lock"></i></span>
                            <input type="password" className="form-control" name="password" placeholder="Password" required="required" value={this.state.password} onChange={this.getPassword}></input>
                        </div>
                    </div>

                    <div className="form-group">
                        <button type="submit" className="btn btn-primary btn-lg">Login</button>
                    </div>
                </form>
                <div className="text-center">Don't have an account? <Link to="/signup"><a>Sign up here</a></Link></div>
        </div> );
    }
}
 
export default Login;