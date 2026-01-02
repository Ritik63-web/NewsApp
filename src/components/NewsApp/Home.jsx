import React, { useContext, useEffect } from "react";
import { NewsContext } from "../../context/NewsAppContext";
import { useParams } from "react-router-dom";

const Home = () => {
  const { news, error, setInput } = useContext(NewsContext);
  const { category } = useParams();
  useEffect(() => {
    if (category) {
      setInput(category);
    } else {
      setInput("India");
    }
  }, [category]);

  if (error) return <p>Error {error}</p>;
  if (!news) return <p>Loading...</p>;

  return (
    <>
      <div className="container mt-4">
        <div className="row">
          {news.articles?.map((item) => (
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={item.url}>
              <div className="card h-100 shadow-sm">
                <img
                  src={item.urlToImage || "/no-image.png"}
                  className="card-img-top"
                  alt='No Pic'
                  style={{ height: "200px", objectFit: "cover" }}
                />

                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{item.title}</h5>

                  <div>
                    <span className="card-text text-muted small float-start">
                      {item.author || "Unknown Author"}
                    </span>
                    <span className="card-text text-muted small float-end">
                      {new Date(item.publishedAt).toLocaleDateString("en-GB") ||
                        "Date"}
                    </span>
                  </div>

                  <p className="card-text">
                    {item.description
                      ? item.description.slice(0, 120) + "..."
                      : "No description available."}
                  </p>

                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary mt-auto"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
