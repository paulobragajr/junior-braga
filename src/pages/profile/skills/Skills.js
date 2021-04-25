import React from "react";
import Fade from "react-reveal/Fade";
import { Constants } from "../../../assets/const/Constants";
import { SimpleList } from "../../../components";
import "./Skills.css";

function Skills({}) {
  return (
    <Fade left>
      <SimpleList isGrid data={Constants.skills} />
    </Fade>
  );
}

export default Skills;
