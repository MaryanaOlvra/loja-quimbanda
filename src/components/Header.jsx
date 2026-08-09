import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingBag, Menu, X, Users, Search, Moon, Sun } from 'lucide-react';

const TridentIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 2v20M5 7v4a7 7 0 0 0 14 0V7M12 11V7" />
    <path d="M9 3l3-1 3 1" />
    <circle cx="12" cy="11" r="2" fill="#8b0000" stroke="none" />
  </svg>
);

const Header = ({ isLightMode, setIsLightMode, theme, cartCount }) => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // A SUA lista de navegação exata
  const navItems = [
    { name: 'Início', path: '/' },
    { name: 'Produtos', path: '/produtos' },
    { name: 'Consultas', path: '/consultas' },
    { name: 'Cursos', path: '/cursos' },
    { name: 'Rituais', path: '/rituais' },
    { name: 'Sobre', path: '/sobre' }
  ];

  const handleNavigation = (path) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className={`fixed top-0 w-full z-[60] ${theme.header} backdrop-blur-lg transition-all duration-500`}>
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-20 md:h-24 flex items-center justify-between">
          
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => navigate('/')}>
            <div className={`w-10 h-10 md:w-12 md:h-12 border-2 ${isLightMode ? 'border-[#f4ebe1]/30' : 'border-[#c5a059]/30'} rounded-full flex items-center justify-center transition-all group-hover:scale-110`}>
              <TridentIcon className={`w-5 h-5 md:w-6 md:h-6 ${isLightMode ? 'text-[#f4ebe1]' : 'text-[#c5a059]'}`} />
            </div>
            <div className="leading-tight">
              <h1 className="text-[11px] md:text-[16px] font-bold uppercase tracking-[0.2em]">Quimbanda M'bande</h1>
              <p className={`text-[7px] md:text-[9px] uppercase tracking-[0.3em] mt-1 font-sans font-bold italic ${isLightMode ? 'text-[#c5a059]' : 'text-[#c5a059]'}`}>Sacerdotisa de 7 Saias do Cabaré</p>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-8 text-[10px] font-bold uppercase tracking-[0.2em]">
            {navItems.map(item => (
              <button key={item.name} onClick={() => navigate(item.path)} className="hover:text-[#c5a059] transition-colors">
                {item.name}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2 md:gap-4">
            <button className="p-2 hover:bg-white/10 rounded-full text-[#c5a059] transition-colors" title="Pesquisar">
              <Search size={20} />
            </button>
            <button onClick={() => setIsLightMode(!isLightMode)} className="p-2 hover:bg-white/10 rounded-full text-[#c5a059] transition-colors" title="Alternar Vibração">
              {isLightMode ? <Moon size={20}/> : <Sun size={20}/>}
            </button>
            <button onClick={() => navigate('/login')} className="p-2 hover:bg-white/10 rounded-full text-[#c5a059] transition-colors" title="Minha Conta">
              <Users size={20} />
            </button>
            <button className="relative p-2 hover:bg-white/10 rounded-full text-[#c5a059] transition-colors" onClick={() => navigate('/carrinho')} title="Sacola">
              <ShoppingBag size={20} />
              {cartCount > 0 && <span className="absolute top-0 right-0 bg-[#c5a059] text-black text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center border border-[#4a0404]">{cartCount}</span>}
            </button>
            <button className="lg:hidden p-2" onClick={() => setIsMenuOpen(true)}><Menu size={26} className={isLightMode ? 'text-[#f4ebe1]' : 'text-white'}/></button>
          </div>
        </div>
      </header>

      {/* Menu Mobile Overlay */}
      <div className={`fixed inset-0 z-[70] ${isLightMode ? 'bg-[#4a0404]' : 'bg-[#110202]'} flex flex-col transition-transform duration-500 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} lg:hidden`}>
        <div className="h-20 px-6 flex items-center justify-between border-b border-[#c5a059]/20 text-[#e8dccc]">
          <span className="uppercase text-xs font-bold tracking-widest text-[#c5a059]">Menu da Loja</span>
          <button onClick={() => setIsMenuOpen(false)}><X size={32}/></button>
        </div>
        <div className={`flex-grow flex flex-col items-center justify-center gap-8 font-serif text-3xl uppercase tracking-widest ${isLightMode ? 'text-[#e8dccc]' : 'text-[#f0e6d2]'}`}>
          {navItems.map(item => (
            <button key={item.name} onClick={() => handleNavigation(item.path)} className="active:text-[#c5a059]">{item.name}</button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Header;