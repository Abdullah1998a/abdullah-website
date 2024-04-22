import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  Navbar,
  Home,
  About,
  Portfolio,
  ProjectDetails,
  Education,
  Contact,
  NotFound,
} from "./pages";

let currentTheme =
  localStorage.getItem("theme") !== null
    ? localStorage.getItem("theme")
    : "light";
export default function App() {
  const location = useLocation();
  const [show, setShow] = useState(false);
  const [theme, setTheme] = useState(currentTheme === "dark" ? true : false);
  if (show) {
    document.body.classList.add("stop-scroll");
  } else {
    document.body.classList.remove("stop-scroll");
  }
  if (theme) {
    document.querySelector("html").classList.add("dark");
  } else {
    document.querySelector("html").classList.remove("dark");
  }
  return (
    <>
      <Navbar show={show} setShow={setShow} theme={theme} setTheme={setTheme} />
      <AnimatePresence mode="wait" onExitComplete={() => setShow(false)}>
        <Routes location={location} key={location.key}>
          <Route index element={<Home theme={theme} />} />
          <Route path="/about" element={<About theme={theme} />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/projects/:id" element={<ProjectDetails />} />
          <Route path="/education" element={<Education />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}
