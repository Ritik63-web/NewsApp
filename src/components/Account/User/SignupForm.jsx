import React, { useState } from "react";

const SignupForm = () => {
  const [error, setError] = useState('');
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  function handleChange(e) {
    const { name, value } = e.target;
    setForm((pre) => ({
      ...pre,
      [name]: value,
    }));
  }
  function handleSubmit() {
    try {
      if (!form.email.trim()){
        setError("please Enter Data") 
        return;
      }
      const oldData = JSON.parse(localStorage.getItem("employeeDetail")) || [];
      localStorage.setItem(
        "employeeDetail",
        JSON.stringify([...oldData, form])
      );
      console.log("Saves SignUp Form Data", form);
    } catch (err) {
      setError(err);
      console.log("Employee Detail", err);
    }
  }
  return (
    <>
      <div className="d-flex  align-items-center vh-100">
        <div className="container">
          <form onSubmit={handleSubmit}>
            <div className="row mb-3">
              <div className="col-md-3">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Name"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-3">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Email"
                  onChange={handleChange}
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
                  onChange={handleChange}
                />
              </div>
            </div>
            {error && (
              <div className="row">
                <div className="alert col-md-3 alert-danger py-2">
              {error}
            </div>
              </div>
            )}
            <div className="row">
              <div className="col-md-3">
                <button type="submit" className="btn btn-secondary w-100">
                  Submit
                </button>
              </div>
            </div>
          </form>

        </div>
      </div>
    </>
  );
};

export default SignupForm;
