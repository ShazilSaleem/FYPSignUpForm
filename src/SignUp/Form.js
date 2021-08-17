import React from 'react'
import './Form.css'
import {Switch, BrowserRouter as Router} from 'react-router-dom'
import {Link} from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { Route } from 'react-router'
import SignupForm from './SignupForm'
import SigninForm from './SigninForm'

const Form = () => {
    return (
        <div>
            <h4>Create Your Account</h4>
            <Router>
                <div className="buttons">
                <Link to="/signup"><Button id="signup" >Sign Up</Button></Link>
                <Link to="/signin"><Button id="signin">Sign In</Button></Link>
                </div>
                <div className="form">
                <Switch>
                <Route path="/signup" component={SignupForm}/>


                <Route path="/signin" component={SigninForm}/>
                    
                
                </Switch>
                </div>
            </Router>
            
            


        </div>
    )
}

export default Form
