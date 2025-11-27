import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

function BackToTop() {
  const [visible, setVisible] = useState(false);

  // Show button when scrolled down
  useEffect(() => {
    const toggleVisible = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className="back-to-top"
      style={{
        position: "fixed",
        bottom: "30px",
        right: "30px",
        background: "#333",
        color: "#fff",
        border: "none",
        padding: "12px",
        borderRadius: "50%",
        cursor: "pointer",
        fontSize: "20px",
        display: visible ? "flex" : "none",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 999,
      }}
    >
      <FaArrowUp />
    </button>
  );
}

export default BackToTop;
