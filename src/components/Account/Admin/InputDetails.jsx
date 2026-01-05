import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DetailContext } from "../../../context/DetailsContext";

const InputDetails = () => {
  const navigate = useNavigate();
  const { setDetails } = useContext(DetailContext);
  const [error, setError] = useState(null)
  const [formData, setFormData] = useState({
    company: "",
    des: "",
    days: "",
    img: "",
  });
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((pre) => ({
      ...pre,
      [name]: value,
    }));
  }
  async function handleSubmit() {
    try {
      if (!formData.company.trim()) return;

      setDetails(prev => [...prev, formData]);

      const oldData = JSON.parse(localStorage.getItem("details")) || [];
      localStorage.setItem(
        "details",
        JSON.stringify([...oldData, formData])
      );

      navigate("/dis");
    } catch (err) {
      setError(err.message);
    }
  }


  return (
    <>
      <div className="container vh-100 d-flex justify-content-center align-items-center">
        <div className="row justify-content-center w-75">
          <h2 className="text-center bg-secondary rounded-2 text-light">
            Fill Details
          </h2>
          <div className="col-md-5 mb-3">
            <input
              name="company"
              placeholder="Company"
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="col-md-5 mb-3">
            <input
              name="des"
              placeholder="Designation"
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="col-md-5 mb-3">
            <input
              name="days"
              placeholder="Days left"
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="col-md-5 mb-3">
            <input
              name="img"
              placeholder="Image Link"
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <p>{error}</p>
          <button className="btn btn-secondary col-9" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default InputDetails;
