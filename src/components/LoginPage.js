import React from 'react'
import {connect } from "react-redux";
import {startLogin} from "../actions/authentication"
export const LoginPage = ({startLogin}) => (

  <div className="login-page">
    <div className="login-box">
    <h1 className="login-box-heading">App Name</h1>
    <p>App sub heading</p>
    <button className="button" onClick={startLogin}>Login with google</button>
    </div>
    
  </div>
) 

const mapDispatchToProps =(dispatch)=>({
  startLogin:()=>dispatch(startLogin())
}  
)
export default connect(undefined, mapDispatchToProps)(LoginPage);