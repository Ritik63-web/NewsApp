import React from "react";

const SignUp = () => {
  return (
    <>
      <div className='grid grid d-flex justify-content-center align-items-center min-vh-100 bg-primary-subtle'>
        <div className="container w-25 bg-primary p-5 rounded-5">
          <form action="login" className="form">
            <div className="input-group mb-4">
              <span className='input-group-text'>
                <img src="./Icons/person.png" alt="" />
              </span>
              <input type="text" name="" value='' id="" className="form-control" />
            </div>
            <div className="mb-3 input-group">
            <span className='input-group-text'>
                <img src="./Icons/password.png" alt="" />
              </span>
              <input type="password" name="" value='' id="" className="form-control" />
            </div>
            <div className="">
              <button type="submit" className="btn btn-outline-light form-control">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
