import { createContext, useState, useEffect } from "react";

export const DetailContext = createContext();

export const DetailsProvider = ({ children }) => {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("details")) || [];
    setDetails(storedData);
  }, []);

  return (
    <DetailContext.Provider value={{ details, setDetails }}>
      {children}
    </DetailContext.Provider>
  );
};
