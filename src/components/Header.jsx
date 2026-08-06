import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCartStore } from '../store/useCartStore';

export function Header() {
  const cartItems = useCartStore((state) => state.cartItems);
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="bg-zinc-950 border-b border-amber-900/40 text-amber-100 sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo / Nome da Marca */}
        <div className="flex items-center space-x-3">
          <Link to="/" className="text-2xl font-serif font-bold text-amber-500 tracking-wider">
            Quimbanda M'bande
          </Link>
        </div>

        {/* Navegação */}
        <nav className="hidden md:flex items-center space-x-8 text-sm uppercase tracking-widest font-medium">
          <Link to="/" className="hover:text-amber-400 transition-colors">Início</Link>
          <a href="#produtos" className="hover:text-amber-400 transition-colors">Artigos Consagrados</a>
          <a href="#consultas" className="hover:text-amber-400 transition-colors">Consultas</a>
        </nav>

        {/* Botão do Carrinho / Checkout */}
        <div className="flex items-center space-x-4">
          <Link 
            to="/checkout" 
            className="flex items-center gap-2 bg-amber-900/40 hover:bg-amber-900/60 border border-amber-600/40 px-4 py-2 rounded-lg transition-all relative text-amber-200"
          >
            <ShoppingBag className="w-5 h-5 text-amber-400" />
            <span className="text-sm font-semibold">Carrinho</span>
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-900 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}