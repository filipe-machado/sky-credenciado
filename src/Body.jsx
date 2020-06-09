import React from 'react';
import eq_icon1 from './static/images/4f9aa414-1equipamento_000000000000000000001.png';
import skyplay_icon from './static/images/34d43684-skyplay_000000000000000000001.png';
import telecine_icon from './static/images/dd8ef5ac-esportes_000000000000000000001.png';

function Body() {
  return (
    <>
      <div className="body">
        <div className="pacotes">
          <h2>PACOTES SKY</h2>
          <p>Escolha o plano que mais combina com você</p>
        </div>
        <div className="cards">
          <div className="card">
            <div className="card-header">
              <h4>
                EASY HD
              </h4>
              <p>
                + 130 CANAIS
              </p>
            </div>
            <div className="card-body">
              <div className="card-icon">
                <img src={eq_icon1} alt=""/>
                <p>1 EQUIPAMENTO HD</p>
              </div>
              <div className="card-icon">
                <img src={skyplay_icon} alt=""/>
                <p>ASSISTA PELO APP</p>
              </div>
              <div className="card-icon">
                <img src={telecine_icon} alt=""/>
                <p>TElECINE GRÁTIS - 1 MÊS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default React.memo(Body);
