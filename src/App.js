import "./App.css";
import React from "react";
import { BrowserRouter, Link, Outlet, Route, Routes } from "react-router-dom";

import UserList from "./components/UserList";
import Homepage from "./components/Homepage";

function App() {
  return (
    <div>
      <h3>Routing with React Router DOM</h3>
      <BrowserRouter>
        <ul>
          <li><Link to="/users/sashank">Profile 1</Link></li>
          <li><Link to="/users/joe">Profile 2</Link></li>
          <li><Link to="/users/jack">Profile 3</Link></li>
        </ul>

        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route exact path="/users/:username" element={<UserList/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
