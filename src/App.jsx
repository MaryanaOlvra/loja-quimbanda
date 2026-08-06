import React, { useState, useEffect, useMemo } from 'react';
import { 
  ShoppingBag, MessageCircle, Menu, X, ChevronRight, ShieldCheck, 
  Eye, Sparkles, CreditCard, Smartphone, FileText, Trash2, Plus, 
  Minus, Moon, Lock, Instagram, LayoutDashboard, Package, 
  Users, ShoppingCart, LogOut, ArrowLeft, ExternalLink, Play, CheckCircle,
  TrendingUp, AlertCircle, Clock, Search, MapPin, Truck, Sun, ChevronLeft,
  Heart, Filter, Star
} from 'lucide-react';

const TridentIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 2v20M5 7v4a7 7 0 0 0 14 0V7M12 11V7" />
    <path d="M9 3l3-1 3 1" />
    <circle cx="12" cy="11" r="2.5" fill="currentColor" stroke="none" opacity="0.8" />
  </svg>
);

const INITIAL_PRODUCTS = [
  {
    id: 1,
    name: 'Perfume de Atração Sete Saias do Cabaré',
    price: 130.15,
    shortDesc: 'Frasco vermelho, atração e magnetismo do Cabaré.',
    description: 'Perfume ritualístico preparado sob a força da Pombagira Sete Saias. Fragrância de atração para elevar o magnetismo e o poder pessoal nas relações amorosas e interpessoais.',
    image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=600', // Substitua pela imagem real do frasco de maçã vermelha
    category: 'Perfumes',
    stock: 62,
    status: 'disponível',
    sold: 62
  },
  {
    id: 2,
    name: 'Óleo de Prosperidade - Rosa de Ouro',
    price: 101.65,
    shortDesc: 'Abertura real de caminhos financeiros.',
    description: 'Destrave total dos caminhos amorosos e materiais. Atração imediata de oportunidades, clientes e prosperidade. Frasco conta-gotas imantado.',
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&q=80&w=600', // Substitua pela imagem real do óleo com moedas
    category: 'Óleos',
    stock: 10,
    status: 'disponível',
    sold: 44
  },
  {
    id: 3,
    name: 'Pó das Feiticeiras',
    price: 130.15,
    shortDesc: 'Para mediunidade e força nos feitiços.',
    description: 'Pó consagrado para ampliar a sua força mágica, mediunidade e os resultados das suas firmezas. Item indispensável para quem pratica a verdadeira magia.',
    image: 'https://images.unsplash.com/photo-1605152276897-4f618f831968?auto=format&fit=crop&q=80&w=600', // Substitua pela imagem do pote escuro
    category: 'Pós',
    stock: 5,
    status: 'disponível',
    sold: 16
  },
  {
    id: 4,
    name: 'Patuá de Proteção do Exu Cruzeiro',
    price: 82.65,
    shortDesc: 'Amuleto de proteção máxima contra demandas.',
    description: 'Patuá cruzado nas forças do Exu Cruzeiro. Corte de inveja, neutralização de rivais e proteção profunda da sua coroa e caminhos.',
    image: 'https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?auto=format&fit=crop&q=80&w=600', // Substitua pela imagem dos patuás pretos com vermelho
    category: 'Amuletos',
    stock: 24,
    status: 'disponível',
    sold: 24
  },
  {
    id: 5,
    name: 'Banho de Conexão Feminina',
    price: 92.15,
    shortDesc: 'Ritual Mulheres de Pombagira.',
    description: 'Garrafa com o preparado líquido para o banho de ervas. Conexão profunda, limpeza energética e empoderamento feminino guiado pelas Pombagiras.',
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=600', // Substitua pela imagem da garrafa de banho
    category: 'Banhos',
    stock: 0,
    status: 'esgotado',
    sold: 13
  }
];

const INITIAL_SERVICES = [
  { 
    id: 's1', 
    name: 'Consulta Completa: Búzios de Exu', 
    price: 297.00, 
    icon: <Eye className="w-8 h-8" />, 
    description: 'Orientação para todas as áreas da vida e trabalhos espirituais.', 
    longDescription: 'Via videochamada (duração 1h). Indicação de trabalhos, orientação para o culto a Exu e Pombagira, e confirmação de caminhos de iniciação no Templo.', 
    type: 'Consulta' 
  },
  { 
    id: 's2', 
    name: 'Ritual Coletivo de Destruição', 
    price: 97.00, 
    icon: <ShieldCheck className="w-8 h-8" />, 
    description: 'Rompimento, Justiça e Libertação com Dona Caveira.', 
    longDescription: 'Realizado sob a força de Dona Caveira. Encerramento de ciclos de sofrimento, rompimento de amarras e destruição de rivais e inimigos. Valor individual R$97,00 (Duas pessoas R$177,00).', 
    type: 'Ritual' 
  },
  { 
    id: 's3', 
    name: 'Ritual de Prosperidade: Exu Rei', 
    price: 197.00, 
    icon: <TrendingUp className="w-8 h-8" />, 
    description: 'Exu Rei das 7 Encruzilhadas.', 
    longDescription: 'Abertura de caminhos, atração de clientes, dinheiro inesperado, fortalecimento da autoridade, magnetismo e estratégia para lucrar mais.', 
    type: 'Ritual' 
  },
  { 
    id: 's4', 
    name: 'Curso Magias de Exus e Pombagiras', 
    price: 497.00, 
    icon: <Play className="w-8 h-8" />, 
    description: 'Com a Sacerdotisa Mameto M\'bande.', 
    longDescription: 'Aulas gravadas com acesso vitalício, apostila completa com checklist de materiais e suporte contínuo para dúvidas.', 
    type: 'Curso' 
  }
];

