import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import LandingPage from "./components/pages/LandingPage/LandingPage";
import AboutUs from "./components/pages/AboutUs/AboutUs";
import Blog from "./components/pages/Blog/Blog"
import Portfolio from "./components/pages/Portfolio/Portfolio"
import Contact from "./components/pages/GetInTouch/Contact"
import Test from "./components/UI/Test"


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/motiv8" element={<App />}>
          <Route index path="home" element={<LandingPage />} />
          <Route path="about_us" element={<AboutUs />} />
          <Route path="contact_us" element={<Contact/>} />
          <Route path="our_services" />
          <Route path="the_team" />
          <Route path="portfolio" element={<Portfolio/>} />
          <Route path="blog" element={<Blog/>} />
          <Route path="test" element={<Test/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
