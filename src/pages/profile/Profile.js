import "./Profile.css";
import HeaderProfile from "./headerprofile/HeaderProfile";
import AboutMe from "./aboutme/AboutMe";
import { JBHeader, Social } from "../../components";
import Experience from "./experience/Experience";

function Profile() {
  const Section = (props, { id }) => {
    return (
      <section id={id}>
        <div class="container">
          <div class="row">{props.children}</div>
        </div>
      </section>
    );
  };
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

      <Section id="about">
        <AboutMe />
      </Section>

      <Section id="experience">
        <Experience />
      </Section>

      <Section id="contact">
        <Social />
      </Section>
    </div>
  );
}

export default Profile;
