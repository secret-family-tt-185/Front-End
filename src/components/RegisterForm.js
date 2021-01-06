import React, {useState} from 'react'
import { axiosWithAuth1 } from "../utils/AxiosWithAuth"

function RegisterForm(props) {
    const [formState, setFormState] = useState({
        username: "",
        password: ""
      });
    const [errors, setErrors] = useState({
        username: "",
        password: ""
      });


      const [serverError, setServerError] = useState("")



      const inputChange = (e) => {

          setFormState({
            ...formState,
              [e.target.name]: e.target.value
          })
      }


      const submitForm = (e) => {
        e.preventDefault()
        axiosWithAuth1()
        .post("/auth/register/", formState) 
        .then((res) => {
          console.log("AL, RegisterForm.js, login: res", res);
          window.localStorage.setItem("token", res.data.payload);
          props.history.push('/protected');
        })
        .catch((err) => {
          setServerError("Oh No! Something went wrong!")
        })

      }

        return (
            <div>
              <form onSubmit={submitForm}>
                <fieldset>
                  <legend>
                    <h1>Register</h1></legend>
                  <label htmlFor="username" className="labels">Username: </label>
                  <input
                    placeholder="Create a Username"
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
                    placeholder="Create a Password"
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
                    Sign Up
                  </button>
                </fieldset>
              </form>
            </div>
    )
}
export default RegisterForm
