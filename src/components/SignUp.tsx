import React, { useState } from 'react';
import { redirect } from 'react-router-dom';
import '../stylesheet/home.css';
import '../stylesheet/signup.css';

const SignUp: React.FC = () => {
    const [name, setName] = useState ("");
    const [email, setEmail] = useState ("");
    const [password, setPassword] = useState ("");
    const [confirmPass, setConfirmPass] = useState ("");

    const SignUp_function = () => {
        const Datas={name:name,email:email,password:password,confirmPassword:confirmPass}
        fetch('https://api-e-commerce-9xdg.onrender.com/v1/SignUp',{
            method:'POST',
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(Datas)
        }).then(res=>{
            if(res.ok){
                alert('Successfull Sign Up')
            }
        }).catch(error=>{
            console.error(error)
        })

    }
    return (
        <>
        <nav className="navbar">
                <div className="logo">
                    <img src="./images/logo.png" alt="logo" />
                </div>
                <div className="search-bar">
                    <input type="text" placeholder='Search...' />
                    <button type='submit'>Search</button>
                </div>
                <div className="navbar-left">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/login">Login</a></li>
                        <li><a href="/signup">Sign Up</a></li>
                        <li><a href="#">Cart</a></li>
                        <li><a href="#">Account</a><img src="./images/account_icon.png" alt="account_icon" className='account_icon' /></li>
                    </ul>
                </div>
            </nav>

            <div className="signup">
                    <label htmlFor="chk">Sign up</label>

                    <input type="text" name="txt" placeholder="name" required 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    />
                    <input type="email" name="email" placeholder="Email" required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                    <input type="password" name="pswd" placeholder="Password" required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                    <input type="password" name="confirmpswd" placeholder="Confirm Password" required
                    value={confirmPass}
                    onChange={(e) => setConfirmPass(e.target.value)}
                    />
                    <button onClick={SignUp_function}>Sign up</button>
            </div>
        {/* <div>
            <h2>Sign Up Form</h2>
            <input type="text" placeholder='Name' value={name}
                onChange={(e) => setName(e.target.value)} required />
                <br />
            <input type="email" placeholder='Email' value={email}
                onChange={(e) => setEmail(e.target.value)} required />
                <br />
            <input type="password" placeholder='Password' value={password}
                onChange={(e) => setPassword(e.target.value)} required />
                <br />
            <input type="password" placeholder='Confirm Password' value={confirmPass}
                onChange={(e) => setConfirmPass(e.target.value)} required />
                <br />
            <button onClick={SignUp_function}>Sign Up</button>
        </div> */}
        </>
    );
};

export default SignUp;