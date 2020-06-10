import React from 'react';
import eq_icon1 from './static/images/4f9aa414-1equipamento_000000000000000000001.png';
import eq_icon2 from './static/images/e62d6600-equipamento2_000000000000000000001.png';
import skyplay_icon from './static/images/34d43684-skyplay_000000000000000000001.png';
import telecine_icon from './static/images/dd8ef5ac-esportes_000000000000000000001.png';
import grava_icon from './static/images/6347fbb9-ico-gravacao_000000000000000000001.png';
import Card from './static/components/Card';

function Body() {
  return (
    <>
      <div className="body">
        <div className="pacotes">
          <h2>PACOTES SKY</h2>
          <p>Escolha o plano que mais combina com você</p>
        </div>
        <div className="cards">
          <Card
            Plano="Easy hd"
            NumCanais="+ 130 canais"
            NumEquip="1 equipamento hd"
            Vantagem1="assista pelo app"
            Vantagem2="telecine grátis - 1 mês"
            Valor="r$ 44,95"
            TempoPromo="no primeiro mês"
            ValorIntegral="* r$ 89,90 após o 2º mês"
            icon1={eq_icon1}
            icon2={skyplay_icon}
            icon3={telecine_icon}
          />
          <Card
            Plano="fun hd"
            NumCanais="+ 170 canais"
            NumEquip="1 equipamento hd"
            Vantagem1="assista pelo app"
            Vantagem2="telecine grátis - 1 mês"
            Valor="r$ 62,45"
            TempoPromo="no primeiro mês"
            ValorIntegral="* r$ 124,90 após o 2º mês"
            icon1={eq_icon1}
            icon2={skyplay_icon}
            icon3={telecine_icon}
          />
          <Card
            Plano="mega plus hd"
            NumCanais="+ 190 canais"
            NumEquip="1 equipamento hd"
            Vantagem1="gravação, pausa e play"
            Vantagem2="telecine grátis - 1 mês"
            Valor="r$ 74,95"
            TempoPromo="no primeiro mês"
            ValorIntegral="* r$ 149,90 após o 2º mês"
            icon1={eq_icon1}
            icon2={grava_icon}
            icon3={telecine_icon}
          />
        </div>
        <div className="pacotes">
          <h2>PACOTES SKY</h2>
          <p>2 EQUIPAMENTOS</p>
        </div>
        <div className="cards">
          <Card
            Plano="Easy ii hd"
            NumCanais="+ 130 canais"
            NumEquip="1 equipamento hd"
            Vantagem1="assista pelo app"
            Vantagem2="telecine grátis - 1 mês"
            Valor="r$ 62,45"
            TempoPromo="no primeiro mês"
            ValorIntegral="* r$ 124,90 após o 2º mês"
            icon1={eq_icon2}
            icon2={skyplay_icon}
            icon3={telecine_icon}
          />
          <Card
            Plano="fun ii hd"
            NumCanais="+ 170 canais"
            NumEquip="1 equipamento hd"
            Vantagem1="gravação, pausa e play"
            Vantagem2="telecine grátis - 1 mês"
            Valor="r$ 67,45"
            TempoPromo="no primeiro mês"
            ValorIntegral="* r$ 159,90 após o 2º mês"
            icon1={eq_icon2}
            icon2={grava_icon}
            icon3={telecine_icon}
          />
          <Card
            Plano="mega plus ii hd"
            NumCanais="+ 190 canais"
            NumEquip="1 equipamento hd"
            Vantagem1="gravação, pausa e play"
            Vantagem2="telecine grátis - 1 mês"
            Valor="r$ 74,95"
            TempoPromo="no primeiro mês"
            ValorIntegral="* r$ 149,90 após o 2º mês"
            icon1={eq_icon2}
            icon2={grava_icon}
            icon3={telecine_icon}
          />
        </div>
      </div>
    </>
  );
}

export default React.memo(Body);
