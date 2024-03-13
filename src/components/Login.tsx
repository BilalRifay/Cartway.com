import React, { useState } from 'react';
import '../stylesheet/home.css';
import '../stylesheet/signup.css';

const Login:React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const Login_function = () => {
        const Datas={email:email,password:password}
        fetch('https://api-e-commerce-9xdg.onrender.com/v1/login',{
            method:'POST',
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(Datas)
        }).then(res=>{
            if(res.ok){
                alert('Successfull Login')
            }
        }).catch(error=>{
            console.error(error)
        })

    }
    return (
        <>
         <nav className="navbar">
                <div className="logo">
                    <img src="../images/logo.png" alt="logo" />
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
                        <li><a href="#">account</a><img src="../images/logo.png" alt="account_icon" className='account_icon' /></li>
                    </ul>
                </div>
            </nav>
            <div className="signup">
                    <label htmlFor="chk" >Login</label>
                    <input type="email" name="email" placeholder="Email" required
                    value={email}
                    onChange={e=>setEmail(e.target.value)}/> 
                    <input type="password" name="pswd" placeholder="Password" required 
                    value={password} onChange={e=>setPassword(e.target.value)}/>
                    <button onClick={Login_function}>Login</button>
            </div>
</>
    );
}


export default Login;