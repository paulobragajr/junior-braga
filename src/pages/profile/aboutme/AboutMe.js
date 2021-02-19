import { Constants } from "../../../assets/const/Constants";
import "./AboutMe.css";
import Fade from "react-reveal/Fade";

function AboutMe() {
  var date = new Date();
  var year = date.getFullYear() - 2015;
  const aboutMe = Constants.about_me + year + Constants.about_me1;

  return (
    <Fade top sty>
      <div>
        <div class="w3-row">
          <div class="w3-col w3-container left">
            <p class="text-faded mb-4 txt_detail">{aboutMe}</p>
          </div>
          <div class="w3-rest w3-container">
            <div className="img">
              <img
                class="img-responsive img-circle"
                src="https://avatars.githubusercontent.com/u/16064114?s=400&u=9021870ec3047ee5fdccc1fbe96afb86672ad6af&v=4"
              />
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}

export default AboutMe;
