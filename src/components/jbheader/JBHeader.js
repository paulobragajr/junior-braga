import icon from "../../assets/image/icon_pj.ico";

function JBHeader({ isHome }) {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
      <div class="container">
        <a class="navbar-brand js-scroll-trigger">
          <img src={icon} width="15%" height="15%" />
        </a>
        <button
          class="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        {isHome ? (
          <div>
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <a class="nav-link js-scroll-trigger" href="#about">
                  Sobre
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link js-scroll-trigger" href="#contact">
                  Contatos
                </a>
              </li>
              {/* <li class="nav-item">
                <a class="nav-link js-scroll-trigger" href="curriculo">
                  Currículo
                </a>
              </li> */}
            </ul>
          </div>
        ) : null}
      </div>
    </nav>
  );
}

export default JBHeader;
