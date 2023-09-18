import React from "react";
import ReactDOM from "react-dom/client";
// import { createRoot } from "react-dom/client";
import styles from "../../styles/ProjectDerictories/Projects.scss";
import Image from "../../../../ui/Image";
import Title from "../../../../ui/title";
import Text from "../../../../ui/text";

const Projects = ({
  src,
  title,
  text,
  list,
  countlist,
  listmass = [countlist],
}) => {

  if (list === 1) {
    countlist === listmass.length
      ? Vstavka()
      : alert("Вы ввели неправильное колличество значений");
  } else {
    console.log("Список выключен");
  }

  function Vstavka() {
    const listItems=listmass.map((element)=>
        <li className="list-element">{element}</li>
    );
    return(
        <ul className="list-ul">{listItems}</ul>
    );
  }

  return (
    <div className="project-container">
      <div className="project-container-box">
        <Image src={src} alt="img" className="project-img" />
        <div className="project-wrap">
          <Title text={title} level={1} className="title__projectderict20" />
          <Text text={text} className="project-text" />
          <div className={`project-list ${list === 1 ? "show" : ""}`}>
            <Title
              text="СОСТАВ РАБОТ:"
              level={2}
              className="title__projectderict20"
            />
            <div className="project-list-box" id="listbox"><Vstavka/></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
