import React from 'react';
import { ShoppingBag } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-zinc-950 border-b border-amber-900/40 text-amber-100 sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo / Nome da Marca */}
        <div className="flex items-center space-x-3">
          <span className="text-2xl font-serif font-bold text-amber-500 tracking-wider">
            Quimbanda M'bande
          </span>
        </div>

        {/* Navegação */}
        <nav className="hidden md:flex items-center space-x-8 text-sm uppercase tracking-widest font-medium">
          <a href="#" className="hover:text-amber-400 transition-colors">Início</a>
          <a href="#" className="hover:text-amber-400 transition-colors">Artigos Consagrados</a>
          <a href="#" className="hover:text-amber-400 transition-colors">Consultas</a>
          <a href="#" className="hover:text-amber-400 transition-colors">Sobre</a>
        </nav>

        {/* Ícone do Carrinho */}
        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-amber-950/30 rounded-full transition-colors relative">
            <ShoppingBag className="w-6 h-6 text-amber-400" />
            <span className="absolute top-0 right-0 bg-red-900 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
              0
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}