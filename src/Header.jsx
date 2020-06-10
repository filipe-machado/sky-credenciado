import React from 'react';
import logo from './static/images/logo.png';
import phone from './static/images/6ce573b4-icone-telefone_00v00v000000000000001.png';
import redphone from './static/images/Phone_Awesome.png';
import wpp from './static/images/whats_app_logo.png';

function Header() {
  return (
    <>
      <div className="navbar-bottom">
        <div className="fone">
          <img src={redphone} alt=""/>
          <a href="tel:08002198525">0800 219 8525</a>
        </div>
        <div className="wpp">
          <a target="_blank" rel="noopener noreferrer" href="https://api.whatsapp.com/send?phone=5517988301525">
            <img src={wpp} alt=""/>
          </a>
        </div>
      </div>
      <div>
        <div className="navbar">
          <div className="logo">
            <img src={logo} alt="logo"/>
          </div>
          <div className="cliente">
            <p>Já é cliente?</p>
            <p>Ligue <a href="tel:10611">10611</a></p>
          </div>
          <div className="fone">
            <img src={phone} alt=""/>
            <a href="tel:08002198525">0800 219 8525</a>
          </div>
          <div className="wpp">
            <a target="_blank" rel="noopener noreferrer" href="https://api.whatsapp.com/send?phone=5517988301525">
              <img src={wpp} alt=""/>
            </a>
          </div>
        </div>
      </div>
      <div>
        <div className="header" />
      </div>
    </>
  );
}

export default React.memo(Header);
