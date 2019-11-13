import React, { Component } from 'react';
import './Signup.scss';

class Signup extends Component {
    state = { 
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
     }

    getUsername = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    getEmail = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    getPassword = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    confirmPassword = (event) => {
        this.setState({
            confirmPassword: event.target.value
        })
    }
    render() { 
        return ( 
            <div className="signup-form">
                <form>
                    <h2>Sign Up</h2>
                    <p>Please fill in this form to create an account.</p>
                    <hr></hr>

                    <div className="form-group">
                        <div className="input-group">
                            <span className="input-group-addon"><i className="fa fa-user"></i></span>
                            <input type="text" className="form-control" name="username" placeholder="Username" required="required" value={this.state.username} onChange={this.getUsername}></input>
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="input-group">
                            <span className="input-group-addon"><i className="fa fa-paper-plane"></i></span>
                            <input type="email" className="form-control" name="email" placeholder="Email Address" required="required" value={this.state.email} onChange={this.getEmail}></input>
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="input-group">
                            <span className="input-group-addon"><i className="fa fa-lock"></i></span>
                            <input type="password" className="form-control" name="password" placeholder="Password" required="required" value={this.state.password} onChange={this.getPassword}></input>
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="input-group">
                            <span className="input-group-addon"><i className="fa fa-lock"></i></span>
                            <input type="password" className="form-control" name="confirm_password" placeholder="Confirm Password" required="required" value={this.state.confirmPassword} onChange={this.confirmPassword}></input>
                        </div>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary btn-lg">Sign Up</button>
                    </div>
                </form>
                <div class="text-center">Already have an account? <a href="#">Login here</a></div>

            </div>
         );
    }
}
 
export default Signup;