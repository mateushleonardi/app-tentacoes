// src/Routes/router.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TerminalTentacoes from '../App'; // Mantém se o terminal tá em App.jsx

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/nao-caia" element={<TerminalTentacoes />} />
        <Route path="*" element={<div style={{ color: 'white', textAlign: 'center', marginTop: '2rem' }}>404 - Página não encontrada</div>} />
      </Routes>
    </Router>
  );
}
