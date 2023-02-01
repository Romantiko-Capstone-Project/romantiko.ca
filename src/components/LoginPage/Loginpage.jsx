import React from 'react'
import style from '../../../styles/Home.module.css'
function LoginPage() {
  return (
    
    <div classname = {style.loginpage}>
    <form id={style.login}>
        <label for="fname">Username: </label> <input type="text" id="username" name="username"/><br/><br/>
        <label for="lname">Password: </label> <input type="text" id="psswd" name="password"/><br/><br/>
        <input type="submit" value="Login"/>
    </form>    
    </div>

  )
}

export default LoginPage;
