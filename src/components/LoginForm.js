import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {axiosWithAuth} from "../utils/AxiosWithAuth"

//need to get submit form working

function LoginForm(props) {

    const [formState, setFormState] = useState({
        username: "",
        password: ""
      });

    const [errors, setErrors] = useState({
        username: "",
        password: ""
      });

  


      console.log(setErrors)


      let inputChange = (e) => {

          setFormState({
            ...formState,
              [e.target.name]: e.target.value
          })
      }



      const submitForm = (e) => {
        e.preventDefault()
        axiosWithAuth()
        .post("/auth/login", formState) 
        .then((res) => {
          console.log("AL, LoginForm.js, login: res", res);
          window.localStorage.setItem("token", res.data.payload);
          props.history.push('/protected');
        })
        .catch(err => {
          console.error(err.response)
        })

      }

        return (
            <div>
              <form onSubmit={submitForm}>
                <fieldset>
                  <legend>
                    <h1>Log In</h1></legend>
                  <label htmlFor="username" className="labels">Username: </label>
                  <input
                    placeholder="Username"
                    type="text"
                    id="username"
                    name="username"
                    value={formState.username}
                    onChange={inputChange}
                  />
                  {errors.username.length > 0 ? (
                    <p className="error">{errors.username}</p>
                  ) : null}
        
        
                  <label htmlFor="password" className="labels"> Password: </label>
                  <input
                    placeholder="Password"
                    type="text"
                    id="password"
                    name="password"
                    value={formState.password}
                    onChange={inputChange}
                  />
                  {/* <i onClick={togglePassword}>{eye}</i>
                  {errors.password.length > 0 ? (
                    <p className="error">{errors.password}</p>
                  ) : null} */}
                  <button type="submit">
                    Sign In
                  </button>
                    <h2>
                  <Link to="/register">New User? </Link>
                  </h2>
                </fieldset>
              </form>
            </div>
    )
}

export default LoginForm