const App = () => {
  const [view, setView] = useState('home'); 
  const [products] = useState(INITIAL_PRODUCTS);
  const [services] = useState(INITIAL_SERVICES);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [user, setUser] = useState(null); 
  const [isAdmin, setIsAdmin] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLightMode, setIsLightMode] = useState(false);
  const [cep, setCep] = useState('');
  const [shippingValue, setShippingValue] = useState(null);
  const [coupon, setCoupon] = useState('');
  const [discount, setDiscount] = useState(0);

  // Navegação
  const navigate = (v, params = null) => {
    if (params) setSelectedProduct(params);
    setView(v);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Carrinho e Favoritos
  const addToCart = (p, qty = 1) => {
    const existing = cart.find(item => item.id === p.id);
    if (existing) setCart(cart.map(item => item.id === p.id ? { ...item, quantity: item.quantity + qty } : item));
    else setCart([...cart, { ...p, quantity: qty }]);
    navigate('cart');
  };

  const toggleFavorite = (p, e) => {
    e.stopPropagation();
    if (favorites.find(item => item.id === p.id)) setFavorites(favorites.filter(item => item.id !== p.id));
    else setFavorites([...favorites, p]);
  };

  const removeFromCart = (id) => setCart(cart.filter(item => item.id !== id));
  const subtotal = useMemo(() => cart.reduce((acc, item) => acc + (item.price * item.quantity), 0), [cart]);
  const total = useMemo(() => {
    const base = subtotal + (shippingValue || 0);
    return base - (base * (discount / 100));
  }, [subtotal, shippingValue, discount]);

  const calculateShipping = () => { if (cep.length >= 8) setShippingValue(25.00); };
  const applyCoupon = () => { if (coupon.toUpperCase() === 'LIRA10') setDiscount(10); else alert('Cupom inválido.'); };

  const filteredProducts = activeCategory === 'Todos' ? products : products.filter(p => p.category === activeCategory);

  const theme = {
    bg: isLightMode ? 'bg-[#fcfaf7]' : 'bg-[#050505]', 
    text: isLightMode ? 'text-[#4a0404]' : 'text-[#f3f4f6]',
    textMuted: isLightMode ? 'text-[#7f1d1d]' : 'text-[#9ca3af]',
    card: isLightMode ? 'bg-white border border-[#c5a059]/40 shadow-xl' : 'bg-[#0a0a0a] border border-[#c5a059]/20 shadow-[0_4px_30px_rgba(0,0,0,0.8)]',
    header: isLightMode ? 'bg-[#4a0404] text-white shadow-md border-b-2 border-[#c5a059]' : 'bg-[#050505]/95 border-b border-[#c5a059]/20 text-white',
    footer: isLightMode ? 'bg-[#310202] text-white border-t-8 border-[#c5a059]' : 'bg-black border-t border-[#c5a059]/20 text-white',
    btnPrimary: 'bg-[#4a0404] text-white hover:bg-[#630606] transition-all duration-300 shadow-lg active:scale-95 border border-[#c5a059]/40',
    btnOutline: isLightMode ? 'bg-transparent border-2 border-[#4a0404] text-[#4a0404] hover:bg-[#4a0404] hover:text-white transition-all' : 'bg-transparent border border-[#c5a059] text-[#c5a059] hover:bg-[#c5a059]/10 transition-all',
  };

  const Button = ({ children, onClick, variant = 'primary', className = '', disabled = false }) => (
    <button 
      onClick={onClick} 
      disabled={disabled}
      className={`px-8 py-4 font-bold uppercase tracking-widest text-[10px] sm:text-xs flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed ${variant === 'primary' ? theme.btnPrimary : theme.btnOutline} ${className}`}
    >
      {children}
    </button>
  );

  const Input = ({ label, placeholder, type = 'text', value, onChange, required }) => (
    <div className="w-full text-left">
      {label && <label className={`block text-[10px] font-bold uppercase tracking-widest mb-2 ${theme.text}`}>{label}</label>}
      <input 
        type={type} placeholder={placeholder} value={value} onChange={onChange} required={required}
        className={`w-full p-4 text-sm outline-none transition-all duration-300 focus:ring-2 focus:ring-[#c5a059] ${isLightMode ? 'bg-white border-2 border-[#4a0404] text-black' : 'bg-[#111] border border-white/10 text-white'}`}
      />
    </div>
  );

  const Header = () => (
    <header className={`fixed top-0 w-full z-[60] ${theme.header} backdrop-blur-lg`}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-20 md:h-24 flex items-center justify-between">
        <div className="flex items-center gap-3 md:gap-4 cursor-pointer group" onClick={() => navigate('home')}>
          <div className={`w-10 h-10 md:w-12 md:h-12 border-2 ${isLightMode ? 'border-[#c5a059]' : 'border-[#c5a059]/40'} rounded-full flex items-center justify-center transition-transform group-hover:scale-110`}>
            <TridentIcon className={`w-5 h-5 md:w-6 md:h-6 ${isLightMode ? 'text-[#c5a059]' : 'text-[#c5a059]'}`} />
          </div>
          <div className="leading-tight hidden sm:block">
            <h1 className="text-sm md:text-xl font-bold tracking-[0.1em] md:tracking-[0.2em] uppercase">Quimbanda M'bande</h1>
            <p className="text-[8px] md:text-[10px] uppercase tracking-[0.3em] mt-0.5 font-sans font-bold italic text-[#c5a059]">Reino da Lira</p>
          </div>
        </div>

        <nav className="hidden lg:flex items-center gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-200">
          {['Início', 'Produtos', 'Rituais', 'Cursos', 'Sobre'].map(item => (
            <button key={item} onClick={() => {
              if(item === 'Início') navigate('home');
              else if(item === 'Produtos') navigate('products');
              else if(item === 'Rituais' || item === 'Cursos') navigate('services-list');
              else navigate('about-page');
            }} className="hover:text-[#c5a059] transition-colors">{item}</button>
          ))}
        </nav>

        <div className="flex items-center gap-2 md:gap-4">
          <button onClick={() => setIsLightMode(!isLightMode)} className="p-2 hover:bg-white/10 rounded-full text-[#c5a059] transition-colors">
            {isLightMode ? <Moon size={20}/> : <Sun size={20}/>}
          </button>
          <button onClick={() => navigate(user ? 'customer-orders' : 'login')} className="p-2 hover:bg-white/10 rounded-full text-[#c5a059] transition-colors">
            <Users size={20} />
          </button>
          <button className="relative p-2 hover:bg-white/10 rounded-full text-[#c5a059] transition-colors" onClick={() => navigate('cart')}>
            <ShoppingBag size={20} />
            {cart.length > 0 && <span className="absolute top-0 right-0 bg-[#c5a059] text-black text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center border border-[#4a0404]">{cart.length}</span>}
          </button>
          <button className="lg:hidden p-2 text-white" onClick={() => setIsMenuOpen(true)}><Menu size={26}/></button>
        </div>
      </div>
    </header>
  );

  const MobileMenuOverlay = () => (
    <div className={`fixed inset-0 z-[70] ${isLightMode ? 'bg-[#4a0404]' : 'bg-[#050505]'} flex flex-col transition-transform duration-500 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} lg:hidden`}>
      <div className="h-20 px-6 flex items-center justify-between border-b border-[#c5a059]/20 text-white">
        <span className="uppercase text-xs font-bold tracking-widest text-[#c5a059]">Menu do Templo</span>
        <button onClick={() => setIsMenuOpen(false)}><X size={32}/></button>
      </div>
      <div className="flex-grow flex flex-col items-center justify-center gap-8 text-white font-serif text-3xl uppercase tracking-widest">
        {['Início', 'Produtos', 'Rituais', 'Cursos', 'Sobre'].map(item => (
          <button key={item} onClick={() => {
            if(item === 'Início') navigate('home');
            else if(item === 'Produtos') navigate('products');
            else if(item === 'Rituais' || item === 'Cursos') navigate('services-list');
            else navigate('about-page');
            setIsMenuOpen(false);
          }} className="active:text-[#c5a059]">{item}</button>
        ))}
      </div>
    </div>
  );

  const Footer = () => (
    <footer className={`${theme.footer} pt-20 pb-10 px-6 mt-auto transition-all`}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 text-center sm:text-left">
        <div className="flex flex-col items-center sm:items-start">
          <div className="flex items-center gap-2 mb-6 text-[#c5a059]">
            <TridentIcon className="w-6 h-6" />
            <span className="text-sm font-bold tracking-[0.3em] uppercase">M'bande</span>
          </div>
          <p className="text-[11px] uppercase tracking-[0.1em] leading-relaxed italic opacity-80">Templo Cabaré da Sete Saias.<br/>Sacerdotisa Mameto M'bande.<br/>São José do Rio Preto - SP.</p>
        </div>
        <div>
          <h4 className="text-[#c5a059] text-[11px] font-black uppercase mb-6 tracking-widest">Templo</h4>
          <ul className="space-y-4 text-[11px] uppercase tracking-widest text-white/70">
            <li className="cursor-pointer hover:text-white" onClick={() => navigate('about-page')}>Sobre Nós</li>
            <li className="cursor-pointer hover:text-white">Apoio & Doações</li>
          </ul>
        </div>
        <div>
          <h4 className="text-[#c5a059] text-[11px] font-black uppercase mb-6 tracking-widest">Links Rápidos</h4>
          <ul className="space-y-4 text-[11px] uppercase tracking-widest text-white/70">
            <li className="cursor-pointer hover:text-white" onClick={() => navigate('products')}>Loja Shopee</li>
            <li className="cursor-pointer hover:text-white" onClick={() => window.open('https://beacons.ai/quimbandambande')}>Beacons/Links</li>
            <li className="cursor-pointer hover:text-white" onClick={() => { navigate('home'); setTimeout(() => document.getElementById('contato')?.scrollIntoView({behavior:'smooth'}), 100); }}>Falar no WhatsApp</li>
          </ul>
        </div>
        <div className="flex flex-col items-center sm:items-start gap-6">
          <div className="flex gap-6 text-[#c5a059]">
            <div className="p-3 bg-white/5 rounded-full hover:bg-[#c5a059] hover:text-black transition-all cursor-pointer"><Instagram size={20}/></div>
            <div className="p-3 bg-white/5 rounded-full hover:bg-[#c5a059] hover:text-black transition-all cursor-pointer"><MessageCircle size={20}/></div>
          </div>
          <button onClick={() => navigate('admin-login')} className="text-[10px] uppercase font-bold text-white/40 hover:text-white mt-4">Painel Restrito</button>
        </div>
      </div>
    </footer>
  );

  const renderContent = () => {
    switch (view) {
      case 'home':
        return (
          <div className="animate-in fade-in duration-700">
            {/* Banner Principal - Foco no Slogan Real */}
            <section className="relative h-[85vh] md:h-[95vh] flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-[#4a0404]/30 to-transparent z-10" />
              <img src="https://images.unsplash.com/photo-1514306191717-452ec28c7814?auto=format&fit=crop&q=80&w=1600" className="absolute inset-0 w-full h-full object-cover grayscale opacity-50 scale-105" alt="Altar" />
              <div className="relative z-20 text-center px-4 max-w-5xl flex flex-col items-center">
                <div className="mb-6 md:mb-10 flex justify-center text-[#c5a059]"><Moon size={48} md:size={64} strokeWidth={1} className="animate-pulse" /></div>
                <h2 className="text-3xl md:text-7xl font-serif text-white mb-8 tracking-tight italic uppercase leading-tight drop-shadow-2xl">
                  Mameto <span className="text-[#c5a059]">M'bande</span>
                </h2>
                <p className="text-xs md:text-lg text-gray-300 uppercase tracking-[0.4em] mb-12 font-bold">O SIM na Quimbanda. O Reino da Lira.</p>
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                  <Button onClick={() => navigate('products')} variant="primary" className="w-full sm:w-auto px-12 py-5 text-xs shadow-[0_0_30px_rgba(74,4,4,0.6)]">Ver Catálogo</Button>
                  <Button onClick={() => navigate('services-list')} variant="outline" className="w-full sm:w-auto px-12 py-5 text-xs border-2 bg-black/50 backdrop-blur-sm">Nossos Rituais</Button>
                </div>
              </div>
            </section>

            {/* Destaques (Físicos) com Wishlist Simulado */}
            <section className={`py-20 md:py-32 px-4 md:px-6 ${theme.bg} transition-all`}>
              <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center mb-16">
                  <div className="text-center md:text-left mb-6 md:mb-0">
                    <h2 className={`text-4xl md:text-5xl font-serif italic ${theme.text}`}>Itens Consagrados</h2>
                    <div className={`w-20 h-[3px] ${isLightMode ? 'bg-[#4a0404]' : 'bg-[#c5a059]'} mt-4`}></div>
                  </div>
                  <Button onClick={() => navigate('products')} variant="outline">Ver Todos</Button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                  {products.slice(0, 3).map(p => (
                    <div key={p.id} className={`${theme.card} p-6 rounded-sm group hover:-translate-y-2 transition-transform duration-500 flex flex-col`}>
                      <div className="relative h-64 md:h-80 overflow-hidden mb-6 cursor-pointer rounded-sm border border-[#c5a059]/10" onClick={() => navigate('details', p)}>
                        <img src={p.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110" alt={p.name} />
                        <button onClick={(e) => toggleFavorite(p, e)} className={`absolute top-4 right-4 p-2 rounded-full backdrop-blur-md border ${favorites.find(f => f.id === p.id) ? 'bg-[#4a0404] border-[#4a0404] text-[#c5a059]' : 'bg-black/50 border-white/20 text-white'} transition-colors`}>
                          <Heart size={18} fill={favorites.find(f => f.id === p.id) ? 'currentColor' : 'none'} />
                        </button>
                        {p.status === 'esgotado' && <div className="absolute inset-0 bg-black/80 flex items-center justify-center"><span className="text-red-500 font-bold uppercase tracking-widest text-[10px] border border-red-500 px-4 py-2 bg-black/50">Esgotado</span></div>}
                      </div>
                      <div className="flex justify-between items-start mb-2">
                        <h4 className={`${theme.text} uppercase text-sm font-bold tracking-widest pr-4`}>{p.name}</h4>
                        <div className="flex text-[#c5a059]"><Star size={12} fill="currentColor"/><Star size={12} fill="currentColor"/><Star size={12} fill="currentColor"/><Star size={12} fill="currentColor"/><Star size={12} fill="currentColor"/></div>
                      </div>
                      <p className={`${theme.textMuted} text-[10px] mb-6 uppercase tracking-widest italic font-bold flex-grow line-clamp-2`}>{p.shortDesc}</p>
                      <div className="flex items-center justify-between border-t border-[#c5a059]/10 pt-6">
                        <p className={`${theme.text} font-serif text-2xl font-black`}>R$ {p.price.toFixed(2).replace('.', ',')}</p>
                        <div className="flex gap-2">
                           <Button onClick={() => addToCart(p)} variant="primary" className="px-4 py-3 shadow-md !w-auto" disabled={p.status === 'esgotado'}><ShoppingCart size={18}/></Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Hub de Rituais e Cursos */}
            <section className={`py-20 md:py-32 px-4 md:px-6 ${isLightMode ? 'bg-[#4a0404] text-white' : 'bg-[#020202]'} border-y border-[#c5a059]/20`}>
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                   <h2 className="text-4xl md:text-5xl font-serif italic text-white uppercase tracking-widest">Rituais & <span className="text-[#c5a059]">Consultas</span></h2>
                   <div className="w-16 h-[2px] bg-[#c5a059] mx-auto mt-6"></div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                  {services.map(s => (
                    <div key={s.id} className={`${isLightMode ? 'bg-white border-[#c5a059] text-[#4a0404]' : 'bg-[#0a0a0a] border-[#c5a059]/30'} border p-8 flex flex-col items-center text-center group transition-all rounded-sm shadow-2xl hover:border-[#c5a059]`}>
                      <div className={`${isLightMode ? 'text-[#4a0404]' : 'text-[#c5a059]'} mb-6 group-hover:scale-125 transition-transform duration-500`}>{s.icon}</div>
                      <span className="px-3 py-1 bg-[#c5a059]/10 text-[#c5a059] text-[8px] font-bold uppercase tracking-widest mb-4 rounded-full">{s.type}</span>
                      <h3 className="font-bold uppercase text-xs tracking-widest mb-4 h-10 flex items-center justify-center">{s.name}</h3>
                      <div className={`text-2xl font-serif font-black mb-8 ${isLightMode ? 'text-[#4a0404]' : 'text-[#c5a059]'}`}>R$ {s.price.toFixed(2).replace('.', ',')}</div>
                      <Button onClick={() => navigate('service-details', s)} variant={isLightMode ? 'outline' : 'primary'} className="w-full">Saber Mais</Button>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        );

      case 'products':
        return (
          <section className={`py-24 md:py-32 px-4 md:px-6 ${theme.bg} min-h-screen transition-all duration-500`}>
             <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 md:mb-24">
                  <h2 className={`text-4xl md:text-6xl font-serif italic ${theme.text}`}>Acervo do <span className="text-[#c5a059]">Templo</span></h2>
                  <div className={`w-24 h-[3px] ${isLightMode ? 'bg-[#4a0404]' : 'bg-[#c5a059]'} mx-auto mt-6`}></div>
                </div>

                {/* Filtro de Categorias Moderno */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                  {['Todos', 'Perfumes', 'Óleos', 'Pós', 'Amuletos', 'Banhos'].map(cat => (
                    <button 
                      key={cat} 
                      onClick={() => setActiveCategory(cat)}
                      className={`px-6 py-3 text-[10px] uppercase font-bold tracking-widest rounded-full transition-all border ${activeCategory === cat ? 'bg-[#c5a059] text-black border-[#c5a059]' : `bg-transparent ${theme.text} border-gray-500 hover:border-[#c5a059]`}`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                   {filteredProducts.map(p => (
                      <div key={p.id} className={`${theme.card} p-6 rounded-sm group hover:-translate-y-2 transition-all flex flex-col`}>
                         <div className="relative h-72 overflow-hidden mb-6 cursor-pointer border border-[#c5a059]/10" onClick={() => navigate('details', p)}>
                            <img src={p.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110" />
                            <div className="absolute bottom-4 left-4 bg-black/80 px-3 py-1 rounded-full text-[8px] text-white uppercase font-bold tracking-widest border border-white/20">{p.sold} Vendidos</div>
                            {p.status === 'esgotado' && <div className="absolute inset-0 bg-black/80 flex items-center justify-center text-red-500 font-bold uppercase text-[10px] tracking-widest border border-red-500">Esgotado</div>}
                         </div>
                         <h4 className={`${theme.text} uppercase text-sm font-bold mb-2 tracking-widest pr-2`}>{p.name}</h4>
                         <p className={`${theme.textMuted} text-[10px] mb-6 uppercase tracking-widest italic font-bold flex-grow`}>{p.shortDesc}</p>
                         <div className="flex items-center justify-between border-t border-[#c5a059]/20 pt-6">
                            <p className={`${theme.text} font-serif text-2xl font-black`}>R$ {p.price.toFixed(2).replace('.', ',')}</p>
                            <Button onClick={() => addToCart(p)} variant="primary" className="px-4 py-3 !w-auto shadow-xl" disabled={p.status === 'esgotado'}><ShoppingCart size={18}/></Button>
                         </div>
                      </div>
                   ))}
                </div>
             </div>
          </section>
        );

      case 'details':
        const item = selectedProduct;
        return (
          <div className="animate-in fade-in duration-500">
            <section className={`py-24 md:py-32 px-4 md:px-6 max-w-7xl mx-auto min-h-[80vh] ${theme.text}`}>
              <button onClick={() => navigate('products')} className="flex items-center gap-2 mb-10 text-[10px] font-bold uppercase tracking-widest hover:text-[#c5a059] transition-colors"><ArrowLeft size={16}/> Voltar ao Catálogo</button>
              <div className="grid md:grid-cols-2 gap-12 md:gap-24">
                <div className={`space-y-6 p-4 border ${isLightMode ? 'bg-white border-[#c5a059]/30 shadow-2xl' : 'border-[#c5a059]/10 bg-black'}`}>
                  <img src={item.image} className="w-full h-[400px] md:h-[600px] object-cover grayscale opacity-90 border border-[#c5a059]/20" alt={item.name} />
                </div>
                <div className="flex flex-col justify-center">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-[#c5a059] text-[10px] font-bold uppercase tracking-widest px-4 py-2 border border-[#c5a059] rounded-full">{item.category}</span>
                    <div className="flex text-[#c5a059]"><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/></div>
                  </div>
                  <h2 className={`text-4xl md:text-5xl font-serif mb-6 uppercase tracking-tight italic ${theme.text}`}>{item.name}</h2>
                  <div className="text-4xl font-black mb-8 font-serif text-[#c5a059]">R$ {item.price.toFixed(2).replace('.', ',')}</div>
                  
                  {/* Descrição Melhorada em UI */}
                  <div className={`p-8 border-l-4 ${isLightMode ? 'border-[#4a0404] bg-[#4a0404]/5' : 'border-[#c5a059] bg-white/5'} mb-10 rounded-r-md`}>
                     <h3 className="font-bold uppercase text-[10px] tracking-widest mb-4">Sobre o Fundamento</h3>
                     <p className={`text-sm md:text-base leading-relaxed ${theme.textMuted}`}>{item.description}</p>
                  </div>

                  <div className="flex items-center gap-6 mb-10 text-[10px] font-bold uppercase tracking-widest border-y border-[#c5a059]/20 py-4">
                     <span className={item.stock > 0 ? 'text-green-600' : 'text-red-600'}>
                       {item.stock > 0 ? `✓ Em Stock (${item.stock} UN)` : '✗ Esgotado'}
                     </span>
                     <span className="text-gray-500">|</span>
                     <span className="text-gray-500">🔥 {item.sold} já foram consagrados</span>
                  </div>

                  <div className="mt-auto flex flex-col sm:flex-row gap-4">
                    <Button onClick={() => addToCart(item)} variant="primary" className="flex-grow py-6 text-xs shadow-2xl" disabled={item.status === 'esgotado'}>
                      <ShoppingCart size={20}/> Adicionar ao Carrinho
                    </Button>
                    <Button onClick={() => window.open(`https://wa.me/5511930027669?text=Dúvidas sobre o produto ${item.name}`, '_blank')} variant="outline" className="px-8 py-6">
                      Dúvidas?
                    </Button>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Aba de Exploração Dinâmica (Apenas Físicos) */}
            <section className={`py-20 md:py-32 px-4 md:px-6 border-t-4 ${isLightMode ? 'bg-[#4a0404] border-[#c5a059]' : 'bg-[#0a0a0a] border-[#c5a059]/10'}`}>
               <div className="max-w-7xl mx-auto">
                  <h3 className="text-[#c5a059] text-center font-serif text-3xl md:text-4xl mb-16 uppercase tracking-widest italic font-bold">Você pode <span className="text-white">Gostar</span></h3>
                  <div className="relative overflow-x-auto pb-10 scrollbar-hide snap-x">
                    <div className="flex gap-6 md:gap-10 w-max px-4">
                      {products.filter(other => other.id !== item.id).map(prod => (
                        <div key={prod.id} className={`w-72 p-6 ${isLightMode ? 'bg-white' : 'bg-[#111]'} border border-[#c5a059]/30 transition-all hover:-translate-y-2 shadow-xl snap-center rounded-sm`}>
                          <img src={prod.image} className="w-full h-48 object-cover grayscale mb-6 rounded-sm" />
                          <h4 className={`${isLightMode ? 'text-[#4a0404]' : 'text-white'} font-bold uppercase text-xs mb-3 text-center tracking-widest`}>{prod.name}</h4>
                          <p className="text-[#c5a059] text-center font-serif font-black mb-6 text-xl">R$ {prod.price.toFixed(2).replace('.', ',')}</p>
                          <Button onClick={() => navigate('details', prod)} variant={isLightMode ? 'primary' : 'outline'} className="w-full py-4 text-[9px]">Ver Detalhes</Button>
                        </div>
                      ))}
                    </div>
                  </div>
               </div>
            </section>
          </div>
        );

      case 'services-list':
        return (
          <section className={`py-24 md:py-32 px-4 md:px-6 max-w-7xl mx-auto min-h-screen ${theme.bg}`}>
             <div className="text-center mb-16 md:mb-24">
                <h2 className={`text-4xl md:text-5xl font-serif italic ${theme.text}`}>Rituais & <span className="text-[#c5a059]">Cursos</span></h2>
                <div className={`w-24 h-[3px] ${isLightMode ? 'bg-[#4a0404]' : 'bg-[#c5a059]'} mx-auto mt-6`}></div>
             </div>
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                {services.map(s => (
                  <div key={s.id} className={`${theme.card} p-10 text-center hover:-translate-y-2 transition-transform duration-500 rounded-sm flex flex-col`}>
                     <div className="text-[#c5a059] mb-8 flex justify-center scale-125">{s.icon}</div>
                     <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-gray-500 mb-2">{s.type}</span>
                     <h3 className={`font-bold uppercase text-sm tracking-widest mb-4 ${theme.text}`}>{s.name}</h3>
                     <p className={`text-[11px] mb-8 leading-relaxed flex-grow ${theme.textMuted}`}>{s.description}</p>
                     <div className={`text-3xl font-serif font-black mb-10 ${theme.text}`}>R$ {s.price.toFixed(2).replace('.', ',')}</div>
                     <Button onClick={() => navigate('service-details', s)} variant="primary" className="w-full py-5">Saiba Mais</Button>
                  </div>
                ))}
             </div>
          </section>
        );

      case 'service-details':
        const s = selectedProduct;
        return (
          <section className={`py-24 md:py-32 px-4 md:px-6 min-h-screen flex flex-col justify-center animate-in fade-in duration-500 ${theme.bg}`}>
             <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12 w-full">
                <div className="hidden md:block">
                  <button onClick={() => navigateService('prev')} className={`p-4 rounded-full border-2 ${isLightMode ? 'border-[#4a0404] text-[#4a0404]' : 'border-[#c5a059] text-[#c5a059]'} hover:bg-[#c5a059]/10 transition-all active:scale-90 shadow-xl`}>
                     <ChevronLeft size={36} />
                  </button>
                </div>

                <div className={`${theme.card} p-8 md:p-16 text-center flex-grow relative overflow-hidden border-2 w-full rounded-md shadow-2xl`}>
                   <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none text-[#c5a059]">{s.icon}</div>
                   <span className="inline-block px-4 py-1 border border-[#c5a059] text-[#c5a059] rounded-full text-[10px] font-bold uppercase tracking-widest mb-8">{s.type}</span>
                   <h2 className={`text-3xl md:text-6xl font-serif mb-8 italic uppercase tracking-tighter ${theme.text}`}>{s.name}</h2>
                   <div className={`text-3xl md:text-5xl font-black mb-12 ${theme.text}`}>R$ {s.price.toFixed(2).replace('.', ',')}</div>
                   
                   <div className={`space-y-6 text-sm md:text-base leading-relaxed max-w-2xl mx-auto text-justify border-t border-[#c5a059]/20 pt-10 ${theme.textMuted}`}>
                      <p className="font-bold text-center mb-6 uppercase tracking-widest text-[#c5a059] text-xs">O Fundamento</p>
                      <p>{s.longDescription}</p>
                   </div>
                   
                   <div className="mt-16 flex flex-col gap-4 max-w-md mx-auto">
                      <Button onClick={() => window.open(`https://wa.me/5511930027669?text=Desejo agendar: ${s.name}`, '_blank')} variant="primary" className="w-full py-6 text-xs bg-green-700 hover:bg-green-800 border-none shadow-[0_0_20px_rgba(21,128,61,0.4)]">
                         <MessageCircle size={22}/> Agendar pelo WhatsApp
                      </Button>
                      <div className="flex justify-between w-full md:hidden mt-4 gap-4">
                        <Button onClick={() => navigateService('prev')} variant="outline" className="flex-grow py-4"><ChevronLeft size={20}/></Button>
                        <Button onClick={() => navigateService('next')} variant="outline" className="flex-grow py-4"><ChevronRight size={20}/></Button>
                      </div>
                   </div>
                </div>

                <div className="hidden md:block">
                  <button onClick={() => navigateService('next')} className={`p-4 rounded-full border-2 ${isLightMode ? 'border-[#4a0404] text-[#4a0404]' : 'border-[#c5a059] text-[#c5a059]'} hover:bg-[#c5a059]/10 transition-all active:scale-90 shadow-xl`}>
                     <ChevronRight size={36} />
                  </button>
                </div>
             </div>
             
             {/* Indicadores de Carrossel */}
             <div className="flex justify-center mt-12 gap-3">
                {services.map((item) => (
                  <div key={item.id} className={`w-2 h-2 rounded-full ${item.id === s.id ? 'bg-[#c5a059] w-8' : 'bg-gray-400'} transition-all`} />
                ))}
             </div>
          </section>
        );

      case 'cart':
        return (
          <section className={`py-24 md:py-32 px-4 md:px-6 max-w-6xl mx-auto min-h-[85vh] ${theme.bg}`}>
            <h2 className={`text-4xl md:text-5xl font-serif mb-16 flex items-center gap-4 uppercase tracking-widest italic ${theme.text}`}><ShoppingBag className="text-[#c5a059]" size={40} /> Seu Altar</h2>
            
            {cart.length === 0 ? (
              <div className={`${theme.card} text-center py-24 border-dashed rounded-md`}>
                <p className={`${theme.textMuted} uppercase text-xs tracking-widest mb-10 font-bold`}>O altar do carrinho está vazio...</p>
                <Button onClick={() => navigate('products')} variant="primary" className="mx-auto px-12 py-5">Explorar Catálogo</Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 md:gap-16">
                <div className="lg:col-span-2 space-y-6 md:space-y-8">
                  {cart.map(i => (
                    <div key={i.id} className={`${theme.card} p-6 md:p-8 flex flex-col sm:flex-row items-center gap-8 rounded-md`}>
                      <img src={i.image} className="w-24 h-24 object-cover grayscale rounded-sm border border-[#c5a059]/30" />
                      <div className="flex-grow text-center sm:text-left">
                        <h4 className={`font-bold uppercase text-xs tracking-widest ${theme.text}`}>{i.name}</h4>
                        <p className={`text-[#c5a059] text-sm mt-2 font-bold`}>R$ {i.price.toFixed(2).replace('.', ',')}</p>
                        <button onClick={() => removeFromCart(i.id)} className="text-red-600 mt-4 flex items-center justify-center sm:justify-start gap-2 text-[10px] font-bold uppercase hover:text-red-800 transition-colors"><Trash2 size={16}/> Remover</button>
                      </div>
                      <div className={`font-serif font-black text-2xl ${theme.text}`}>R$ {(i.price * i.quantity).toFixed(2).replace('.', ',')}</div>
                    </div>
                  ))}
                  
                  <div className={`${theme.card} p-8 md:p-10 rounded-md`}>
                     <h4 className={`${theme.text} text-[12px] font-black uppercase tracking-widest mb-6 flex items-center gap-3`}><Truck size={20} className="text-[#c5a059]"/> Cálculo de Envio</h4>
                     <div className="flex flex-col sm:flex-row gap-4">
                        <Input placeholder="CEP (00000-000)" value={cep} onChange={(e) => setCep(e.target.value)} />
                        <Button onClick={calculateShipping} variant="outline" className="w-full sm:w-auto px-10 h-[52px]">Calcular</Button>
                     </div>
                     {shippingValue && <p className="mt-6 text-xs uppercase font-bold text-green-600 animate-in fade-in">✓ SEDEX Disponível: R$ 25,00</p>}
                  </div>
                </div>
                
                <div className={`${theme.card} p-8 md:p-10 h-fit lg:sticky lg:top-32 rounded-md shadow-2xl`}>
                  <h3 className={`${theme.text} font-bold uppercase text-xs mb-8 pb-6 border-b border-[#c5a059]/20`}>Resumo</h3>
                  <div className={`space-y-6 mb-10 font-bold text-[11px] uppercase tracking-widest ${theme.textMuted}`}>
                    <div className="flex justify-between"><span>Itens</span> <span>R$ {subtotal.toFixed(2)}</span></div>
                    <div className="flex justify-between"><span>Envio</span> <span>{shippingValue ? `R$ ${shippingValue.toFixed(2)}` : 'Pendente'}</span></div>
                  </div>
                  <div className={`flex justify-between text-3xl font-serif font-black mb-10 border-t border-[#c5a059]/20 pt-8 ${theme.text}`}><span>Total</span> <span className="text-[#c5a059]">R$ {total.toFixed(2)}</span></div>
                  <Button onClick={() => navigate('checkout')} variant="primary" className="w-full py-6">Finalizar Compra</Button>
                </div>
              </div>
            )}
          </section>
        );

      case 'checkout':
        return (
          <section className={`py-24 md:py-32 px-4 md:px-6 max-w-6xl mx-auto min-h-screen ${theme.bg}`}>
            <h2 className={`text-4xl font-serif mb-12 italic uppercase tracking-widest ${theme.text}`}>Finalização</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div className="space-y-12">
                <div className={`${theme.card} p-8 rounded-md`}>
                  <h3 className={`${theme.text} text-xs font-bold uppercase tracking-widest mb-6`}>Dados da Cliente</h3>
                  <div className="space-y-6">
                    <Input label="Nome Completo" defaultValue={user?.name} />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Input label="E-mail" type="email" defaultValue={user?.email} />
                      <Input label="Telefone / WhatsApp" defaultValue={user?.phone} />
                    </div>
                    <Input label="Endereço de Entrega Completo" />
                  </div>
                </div>

                <div className={`${theme.card} p-8 rounded-md`}>
                   <h3 className={`${theme.text} text-xs font-bold uppercase tracking-widest mb-6`}>Cupom de Desconto</h3>
                   <div className="flex flex-col sm:flex-row gap-4">
                      <Input placeholder="Ex: LIRA10" value={coupon} onChange={(e) => setCoupon(e.target.value)} />
                      <Button onClick={applyCoupon} variant="outline" className="px-10 h-[52px]">Aplicar</Button>
                   </div>
                   {discount > 0 && <p className="mt-4 text-green-600 text-xs font-bold uppercase tracking-widest">✓ {discount}% de desconto aplicado!</p>}
                </div>
              </div>

              <div className={`${theme.card} p-8 md:p-12 h-fit rounded-md shadow-2xl`}>
                <h3 className={`${theme.text} font-bold uppercase text-sm mb-8 pb-6 border-b border-[#c5a059]/20`}>Resumo de Pagamento</h3>
                <div className={`space-y-6 mb-10 text-sm uppercase tracking-widest font-bold ${theme.textMuted}`}>
                  <div className="flex justify-between"><span>Subtotal</span> <span>R$ {subtotal.toFixed(2)}</span></div>
                  <div className="flex justify-between"><span>Frete SEDEX</span> <span>R$ {(shippingValue || 0).toFixed(2)}</span></div>
                  {discount > 0 && <div className="flex justify-between text-green-600"><span>Desconto ({discount}%)</span> <span>- R$ {((subtotal + shippingValue) * (discount/100)).toFixed(2)}</span></div>}
                  <div className={`flex justify-between text-3xl font-serif font-black border-t border-[#c5a059]/20 pt-8 ${theme.text}`}><span>Total</span> <span className="text-[#c5a059]">R$ {total.toFixed(2)}</span></div>
                </div>
                <Button onClick={() => navigate('payment')} variant="primary" className="w-full py-6">Ir para Pagamento Segura</Button>
                <div className="mt-6 flex items-center justify-center gap-2 text-[9px] text-gray-500 uppercase tracking-widest">
                  <Lock size={12}/> Ambiente Criptografado
                </div>
              </div>
            </div>
          </section>
        );

      case 'payment':
        return (
          <section className="py-32 px-4 flex items-center justify-center min-h-screen bg-gray-100">
             <div className="max-w-md w-full bg-white p-10 rounded-lg shadow-[0_20px_60px_rgba(0,0,0,0.1)] text-center animate-in zoom-in duration-500">
                <div className="bg-[#009ee3] h-16 flex items-center justify-center -mx-10 -mt-10 mb-10 rounded-t-lg">
                   <span className="text-white font-bold italic tracking-tighter text-3xl">mercado pago</span>
                </div>
                <h3 className="text-gray-800 font-bold text-xl mb-2 font-sans">Simulação de Pagamento</h3>
                <p className="text-gray-500 text-xs mb-10 font-bold tracking-widest uppercase">Total a Pagar: R$ {total.toFixed(2)}</p>
                
                <div className="space-y-4 mb-12 text-left">
                   <div onClick={() => setPaymentMethod('pix')} className={`p-5 border-2 rounded-lg flex items-center gap-5 cursor-pointer transition-all ${paymentMethod === 'pix' ? 'border-[#009ee3] bg-blue-50' : 'border-gray-200 hover:bg-gray-50'}`}>
                      <div className="bg-blue-100 p-3 rounded-full text-blue-600"><Smartphone size={24}/></div>
                      <div><p className="font-bold text-gray-900">Pix</p><p className="text-[10px] text-gray-500 uppercase mt-1">Aprovação imediata</p></div>
                   </div>
                   <div onClick={() => setPaymentMethod('card')} className={`p-5 border-2 rounded-lg flex items-center gap-5 cursor-pointer transition-all ${paymentMethod === 'card' ? 'border-[#009ee3] bg-blue-50' : 'border-gray-200 hover:bg-gray-50'}`}>
                      <div className="bg-green-100 p-3 rounded-full text-green-600"><CreditCard size={24}/></div>
                      <div><p className="font-bold text-gray-900">Cartão de Crédito</p><p className="text-[10px] text-gray-500 uppercase mt-1">Até 12x sem juros</p></div>
                   </div>
                </div>

                <button onClick={handlePayment} disabled={isProcessing} className="w-full py-5 bg-[#009ee3] text-white font-bold rounded-lg shadow-xl hover:bg-blue-600 transition-all text-xs uppercase tracking-widest disabled:opacity-50">
                  {isProcessing ? 'A Processar...' : 'Confirmar Pagamento'}
                </button>
             </div>
          </section>
        );

      case 'success':
        return (
          <section className={`py-40 px-6 max-w-2xl mx-auto text-center min-h-screen ${theme.bg}`}>
             <div className="flex justify-center mb-10 text-[#c5a059] animate-bounce"><CheckCircle size={80} strokeWidth={1.5} /></div>
             <h2 className={`text-4xl md:text-5xl font-serif mb-6 italic ${theme.text}`}>Pedido Confirmado!</h2>
             <p className="text-[#c5a059] uppercase text-xs font-bold tracking-[0.3em] mb-12">O seu axé foi firmado na Lira.</p>
             <div className={`${theme.card} p-10 text-left mb-12 rounded-md relative overflow-hidden`}>
                <div className="absolute -right-6 -top-6 opacity-5 pointer-events-none text-[#c5a059]"><TridentIcon size={150}/></div>
                <div className="flex justify-between text-xs text-gray-500 uppercase mb-6 pb-4 border-b border-[#c5a059]/20 font-bold"><span>ID do Pedido</span> <span className={theme.text}>#QM-1099</span></div>
                <div className="flex justify-between text-xs text-gray-500 uppercase mb-4 font-bold"><span>Status Inicial</span> <span className="text-yellow-600 italic">Em Preparação Ritualística</span></div>
                <p className={`text-[10px] leading-relaxed mt-8 border-t border-[#c5a059]/20 pt-6 ${theme.textMuted} uppercase tracking-widest`}>O código de rastreamento será enviado em breve para o seu e-mail.</p>
             </div>
             <Button onClick={() => navigate('home')} variant="primary" className="mx-auto px-12 py-5">Retornar à Home</Button>
          </section>
        );

      // --- ÁREA DA CLIENTE ---
      case 'login':
        return (
          <section className={`py-32 md:py-48 px-4 md:px-6 max-w-md mx-auto min-h-screen flex items-center justify-center ${theme.bg}`}>
             <div className={`${theme.card} p-8 md:p-12 w-full rounded-md`}>
                <h2 className={`text-3xl font-serif text-center italic mb-10 uppercase tracking-widest ${theme.text}`}>Acesso</h2>
                <form className="space-y-6" onSubmit={e => { e.preventDefault(); setUser({ name: 'Maryana Oliveira', email: 'mlopeslucariello@gmail.com' }); navigate('customer-orders'); }}>
                  <Input label="E-mail" placeholder="seu@email.com" required />
                  <Input label="Palavra-passe" type="password" placeholder="******" required />
                  <Button variant="primary" className="w-full mt-4 py-5 shadow-xl">Entrar</Button>
                  <div className="flex flex-col gap-4 text-[10px] uppercase tracking-widest font-bold text-center mt-8 pt-6 border-t border-[#c5a059]/20">
                     <span className="cursor-pointer text-[#c5a059] hover:underline" onClick={() => navigate('register')}>Criar Novo Registro</span>
                     <span className={`cursor-pointer ${theme.textMuted} hover:text-[#c5a059]`} onClick={() => navigate('forgot-password')}>Esqueci a Senha</span>
                  </div>
                </form>
             </div>
          </section>
        );

      case 'register':
        return (
          <section className={`py-32 md:py-48 px-4 md:px-6 max-w-md mx-auto min-h-screen flex items-center justify-center ${theme.bg}`}>
             <div className={`${theme.card} p-8 md:p-12 w-full rounded-md`}>
                <h2 className={`text-2xl font-serif text-center italic mb-10 uppercase tracking-widest ${theme.text}`}>Novo Registro</h2>
                <form className="space-y-6" onSubmit={e => { e.preventDefault(); navigate('login'); }}>
                  <Input label="Nome Completo" placeholder="Ex: Maria Joaquina" required />
                  <Input label="E-mail" type="email" placeholder="seu@email.com" required />
                  <Input label="Palavra-passe" type="password" placeholder="Crie uma senha" required />
                  <Button variant="primary" className="w-full mt-4 py-5 shadow-xl">Criar Conta</Button>
                  <div className="text-center mt-6">
                    <span className={`cursor-pointer text-[10px] uppercase font-bold tracking-widest ${theme.textMuted} hover:text-[#c5a059]`} onClick={() => navigate('login')}>Já tenho conta</span>
                  </div>
                </form>
             </div>
          </section>
        );

      case 'forgot-password':
        return (
          <section className={`py-32 md:py-48 px-4 md:px-6 max-w-md mx-auto min-h-screen flex items-center justify-center ${theme.bg}`}>
             <div className={`${theme.card} p-8 md:p-12 w-full rounded-md`}>
                <h2 className={`text-2xl font-serif text-center italic mb-6 uppercase tracking-widest ${theme.text}`}>Recuperar</h2>
                <p className={`text-[10px] uppercase tracking-widest text-center mb-8 font-bold ${theme.textMuted}`}>Insira seu e-mail para receber as instruções.</p>
                <form className="space-y-6" onSubmit={e => { e.preventDefault(); alert('Instruções enviadas!'); navigate('login'); }}>
                  <Input label="E-mail de Cadastro" type="email" placeholder="seu@email.com" required />
                  <Button variant="primary" className="w-full mt-4 py-5 shadow-xl">Enviar Instruções</Button>
                  <div className="text-center mt-6">
                    <span className={`cursor-pointer text-[10px] uppercase font-bold tracking-widest ${theme.textMuted} hover:text-[#c5a059]`} onClick={() => navigate('login')}>Voltar ao Login</span>
                  </div>
                </form>
             </div>
          </section>
        );

      case 'customer-orders':
        return (
          <section className={`py-32 px-6 max-w-5xl mx-auto min-h-screen ${theme.bg}`}>
             <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-6">
                <div className="text-center md:text-left">
                   <h2 className={`text-3xl font-serif italic ${theme.text}`}>Olá, <span className="text-[#c5a059]">{user?.name}</span></h2>
                   <p className={`text-[10px] uppercase tracking-widest mt-2 font-bold ${theme.textMuted}`}>Histórico de Pedidos</p>
                </div>
                <Button onClick={() => { setUser(null); navigate('home'); }} variant="outline" className="px-6 py-3"><LogOut size={16}/> Sair</Button>
             </div>
             
             <div className="space-y-6">
                {[INITIAL_PRODUCTS[0], INITIAL_SERVICES[1]].map((item, idx) => (
                  <div key={idx} className={`${theme.card} p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 rounded-md`}>
                    <div className="flex items-center gap-6 w-full md:w-auto">
                       <div className="w-16 h-16 bg-black/10 rounded-sm flex items-center justify-center text-[#c5a059] border border-[#c5a059]/20 shadow-inner">
                         {item.type === 'physical' ? <Package size={24}/> : <Eye size={24}/>}
                       </div>
                       <div>
                         <p className={`text-[9px] uppercase tracking-widest font-bold mb-1 ${theme.textMuted}`}>Pedido #109{idx}</p>
                         <h4 className={`font-bold text-sm uppercase tracking-widest ${theme.text}`}>{item.name}</h4>
                         <p className="text-xs text-[#c5a059] font-bold mt-1">R$ {item.price.toFixed(2)}</p>
                       </div>
                    </div>
                    <div className="w-full md:w-auto flex flex-row md:flex-col justify-between items-center md:items-end gap-2 border-t md:border-none border-[#c5a059]/10 pt-4 md:pt-0">
                       <span className="text-[10px] font-bold uppercase px-3 py-1 bg-green-900/10 text-green-600 rounded-full border border-green-600/20">Finalizado</span>
                       {item.type === 'physical' && <button className="text-[9px] font-bold uppercase text-[#c5a059] hover:underline flex items-center gap-1">Rastrear <ExternalLink size={10}/></button>}
                    </div>
                  </div>
                ))}
             </div>
          </section>
        );

      case 'about-page':
        return (
          <section className={`py-32 px-4 md:px-6 max-w-6xl mx-auto animate-in fade-in ${theme.bg}`}>
             <div className="text-center mb-16 md:mb-24">
                <h2 className={`text-4xl md:text-6xl font-serif italic ${theme.text}`}>Sobre a <span className="text-[#c5a059]">M’bande</span></h2>
                <div className={`w-24 h-[3px] ${isLightMode ? 'bg-[#4a0404]' : 'bg-[#c5a059]'} mx-auto mt-8 rounded-full`}></div>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
                <div className={`relative group p-4 border-2 ${isLightMode ? 'border-[#4a0404]' : 'border-[#c5a059]/20'} rounded-sm shadow-2xl overflow-hidden bg-black`}>
                   <img src="https://images.unsplash.com/photo-1636113945952-4753549925e5?auto=format&fit=crop&q=80&w=800" className="w-full h-[450px] md:h-[650px] object-cover grayscale opacity-70 group-hover:grayscale-0 transition-all duration-1000" alt="7 Saias" />
                   <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <p className="text-white font-serif text-2xl uppercase tracking-widest drop-shadow-2xl">Laroyê</p>
                   </div>
                </div>
                <div className={`space-y-8 md:space-y-10 leading-relaxed text-center md:text-left ${theme.text}`}>
                   <p className="text-xl md:text-2xl font-serif italic">“Respeito, segredo e fundamentação quimbandeira.”</p>
                   <p className={`text-sm md:text-base ${theme.textMuted}`}>A Quimbanda M’bande é um ponto de força ancestral no Reino da Lira. Não vendemos apenas itens ritualísticos; entregamos ferramentas de poder consagradas e imantadas.</p>
                   <div className={`p-8 border-l-4 ${isLightMode ? 'border-[#4a0404] bg-[#4a0404]/5' : 'border-[#c5a059] bg-white/5'} rounded-r-md`}>
                      <h4 className="font-bold uppercase text-[10px] tracking-widest mb-4">Fundamento Espiritual</h4>
                      <p className={`italic text-sm ${theme.textMuted}`}>O nosso compromisso é com a verdade ritualística. Cada perfume é imantado em altar e cada orientação respeita o tempo das Entidades.</p>
                   </div>
                   <Button onClick={() => navigate('home')} variant="outline" className="mx-auto md:mx-0"><ArrowLeft size={16}/> Retornar à Home</Button>
                </div>
             </div>
          </section>
        );

      case 'admin-login':
        return (
          <section className="py-48 px-6 max-w-sm mx-auto min-h-screen text-center bg-[#050505]">
             <div className="w-20 h-20 border border-[#c5a059] rounded-full flex items-center justify-center mx-auto mb-10 text-[#c5a059] shadow-[0_0_20px_rgba(197,160,89,0.2)]"><Lock size={32}/></div>
             <h2 className="text-xl font-bold uppercase tracking-[0.4em] mb-12 text-[#c5a059]">Painel M'bande</h2>
             <form className="space-y-6" onSubmit={e => { e.preventDefault(); setIsAdmin(true); navigate('admin-dash'); }}>
                <input className="w-full bg-black border border-white/10 p-4 text-xs text-white outline-none focus:border-[#c5a059] font-bold uppercase tracking-widest" placeholder="UTILIZADOR" required />
                <input className="w-full bg-black border border-white/10 p-4 text-xs text-white outline-none focus:border-[#c5a059] font-bold uppercase tracking-widest" type="password" placeholder="SENHA MESTRA" required />
                <Button variant="primary" className="w-full py-5 bg-[#c5a059] text-black hover:bg-white border-none mt-4">Aceder Painel</Button>
             </form>
          </section>
        );

      case 'admin-dash':
        return (
          <div className="flex min-h-screen bg-[#050505] text-white">
             <div className="w-64 border-r border-white/10 p-8 hidden md:flex flex-col gap-12 bg-[#0a0a0a]">
                <div className="flex items-center gap-4 text-[#c5a059]"><TridentIcon className="w-8 h-8"/><span className="font-black uppercase text-xs tracking-widest">Gestão M'bande</span></div>
                <nav className="flex flex-col gap-4 text-xs font-bold uppercase tracking-widest text-gray-500">
                   <button className="text-left text-[#c5a059] bg-[#c5a059]/10 p-4 rounded-sm flex items-center gap-3"><LayoutDashboard size={16}/> Dashboard</button>
                   <button className="text-left hover:text-white p-4 flex items-center gap-3"><Package size={16}/> Produtos</button>
                   <button className="text-left hover:text-white p-4 flex items-center gap-3"><ShoppingCart size={16}/> Pedidos</button>
                   <button onClick={() => { setIsAdmin(false); navigate('home'); }} className="text-left text-red-700 p-4 mt-10 flex items-center gap-3"><LogOut size={16}/> Sair do Painel</button>
                </nav>
             </div>
             <div className="flex-grow p-8 md:p-12 overflow-y-auto">
                <h2 className="text-2xl font-serif italic text-[#c5a059] mb-10">Visão Geral</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                   {[ {t: "Total Pedidos", v: "458", i: <ShoppingCart size={20}/>}, {t: "Pendentes", v: "12", c: "text-red-500", i: <Clock size={20}/>}, {t: "Stock Físico", v: "89", i: <Package size={20}/>}, {t: "Receita", v: "R$ 15k", i: <TrendingUp size={20}/>} ].map(stat => (
                      <div key={stat.t} className="bg-[#0a0a0a] border border-[#c5a059]/20 p-6 rounded-sm text-center relative overflow-hidden group">
                         <div className="text-[#c5a059] mb-4 flex justify-center">{stat.i}</div>
                         <div className="text-[10px] uppercase font-bold text-gray-500 mb-2">{stat.t}</div>
                         <div className={`text-3xl font-black ${stat.c || 'text-white'}`}>{stat.v}</div>
                      </div>
                   ))}
                </div>
                <div className="bg-[#0a0a0a] border border-[#c5a059]/20 p-8 rounded-sm">
                   <h3 className="text-white font-black uppercase text-xs mb-8 tracking-widest flex items-center gap-2"><Search size={16} className="text-[#c5a059]"/> Atividade Recente</h3>
                   <div className="space-y-4">
                     <div className="flex justify-between p-4 border border-white/5 bg-black text-[10px] uppercase font-bold text-gray-400">
                        <span>Maryana Oliveira realizou pedido #QM-1099</span><span className="text-[#c5a059]">R$ 134,90</span>
                     </div>
                     <div className="flex justify-between p-4 border border-white/5 bg-black text-[10px] uppercase font-bold text-gray-400">
                        <span>Stock de 'Óleo da Prosperidade' esgotado</span><span className="text-red-500">Atenção</span>
                     </div>
                   </div>
                </div>
             </div>
          </div>
        );

      default: return null;
    }
  };

  return (
    <div className={`min-h-screen flex flex-col ${theme.bg} transition-all duration-700 selection:bg-[#c5a059] selection:text-black font-sans`}>
      {!view.startsWith('admin-') && <Header />}
      <MobileMenuOverlay />
      <main className="flex-grow pt-20">{renderContent()}</main>
      {!view.startsWith('admin-') && !['payment', 'success', 'checkout'].includes(view) && <Footer />}
      {!view.startsWith('admin-') && (
        <a href="https://wa.me/5511930027669" target="_blank" className="fixed bottom-6 right-6 md:bottom-8 md:right-8 w-14 h-14 md:w-16 md:h-16 bg-green-600 rounded-full flex items-center justify-center text-white shadow-2xl z-50 hover:scale-110 active:scale-90 transition-transform">
          <MessageCircle size={28} fill="currentColor" />
        </a>
      )}
    </div>
  );
};

export default App;