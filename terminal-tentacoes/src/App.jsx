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
      setResposta(`🌐 PRÉ-VENDA

🔹 Preview: [imagem futuramente]
🗓️ Data: 28/04
📍 Local: Curitiba, PR
🧢 Pré-venda: R$ 59,90

📸 Instagram: @eumatt041
🎧 Spotify / YouTube: linktr.ee/eumatt`);
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
        <div className="mt-6 text-green-300 min-h-[80px] text-lg border-t border-green-600 pt-4 whitespace-pre-line">
          {resposta}
        </div>

        {/* Renderização condicional fora do select */}
        {mostrarSalmo && !assistiuSalmo && (
          <video controls onEnded={() => setAssistiuSalmo(true)} className="mt-4 rounded shadow-md w-full">
            <source src="/salmo.mp4" type="video/mp4" />
            Seu navegador não suporta vídeo.
          </video>
        )}

        {mostrarConfissao && !ouviuConfissao && (
          <audio controls onEnded={() => setOuviuConfissao(true)} className="mt-4 w-full">
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
