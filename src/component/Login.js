import React, {useState} from 'react'
import { Link, Navigate } from 'react-router-dom';
import "../component/Login.css";
import firebase from './Firebase';
import { useNavigate } from 'react-router-dom';

const { db, auth } = firebase;



function Login() {
    const navigate = useNavigate();

    const [email, setEmail]=useState('');
    const [password, setPassword]= useState('');
    const signIn= e=>{
        e.preventDefault();
        //some fancy firebase login 

        auth
        .signInWithEmailAndPassword(email,password)
        .then(auth=>{
            navigate('/')
        })
        .catch(error=>alert(error.message)
        )    }

    const register = e => {
        e.preventDefault();
    
        if (!email || !password) {
            return alert("Email and password fields cannot be empty");
        }
    
        auth
            .createUserWithEmailAndPassword(email, password)
            .then(auth => {
                console.log(auth);
                if (auth) {
                    navigate("/");
                }
            })
            .catch(error => {
                console.error(error);
                alert(error.message);
            });
    };
    


  return (
    <div className='login'>
        <Link to="/">
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png' alt=''
        className='login_logo'/>
        </Link>

        <div className='login_container'>

            <h1>Sign-In</h1>
            <form>
                <h5> Email</h5>
                <input type="email" name="email" value={email} onChange={e=> setEmail(e.target.value)}/>

                <h5>Password</h5>
                <input type="password" name="password" value={password} onChange={e=>setPassword(e.target.value)}/>
                <button className='login_signInButton' type="submit" onClick={signIn}>Sign In</button>
            </form>

            <p>By signing in you agree to the Amazon clone conditions od use & sale. Please see our privacy </p>
            <button className='login_registerButton' onClick={register}>Create amazon Account</button>
        </div>
     
    </div>
  )
}

export default Login
