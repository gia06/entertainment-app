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
import Login from "./components/Login";
import Home from "./components/Home";
import Register from "./components/Register";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/*" element={<Root />}>
        <Route path="home" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<Navigate to="/home" />}></Route>
      </Route>
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
