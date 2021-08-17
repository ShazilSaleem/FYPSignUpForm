import React from 'react'
import './SignInForm.css'

const SigninForm = () => {
    return (
        <div className="SignInForm">
        <div className="Container">
            <form>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>
                
                
                
                <div className="ButtonContainer">
                <button type="submit" className="btn btn-primary btn-block" id="submit">Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
                </div>
                
            </form>
            </div>

        </div>
    )
}

export default SigninForm
