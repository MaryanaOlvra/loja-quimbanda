import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#050505] text-white py-12 border-t border-[#c5a059]/20 mt-auto font-sans">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h3 className="text-[#c5a059] font-[Playfair_Display] text-2xl font-bold mb-4 tracking-wider">
          Quimbanda M'bande
        </h3>
        <p className="text-xs text-gray-400 max-w-md mx-auto mb-8">
          Artigos religiosos consagrados, seriedade e respeito à tradição. Atendimento e produtos com fundamento.
        </p>
        <div className="text-[10px] text-gray-500 uppercase tracking-widest">
          © {new Date().getFullYear()} Quimbanda M'bande. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

// Esta é a linha mágica que estava faltando e causou a tela branca!
export default Footer;
