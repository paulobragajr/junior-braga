import { Constants } from "../../../assets/const/Constants";
import Fade from "react-reveal/Fade";

function HeaderProfile() {
  return (
    <Fade top>
      <div>
        <h1 className="txt_info">Oi, meu nome é</h1>
        <h2 className="txt_primary">{Constants.profile_name}</h2>
        <h3 className="txt_secondary">Eu construo aplicações mobile / web.</h3>

        <p className="txt_detail">
          Sou um engenheiro de software especializado em criação de aplicações
          mobile e web.
        </p>
      </div>
    </Fade>
  );
}

export default HeaderProfile;
