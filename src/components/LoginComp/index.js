import './style.css'

export default function Login() {

    return (

        <div className='loginContainer'>

            <div className='loginWrapper'>
                
                <div>
                    <div className='userContainer'>
                        <label>Email ID</label>
                        <input className='userName' placeholder='Email ID'></input>
                        <p className='userIdError'>err</p>
                    </div>

                    <div className='passwordContainer'>
                        <label>Password</label>
                        <input type={'password'}  className='password' placeholder='Password'></input>
                        <p className='passwordError'>err</p>
                    </div>

                </div>

                <button className='loginBtn'>Log in</button>

                <div className='signUp'>
                <p>New To Site ?</p>
                <p className='signUpPara'>Sign Up</p>

                </div>
            </div>

        </div>
    )

}