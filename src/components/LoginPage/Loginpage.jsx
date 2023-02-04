import React from 'react'
import style from '../../../styles/Home.module.css'

function LoginPage() {
  return (
    
    <div>
    <form classname={style.mainstuff}>
        <input type="email" id="username" name="username" placeholder="Enter Email"/><br/><br/>
        <input type="text" id="psswd" name="password" placeHolder="Enter Password"/><br/><br/>
        <input type="submit" value="Login"/>
    </form>
    </div>

  )
}

export default LoginPage;
