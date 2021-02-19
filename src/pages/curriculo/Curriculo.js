import { JBHeader } from "../../components";
function Curriculo() {
  return (
    <div className="profile_contianer">
      <JBHeader />
      <div class="w3-third">
        <div class="w3-white w3-text-grey w3-card-4">
          <div class="w3-container">
            <h2>Paulo Braga de Assis Junior</h2>
            <p>
              <i class="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal"></i>
              Developer Mobile/WEB
            </p>
            <p>
              <i class="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal"></i>
              Brasília, BR
            </p>
            <p>
              <i class="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal"></i>
              junior.braga.dev@mail.com
            </p>
            <p>
              <i class="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i>
              55 61 98149-0933
            </p>
            <hr />

            <p class="w3-large">
              <b>
                <i class="fa fa-asterisk fa-fw w3-margin-right w3-text-teal"></i>
                Skills
              </b>
            </p>

            {/* {renderPercentage('Android','90%')} */}

            <br />
          </div>
        </div>
        <br />
      </div>
    </div>
  );
}

export default Curriculo;
