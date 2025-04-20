import { useState, useEffect } from 'react';
import './App.css';
import './index.css';

export default function TerminalTentacoes() {
  const [resposta, setResposta] = useState('');

  useEffect(() => {
    setResposta(`
      <div class="resposta-boxes">
        <div class="box-camiseta">
          <img 
            src="/camisa-frente.jpeg" 
            alt="Camiseta EuMatt"
            onmouseover="this.src='/camisa-traz.jpeg'" 
            onmouseout="this.src='/camisa-frente.jpeg'"
            class="img-camiseta"
          />
          <h2>🌐 PRÉ-VENDA: Camiseta EuMatt Modelo Oversized</h2>
          <p><strong>🗓️ Data de lançamento:</strong> 03/05</p>
          <p><strong>📍 Endereço:</strong> Curitiba, PR</p>
          <p><strong>🧢 Valor:</strong> R$ 149,90</p>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSe3StzeFiXeajWZCwNOkykoaBqsebF35aabcdVTGsyjDjobTg/viewform?usp=dialog"
             target="_blank"
             class="btn-link">
            🛒 Garantir com desconto
          </a>
        </div>

        <div class="box-camiseta">
          <img 
            src="/camisa-frente.jpeg" 
            alt="Camiseta EuMatt - Modelo 2"
            onmouseover="this.src='/camisa-traz.jpeg'" 
            onmouseout="this.src='/camisa-frente.jpeg'"
            class="img-camiseta"
          />
          <h2>🌐 PRÉ-VENDA: Camiseta EuMatt Modelo Basic</h2>
          <p><strong>🗓️ Data de lançamento:</strong> 03/05</p>
          <p><strong>📍 Endereço:</strong> Curitiba, PR</p>
          <p><strong>🧢 Valor:</strong> R$ 89,90</p>
          <br>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSe3StzeFiXeajWZCwNOkykoaBqsebF35aabcdVTGsyjDjobTg/viewform?usp=dialog"
             target="_blank"
             class="btn-link">
            🛒 Garantir com desconto
          </a>
        </div>
      </div>
    `);
  }, []);

  return (
    <div className="terminal-container">
      <div className="terminal-box">
        
        <div className='titulo-terminal'>
        <h1>✨ <span className="red">O Universo de EuMatt 🌌</span></h1>

        <div className="linktree-container">
          <a
            href="https://linktr.ee/eumatt041"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-select"
          >
            🌐 Acessar o Linktree
          </a>
        </div>


        </div>


        <div
          className="resposta"
          dangerouslySetInnerHTML={{ __html: resposta }}
        />
      </div>
    </div>
  );
}
