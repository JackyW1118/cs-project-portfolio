import React, { useEffect } from "react";

const ScrollToTopBtn = () => {
  useEffect(() => {
    const mybutton = document.getElementById("upBtn");
    window.onscroll = () => {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    };
  }, []);

  const scrollUp = (e) => {
    document.body.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    document.documentElement.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      id="upBtn"
      className="fa fa-arrow-up"
      title="Go to top"
      onClick={scrollUp}
    ></button>
  );
};

export default ScrollToTopBtn;
