import React,{useState} from 'react'
import Swal from 'sweetalert2'

const LoginForm = () => {
  const [inputValue, setInputValue] = useState('')
  const [passwordValue, setPasswordValue] = useState('')
  function inputHandler(val) {
    setInputValue(val)
    console.log("Username :" + val)
  }
  function passwordHandler(val) {
    setPasswordValue(val)
    console.log("Password :" + val)
  }
  function handleForm(){
    Swal.fire({
      title: "Drag me!",
      icon: "success",
      draggable: true
    });
  }
  return (
    <>
    <div className="container">
        <div className="row mb-3">
          <div className="col-md-3">
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Email"
              value={inputValue}
              onChange={(e)=>inputHandler(e.target.value)}
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-3">
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Password"
              value={passwordValue}
              onChange = {(e)=>passwordHandler(e.target.value)}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <button className="btn btn-secondary w-100" onClick={handleForm}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default LoginForm