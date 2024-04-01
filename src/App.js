import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./page/Home/home";
import Login from "./page/Login/login";

const App = () => {
  const routes = [
    {
      path: "/",
      exact: true,
      element: <Login />,
    },
    {
      path: "/home",
      exact: true,
      element: <Home />,
    },
  ];
  return (
    <>
      <Router>
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} {...route} />
          ))}
        </Routes>
      </Router>
    </>
  );
};

export default App;
