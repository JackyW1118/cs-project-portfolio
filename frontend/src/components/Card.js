import React, { useState, useEffect } from "react";
import axios from "axios";

const Card = () => {
  const [myInfo, setMyInfo] = useState({ tech_stack: "" });

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get("api/myinfo");
      setMyInfo(data);
    };
    search();
  }, []);

  const renderedTechs = myInfo.tech_stack.split("/").map((stack) => {
    return (
      <span className="badge badge-pill badge-secondary mr-2 mb-1">
        {stack}
      </span>
    );
  });

  return (
    <div className="card-wrap">
      <div className="card">
        <img
          className="rounded-circle center-block border border-white"
          src={myInfo.my_photo}
          alt="profle photo"
        ></img>
        <div className="card-body">
          <div className="d-flex flex-column">
            <h5 className="card-title align-self-center">{myInfo.name}</h5>
            <p className="card-text align-self-center">{myInfo.current_role}</p>
            <i class="fa fa-map-marker align-self-center">{` ${myInfo.location}`}</i>
            <br />
            <div className="d-flex flex-row justify-content-center mb-2">
              <a
                class="fa fa-github mr-3"
                style={{ fontSize: "20px" }}
                href={myInfo.github_url}
                data-toggle="tooltip"
                title="Github Repo"
              ></a>
              <a
                class="fa fa-linkedin mr-3"
                style={{ fontSize: "20px" }}
                href={myInfo.linkedin_url}
                data-toggle="tooltip"
                title="Linkedin Profile"
              ></a>
              <a
                class="fa fa-file-text"
                style={{ fontSize: "17px" }}
                href={myInfo.resume_link}
                data-toggle="tooltip"
                title="Resume"
              ></a>
            </div>
            <div class="d-flex flex-row justify-content-center">
              <a
                class="fa fa-phone mr-3"
                style={{ fontSize: "18px" }}
                href={`tel:${myInfo.phone_number}`}
                data-toggle="tooltip"
                title="Phone Number"
              ></a>
              <a
                class="fa fa-envelope"
                style={{ fontSize: "17px" }}
                href={`mailto:${myInfo.email}`}
                data-toggle="tooltip"
                title="Email Address"
              ></a>
            </div>
            <hr />
            <h5 className="card-title">Skills</h5>
          </div>
          <div class="d-flex flex-wrap">{renderedTechs}</div>
          <hr />
          <h5 className="card-title align-self-center">About</h5>
          <p className="card-text">{myInfo.home_page_hero_text}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
