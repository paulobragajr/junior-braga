import "./Profile.css";
import HeaderProfile from "./headerprofile/HeaderProfile";
import AboutMe from "./aboutme/AboutMe";
import { JBHeader } from "../../components";
import Social from "../../components/social/Social";
import Skills from "../../components/skills/Skills";

function Profile() {
  return (
    <div className="profile_contianer">
      <JBHeader />

      <header class="masthead text-white d-flex">
        <div class="container my-auto">
          <div class="row">
            <HeaderProfile />
          </div>
        </div>
      </header>

      <section id="about">
        <div class="container">
          <div class="row">
            <AboutMe />
          </div>
        </div>
      </section>

      <section id="contact">
        <div class="container ">
          <div class="row">
            <div class="col-lg-12 ml-auto text-center">
              <Social />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Profile;
