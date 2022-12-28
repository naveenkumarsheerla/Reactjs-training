import React from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import App from "./App";
import List from "./component/List";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="App" element={<App />} />
        <Route path="List" element={<List/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
