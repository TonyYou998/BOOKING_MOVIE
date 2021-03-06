import React from "react";
import LoginForm from "../../../components/LoginForm";
export default function LoginPage(props) {
    
    const renderLoginForm=()=>{
        return <LoginForm/>
    }
    return (
        <div>
            <img style={{width:"100%",height:"100vh",position:"relative"}} src="https://tix.vn/app/assets/img/icons/bg2.jpg"/>
            <div>{renderLoginForm()}</div>
        </div>
    )
}
