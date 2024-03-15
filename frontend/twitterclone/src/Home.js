import React, { useState } from "react";
import { Link } from "react-router-dom";
import Posts from "./Posts";
import "./css/home.css";
import ReactDOM from "react-dom/client";
import ViewPosts from "./ViewPosts";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter
  ([
    {
      path: "/",
      element: <ViewPosts></ViewPosts>,
      errorElement: <h1>PAGE NOT FOUND</h1>,
    }
  ]);
  const root = ReactDOM.createRoot(document.getElementById("thiss"));
  root.render(
    <React.StrictMode>
      <RouterProvider router={router}></RouterProvider>
    </React.StrictMode>,
  );
export default function Home() {
  return (
    <>
      <div id="navbar">
        <div id="logo">
          <h1>TWITTER</h1>
        </div>

        <div id="links">
          {" "}
          <Link id="Link" to="/">
            Home
          </Link>
          <Link id="Link" to="/contact">
            Contact
          </Link>
          <Link id="Link" to="/about">
            About
          </Link>
          <Link id="Link" to="/login">
            Login/SignUp
          </Link>
        </div>
      </div>
      {/* <h1>LOGIN/SIGNUP TO SEE POSTS</h1> */}
      <div id="thiss"></div>
      
    </>
  );
}
