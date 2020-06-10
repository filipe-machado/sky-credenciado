import React from 'react';
import movies from './static/images/f5e0b4f9-tv-assine_000000000000000000001.png';
import play from './static/images/24007bab-sky-play-logo_000000000000000000001.png';
import logo from './static/images/logo.png';

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="vantagens">
          <div className="text">
            <p>
              Só na <span>SKY</span> você tem muito mais vantagens
            </p>
            <div className="vantagem-item">
              <h4>Sky sugere</h4>
              <p>
                De acordo com o que você mais assiste, programas semelhantes
                são indicados priorizando seu estilo e oferecendo a vantagem de
                assistir a hora que quiser.
              </p>
            </div>
            <div className="vantagem-item">
              <h4>Multiroom</h4>
              <p>
                Horóscopo, previsão do tempo e outros aplicativos que você adora
                acessar direto de sua TV.
              </p>
            </div>
            <div className="vantagem-item">
              <h4>Sky play</h4>
              <p>
                Acesse seus filmes, programas e documentários preferidos através
                do Sky Play. Tudo na sua mão, a hora em que você quiser.
              </p>
            </div>
            <div className="vantagem-item">
              <h4>PIP (Picture in Picture)</h4>
              <p>
                Seus dois programas favoritos estão passando ao mesmo tempo?
                Com a SKY você não perde nada e consegue ver os dois na mesma tela.
              </p>
            </div>
            <div className="vantagem-item">
              <h4>Gravação</h4>
              <p>
                Autonomia para gravar 400 horas em HD e 800 horas em digital.
                Além disso você consegue gravar até 5 programas simultaneamente.
              </p>
            </div>
          </div>
        </div>
        <div className="image">
          <img src={play} alt=""/>
          <img src={movies} alt=""/>
        </div>
        <div className="central-vendas">
          <div className="container">
            <img src={logo} alt=""/>
            <div className="fone">
              <p>
                Central de vendas Sky TV
              </p>
              <a href="tel:08002198525">0800 219 8525</a>
            </div>
            <div className="cliente">
              <p>
                Já é cliente? Ligue <a href="tel:10611">10611</a>
              </p>
            </div>
            <div className="info">
              <p>
                2019 - RP Informatica - Todos os direitos reservados. Parceiro credenciado SKY| Política de Privacidade
              </p>
            </div>
          </div>
        </div>
        <div className="obs">
          <div className="container">
            <p>
              *Os valores anunciados no site são válidos para compras efetuadas via cartão de crédito. Consulte preços para demais formas de pagamento.Oferta válida de 01/11/2019 até 30/11/2019.
            </p>
            <p>
              Contratação dos serviços sujeita a prévia análise de crédito. Mensalidades sujeitas a reajuste em 12 meses com base no IGP-M, contado da data de sua contratação. Oferta sujeita à viabilidade técnica e à disponibilidade do equipamento em estoque. A análise de viabilidade técnica e a instalação são realizadas pelo credenciado da SKY de forma gratuita.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default React.memo(Footer);
