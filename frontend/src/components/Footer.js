import React, { useState, useEffect } from "react";

const Footer = () => {
  //state to keep track  of current navbar style
  const [footerProp, setfooterProp] = useState("");
  //state to keep track of current url
  const [currentPage, setCurrentPage] = useState();
  useEffect(() => {
    //create a time interval
    const intervalID = setInterval(() => {
      //if page changes
      if (currentPage != location.href) {
        //add style to nav bar if location isnt home page
        if (location.pathname !== "/") {
          setfooterProp("footer-bg");
        } else {
          setCurrentPage("");
        }
        //update current page state
        setCurrentPage(location.href);
      }
    }, 50);
  }, [currentPage]);
  return (
    <div className="row align-items-center">
      <div class={`footer ${footerProp}`}>
        <div className="col-md-12 text-center">
          <p class="align-self-center text-white mt-5">© 2021 JackyWang.us</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
