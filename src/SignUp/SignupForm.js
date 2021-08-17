import React from 'react'
import './SignUpForm.css'
import { useState } from 'react'
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
const eye = <FontAwesomeIcon icon={faEye} />;



const SignupForm = () => {
    const [passwordShown, setPasswordShown] = useState(false);
    const { register, handleSubmit } = useForm();
    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
      };
    return (
        <div className="SignUpForm">
        <div className="Container">
        <form>
                <h3>Sign Up</h3>
                <div className="row">
                <div className="column">
                <div className="form-group">
                    <label>Username</label>
                    <input type="text" className="form-control" placeholder="Username"  />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    
                    <input type={passwordShown ? "text" : "password"} className="form-control" placeholder="Password" />
                    <i onClick={togglePasswordVisiblity}>{eye}</i>
                </div>
                

                <div className="form-group">
                    <label>Confirm Password</label>
                    <input type="password" className="form-control" placeholder="Confirm Password" />
        
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                </div>


                <div className="column">
                <div className="form-group">
                    <label>Phone Number</label>
                    <input type="password" className="form-control" placeholder="Phone Number" />
                </div>

                

                <div className="form-group">
                <label>Categories</label>
                <select className="form-control" placeholder="Categories">
                    <option value="grapefruit">Professional</option>
                    <option value="lime">Seller</option>
                    <option selected value="coconut">Customer</option>
                    <option value="mango">Solo Labour</option>
                </select>
                </div>

                <div className="form-group" id="signupWith">
                    <label>------------Or Sign Up with------------</label>
                    <img src="/Image/google.svg" alt="Google Image"/>
                    
                </div> 
                
                </div>

                

                </div>
                

               

                <div className="ButtonContainer">
                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="#">sign in?</a>
                </p>
                </div>
                
            </form>

        </div>
            
        </div>
    )
}

export default SignupForm
