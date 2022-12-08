// Componente que renderiza el boton de ir hacia arriba

import React, { useState, useEffect } from "react";
import NavigationIcon from "@mui/icons-material/Navigation";
import Fab from "@mui/material/Fab";
import "../App.css";

export default function ButtonGoTop() {
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      {showButton && (
        <Fab
          color="secondary"
          aria-label="navigation"
          className="container-go-top"
          onClick={goToTop}
        >
          <NavigationIcon className="button-go-top" />
        </Fab>
      )}
    </>
  );
}
