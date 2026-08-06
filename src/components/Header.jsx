import React from 'react';
import { ShoppingBag, User, Moon } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-[#050505] text-white border-b border-[#c5a059]/20 py-6 font-sans">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        
        {/* Identidade Visual - Logo e Título */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full border-2 border-[#c5a059] flex items-center justify-center text-[#c5a059] shadow-[0_0_15px_rgba(197,160,89,0.2)]">
             <span className="text-2xl font-[Playfair_Display]">♆</span>
          </div>
          <div className="flex flex-col">
            <h1 className="font-[Playfair_Display] text-2xl font-bold tracking-[0.15em] text-white">
              QUIMBANDA M'BANDE
            </h1>
            <span className="text-[10px] text-[#c5a059] tracking-[0.3em] uppercase font-bold mt-1">
              Reino da Lira
            </span>
          </div>
        </div>

        {/* Menu de Navegação */}
        <nav className="hidden md:flex gap-8">
          <a href="#" className="text-xs font-bold uppercase tracking-widest text-[#c5a059] transition-colors">Início</a>
          <a href="#" className="text-xs font-bold uppercase tracking-widest hover:text-[#c5a059] transition-colors">Produtos</a>
          <a href="#" className="text-xs font-bold uppercase tracking-widest hover:text-[#c5a059] transition-colors">Serviços</a>
          <a href="#" className="text-xs font-bold uppercase tracking-widest hover:text-[#c5a059] transition-colors">Sobre</a>
          <a href="#" className="text-xs font-bold uppercase tracking-widest hover:text-[#c5a059] transition-colors">Contato</a>
        </nav>

        {/* Ícones de Ação */}
        <div className="flex items-center gap-6 text-white">
          <button className="hover:text-[#c5a059] transition-colors duration-300">
            <Moon size={22} strokeWidth={1.5} />
          </button>
          <button className="hover:text-[#c5a059] transition-colors duration-300">
            <User size={22} strokeWidth={1.5} />
          </button>
          <button className="hover:text-[#c5a059] transition-colors duration-300 relative group">
            <ShoppingBag size={22} strokeWidth={1.5} />
            {/* O pontinho vermelho/dourado que avisa que tem item no carrinho pode entrar aqui depois! */}
          </button>
        </div>
        
      </div>
    </header>
  );
};

// Aqui está a linha vital que resolve a sua tela branca!
export default Header;