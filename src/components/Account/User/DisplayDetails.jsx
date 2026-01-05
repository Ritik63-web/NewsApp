import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DetailContext } from "../../../context/DetailsContext";
import { Bookmark } from "lucide-react";

const DisplayDetails = () => {
  const navigate = useNavigate();
  const { details } = useContext(DetailContext);

  function handleSubmit() {
    navigate("/");
  }

  return (
    <>
      <div className="container">
        <div className="heading d-flex justify-content-center align-items-center gap-5">
          <h2 className="">Details</h2>
          <button onClick={handleSubmit} className="btn btn-secondary">
            Back
          </button>
        </div>
        <div className="container">
          <div className="row">
            {details.length ? (
              (details?.map((item, index) => {
                return (
                  <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-3">
                    <div className="parent" key={index}>
                      <div className="top d-flex justify-content-between align-items-center mb-3">
                        <img
                          src={item.img || "https://via.placeholder.com/150"}
                          alt="profile"
                        />
                        <button className="btn btn-outline-secondary">
                          Save <Bookmark size={18} />
                        </button>
                      </div>
                      <div className="center text-start mb-4">
                        <h3>
                          {item.company}{" "}
                          <span className="days">{item.days} days ago</span>
                        </h3>
                        <h5>{item.des}</h5>
                        <span className="bg-secondary-subtle rounded-2 px-2 fw-medium me-3">
                          Full Time
                        </span>{" "}
                        <span className="bg-secondary-subtle rounded-2 px-2 fw-medium">
                          Part Time
                        </span>
                      </div>
                      <hr className="mb-4" />
                      <div className="bottom d-flex justify-content-between align-items-center">
                        <h6>
                          <span>$200-250K</span>
                          <br />
                          <span>Noida, India</span>
                        </h6>
                        <button className="btn btn-outline-secondary">
                          Apply now
                        </button>
                      </div>
                    </div>
                  </div>
                );
              }): null)
            ) : (
              <p>No data available</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default DisplayDetails;
