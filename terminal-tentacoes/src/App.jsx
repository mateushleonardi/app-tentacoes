import { useState } from 'react';
import './App.css';


export default function TerminalTentacoes() {
  const [comando, setComando] = useState('');
  const [resposta, setResposta] = useState('');
  const [assistiuSalmo, setAssistiuSalmo] = useState(false);
  const [ouviuConfissao, setOuviuConfissao] = useState(false);
  const [mostrarSalmo, setMostrarSalmo] = useState(false);
  const [mostrarConfissao, setMostrarConfissao] = useState(false);
  const [mostrarModal, setMostrarModal] = useState(false);
  


  const executarComando = (e) => {
    e.preventDefault();
    const input = comando.trim().toLowerCase();

    if (!comando) {
      setMostrarModal(true); // <- dispara o modal
      return;
    }
  
    // Resetar visibilidade sempre que um novo comando for executado
    setMostrarSalmo(false);
    setMostrarConfissao(false);
    if (input === 'salmo') {
      setResposta(`🔐 SALMO EXCLUSIVO\n\nClique para assistir. Lembre-se: só é possível ver uma vez.`);
      setMostrarSalmo(true);
    } else if (input === 'confissão') {
      setResposta("🔊 CONFISSÃO\n\nVocê está prestes a ouvir algo que nunca foi revelado.");
      setMostrarConfissao(true);
    } else if (input === '+') {
      setResposta(`
        <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 20px; font-family: sans-serif;">
          <div style="flex: 1 1 300px; padding: 8px; box-sizing: border-box; min-width: 280px;">
            <div style="border: 2px solid #444; border-radius: 12px; padding: 16px; background-color: #111; color: #fff;">
              <img 
                src="/camisa-frente.jpeg" 
                alt="Camiseta EuMatt" 
                onmouseover="this.src='/camisa-traz.jpeg'" 
                onmouseout="this.src='/camisa-frente.jpeg'" 
                style="width: 100%; border-radius: 8px; margin-bottom: 12px;" 
              />
              <h2 style="margin: 0 0 8px 0;">🌐 PRÉ-VENDA: Camiseta EuMatt Modelo Oversized</h2>
              <p style="margin: 4px 0;"><strong>🗓️ Data de lançamento:</strong> 03/05</p>
              <p style="margin: 4px 0;"><strong>📍 Endereço:</strong> Curitiba, PR</p>
              <p style="margin: 4px 0;"><strong>🧢 Valor:</strong> R$ 149,90</p>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSe3StzeFiXeajWZCwNOkykoaBqsebF35aabcdVTGsyjDjobTg/viewform?usp=dialog" 
                target="_blank" 
                style="display: inline-block; margin-top: 10px; padding: 8px 12px; background: #0f0; color: #000; font-weight: bold; text-decoration: none; border-radius: 6px;">
                🛒 Garantir com desconto
              </a>
            </div>
          </div>
      
        <div style="flex: 1 1 300px; padding: 8px; box-sizing: border-box; min-width: 280px;">
            <div style="border: 2px solid #444; border-radius: 12px; padding: 16px; background-color: #111; color: #fff;">
              <img 
                src="/camisa-frente.jpeg" 
                alt="Camiseta EuMatt - Modelo 2" 
                onmouseover="this.src='/camisa-traz.jpeg'" 
                onmouseout="this.src='/camisa-frente.jpeg'" 
                style="width: 100%; border-radius: 8px; margin-bottom: 12px;" 
              />
              <h2 style="margin: 0 0 8px 0;">🌐 PRÉ-VENDA: Camiseta EuMatt Modelo Basic</h2>
              <p style="margin: 4px 0;"><strong>🗓️ Data de lançamento:</strong> 03/05</p>
              <p style="margin: 4px 0;"><strong>📍 Endereço:</strong> Curitiba, PR</p>
              <p style="margin: 4px 0;"><strong>🧢 Valor:</strong> R$ 89,90</p>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSe3StzeFiXeajWZCwNOkykoaBqsebF35aabcdVTGsyjDjobTg/viewform?usp=dialog" 
                target="_blank" 
                style="display: inline-block; margin-top: 10px; padding: 8px 12px; background: #0f0; color: #000; font-weight: bold; text-decoration: none; border-radius: 6px;">
                🛒 Garantir com desconto
              </a>
            </div>
          </div>
        </div>
      `);
      
    } else if (input === 'heroína') {
      setResposta('CUIDADO. Você já caiu em tentação hoje...');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-neutral-900 text-green-400 font-mono flex items-center justify-center p-6">
      <div className="w-full max-w-xl border border-green-500 p-6 rounded-xl shadow-2xl backdrop-blur-md bg-black/70">
        <h1 className="text-2xl font-bold text-green-400 mb-6 text-center">
          <span className="text-red-500">O Universo de EuMatt 🌌</span> 
        </h1>
        <form onSubmit={executarComando} className="flex flex-col gap-4">
          <select
            value={comando}
            onChange={(e) => setComando(e.target.value)}
            className="bg-black border border-green-600 px-4 py-2 text-green-300 rounded shadow-inner focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="" disabled>Selecione um comando</option>
            <option value="salmo">salmo</option>
            <option value="confissão">confissão</option>
            <option value="+">+</option>
            <option value="heroína">heroína</option>
          </select>
            <button
                onClick={() => setMostrarModal(false)}
                className="bg-green-700 btn-select hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
              >
              Selecionar
          </button>
        </form>
        <div
          className="mt-6 text-green-300 min-h-[80px] text-lg border-t border-green-600 pt-4"
          dangerouslySetInnerHTML={{ __html: resposta }}
        />


        {/* Renderização condicional fora do select */}
        {mostrarSalmo && !assistiuSalmo && (
 <video
 controls
 playsInline
 onEnded={() => setAssistiuSalmo(true)}
 className="mt-4 w-full rounded-lg shadow-lg"
 style={{
   width: '100%',
   height: 'auto',
   maxHeight: '420px',
   backgroundColor: '#000',
   display: 'block',
   margin: '0 auto',
 }}
>
 <source src="/salmo.mp4" type="video/mp4" />
 Seu navegador não suporta vídeo.
</video>


        )}

        {mostrarConfissao && !ouviuConfissao && (
          <audio
          controls
          onEnded={() => setOuviuConfissao(true)}
          className="mt-4 w-full max-w-full"
          >
          <source src="/confissao.mp3" type="audio/mpeg" />
          Seu navegador não suporta áudio.
          </audio>
        )}
      </div>

      {mostrarModal && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
    <div className="bg-zinc-900 border border-green-500 rounded-xl p-8 w-full max-w-sm text-center shadow-xl">
      <h2 className="text-xl font-bold text-white mb-2">Nenhum comando selecionado</h2>
      <p className="text-green-300 text-sm mb-6 leading-relaxed">
        Esse terminal não funciona com dúvidas,<br />
        só com decisões.
      </p>
      <div className="flex justify-center">
        <button
          onClick={() => setMostrarModal(false)}
          className="bg-red-700 btn-fechar hover:bg-green-600 text-white font-semibold py-2 px-4 rounded transition"
        >
          fechar
        </button>
      </div>
    </div>
  </div>
)}

    </div>
  );
}
