import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
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

export default function App() {
  const location = useLocation();
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (show) {
      document.body.classList.add("overflow-clip");
    } else {
      document.body.classList.remove("overflow-clip");
    }
  }, [show]);
  return (
    <>
      <Navbar show={show} setShow={setShow} />
      <AnimatePresence mode="wait" onExitComplete={() => setShow(false)}>
        <Routes location={location} key={location.key}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
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
