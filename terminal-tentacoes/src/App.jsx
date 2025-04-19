// Projeto: Terminal Interativo "Tentações" do EuMatt
// Stack: React + Vite (pronto para deploy na Vercel)

import { useState } from 'react';
import './App.css';

export default function TerminalTentacoes() {
  const [comando, setComando] = useState('oração');
  const [resposta, setResposta] = useState('');

  const executarComando = (e) => {
    e.preventDefault();
    const input = comando.trim().toLowerCase();
    if (input === `oração`) {
      setResposta(`
Faço orações pros meus guardiões...\n
Eles andam comigo nas esquinas onde a luz não entra.\n
Protegem minha mente,corpo e alma dos\n 
desejos e sangue-sugas que tentam me engolir.\n
Entre o pecado e a promessa, eu respiro a resistência.\n

A tentação é um caminho sem volta, mas talvez e só talvez valha a pena (só por hoje...).\n
Não oro pra ser perfeito, oro pra continuar de pé.\n

Se você também caiu... levanta.\n
Se ainda tem voz... ora.\n
Se ainda ouvidos escute, o caos escuta quem fala com verdade.\n

E lembre-se!!\n

NÃO CAIA EM TENTAÇÃO
        `);
    } else if (input === '+') {
      setResposta(`
Enquanto meu nome não estiver escrito nas estrelas, nas calçadas,  
eu me mantenho me movimentando, em busca de ser aceito, de ser notado,  
mesmo às vezes sendo um alvo de críticas apenas...  

Esse é um verso que ainda não tem beat...  
Talvez eu nunca faça um som sobre isso.  

Faço coisas pra me manter vivo,  
e manter todos ao meu redor felizes...  

Cicatrizes?  
Tenho algumas que fizeram eu ser quem eu sou hoje.  

Gratidão a todos que me apoiam!!  

Esse é o começo do Universo de EUMATT.
        `);
    } else if (input === 'her#in@') {
      setResposta('CUIDADO. Você já caiu em tentação hoje.');
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
            <option value="oração">oração</option>
            <option value="+">+</option>
            <option value="her#in@">her#in@</option>
          </select>
          <button
            type="submit"
            className="bg-green-700 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded transition duration-200 shadow-md"
          >
            Executar
          </button>
        </form>
        <div className="mt-6 text-green-300 min-h-[80px] text-lg border-t border-green-600 pt-4 whitespace-pre-line">
          {resposta}
        </div>
      </div>
    </div>
  );
}