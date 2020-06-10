import React from 'react';
import PropTypes from 'prop-types';

function Card({
  Plano,
  NumCanais,
  NumEquip,
  Vantagem1,
  Vantagem2,
  Valor,
  TempoPromo,
  ValorIntegral,
  icon1,
  icon2,
  icon3,
  TextButton,
}) {
  return (
    <>
      <div className="card">
        <div className="card-header">
          <h4>
            {Plano}
          </h4>
          <p>
            {NumCanais}
          </p>
        </div>
        <div className="card-body">
          <div className="card-icon">
            <img src={icon1} alt=""/>
            <p>
              {NumEquip}
            </p>
          </div>
          <div className="card-icon">
            <img src={icon2} alt=""/>
            <p>
              {Vantagem1}
            </p>
          </div>
          <div className="card-icon">
            <img src={icon3} alt=""/>
            <p>
              {Vantagem2}
            </p>
          </div>
        </div>
        <div className="divider" />
        <div className="preco">
          <p>
            {Valor}
          </p>
          <p>
            {TempoPromo}
          </p>
          <p>
            {ValorIntegral}
          </p>
        </div>
        <a href="tel:08002198525" className="assign-button">{TextButton}</a>
      </div>
    </>
  );
}

Card.propTypes = {
  Plano: PropTypes.string.isRequired,
  NumCanais: PropTypes.string.isRequired,
  NumEquip: PropTypes.string.isRequired,
  Vantagem1: PropTypes.string.isRequired,
  Vantagem2: PropTypes.string.isRequired,
  Valor: PropTypes.string.isRequired,
  TempoPromo: PropTypes.string.isRequired,
  ValorIntegral: PropTypes.string.isRequired,
  icon1: PropTypes.string.isRequired,
  icon2: PropTypes.string.isRequired,
  icon3: PropTypes.string.isRequired,
  TextButton: PropTypes.string,
};

Card.defaultProps = {
  TextButton: 'ASSINAR'  ,
};

export default React.memo(Card);
