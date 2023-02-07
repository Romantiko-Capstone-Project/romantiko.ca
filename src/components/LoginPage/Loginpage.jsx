import { useRef, useEffect, useState } from "react";
import axios from "axios";
import style from "../../../styles/Home.module.css";

function LoginPage() {
  const userRef = useRef();
  const errRef = useRef();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    {/*userRef.current.focus();*/}
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    consol.log(username, password);
    setUsername("");
    setPassword("");
    setSuccess(true);

    // try {
    //   const response = await axios.post("/api/auth/login", {
    //     username,
    //     password,
    //   });
    //   console.log(response.data);
    // } catch (error) {
    //   console.error(error);
    // }
  };

  return (
    <>
      {success ? (
        <div></div>
      ) : (
        <div classname={style.loggingin}>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Email"
            />
            <br />
            <br />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <br />
            <br />
            <input type="submit" value="Login" />
          </form>
        </div>
      )}
    </>
  );
}

export default LoginPage;
