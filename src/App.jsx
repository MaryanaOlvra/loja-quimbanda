import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';

const PlaceholderPage = ({ title }) => (
  <div className="py-48 text-center text-[#c5a059] uppercase tracking-widest min-h-screen font-black text-xs flex items-center justify-center">{title}</div>
);

const App = () => {
  const [isLightMode, setIsLightMode] = useState(false);
  const [cart, setCart] = useState([]); 

  const addToCart = (product) => {
    setCart([...cart, { ...product, quantity: 1 }]);
    alert(`${product.name} adicionado ao altar!`); // Aviso visual simples
  };

  const theme = {
    bg: isLightMode ? 'bg-[#e8dccc]' : 'bg-[#110202]', 
    text: isLightMode ? 'text-[#310202]' : 'text-[#f0e6d2]', 
    textMuted: isLightMode ? 'text-[#5c2424]' : 'text-[#cba693]',
    card: isLightMode ? 'bg-[#f4ebe1] border border-[#4a0404]/10 shadow-[0_8px_30px_rgba(74,4,4,0.08)]' : 'bg-[#1f0505] border border-[#c5a059]/30 shadow-[0_8px_30px_rgba(0,0,0,0.6)]',
    header: isLightMode ? 'bg-[#4a0404] text-[#f4ebe1] shadow-xl border-b border-[#c5a059]' : 'bg-[#0a0101]/95 border-b border-[#c5a059]/30 text-[#f0e6d2]',
    footer: isLightMode ? 'bg-[#310202] text-[#e8dccc] border-t-4 border-[#c5a059]' : 'bg-[#0a0101] border-t-4 border-[#c5a059]/30 text-[#f0e6d2]',
  };

  return (
    <Router>
      <div className={`min-h-screen flex flex-col ${theme.bg} transition-colors duration-700 font-sans selection:bg-[#c5a059] selection:text-black`}>
        <Header isLightMode={isLightMode} setIsLightMode={setIsLightMode} theme={theme} cartCount={cart.length} />
        
        <main className="flex-grow pt-20">
          <Routes>
            {/* Passamos o addToCart para a Home! */}
            <Route path="/" element={<Home isLightMode={isLightMode} theme={theme} addToCart={addToCart} />} />
            
            <Route path="/produtos" element={<PlaceholderPage title="Catálogo de Produtos em Obras..." />} />
            <Route path="/consultas" element={<PlaceholderPage title="Consultas em Obras..." />} />
            <Route path="/rituais" element={<PlaceholderPage title="Rituais em Obras..." />} />
            <Route path="/cursos" element={<PlaceholderPage title="Cursos em Obras..." />} />
            <Route path="/sobre" element={<PlaceholderPage title="Sobre em Obras..." />} />
            <Route path="/carrinho" element={<PlaceholderPage title="Carrinho em Obras..." />} />
            <Route path="/login" element={<PlaceholderPage title="Login em Obras..." />} />
            <Route path="/produto/:id" element={<PlaceholderPage title="Detalhes do Produto em Obras..." />} />
            <Route path="/servico/:id" element={<PlaceholderPage title="Detalhes do Serviço em Obras..." />} />
          </Routes>
        </main>
        
        <Footer theme={theme} />

        <a href="https://wa.me/5517997167336" target="_blank" rel="noreferrer" title="Falar com a Zeladoria" className={`fixed bottom-6 right-6 md:bottom-8 md:right-8 w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-[0_8px_30px_rgba(0,0,0,0.4)] z-50 transition-transform hover:scale-110 active:scale-95 ${isLightMode ? 'bg-[#25D366] text-white' : 'bg-[#25D366] text-white border-2 border-white/20'}`}>
          <MessageCircle size={28} fill="currentColor" />
        </a>
      </div>
    </Router>
  );
};

export default App;