/* eslint-disable jsx-a11y/iframe-has-title */
import './Adav.css';

function Adav() {
  return (
    <div className="main_container">
      <header className="masthead text-white d-flex">
        <div class="container my-auto">
          <div className="header_adav">
            <h2 className="txt_primary1">Abraçando Vidas</h2>
            <h3 className="txt_secondary1">Uma igreja que abraça e ama.</h3>

            <p className="txt_verse">
            Estando ainda longe, seu pai o viu e, cheio de compaixão, correu para seu filho, e o abraçou e beijou.
            </p>
            <p className="txt_reference_verse">Lucas 15:20</p>

          </div>
        </div>
      </header>

      <section className="about_me_section">
        <div className="about_me">
            <h1 className='text'>Quem Somos</h1>
            <hr/>
            <p className="about_me_sbutitle"> TEMOS UM LUGAR PARA VOCÊ</p>
            <p className='text about_me_description'> 
            A Igreja Abraçando Vidas é uma igreja que se reúne em vários locais; composto de pessoas com todas as histórias que você pode imaginar que estão se esforçando para ser 'Pessoas que ajudão pessoas a encontrar e seguir Jesus'. Não importa onde você esteja em sua jornada, você está convidado a descobrir o propósito que Jesus tem para sua vida.</p>
        </div>
      </section>
      
      <section className="meetings_section">
        <div className="meetings_me">
          <h1 className="meetings_title">Nossos Cultos</h1>
          <hr/>
          <div class="container">
            <div class="row">
              <div class="col">
                <p className="meetings_title">Segunda</p>
                <p className="meetings_time">08h00</p>
                <p >Círculo de Oração</p>
              </div>
              <div class="col">
                <p className="meetings_title">Quarta</p>
                <p className="meetings_time">08h00</p>
                <p >Círculo de Oração</p>
                <p className="meetings_time">20h00</p>
                <p >Culto da Vitória</p>
              </div>
              <div class="col">
                <p className="meetings_title">Sexta</p>
                <p className="meetings_time">08h00</p>
                <p >Círculo de Oração</p>
              </div>
              <div class="col">
                <p className="meetings_title">Sabado</p>
                <p className="meetings_time">08h00</p>
                <p >Círculo de Oração</p>
                <p className="meetings_time">19h30</p>
                <p >Culto de Departamento</p>
              </div>
              <div class="col">
                <p className="meetings_title">Domingo</p>
                <p className="meetings_time">09h00</p>
                <p >Escola Dominical</p>
                <p className="meetings_time">18h00</p>
                <p >Culto da Família</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="image_bible">
          <div className="image">
            <h1 className='text'>Plano de Leitura</h1>
            <p className='text'>Desejar entrar no nosso plano de leitura?</p>
            <a href="https://chat.whatsapp.com/J5loF2rGRPt4WG9lpbvwgb" target="_parent">
            <button  class="button button-primary" type="submit">Entrar</button>
            </a>
          </div>
      </section>

      <section>
        <div class="container">
          <div class="row">
            <div class="col">
              <div class="mapouter">
              <div class="gmap_canvas">
                <iframe class="gmap_iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Assembleia de Deus Abraçando Vidas - ADAV&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"/>
              </div>
            </div>
          </div>
        
          <div class="col">
        
            <form >
              <div class="row">
                <div class="col-md-6 form-group"> 
                  <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" required=""/>
                </div>
                <div class="col-md-6 form-group mt-3 mt-md-0"> 
                  <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" required=""/>
                </div>
              </div>
              <div class="form-group mt-3"> 
                <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" required=""/>
              </div>
              <div class="form-group mt-3">
                <textarea class="form-control" name="message" rows="5" placeholder="Message" required=""/>
              </div>
              <div class="text-center">
                <button  class="button button-primary-second" type="submit">Send Message</button>
              </div>
            </form>
          </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Adav;


