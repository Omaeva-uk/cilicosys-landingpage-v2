"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AOSinit = ({ children }) => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return <div>{children}</div>;
};

export default AOSinit;