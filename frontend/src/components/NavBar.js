import React, { useState, useEffect } from "react";

const NavBar = () => {
  //state to keep track  of current navbar style
  const [navProp, setNavProp] = useState("");
  //state to keep track of current url
  const [currentPage, setCurrentPage] = useState();
  useEffect(() => {
    //create a time interval
    const intervalID = setInterval(() => {
      //if page changes
      if (currentPage != location.href) {
        //add style to nav bar if location isnt home page
        if (location.pathname !== "/") {
          setNavProp("nav-footer-bg sticky-top");
        } else {
          setNavProp("");
        }
        //update current page state
        setCurrentPage(location.href);
      }
    }, 100);

    //get all nav item
    const navItems = document.getElementsByClassName("nav-item");

    //add a white bar to the link that is active
    for (let i = 0; i < navItems.length; i++) {
      let itemName = navItems[i].innerText;
      if (location.pathname.toLowerCase().includes(itemName.toLowerCase())) {
        navItems[i].classList.add("active");
      } else {
        navItems[i].classList.remove("active");
      }
    }
    return () => {
      //cancel previous interval when current page state is updated
      clearInterval(intervalID);
    };
  }, [currentPage]);

  return (
    <nav className={`navbar navbar-expand-lg navbar-dark ${navProp}`}>
      <div className="nav-inner">
        <a className="navbar-brand active" href="/">
          Home
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link" href="/projects">
              Projects
            </a>
            <a className="nav-item nav-link" href="/resume">
              Resume
            </a>
            <a
              className="nav-item nav-link"
              href="https://github.com/JackyW1118"
            >
              <i className="fa fa-github mr-1"></i>
              Github
            </a>
            <a
              className="nav-item nav-link"
              href="https://www.linkedin.com/in/jiaqi-wang-9535321b1/"
            >
              <i className="fa fa-linkedin mr-1"></i>
              Linkedin
            </a>
            <a className="nav-item nav-link" href="/about">
              About
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
