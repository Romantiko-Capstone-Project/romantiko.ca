import React, { useState } from "react";
import axios from "axios";
import styles from "../../../styles/LoginPage.module.css";
import { useRouter } from "next/router";
function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMess, setErrorMessage] = useState("");
  const [error, setError] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/login",
        { username, password }
      );
      
        if (response.data.message.includes("Admin")) {
          router.push("/"); // Replace with the actual URL of the admin page
        } else if (response.data.message.includes("Staff")) {
          router.push("/dashboard"); // Replace with the actual URL of the staff page
        }
      
      console.log(response.data);
    } catch (error) {
      setError(true);
      setErrorMessage("Incorrect username or password.");
      console.error(error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h4
          style={{
            "text-align": "center",
            "margin-top": "8px",
            color: "black",
          }}
        >
          Staff Login
        </h4>

        <div className="form-floating mb-3 mt-3">
          <input
            className="form-control"
            type="text"
            id="email"
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Email"
            style={{ "background-color": "#EBECF0" }}
          />
          <label htmlFor="email" className={styles.stuff}>
            Email
          </label>
        </div>

        <div className="form-floating mt-3 mb-3">
          <input
            className="form-control"
            type="password"
            id="pwd"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            style={{ "background-color": "#EBECF0" }}
          />
          <label htmlFor="pwd" className={styles.stuff}>
            Password
          </label>
        </div>

        {error && (
          <div
            className="error-message"
            style={{ "text-align": "center", color: "red" }}
          >
            {errorMess}
          </div>
        )}

        <div>
          <button className={styles.button} onClick={handleSubmit}>
            Login
          </button>
          <br />

          <a href="https://www.google.com/?hl=en-US" className={styles.mylink}>
            Forgot password?
          </a>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
