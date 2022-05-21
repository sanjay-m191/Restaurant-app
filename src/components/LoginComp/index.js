import './style.css'
import { Component } from 'react';
import { Link } from "react-router-dom";
import Signup from '../signUpComp/index'

export default class Login extends Component {

    constructor() {

        super()

        this.state = {

            emailId: '',
            password: '',
            mailerr: '',
            passworderr: ''

        }
    }


    values = ['@gmail.com', '@hotmail.com', '@yahoo.com', '@mountblue.tech']

    validMail = []
    validPassword = 0
    getMail = (event) => {




        this.setState({
            emailId: event.target.value
        })

        this.validMail = (this.values).map((currValue, indx) => (



            (this.state.emailId).includes(currValue) ? 1 : 0
        ))

        this.setState({ mailerr: 'invalid email id' })
    }


    getPassword = (event) => {

        this.setState({
            password: event.target.value
        })

        this.validPassword = (this.state.password).length >= 7 ? 1 : 0

        this.setState({ passworderr: 'password should at least 8 characters' })


    }

    render() {

       
        return (

            <div className='loginContainer' >

                <div className='loginWrapper'>

                    <div>
                        <div className='userContainer'>
                            <label>Email ID</label>
                            <input className='userName' placeholder='Email ID' onChange={this.getMail}></input>
                            {

                                this.state.emailId === '' ? <p className='passwordError'>please enter email id</p> : <p className='hide'>ok</p>}


                            {

                                (this.validMail).includes(1) ? <p className='hide'>ok</p> : <p className='passwordError'>{this.state.mailerr} </p>
                            }

                        </div>

                        <div className='passwordContainer'>
                            <label>Password</label>
                            <input type={'password'} className='password' placeholder='Password' onChange={this.getPassword}></input>
                            {this.state.password === '' ? <p className='passwordError'>please enter password </p> : <p className='hide'>ok</p>}

                            {

                                (this.validPassword)==1 ? <p className='hide'>ok</p> : <p className='passwordError'>{this.state.passworderr} </p>
                            }

                        </div>

                    </div>

                    <button className='loginBtn'>Log in</button>

                    <div className='signUp'>
                        <p>New To Site ?</p>
                       <Link to='signup' className='signupLink'><p className='signUpPara'>Sign Up</p></Link>

                    </div>
                </div>

            </div>
        )

    }

}