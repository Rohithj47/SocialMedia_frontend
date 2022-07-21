import { useContext, useRef } from "react";
import "./login.css";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import { CircularProgress } from '@material-ui/core';


function Login(props) {
    const email = useRef()
    const password = useRef()
    const { user, error, isFetching, dispatch } = useContext(AuthContext);

    const handleClick = (e)=>{
        e.preventDefault()
        loginCall({ email: email.current.value, password: password.current.value }, dispatch)
    }
    console.log(user)
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Social App</h3>
                    <span className="loginDesc">
                        Connect with people all over the world
                    </span>
                </div>
                <div className="loginRight">
                    <form className="loginBox" onSubmit={handleClick}>
                        <input placeholder="Email" type="email" className="loginInput" ref = {email} />
                        <input placeholder="Password" type="password" className="loginInput" ref = {password} />
                        <button className="loginButton" disabled = {isFetching}>{isFetching? <CircularProgress color="white" size="20px" />: "Log In"}</button>
                        <span className="loginForgot">Forgot Password?</span>
                        <button className="loginRegisterButton">
                            Create a New Account
                        </button>
                    </form>
                </div>
            </div>
            
        </div>
    );
}

export default Login;