import React, {useState} from 'react';
import {Link} from "react-router-dom";


//need to get submit form working

function LoginForm() {

    const [formState, setFormState] = useState({
        username: "",
        password: ""
      });
    const [errors, setErrors] = useState({
        username: "",
        password: ""
      });

      const inputChange = (e) => {

          setFormState({
            ...formState,
              [e.target.name]: e.target.value
          })
      }

        return (
            <div>
              <form>
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


