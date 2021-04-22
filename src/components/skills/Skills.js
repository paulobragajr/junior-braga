import React from "react";
import Fade from "react-reveal/Fade";
import { Constants } from "../../assets/const/Constants";
import "./Skills.css";

function Skills({}) {
  return (
    <Fade left>
      <div>
        <div class="skill">
          <ul class="skills-list">
            {Constants.skills.map((item, i) => (
              <li>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </Fade>
  );
}

export default Skills;
