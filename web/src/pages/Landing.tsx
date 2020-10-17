import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import '../styles/global.css';
import '../styles/pages/landing.css';
import logoImg from '../images/logo.svg';


function Landing() {
    return(
      <div id='page-landing'>
        <div className="content-wrapper">
          <img src={logoImg} alt="Happy"/>
  
          <main>
            <h1>Leve feliciade para o mundo</h1>
            <p>Visite orfanatos e mude o dia de muitas crianças.</p>
          </main>
          
          <div className="location">
            <strong>Savador</strong>
            <span>Bahia</span>
          </div>
  
          <Link to="/app" className="enter-app">
            <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
          </Link>

          <Link to="/login" className="enter-dashboard">
            <button>Acesso Restrito</button>
          </Link>
        </div>
      </div>
    );
}

export default Landing;