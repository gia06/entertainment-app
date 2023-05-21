import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";
import Root from "./Root";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/*" element={<Root />}>
      <Route path="home" element={<Home />} />
      {/* // TODO: needs their own correct components to redirect to */}
      <Route path="movies" element={<Login />} />
      <Route path="tv-series" element={<Login />} />
      <Route path="bookmarks" element={<Login />} />
      {/* *************************************** */}
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="*" element={<Navigate to="/home" />}></Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
