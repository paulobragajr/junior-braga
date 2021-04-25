import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import "./Experience.css";
import { DescriptionExperience } from "../../../components";
import { Constants } from "../../../assets/const/Constants";

const experienses = Constants.experiences;

function Experience() {
  const [inxdexExperience, setInxdexExperience] = useState(0);
  const [buttons, setButtons] = useState(experienses);

  const selectedButton = (index) => {
    buttons.forEach((val, indexButton) => {
      val.active = indexButton === index;
      setInxdexExperience(index);
    });
    setButtons(buttons);
  };

  const experiencesButton = (item, index) => {
    let className = item.active ? "iqWXn" : "hIJIte";
    return (
      <li onClick={() => selectedButton(index)} className={className}>
        <span>{item.company}</span>
      </li>
    );
  };

  return (
    <Fade top sty>
      <div>
        <div class="div-row">
          <div class="row-left">
            <ul>
              {buttons.map((item, index) => experiencesButton(item, index))}
            </ul>
          </div>
          <div class="row-right">
            <DescriptionExperience
              experience={experienses[inxdexExperience].experience}
            />
          </div>
        </div>
      </div>
    </Fade>
  );
}

export default Experience;
