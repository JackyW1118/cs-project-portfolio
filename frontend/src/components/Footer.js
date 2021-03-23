import React, { useState, useEffect } from "react";

const Footer = () => {
  //state to keep track  of current navbar style
  const [footerProp, setfooterProp] = useState("");
  //state to keep track of current url
  const [currentPage, setCurrentPage] = useState();
  //state to keep track of color
  const [currentBg, setCurrentBg] = useState("");
  useEffect(() => {
    //create a time interval
    const intervalID = setInterval(() => {
      //if page changes
      if (currentPage != location.href) {
        //add style to nav bar if location isnt home page
        if (location.pathname !== "/") {
          setfooterProp("");
          setCurrentBg("nav-footer-bg");
        } else {
          setfooterProp("home-bg-bottom");
          setCurrentBg("");
        }
        //update current page state
        setCurrentPage(location.href);
      }
    }, 50);

    return () => {
      //cancel previous interval when current page state is updated
      clearInterval(intervalID);
    };
  }, [currentPage]);
  return (
    <div className="row align-items-center footer-row">
      <div class={`footer ${footerProp}`}>
        <div
          className={`d-flex justify-content-center footer-text-container ${currentBg}`}
        >
          <p class="text-white mt-5 footer-text">© 2021 JackyWang.us</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
