import React from "react";
import { SpeedInsights } from "@vercel/speed-insights/react";
// import Parent from './components/Parent'
// import Child from './components/Child'
// import Parent2 from './components/ChildToParent/Parent2'
// import Todolist from './components/Todolist/Todolist'
// import NewsHome from './components/Weather/NewsHome'
// import Newsapp from './components/NewsApp/Newsapp'
import InputDetails from "./components/Account/Admin/InputDetails";
import DisplayDetails from "./components/Account/User/DisplayDetails";
import { DetailsProvider } from "./context/DetailsContext";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      {/* <Parent /> */}
      {/* <Child /> */}
      {/* <Parent2 /> */}
      {/* <Todolist /> */}
      {/* <NewsHome /> */}
      {/* <Newsapp /> */}
      <DetailsProvider>
        <Routes>
          <Route path='/' element={<InputDetails />} />
          <Route path="/dis" element={<DisplayDetails />} />
        </Routes>
      </DetailsProvider>
      <SpeedInsights />
    </>
  );
};

export default App;
