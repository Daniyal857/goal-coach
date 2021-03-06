import React, { Component } from 'react';
import { Link } from 'react-router';
import { firebaseApp } from '../firebase';


class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            error: {
                message: ''
            }
        }
    };

    //SignUp helper method
    signIn() {
        // console.log('this.state', this.state);
        const { email, password } = this.state;
        firebaseApp.auth().signInWithEmailAndPassword(email, password)
            .catch(error => {
                // console.log('error', error);
                this.setState({
                    error
                });
            })
    }


    render() {
        return (
            <div className="form-inline">
                <h2>SignIn</h2>
                <div className="form-group">
                    <input
                        className="form-control"
                        type="text"
                        placeholder="email"
                        onChange={e => this.setState({
                            email: e.target.value
                        })}
                    />
                    <input
                        className="form-control"
                        type="password"
                        placeholder="password"
                        onChange={e => this.setState({
                            password: e.target.value
                        })}
                    />
                    <button
                        className="btn btn-primary"
                        type="button"
                        onClick={() => this.signIn()}
                    >
                        Sign Ip
                    </button>
                </div>
                <div>{ this.state.error.message }</div>
                <div><Link to="/signup">Sign Up instead</Link></div>
            </div>
        )
    }
};

export default SignIn;
