import React, { useState } from "react";
import axios from "axios";
import styles from "../../../styles/Home.module.css";

function LoginPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post('http://localhost:3000/api/auth/login', { username, password })
      console.log(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <form onSubmit={handleSubmit} className={styles.loggingin}>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Email"/><br/><br/>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"/><br/><br/>
      <input type="submit" value="Login"/>
    </form>
  )
}

export default LoginPage;
