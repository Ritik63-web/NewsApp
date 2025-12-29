import React, { useRef, useContext } from "react";
import { WeatherContext } from "../../context/WeatherContext";

const Navbar = () => {
  const { setCity } = useContext(WeatherContext);
  const inputRef = useRef(null);

  function search() {
    setCity(inputRef.current.value.trim());
    inputRef.current.value = "";
  }
  return (
    <>
      <p>NewsApp</p>
      <input type="text" ref={inputRef} />
      <button onClick={search}>Search</button>
    </>
  );
};

export default Navbar;
