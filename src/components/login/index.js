import './style.css'
import { createUserWithEmailAndPassword,
     onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase-config';
import { useSelector, useDispatch } from 'react-redux' 
import { setPassword, setUserId, setUserAuth, setFirstName, setLastName } from './user'


function Login() {
    const dispatch = useDispatch();
    const registerEmail = useSelector((state) => state.userCreds.userId);
    const registerPassword = useSelector((state) => state.userCreds.password);
    const userAuth = useSelector((state) => state.userCreds.userAuth);
    onAuthStateChanged(auth, (currentUser) => {
        dispatch(setUserAuth(userAuth))
    })
    const register = async () => {
        try{
            const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
            console.log(user);
        }
        catch(error) {
            console.log(error.message);
        }
    }
    return (
        <form id="signup">
            <h2 className='signup-field' >Sign up</h2>
            <input 
                className='signup-field'
                type="text" 
                name="firstName" 
                value={registerEmail}
                placeholder="First Name"
                onChange={(event) => dispatch(setFirstName(event.target.value))} 
            />
            <input 
                className='signup-field'
                type="text" 
                name="lastName" 
                value={registerEmail}
                placeholder="Last Name"
                onChange={(event) => dispatch(setLastName(event.target.value))} 
            />
            <input 
                className='signup-field'
                type="email" 
                name="email" 
                value={registerEmail}
                placeholder="Email"
                onChange={(event) => dispatch(setUserId(event.target.value))} 
            />
            <input 
                className='signup-field'
                type="password" 
                name="password"
                placeholder='Password'
                value={registerPassword}
                autoComplete="on"
                onChange={(event) => dispatch(setPassword(event.target.value))}
             />
            <button 
            type="submit"
            name="signup"
            className='signup-btn signup-field'
            onClick={register} >Sign up</button>
        </form>
    )
}

export default Login