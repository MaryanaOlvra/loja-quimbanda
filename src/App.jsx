import React, { useState, useMemo } from 'react';
import { 
  ShoppingBag, MessageCircle, Menu, X, ShieldCheck, 
  Sparkles, CreditCard, Smartphone, FileText, Moon, Lock, 
  LayoutDashboard, Package, Users, ShoppingCart, LogOut, 
  ArrowLeft, Play, CheckCircle, TrendingUp, Clock, Search, 
  Truck, Sun, Heart
} from 'lucide-react';

const TridentIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 2v20M5 7v4a7 7 0 0 0 14 0V7M12 11V7" />
    <path d="M9 3l3-1 3 1" />
    <circle cx="12" cy="11" r="2" fill="#8b0000" stroke="none" />
  </svg>
);

const INITIAL_PRODUCTS = [
  {
    id: 1,
    name: 'Banho de Conexão Feminina',
    price: 92.15,
    originalPrice: 97.00,
    shortDesc: 'Ritual Mulheres de Quimbanda.',
    description: 'Banho preparado e cruzado no Templo Cabaré da Sete Saias. Focado na conexão com a ancestralidade feminina, elevando o magnetismo, a autoestima e o poder de atração regido pelas Pombagiras.',
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&q=80&w=400',
    category: 'Banhos',
    type: 'physical',
    stock: 0,
    status: 'esgotado'
  },
  {
    id: 2,
    name: 'Óleo de Prosperidade - Rosa de Ouro',
    price: 101.65,
    originalPrice: 107.00,
    shortDesc: 'Abertura de caminhos financeiros e abundância.',
    description: 'Óleo cruzado focado na energia da fartura e prosperidade. Atua diretamente na vibração do ouro, atraindo clientes, dinheiro inesperado e removendo bloqueios que impedem o fluxo da abundância em sua vida.',
    image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=400',
    category: 'Óleos',
    type: 'physical',
    stock: 44,
    status: 'disponível'
  },
  {
    id: 3,
    name: 'Patuá de Proteção do Exu Cruzeiro',
    price: 82.65,
    originalPrice: 87.00,
    shortDesc: 'Patuá consagrado para defesa contra demandas.',
    description: 'Patuá consagrado e firmado na força do Exu Cruzeiro. Protege o portador contra demandas, feitiços, inveja e energias intrusas, mantendo a firmeza do seu campo vibratório.',
    image: 'https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?auto=format&fit=crop&q=80&w=400',
    category: 'Patuás',
    type: 'physical',
    stock: 24,
    status: 'disponível'
  },
  {
    id: 4,
    name: 'Pó das Feiticeiras',
    price: 130.15,
    originalPrice: 137.00,
    shortDesc: 'Pó para mediunidade e força nas magias.',
    description: 'Elemento ritualístico de alta voltagem cruzado no Cabaré da Sete Saias. Serve para potencializar assentamentos, magias e direcionamentos espirituais.',
    image: 'https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&q=80&w=400',
    category: 'Pós',
    type: 'physical',
    stock: 16,
    status: 'disponível'
  },
  {
    id: 5,
    name: 'Perfume de Atração Sete Saias do Cabaré',
    price: 130.15,
    originalPrice: 137.00,
    shortDesc: 'Magnetismo para encantamento e atração.',
    description: 'Perfume de Atração cruzado sob a regência da Pombagira Sete Saias do Cabaré. Fórmula que eleva o poder de sedução, magnetismo pessoal e a sua autoridade nos ambientes.',
    image: 'https://images.unsplash.com/photo-1595532542520-505eb147fc26?auto=format&fit=crop&q=80&w=400',
    category: 'Perfumes',
    type: 'physical',
    stock: 62,
    status: 'disponível'
  }
];

const INITIAL_SERVICES = [
  { 
    id: 's1', 
    name: 'Ritual de Virada - Rosa de Ouro', 
    price: 297.00, 
    icon: <TridentIcon className="w-10 h-10" />, 
    description: 'Tudo o que você queria: dinheiro e amor.', 
    longDescription: 'Ritual de Virada com a força da Pombagira Rosa de Ouro. Foco em abertura de caminhos financeiros, atração de clientes, dinheiro inesperado e fortalecimento do magnetismo pessoal para o amor.', 
    type: 'service',
    category: 'Ritual'
  },
  { 
    id: 's2', 
    name: 'Ritual de Prosperidade Exu Rei das 7 Encruzilhadas', 
    price: 350.00, 
    icon: <TrendingUp className="w-10 h-10" />, 
    description: 'Abertura de caminhos financeiros, atração de clientes e dinheiro inesperado.', 
    longDescription: 'Trabalho focado no fortalecimento da sua autoridade e magnetismo para abrir as estradas financeiras com a força do Exu Rei das 7 Encruzilhadas.', 
    type: 'service',
    category: 'Ritual'
  },
  { 
    id: 's3', 
    name: 'Ritual Coletivo de Destruição - Dona Caveira', 
    price: 97.00, 
    icon: <Search className="w-10 h-10" />, 
    description: 'Rompimento, Justiça, Acerto de Contas e Libertação.', 
    longDescription: 'Ritual realizado com Dona Caveira. Foco em Rompimento de amarras e opressões, Encerramento de ciclos e sofrimentos.', 
    type: 'service',
    category: 'Ritual Coletivo'
  },
  { 
    id: 's4', 
    name: 'Ritual Banquete de Encantamento - Sete Saias do Cabaré', 
    price: 497.00, 
    icon: <Play className="w-10 h-10" />, 
    description: 'Encantamento, Sedução, Beleza, Autoestima e Magnetismo Pessoal.', 
    longDescription: 'Ritual de Encantamento com a força de Sete Saias do Cabaré. Foco em elevar o magnetismo pessoal, autoestima, beleza e poder de sedução.', 
    type: 'service',
    category: 'Ritual'
  }
];

const App = () => {
  const [view, setView] = useState('home'); 
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLightMode, setIsLightMode] = useState(false);
  const [cep, setCep] = useState('');
  const [shippingValue, setShippingValue] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [coupon, setCoupon] = useState('');
  const [discount, setDiscount] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState('pix');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [activeCategory, setActiveCategory] = useState('Todos');

  const user = { 
    name: 'Maryana Oliveira dos Santos', 
    email: 'mlopeslucariello@gmail.com',
    phone: '(11) 93002-7669'
  };

  const navigate = (v, params = null) => {
    if (params) setSelectedProduct(params);
    setView(v);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const addToCart = (p, qty = 1) => {
    const existing = cart.find(item => item.id === p.id);
    if (existing) {
      setCart(cart.map(item => item.id === p.id ? { ...item, quantity: item.quantity + qty } : item));
    } else {
      setCart([...cart, { ...p, quantity: qty }]);
    }
    navigate('cart');
  };

  const updateQuantity = (id, delta) => {
    setCart(cart.map(item => {
      if (item.id === id) {
        const newQty = item.quantity + delta;
        return newQty > 0 ? { ...item, quantity: newQty } : item;
      }
      return item;
    }));
  };

  const toggleFavorite = (p, e) => {
    e.stopPropagation();
    if (favorites.find(item => item.id === p.id)) {
      setFavorites(favorites.filter(item => item.id !== p.id));
    } else {
      setFavorites([...favorites, p]);
    }
  };

  const removeFromCart = (id) => setCart(cart.filter(item => item.id !== id));
  
  const hasPhysicalProducts = useMemo(() => cart.some(item => item.type !== 'service'), [cart]);
  
  const subtotal = useMemo(() => cart.reduce((acc, item) => acc + (item.price * item.quantity), 0), [cart]);
  
  const total = useMemo(() => {
    const base = subtotal + (hasPhysicalProducts ? (shippingValue || 0) : 0);
    return base - (base * (discount / 100));
  }, [subtotal, shippingValue, discount, hasPhysicalProducts]);

  const calculateShipping = () => { if (cep.length >= 8) setShippingValue(25.00); };
  const applyCoupon = () => { if (coupon.toUpperCase() === 'LIRA10') setDiscount(10); else alert('Cupom inválido.'); };

  const handlePayment = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      navigate('success');
      setCart([]);
      setDiscount(0);
      setShippingValue(null);
    }, 2000);
  };

  const filteredProducts = activeCategory === 'Todos' ? INITIAL_PRODUCTS : INITIAL_PRODUCTS.filter(p => p.category === activeCategory);

  const theme = {
    bg: isLightMode ? 'bg-[#e8dccc]' : 'bg-[#110202]', 
    text: isLightMode ? 'text-[#310202]' : 'text-[#f0e6d2]', 
    textMuted: isLightMode ? 'text-[#5c2424]' : 'text-[#cba693]',
    card: isLightMode ? 'bg-[#f4ebe1] border border-[#4a0404]/10 shadow-[0_8px_30px_rgba(74,4,4,0.08)]' : 'bg-[#1f0505] border border-[#c5a059]/30 shadow-[0_8px_30px_rgba(0,0,0,0.6)]',
    header: isLightMode ? 'bg-[#4a0404] text-[#f4ebe1] shadow-xl border-b border-[#c5a059]' : 'bg-[#0a0101]/95 border-b border-[#c5a059]/30 text-[#f0e6d2]',
    footer: isLightMode ? 'bg-[#310202] text-[#e8dccc] border-t-4 border-[#c5a059]' : 'bg-[#0a0101] border-t-4 border-[#c5a059]/30 text-[#f0e6d2]',
    btnPrimary: isLightMode ? 'bg-[#4a0404] text-[#f4ebe1] hover:bg-[#630606] transition-all shadow-lg border border-[#c5a059]' : 'bg-[#730808] text-[#f4ebe1] hover:bg-[#8f0b0b] transition-all shadow-[0_0_15px_rgba(197,160,89,0.2)] border border-[#c5a059]/50',
    btnOutline: isLightMode ? 'bg-transparent border-2 border-[#4a0404] text-[#4a0404] hover:bg-[#4a0404] hover:text-[#f4ebe1] transition-all' : 'bg-transparent border border-[#c5a059] text-[#c5a059] hover:bg-[#c5a059]/10 transition-all',
    inputBg: isLightMode ? 'bg-white/60 border border-[#4a0404]/20 text-[#310202] placeholder-[#4a0404]/40 focus:border-[#4a0404]' : 'bg-[#140303] border border-[#c5a059]/30 text-[#f0e6d2] placeholder-[#cba693]/50 focus:border-[#c5a059]',
  };

  const Button = ({ children, onClick, variant = 'primary', className = '', disabled = false }) => (
    <button 
      onClick={onClick} 
      disabled={disabled}
      className={`px-8 py-4 font-black uppercase text-[10px] tracking-widest flex items-center justify-center gap-3 active:scale-95 disabled:opacity-50 ${variant === 'primary' ? theme.btnPrimary : theme.btnOutline} ${className}`}
    >
      {children}
    </button>
  );

  const StatCard = ({ title, value, icon, color }) => (
    <div className={`${theme.card} p-6 flex items-center gap-4 rounded-md border-l-4 border-l-[#c5a059]`}>
      <div className={`p-4 rounded-full bg-black/10 ${color}`}>{icon}</div>
      <div>
        <h4 className={`${theme.textMuted} text-[10px] uppercase font-bold tracking-widest`}>{title}</h4>
        <p className={`${theme.text} text-2xl font-black font-serif`}>{value}</p>
      </div>
    </div>
  );

  const Header = () => (
    <header className={`fixed top-0 w-full z-[60] ${theme.header} backdrop-blur-lg transition-all duration-500`}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-20 md:h-24 flex items-center justify-between">
        
        <div className="flex items-center gap-3 cursor-pointer group" onClick={() => navigate('home')}>
          <div className={`w-10 h-10 md:w-12 md:h-12 border-2 ${isLightMode ? 'border-[#f4ebe1]/30' : 'border-[#c5a059]/30'} rounded-full flex items-center justify-center transition-all group-hover:scale-110`}>
            <TridentIcon className={`w-5 h-5 md:w-6 md:h-6 ${isLightMode ? 'text-[#f4ebe1]' : 'text-[#c5a059]'}`} />
          </div>
          <div className="leading-tight">
            <h1 className="text-[11px] md:text-[16px] font-bold uppercase tracking-[0.2em]">Quimbanda M'bande</h1>
            <p className={`text-[7px] md:text-[9px] uppercase tracking-[0.3em] mt-1 font-sans font-bold italic ${isLightMode ? 'text-[#c5a059]' : 'text-[#c5a059]'}`}>Sacerdotisa de 7 Saias do Cabaré</p>
          </div>
        </div>

        <nav className="hidden lg:flex items-center gap-8 text-[10px] font-bold uppercase tracking-[0.2em]">
          {['Início', 'Produtos', 'Consultas', 'Cursos', 'Rituais', 'Sobre'].map(item => (
            <button key={item} onClick={() => {
              if(item === 'Início') navigate('home');
              else if(item === 'Produtos') navigate('products');
              else if(item === 'Rituais' || item === 'Cursos') navigate('services-list');
              else navigate('about-page');
            }} className="hover:text-[#c5a059] transition-colors">{item}</button>
          ))}
        </nav>

        <div className="flex items-center gap-2 md:gap-4">
          <button className="p-2 hover:bg-white/10 rounded-full text-[#c5a059] transition-colors" title="Pesquisar">
            <Search size={20} />
          </button>
          <button onClick={() => setIsLightMode(!isLightMode)} className="p-2 hover:bg-white/10 rounded-full text-[#c5a059] transition-colors" title="Alternar Vibração">
            {isLightMode ? <Moon size={20}/> : <Sun size={20}/>}
          </button>
          <button onClick={() => navigate(user ? 'customer-orders' : 'login')} className="p-2 hover:bg-white/10 rounded-full text-[#c5a059] transition-colors" title="Minha Conta">
            <Users size={20} />
          </button>
          <button className="relative p-2 hover:bg-white/10 rounded-full text-[#c5a059] transition-colors" onClick={() => navigate('cart')} title="Sacola">
            <ShoppingBag size={20} />
            {cart.length > 0 && <span className="absolute top-0 right-0 bg-[#c5a059] text-black text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center border border-[#4a0404]">{cart.length}</span>}
          </button>
          <button className="lg:hidden p-2" onClick={() => setIsMenuOpen(true)}><Menu size={26} className={isLightMode ? 'text-[#f4ebe1]' : 'text-white'}/></button>
        </div>
      </div>
    </header>
  );

  // RODAPÉ REESTRUTURADO E LIMPO
  const Footer = () => (
    <footer className={`${theme.footer} pt-20 pb-6 px-6 mt-auto transition-colors duration-700`}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        
        {/* Marca & Atendimento */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <div className="flex flex-col items-center sm:items-start gap-2 mb-8 text-[#c5a059]">
            <TridentIcon className="w-8 h-8" />
            <span className="text-xs font-black tracking-[0.2em] uppercase">Quimbanda M'bande</span>
          </div>
          <h4 className="text-[#c5a059] text-[10px] font-bold uppercase tracking-[0.2em] mb-4">Atendimento</h4>
          <ul className="space-y-3 text-[10px] uppercase tracking-widest opacity-80">
            <li className="cursor-pointer hover:text-[#c5a059] transition-colors" onClick={() => window.open('https://wa.me/5517997167336', '_blank')}>Fale Conosco</li>
            <li className="cursor-pointer hover:text-[#c5a059] transition-colors">E-mail</li>
          </ul>
        </div>

        {/* Institucional */}
        <div className="text-center sm:text-left">
          <h4 className="text-[#c5a059] text-[10px] font-bold uppercase tracking-[0.2em] mb-6 sm:mt-0 mt-4">Institucional</h4>
          <ul className="space-y-3 text-[10px] uppercase tracking-widest opacity-80">
            <li className="cursor-pointer hover:text-[#c5a059] transition-colors" onClick={() => navigate('about-page')}>Sobre Nós</li>
            <li className="cursor-pointer hover:text-[#c5a059] transition-colors">FAQ</li>
            <li className="cursor-pointer hover:text-[#c5a059] transition-colors">Contato</li>
          </ul>
        </div>

        {/* Políticas */}
        <div className="text-center sm:text-left">
          <h4 className="text-[#c5a059] text-[10px] font-bold uppercase tracking-[0.2em] mb-6 sm:mt-0 mt-4">Políticas</h4>
          <ul className="space-y-3 text-[10px] uppercase tracking-widest opacity-80">
            <li className="cursor-pointer hover:text-[#c5a059] transition-colors">Privacidade</li>
            <li className="cursor-pointer hover:text-[#c5a059] transition-colors">Trocas e Devoluções</li>
            <li className="cursor-pointer hover:text-[#c5a059] transition-colors">Termos de Uso</li>
          </ul>
        </div>

        {/* Compra e Entrega */}
        <div className="text-center sm:text-left">
          <h4 className="text-[#c5a059] text-[10px] font-bold uppercase tracking-[0.2em] mb-6 sm:mt-0 mt-4">Compra & Entrega</h4>
          <ul className="space-y-3 text-[10px] uppercase tracking-widest opacity-80">
            <li className="cursor-pointer hover:text-[#c5a059] transition-colors">Formas de Pagamento</li>
            <li className="cursor-pointer hover:text-[#c5a059] transition-colors">Frete e Entrega</li>
            <li className="cursor-pointer hover:text-[#c5a059] transition-colors">Como Comprar</li>
          </ul>
        </div>

      </div>

      {/* Compra Segura Centralizada */}
      <div className="max-w-7xl mx-auto text-center border-t border-[#c5a059]/20 pt-10 mb-8">
        <p className="text-[11px] uppercase tracking-[0.2em] font-bold text-gray-400 flex items-center justify-center gap-2">
          🔒 Compra segura com Mercado Pago • PIX • Cartão
        </p>
      </div>

      {/* Direitos Reservados Finais */}
      <div className="max-w-7xl mx-auto text-center text-[12px] uppercase tracking-widest opacity-60">
        <p>© 2026 Quimbanda M'bande. Todos os direitos reservados.</p>
      </div>
    </footer>
  );

  const MobileMenuOverlay = () => (
    <div className={`fixed inset-0 z-[70] ${isLightMode ? 'bg-[#4a0404]' : 'bg-[#110202]'} flex flex-col transition-transform duration-500 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} lg:hidden`}>
      <div className="h-20 px-6 flex items-center justify-between border-b border-[#c5a059]/20 text-[#e8dccc]">
        <span className="uppercase text-xs font-bold tracking-widest text-[#c5a059]">Menu da Loja</span>
        <button onClick={() => setIsMenuOpen(false)}><X size={32}/></button>
      </div>
      <div className={`flex-grow flex flex-col items-center justify-center gap-8 font-serif text-3xl uppercase tracking-widest ${isLightMode ? 'text-[#e8dccc]' : 'text-[#f0e6d2]'}`}>
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

  const AdminLayout = ({ children }) => (
    <div className={`flex min-h-screen ${isLightMode ? 'bg-[#e8dccc]' : 'bg-[#110202]'} ${theme.text} absolute inset-0 z-[100]`}>
      <div className={`w-64 border-r border-[#c5a059]/20 p-8 hidden md:flex flex-col gap-12 ${isLightMode ? 'bg-[#f4ebe1]' : 'bg-[#0a0101]'}`}>
        <div className="flex items-center gap-4 text-[#c5a059]"><TridentIcon className="w-8 h-8"/><span className="font-black uppercase text-xs tracking-widest">Gestão</span></div>
        <nav className="flex flex-col gap-4 text-xs font-bold uppercase tracking-widest text-gray-500">
           <button className="text-left text-[#c5a059] bg-[#c5a059]/10 p-4 rounded-sm flex items-center gap-3"><LayoutDashboard size={16}/> Dashboard</button>
           <button className={`text-left hover:${theme.text} p-4 flex items-center gap-3`}><Package size={16}/> Produtos</button>
           <button className={`text-left hover:${theme.text} p-4 flex items-center gap-3`}><ShoppingCart size={16}/> Pedidos</button>
           <button onClick={() => { setIsAdmin(false); navigate('home'); }} className="text-left text-red-500 p-4 mt-10 flex items-center gap-3 hover:bg-red-500/10 rounded-sm"><LogOut size={16}/> Sair</button>
        </nav>
      </div>
      <div className={`flex-grow p-8 md:p-12 overflow-y-auto ${isLightMode ? 'bg-[#e8dccc]' : 'bg-[#110202]'}`}>{children}</div>
    </div>
  );

  const renderContent = () => {
    switch (view) {
      case 'home':
        return (
          <div className="animate-in fade-in duration-700">
            <section className="relative h-[85vh] md:h-[95vh] flex items-center justify-center overflow-hidden">
              <div className={`absolute inset-0 bg-gradient-to-b ${isLightMode ? 'from-[#4a0404]/90 via-[#730808]/40' : 'from-[#0a0101]/95 via-[#1f0505]/60'} to-transparent z-10`} />
              <img src="https://images.unsplash.com/photo-1514306191717-452ec28c7814?auto=format&fit=crop&q=80&w=1600" className="absolute inset-0 w-full h-full object-cover grayscale opacity-30 scale-105" alt="Altar" />
              <div className="relative z-20 text-center px-4 max-w-5xl flex flex-col items-center">
                <div className="mb-6 md:mb-10 flex justify-center text-[#c5a059]"><Moon size={48} strokeWidth={1} className="animate-pulse" /></div>
                <h2 className={`text-4xl md:text-7xl font-serif mb-8 tracking-tight italic uppercase leading-tight drop-shadow-2xl ${isLightMode ? 'text-[#f4ebe1]' : 'text-white'}`}>Mameto <span className="text-[#c5a059]">M'bande</span></h2>
                <p className={`text-xs md:text-lg uppercase tracking-[0.4em] mb-12 font-bold ${isLightMode ? 'text-[#e8dccc]' : 'text-[#cba693]'}`}>Cartomancia, Búzios e Magias.</p>
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                  <Button onClick={() => navigate('products')} variant="primary" className="w-full sm:w-auto px-12 py-5 text-xs shadow-[0_0_30px_rgba(197,160,89,0.3)]">Ver Catálogo</Button>
                  <Button onClick={() => navigate('services-list')} variant="outline" className={`w-full sm:w-auto px-12 py-5 text-xs border-2 ${isLightMode ? 'bg-[#f4ebe1]/90 border-[#4a0404]' : 'bg-[#110202]/50'} backdrop-blur-sm`}>Nossos Rituais</Button>
                </div>
              </div>
            </section>

            <section id="produtos" className={`py-20 md:py-32 px-4 md:px-6 ${theme.bg} transition-colors duration-700`}>
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 md:mb-20 flex flex-col items-center">
                  <h2 className={`text-4xl md:text-5xl font-serif italic mb-6 ${theme.text}`}>Nossos <span className="text-[#c5a059]">Produtos</span></h2>
                  <div className={`w-24 h-[2px] ${isLightMode ? 'bg-[#4a0404]' : 'bg-[#c5a059]'}`}></div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                  {INITIAL_PRODUCTS.slice(0,3).map(p => (
                    <div key={p.id} className={`${theme.card} p-6 rounded-md group hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden flex flex-col`}>
                      <button onClick={(e) => toggleFavorite(p, e)} className="absolute top-4 right-4 z-10 p-2 bg-black/40 backdrop-blur-sm rounded-full text-white hover:text-[#c5a059] transition-colors">
                        <Heart size={18} fill={favorites.find(f => f.id === p.id) ? '#c5a059' : 'none'} className={favorites.find(f => f.id === p.id) ? 'text-[#c5a059]' : ''} />
                      </button>
                      
                      <div className="relative h-64 md:h-80 w-full overflow-hidden mb-6 cursor-pointer border border-[#c5a059]/20 rounded-sm bg-black/40" onClick={() => navigate('details', p)}>
                        <img src={p.image} className="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100" alt={p.name} />
                        {p.status === 'esgotado' && <div className="absolute inset-0 bg-black/70 flex items-center justify-center"><span className="text-white border-2 border-white/30 px-6 py-2 text-[10px] font-black uppercase tracking-widest rotate-[-12deg] bg-black/50 backdrop-blur-sm">Esgotado</span></div>}
                      </div>
                      <h4 className={`${theme.text} uppercase text-sm font-bold mb-2 tracking-widest line-clamp-1`} title={p.name}>{p.name}</h4>
                      <p className={`${theme.textMuted} text-[10px] mb-6 uppercase tracking-widest italic font-bold h-8 line-clamp-2`}>{p.shortDesc}</p>
                      <div className="mt-auto pt-6 border-t border-[#c5a059]/20 flex items-end justify-between">
                        <div>
                          <p className="text-xs text-gray-500 line-through decoration-[#c5a059]/50 mb-1">R$ {p.originalPrice.toFixed(2)}</p>
                          <p className={`font-serif text-2xl font-black ${isLightMode ? 'text-[#730808]' : 'text-[#c5a059]'}`}>R$ {p.price.toFixed(2)}</p>
                        </div>
                        <Button onClick={() => addToCart(p)} variant="primary" className="!px-4 !py-3 !text-[9px]" disabled={p.status === 'esgotado'}><ShoppingCart size={18}/></Button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-16 text-center">
                  <Button onClick={() => navigate('products')} variant="outline" className="mx-auto px-10">Ver Coleção Completa</Button>
                </div>
              </div>
            </section>

            <section className={`py-20 md:py-32 px-4 md:px-6 border-y border-[#c5a059]/20 ${isLightMode ? 'bg-[#dccbb8]' : 'bg-[#0a0101]'}`}>
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                   <h2 className={`text-3xl md:text-5xl font-serif italic ${isLightMode ? 'text-[#4a0404]' : 'text-white'}`}>Ultimos <span className="text-[#c5a059]">Rituais</span></h2>
                   <p className={`mt-4 text-xs uppercase tracking-widest ${theme.textMuted}`}>Magias Individuais e Coletivas</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {INITIAL_SERVICES.map(s => (
                    <div key={s.id} className={`${theme.card} p-8 flex flex-col items-center text-center group hover:border-[#c5a059] transition-colors rounded-sm`}>
                      <div className={`p-4 rounded-full mb-6 ${isLightMode ? 'bg-[#4a0404]/10 text-[#4a0404]' : 'bg-[#c5a059]/10 text-[#c5a059]'}`}>{s.icon}</div>
                      <h3 className={`${theme.text} font-black uppercase text-[11px] tracking-widest mb-3 h-10 flex items-center justify-center`}>{s.name}</h3>
                      <div className={`${isLightMode ? 'text-[#730808]' : 'text-[#cba693]'} text-lg font-serif font-black mb-6`}>R$ {s.price.toFixed(2)}</div>
                      <Button onClick={() => navigate('service-details', s)} variant="outline" className="w-full !py-3 !text-[9px] mt-auto">Detalhes</Button>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        );

      case 'products':
        return (
          <section className={`py-24 md:py-32 px-4 md:px-6 ${theme.bg} min-h-screen transition-colors duration-700`}>
             <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className={`text-4xl md:text-6xl font-serif italic ${theme.text}`}>Catálogo de <span className="text-[#c5a059]">Produtos</span></h2>
                  <p className={`mt-6 text-xs uppercase tracking-[0.3em] font-bold ${theme.textMuted}`}>Ferramentas de Poder Consagradas e Exclusivas</p>
                </div>

                <div className="flex flex-wrap justify-center gap-3 mb-16">
                  {['Todos', 'Perfumes', 'Óleos', 'Patuás', 'Pós', 'Banhos'].map(cat => (
                    <button 
                      key={cat} 
                      onClick={() => setActiveCategory(cat)}
                      className={`px-5 py-2 text-[10px] font-black uppercase tracking-widest rounded-sm border transition-all ${activeCategory === cat ? (isLightMode ? 'bg-[#4a0404] text-white border-[#4a0404]' : 'bg-[#c5a059] text-black border-[#c5a059]') : (isLightMode ? 'bg-transparent border-[#4a0404]/30 text-[#4a0404] hover:border-[#4a0404]' : 'bg-transparent border-white/20 text-gray-400 hover:text-white hover:border-white/50')}`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                   {filteredProducts.map(p => (
                      <div key={p.id} className={`${theme.card} p-6 rounded-md group hover:-translate-y-2 transition-transform duration-300 relative flex flex-col`}>
                         <div className="absolute top-0 left-0 bg-[#c5a059] text-black text-[9px] font-black px-3 py-1 uppercase tracking-widest z-20 shadow-md">
                           -5% OFF PIX
                         </div>
                         <div className="relative h-72 md:h-80 w-full overflow-hidden mb-6 cursor-pointer border border-[#c5a059]/20 bg-black/40" onClick={() => navigate('details', p)}>
                            <img src={p.image} className="w-full h-full object-cover object-center grayscale opacity-90 group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" alt={p.name} />
                            {p.status === 'esgotado' && <div className="absolute inset-0 bg-black/80 flex items-center justify-center backdrop-blur-[2px]"><span className="text-white border-2 border-white/30 px-6 py-2 text-xs font-black uppercase tracking-widest rotate-[-10deg]">Esgotado</span></div>}
                         </div>
                         <h4 className={`${theme.text} uppercase text-sm font-bold mb-2 tracking-widest line-clamp-1`}>{p.name}</h4>
                         <p className={`${theme.textMuted} text-[10px] mb-6 uppercase tracking-widest italic font-bold h-8 line-clamp-2`}>{p.shortDesc}</p>
                         <div className="mt-auto pt-6 border-t border-[#c5a059]/20 flex items-end justify-between">
                            <div>
                              <p className="text-xs text-gray-500 line-through decoration-[#c5a059]/50 mb-1">R$ {p.originalPrice.toFixed(2)}</p>
                              <p className={`font-serif text-2xl font-black ${isLightMode ? 'text-[#730808]' : 'text-[#c5a059]'}`}>R$ {p.price.toFixed(2)}</p>
                            </div>
                            <Button onClick={() => addToCart(p)} variant="primary" className="!px-4 !py-3 !text-[9px]" disabled={p.status === 'esgotado'}><ShoppingCart size={18}/></Button>
                         </div>
                      </div>
                   ))}
                </div>
             </div>
          </section>
        );

      case 'cart':
        return (
          <section className={`py-24 md:py-32 px-4 md:px-6 max-w-5xl mx-auto min-h-[85vh] ${theme.bg}`}>
            <h2 className={`text-3xl md:text-4xl font-serif mb-8 flex items-center gap-4 uppercase tracking-widest italic ${theme.text}`}><ShoppingBag className="text-[#c5a059]" size={36} /> Seu Altar de Compras</h2>
            
            <div className={`p-4 mb-8 border-l-4 border-[#c5a059] ${isLightMode ? 'bg-white/80' : 'bg-[#1f0505]'} text-xs leading-relaxed flex items-center gap-3 ${theme.text}`}>
              <Sparkles className="text-[#c5a059] shrink-0" size={20}/>
              <span><strong>Aviso de Firmação:</strong> Produtos consagrados necessitam de até 3 dias úteis de ritualística e cruzamento antes do envio postal.</span>
            </div>

            {cart.length === 0 ? (
              <div className={`${theme.card} text-center py-24 border-2 border-dashed border-[#c5a059]/40`}>
                <div className="flex justify-center mb-6 text-[#c5a059]/50"><ShoppingCart size={48}/></div>
                <p className={`uppercase text-[11px] tracking-widest mb-8 italic font-bold ${theme.textMuted}`}>O altar do carrinho está em silêncio...</p>
                <Button onClick={() => navigate('products')} className="mx-auto">Explorar Catálogo</Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
                <div className="lg:col-span-2 space-y-6">
                  {cart.map(i => (
                    <div key={i.id} className={`${theme.card} p-6 flex flex-col sm:flex-row items-center sm:items-start gap-6 relative`}>
                      <button onClick={() => removeFromCart(i.id)} className="absolute top-4 right-4 text-red-500/70 hover:text-red-600 transition-colors p-2"><X size={18}/></button>
                      <img src={i.image} className="w-24 h-24 object-cover grayscale border border-[#c5a059]/30 rounded-sm" alt={i.name} />
                      <div className="flex-grow text-center sm:text-left pt-2">
                        <h4 className={`font-black uppercase text-[11px] tracking-widest pr-8 ${theme.text}`}>{i.name}</h4>
                        <p className={`text-[10px] uppercase font-bold mt-1 ${theme.textMuted}`}>{i.category}</p>
                        <div className="mt-4 flex items-center justify-center sm:justify-between w-full">
                           <div className="flex items-center gap-4 bg-black/20 rounded-sm p-1 border border-[#c5a059]/30">
                             <button onClick={() => updateQuantity(i.id, -1)} className="p-1 px-3 text-[#c5a059] font-black hover:bg-black/30">-</button>
                             <span className={`text-xs font-bold ${theme.text}`}>{i.quantity}</span>
                             <button onClick={() => updateQuantity(i.id, 1)} className="p-1 px-3 text-[#c5a059] font-black hover:bg-black/30">+</button>
                           </div>
                           <p className={`font-serif font-black text-xl ${isLightMode ? 'text-[#730808]' : 'text-[#c5a059]'}`}>R$ {(i.price * i.quantity).toFixed(2)}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {hasPhysicalProducts && (
                    <div className={`${theme.card} p-8 rounded-md ${isLightMode ? 'bg-[#f4ebe1]/80' : 'bg-[#1f0505]'}`}>
                       <h4 className={`${theme.text} text-[12px] font-black uppercase tracking-widest mb-6 flex items-center gap-3`}><Truck size={20} className="text-[#c5a059]"/> Cálculo de Envio SEDEX</h4>
                       <div className="flex flex-col sm:flex-row gap-3">
                          <input type="text" placeholder="CEP (00000-000)" className={`flex-grow p-4 text-xs outline-none font-black tracking-widest rounded-sm ${theme.inputBg}`} maxLength={9} value={cep} onChange={(e) => setCep(e.target.value)} />
                          <Button onClick={calculateShipping} className="w-full sm:w-auto !py-4">Calcular</Button>
                       </div>
                       {shippingValue && <p className={`mt-6 text-[10px] uppercase font-bold tracking-widest flex items-center gap-2 ${isLightMode ? 'text-green-700' : 'text-green-500'}`}><CheckCircle size={14}/> SEDEX Expresso: R$ 25,00</p>}
                    </div>
                  )}
                </div>

                <div className={`${theme.card} p-8 h-fit lg:sticky lg:top-32`}>
                  <h3 className={`${theme.text} font-black uppercase text-[11px] mb-8 pb-4 border-b border-[#c5a059]/20 flex items-center gap-2`}><FileText size={16} className="text-[#c5a059]"/> Resumo do Pedido</h3>
                  <div className="space-y-4 mb-8 text-[11px] uppercase tracking-widest font-bold">
                    <div className="flex justify-between text-gray-500"><span>Itens</span> <span className={theme.text}>R$ {subtotal.toFixed(2)}</span></div>
                    {hasPhysicalProducts && <div className="flex justify-between text-gray-500"><span>Frete</span> <span className={theme.text}>{shippingValue ? `R$ ${shippingValue.toFixed(2)}` : 'A calcular'}</span></div>}
                  </div>
                  <div className={`flex justify-between items-end mb-10 border-t border-[#c5a059]/20 pt-6`}>
                    <span className={`text-xs uppercase font-black tracking-widest ${theme.text}`}>Total</span> 
                    <span className={`text-3xl font-serif font-black ${isLightMode ? 'text-[#730808]' : 'text-[#c5a059]'}`}>R$ {total.toFixed(2)}</span>
                  </div>
                  <Button onClick={() => navigate('checkout')} className="w-full !py-5 !text-[11px]" disabled={cart.length === 0}>Prosseguir para Checkout</Button>
                </div>
              </div>
            )}
          </section>
        );

      case 'details':
        const item = selectedProduct;
        return (
          <div className="animate-in fade-in duration-500">
            <section className={`py-24 md:py-32 px-4 md:px-6 max-w-6xl mx-auto min-h-[70vh] ${theme.bg}`}>
              <div className="grid md:grid-cols-2 gap-12 md:gap-20">
                <div className={`p-4 border-2 ${isLightMode ? 'border-[#4a0404]/20 bg-white/50' : 'border-[#c5a059]/20 bg-[#1f0505]'} shadow-2xl relative`}>
                  {item.status === 'esgotado' && <div className="absolute top-8 right-8 z-20 bg-black text-white border border-[#c5a059] px-4 py-1 text-[10px] font-black uppercase tracking-widest">Esgotado</div>}
                  <img src={item.image} className="w-full h-[400px] md:h-[550px] object-cover object-center grayscale opacity-90 border border-[#c5a059]/30" alt={item.name} />
                </div>
                <div className="flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-6">
                    <span className={`px-3 py-1 text-[9px] font-black uppercase tracking-widest ${isLightMode ? 'bg-[#4a0404] text-white' : 'bg-[#c5a059]/20 text-[#c5a059]'}`}>{item.category}</span>
                    <span className="text-[10px] uppercase font-bold text-green-600 flex items-center gap-1"><CheckCircle size={12}/> Pronta Entrega</span>
                  </div>
                  <h2 className={`text-3xl md:text-5xl font-serif mb-6 uppercase tracking-tight italic leading-tight ${theme.text}`}>{item.name}</h2>
                  
                  <div className="mb-8">
                    <p className="text-sm text-gray-500 line-through decoration-[#c5a059]/50 mb-2">De R$ {item.originalPrice.toFixed(2)}</p>
                    <div className={`text-4xl md:text-5xl font-bold font-serif ${isLightMode ? 'text-[#730808]' : 'text-[#c5a059]'}`}>R$ {item.price.toFixed(2)}</div>
                    <p className={`text-[10px] uppercase font-bold mt-3 ${theme.textMuted}`}>Em até 12x no cartão ou -5% via PIX</p>
                  </div>

                  <div className={`p-6 md:p-8 border-l-4 ${isLightMode ? 'border-[#4a0404] bg-[#f4ebe1]/80' : 'border-[#c5a059] bg-[#1f0505]'} mb-10 shadow-sm`}>
                     <h3 className={`font-black uppercase text-[10px] tracking-widest mb-4 flex items-center gap-2 ${theme.text}`}><Sparkles size={16} className="text-[#c5a059]"/> Fundamento & Propósito</h3>
                     <p className={`text-sm leading-relaxed text-justify ${theme.text}`}>{item.description}</p>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                    <Button onClick={() => addToCart(item)} disabled={item.status === 'esgotado'} className="flex-grow !py-5 !text-[11px]">
                      <ShoppingCart size={20} /> Adicionar ao Altar
                    </Button>
                    <Button onClick={() => window.open(`https://wa.me/5517997167336?text=Desejo saber mais sobre o ${item.name}`, '_blank')} variant="outline" className="!px-6 !py-5">
                      <MessageCircle size={20}/>
                    </Button>
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
               <h2 className={`text-4xl md:text-5xl font-serif text-[#c5a059] uppercase tracking-widest italic font-bold mb-6`}>Rituais & <span className={theme.text}>Magias</span></h2>
               <p className={`text-xs uppercase tracking-widest font-bold ${theme.textMuted}`}>Individuais e Coletivos com Mameto M'bande</p>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-12">
                {INITIAL_SERVICES.map(s => (
                  <div key={s.id} className={`${theme.card} p-8 md:p-10 flex flex-col md:flex-row items-center md:items-start gap-8 hover:-translate-y-1 transition-transform shadow-xl`}>
                     <div className={`p-6 rounded-full shrink-0 ${isLightMode ? 'bg-[#4a0404] text-[#f4ebe1]' : 'bg-[#c5a059]/10 text-[#c5a059]'} border border-[#c5a059]/30`}>{s.icon}</div>
                     <div className="flex-grow text-center md:text-left flex flex-col">
                       <span className="text-[#c5a059] text-[9px] font-black uppercase tracking-widest mb-2">{s.category}</span>
                       <h3 className={`font-black uppercase text-sm md:text-base tracking-widest mb-4 ${theme.text}`}>{s.name}</h3>
                       <p className={`text-[11px] mb-6 leading-relaxed italic ${theme.textMuted}`}>{s.description}</p>
                       <div className="mt-auto flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-[#c5a059]/20">
                         <div className={`text-2xl font-serif font-black ${isLightMode ? 'text-[#730808]' : 'text-[#c5a059]'}`}>R$ {s.price.toFixed(2)}</div>
                         <Button onClick={() => navigate('service-details', s)} variant="outline" className="!px-6 !py-3 !text-[9px] w-full sm:w-auto">Saber Mais</Button>
                       </div>
                     </div>
                  </div>
                ))}
             </div>
          </section>
        );

      case 'service-details':
        const service = selectedProduct;
        return (
          <section className={`py-24 md:py-32 px-4 md:px-6 min-h-screen flex flex-col justify-center animate-in fade-in duration-500 ${theme.bg}`}>
             <div className="max-w-5xl mx-auto w-full">
                <button onClick={() => navigate('services-list')} className={`mb-10 text-[10px] font-black uppercase tracking-widest flex items-center gap-2 ${theme.textMuted} hover:${theme.text} transition-colors`}><ArrowLeft size={16}/> Voltar aos Rituais</button>
                
                <div className={`${theme.card} p-8 md:p-16 flex flex-col items-center text-center relative overflow-hidden border-2`}>
                   <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none text-[#c5a059]">{service.icon}</div>
                   
                   <span className="text-[#c5a059] text-[10px] font-black uppercase tracking-widest mb-6 border border-[#c5a059]/30 px-4 py-1 rounded-full">{service.category}</span>
                   <h2 className={`text-3xl md:text-5xl font-serif mb-8 italic uppercase tracking-tighter ${theme.text}`}>{service.name}</h2>
                   <p className={`text-sm md:text-base max-w-2xl font-bold mb-10 ${theme.textMuted}`}>{service.description}</p>
                   
                   <div className={`text-4xl md:text-6xl font-black mb-12 font-serif ${isLightMode ? 'text-[#730808]' : 'text-[#c5a059]'}`}>R$ {service.price.toFixed(2)}</div>
                   
                   <div className={`w-full max-w-3xl p-8 border-y-2 ${isLightMode ? 'border-[#4a0404]/10 bg-[#f4ebe1]/50' : 'border-[#c5a059]/10 bg-black/20'} mb-12`}>
                      <h3 className={`font-black text-[11px] uppercase tracking-widest mb-6 flex items-center justify-center gap-3 ${theme.text}`}><Sparkles size={16} className="text-[#c5a059]"/> Detalhes do Atendimento</h3>
                      <p className={`text-sm leading-relaxed ${theme.text}`}>{service.longDescription}</p>
                   </div>
                   
                   <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                      <Button onClick={() => window.open(`https://wa.me/5517997167336?text=Desejo agendar: ${service.name}`, '_blank')} className="sm:w-auto !px-12 !py-5 !text-[11px]">
                         <MessageCircle size={20}/> Agendar pelo WhatsApp
                      </Button>
                   </div>
                </div>
             </div>
          </section>
        );

      case 'checkout':
        return (
          <section className={`py-24 md:py-32 px-4 md:px-6 max-w-6xl mx-auto min-h-screen ${theme.bg}`}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
              <div className="space-y-12">
                <div>
                  <h2 className={`text-3xl font-serif mb-8 italic uppercase tracking-widest ${theme.text}`}>Seus Dados</h2>
                  <div className="space-y-4">
                    <input className={`w-full p-4 text-xs outline-none font-bold uppercase tracking-widest rounded-sm ${theme.inputBg}`} placeholder="NOME COMPLETO" defaultValue={user.name} />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input className={`w-full p-4 text-xs outline-none font-bold uppercase tracking-widest rounded-sm ${theme.inputBg}`} placeholder="E-MAIL" defaultValue={user.email} />
                      <input className={`w-full p-4 text-xs outline-none font-bold uppercase tracking-widest rounded-sm ${theme.inputBg}`} placeholder="TELEFONE / WHATSAPP" defaultValue={user.phone} />
                    </div>
                    {hasPhysicalProducts && (
                      <input className={`w-full p-4 text-xs outline-none font-bold uppercase tracking-widest rounded-sm ${theme.inputBg}`} placeholder="ENDEREÇO DE ENTREGA COMPLETO" />
                    )}
                  </div>
                </div>

                <div className={`${theme.card} p-8 rounded-md ${isLightMode ? 'bg-[#f4ebe1]/80' : 'bg-[#1f0505]'}`}>
                   <h3 className={`${theme.text} text-xs font-bold uppercase tracking-widest mb-6`}>Cupom de Desconto</h3>
                   <div className="flex flex-col sm:flex-row gap-3">
                      <input type="text" placeholder="DIGITE O CÓDIGO" className={`flex-grow p-4 text-xs outline-none font-bold tracking-widest uppercase rounded-sm ${theme.inputBg}`} value={coupon} onChange={(e) => setCoupon(e.target.value)} />
                      <Button onClick={applyCoupon} variant="outline" className="w-full sm:w-auto !py-4">Aplicar</Button>
                   </div>
                   {discount > 0 && <p className={`mt-4 text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 ${isLightMode ? 'text-green-700' : 'text-green-500'}`}><CheckCircle size={14}/> Cupom 'LIRA10' Ativo: -10%</p>}
                </div>
              </div>

              <div className={`${theme.card} p-8 md:p-10 h-fit lg:sticky lg:top-32`}>
                <h3 className={`${theme.text} font-black uppercase text-[11px] mb-8 pb-4 border-b border-[#c5a059]/20 flex items-center gap-2`}><CreditCard size={16} className="text-[#c5a059]"/> Pagamento</h3>
                <div className="space-y-4 mb-8 text-[11px] uppercase tracking-widest font-bold">
                  <div className="flex justify-between text-gray-500"><span>Itens</span> <span className={theme.text}>R$ {subtotal.toFixed(2)}</span></div>
                  {hasPhysicalProducts && shippingValue && <div className="flex justify-between text-gray-500"><span>Frete SEDEX</span> <span className={theme.text}>R$ {shippingValue.toFixed(2)}</span></div>}
                  {discount > 0 && <div className="flex justify-between text-green-600"><span>Desconto (10%)</span> <span>- R$ {((subtotal + (shippingValue || 0)) * 0.10).toFixed(2)}</span></div>}
                </div>
                <div className={`flex justify-between items-end mb-10 border-t border-[#c5a059]/20 pt-6`}>
                  <span className={`text-xs uppercase font-black tracking-widest ${theme.text}`}>Total Geral</span> 
                  <span className={`text-4xl font-serif font-black ${isLightMode ? 'text-[#730808]' : 'text-[#c5a059]'}`}>R$ {total.toFixed(2)}</span>
                </div>
                <Button onClick={() => navigate('payment')} className="w-full !py-6 !text-[11px]">Ir para Pagamento Seguro</Button>
                <div className="mt-6 flex items-center justify-center gap-2 text-[9px] uppercase tracking-widest text-gray-500 font-bold"><Lock size={12}/> Ambiente 100% Seguro</div>
              </div>
            </div>
          </section>
        );

      case 'payment':
        return (
          <section className={`py-32 px-4 md:px-6 flex items-center justify-center min-h-screen ${theme.bg}`}>
             <div className="max-w-md w-full bg-white p-8 md:p-12 rounded-lg shadow-2xl text-center animate-in zoom-in duration-500 relative overflow-hidden">
                <div className="bg-[#00a650] h-2 w-full absolute top-0 left-0"></div>
                <div className="bg-[#009ee3] py-6 px-8 -mx-8 md:-mx-12 -mt-8 md:-mt-12 mb-10 flex items-center justify-center gap-3 rounded-t-lg">
                   <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center"><div className="w-5 h-5 bg-[#009ee3] rounded-full flex items-center justify-center text-white font-black text-[10px]">mp</div></div>
                   <span className="text-white font-bold italic tracking-tighter text-2xl">mercado pago</span>
                </div>
                <h3 className="text-gray-800 font-black text-xl mb-2 uppercase tracking-widest">Finalizar</h3>
                <p className="text-gray-500 text-xs mb-10 font-bold tracking-widest uppercase">Valor a pagar: <span className="text-gray-900 font-black text-lg">R$ {total.toFixed(2)}</span></p>
                
                <div className="space-y-4 mb-10">
                   <div onClick={() => setPaymentMethod('pix')} className={`p-5 border-2 rounded-xl flex items-center gap-4 cursor-pointer transition-all ${paymentMethod === 'pix' ? 'border-[#009ee3] bg-[#009ee3]/5' : 'border-gray-200 hover:border-gray-300'}`}>
                      <div className="bg-[#00a650]/10 p-3 rounded-full text-[#00a650]"><Smartphone size={20}/></div>
                      <div className="text-left"><p className="font-black text-gray-900 uppercase text-xs tracking-widest">Pix</p><p className="text-[9px] text-[#00a650] font-bold uppercase tracking-widest mt-1">Aprovação imediata</p></div>
                   </div>
                   <div onClick={() => setPaymentMethod('card')} className={`p-5 border-2 rounded-xl flex items-center gap-4 cursor-pointer transition-all ${paymentMethod === 'card' ? 'border-[#009ee3] bg-[#009ee3]/5' : 'border-gray-200 hover:border-gray-300'}`}>
                      <div className="bg-[#009ee3]/10 p-3 rounded-full text-[#009ee3]"><CreditCard size={20}/></div>
                      <div className="text-left"><p className="font-black text-gray-900 uppercase text-xs tracking-widest">Cartão de Crédito</p><p className="text-[9px] text-gray-500 font-bold uppercase tracking-widest mt-1">Até 12x s/ juros</p></div>
                   </div>
                </div>

                <button 
                  onClick={handlePayment} 
                  disabled={isProcessing} 
                  className={`w-full py-5 rounded-xl font-black uppercase text-[11px] tracking-widest transition-all ${isProcessing ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : 'bg-[#009ee3] text-white hover:bg-[#008cc8] shadow-lg hover:shadow-xl active:scale-95'}`}
                >
                  {isProcessing ? 'Processando...' : 'Pagar Agora'}
                </button>
             </div>
          </section>
        );

      case 'success':
        return (
          <section className={`py-32 px-4 md:px-6 max-w-xl mx-auto text-center min-h-screen flex flex-col justify-center ${theme.bg}`}>
             <div className="flex justify-center mb-10"><div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center animate-pulse"><CheckCircle size={48} className="text-green-500" /></div></div>
             <h2 className={`text-4xl md:text-5xl font-serif mb-6 italic uppercase tracking-tighter ${theme.text}`}>Pedido Firmado!</h2>
             <p className={`uppercase text-[10px] font-black tracking-widest mb-12 ${theme.textMuted}`}>A sua encomenda foi recebida pelo Templo.</p>
             
             <div className={`${theme.card} p-8 md:p-10 text-left mb-12 relative overflow-hidden rounded-md`}>
                <div className="absolute -top-10 -right-10 opacity-5 pointer-events-none text-[#c5a059]"><TridentIcon className="w-48 h-48"/></div>
                <div className="flex justify-between items-center text-[10px] uppercase mb-6 pb-4 border-b border-[#c5a059]/20 tracking-widest"><span className="text-gray-500 font-bold">Nº do Pedido</span> <span className={`font-black ${theme.text}`}>#QM-LIRA-9872</span></div>
                <div className="flex justify-between items-center text-[10px] uppercase mb-8 tracking-widest"><span className="text-gray-500 font-bold">Status Atual</span> <span className="text-[#c5a059] font-black bg-[#c5a059]/10 px-3 py-1 rounded-full border border-[#c5a059]/30">Aguardando Firmação</span></div>
                <div className={`p-4 rounded-sm text-[10px] leading-relaxed italic border-l-2 border-[#c5a059] ${isLightMode ? 'bg-[#f4ebe1]' : 'bg-[#140303]'} ${theme.textMuted}`}>
                  O seu axé será preparado e cruzado com cuidado. As atualizações e o código de rastreio serão enviados para: <span className={`font-bold ${theme.text}`}>mlopeslucariello@gmail.com</span>.
                </div>
             </div>
             
             <Button onClick={() => navigate('home')} className="mx-auto !px-12">Retornar à Home</Button>
          </section>
        );

      case 'login':
        return (
          <section className={`py-32 px-4 md:px-6 max-w-sm mx-auto min-h-screen flex items-center justify-center ${theme.bg}`}>
             <div className={`${theme.card} p-10 md:p-12 w-full rounded-md`}>
                <div className="flex justify-center mb-8"><Users size={32} className="text-[#c5a059]"/></div>
                <h2 className={`text-3xl font-serif text-center italic mb-10 uppercase tracking-widest ${theme.text}`}>Acesso</h2>
                <form className="space-y-6" onSubmit={e => { e.preventDefault(); navigate('home'); }}>
                  <div>
                    <label className={`block text-[9px] uppercase font-black tracking-widest mb-2 ${theme.textMuted}`}>E-mail de Acesso</label>
                    <input className={`w-full p-4 text-xs outline-none font-bold rounded-sm ${theme.inputBg}`} placeholder="ex: mlopes@gmail.com" required />
                  </div>
                  <div>
                    <label className={`block text-[9px] uppercase font-black tracking-widest mb-2 ${theme.textMuted}`}>Senha de Acesso</label>
                    <input className={`w-full p-4 text-xs outline-none font-bold rounded-sm ${theme.inputBg}`} type="password" placeholder="••••••••" required />
                  </div>
                  <Button className="w-full !mt-10">Entrar no Templo</Button>
                </form>
             </div>
          </section>
        );

      case 'admin-login':
        return (
          <section className={`py-32 px-4 md:px-6 max-w-sm mx-auto min-h-screen flex items-center justify-center ${theme.bg}`}>
             <div className={`${theme.card} p-10 md:p-12 w-full rounded-md border-t-4 border-t-[#c5a059]`}>
                <div className="flex justify-center mb-6"><div className="p-4 bg-[#c5a059]/10 rounded-full border border-[#c5a059]/30"><Lock size={28} className="text-[#c5a059]"/></div></div>
                <h2 className={`text-xl font-black text-center mb-2 uppercase tracking-[0.3em] ${theme.text}`}>Área Restrita</h2>
                <p className={`text-[9px] uppercase tracking-widest text-center mb-10 font-bold ${theme.textMuted}`}>Painel Administrativo da Zeladoria</p>
                <form className="space-y-6" onSubmit={e => { e.preventDefault(); setIsAdmin(true); navigate('admin-dash'); }}>
                  <input className={`w-full p-4 text-xs outline-none font-bold uppercase tracking-widest rounded-sm ${theme.inputBg}`} placeholder="USUÁRIO / SACERDOTISA" required/>
                  <input className={`w-full p-4 text-xs outline-none font-bold tracking-widest rounded-sm ${theme.inputBg}`} type="password" placeholder="SENHA MESTRA" required/>
                  <Button className="w-full !mt-8">Acessar Painel</Button>
                </form>
             </div>
          </section>
        );

      case 'admin-dash':
        return (
          <AdminLayout>
             <div className="flex items-center justify-between mb-12">
               <div>
                 <h2 className={`text-3xl font-serif italic ${isLightMode ? 'text-[#4a0404]' : 'text-white'}`}>Painel da <span className="text-[#c5a059]">Zeladoria</span></h2>
                 <p className={`text-[10px] uppercase font-bold tracking-widest mt-2 ${isLightMode ? 'text-gray-500' : 'text-gray-400'}`}>Visão Geral do Templo</p>
               </div>
               <button onClick={() => navigate('home')} className="md:hidden p-2 text-red-500 bg-red-500/10 rounded-md"><LogOut size={20}/></button>
             </div>
             
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                <StatCard title="Total Pedidos" value="458" icon={<ShoppingCart size={24}/>} color={isLightMode ? 'text-[#4a0404]' : 'text-white'} />
                <StatCard title="Pendentes de Envio" value="12" icon={<Clock size={24}/>} color="text-[#c5a059]" />
                <StatCard title="Itens em Estoque" value="89" icon={<Package size={24}/>} color={isLightMode ? 'text-[#4a0404]' : 'text-white'} />
                <StatCard title="Receita (Mês)" value="R$ 15.4k" icon={<TrendingUp size={24}/>} color={isLightMode ? 'text-[#4a0404]' : 'text-white'} />
             </div>
             
             <div className={`${theme.card} p-8 rounded-md`}>
                <h3 className={`${theme.text} font-black uppercase text-xs tracking-widest mb-8 flex items-center gap-3`}><FileText size={16} className="text-[#c5a059]"/> Últimas Movimentações</h3>
                <div className="space-y-4">
                   <div className={`flex justify-between items-center p-4 rounded-sm border ${isLightMode ? 'bg-white border-[#4a0404]/10' : 'bg-[#140303] border-[#c5a059]/20'}`}>
                      <div>
                        <p className={`text-[11px] font-black uppercase tracking-widest ${theme.text}`}>Pedido #1099 • Maryana Oliveira</p>
                        <p className={`text-[9px] uppercase font-bold mt-1 ${theme.textMuted}`}>Há 15 minutos</p>
                      </div>
                      <span className="text-[#c5a059] font-serif font-black text-lg">R$ 134,90</span>
                   </div>
                </div>
             </div>
          </AdminLayout>
        );

      case 'about-page':
        return (
          <section className={`py-24 md:py-32 px-4 md:px-6 max-w-6xl mx-auto animate-in fade-in duration-700 ${theme.bg}`}>
             <div className="text-center mb-16 md:mb-24">
                <h2 className={`text-4xl md:text-6xl font-serif italic ${theme.text}`}>Sobre o <span className="text-[#c5a059]">Templo</span></h2>
                <div className={`w-24 h-[3px] ${isLightMode ? 'bg-[#4a0404]' : 'bg-[#c5a059]'} mx-auto mt-6 rounded-full`}></div>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
                <div className={`relative p-3 md:p-5 border-2 ${isLightMode ? 'border-[#4a0404]/20 bg-white/50' : 'border-[#c5a059]/20 bg-[#1f0505]'} shadow-2xl rounded-sm`}>
                   <img src="https://images.unsplash.com/photo-1636113945952-4753549925e5?auto=format&fit=crop&q=80&w=800" className="w-full h-[400px] md:h-[600px] object-cover object-center grayscale opacity-80" alt="Templo" />
                   <div className={`absolute bottom-8 left-8 right-8 p-4 border border-[#c5a059]/30 text-center backdrop-blur-md ${isLightMode ? 'bg-[#4a0404]/90' : 'bg-[#0a0101]/90'}`}>
                      <p className="text-[#c5a059] text-[10px] uppercase font-black tracking-[0.4em]">Cabaré da Sete Saias</p>
                   </div>
                </div>
                <div className="space-y-8 md:space-y-10 leading-relaxed text-center md:text-left">
                   <p className={`text-2xl md:text-3xl font-serif italic ${theme.text}`}>“Respeito, segredo e fundamentação quimbandeira.”</p>
                   <p className={`text-sm md:text-base font-medium ${theme.text}`}>A Quimbanda M’bande é um ponto de força ancestral localizado em São José do Rio Preto - SP. Entregamos ferramentas de poder consagradas e imantadas para transformar caminhos.</p>
                   <div className={`p-8 border-l-4 ${isLightMode ? 'border-[#4a0404] bg-[#f4ebe1]/80' : 'border-[#c5a059] bg-[#1f0505]'} shadow-sm`}>
                      <h4 className={`font-black uppercase text-[10px] tracking-widest mb-4 flex items-center justify-center md:justify-start gap-3 ${theme.text}`}><ShieldCheck size={16} className="text-[#c5a059]"/> Nosso Compromisso</h4>
                      <p className={`text-xs md:text-sm font-medium italic ${theme.textMuted}`}>A verdade ritualística em primeiro lugar. Cada perfume, pó ou consulta respeita o tempo, as leis da Quimbanda e a vontade das Entidades.</p>
                   </div>
                   <Button onClick={() => navigate('home')} variant="outline" className="w-full md:w-auto !px-10">Retornar ao Início</Button>
                </div>
             </div>
          </section>
        );

      default:
        return <div className="py-48 text-center text-gray-500 uppercase tracking-widest min-h-screen font-black text-xs">Em Ritual de Construção...</div>;
    }
  };

  return (
    <div className={`min-h-screen flex flex-col ${theme.bg} transition-colors duration-700 font-sans selection:bg-[#c5a059] selection:text-black`}>
      {!view.startsWith('admin-') && <Header />}
      <MobileMenuOverlay />
      <main className="flex-grow pt-20">{renderContent()}</main>
      {!view.startsWith('admin-') && !['payment', 'success', 'checkout'].includes(view) && <Footer />}
      {!view.startsWith('admin-') && (
        <a href="https://wa.me/5517997167336" target="_blank" rel="noreferrer" title="Falar com a Zeladoria" className={`fixed bottom-6 right-6 md:bottom-8 md:right-8 w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-[0_8px_30px_rgba(0,0,0,0.4)] z-50 transition-transform hover:scale-110 active:scale-95 ${isLightMode ? 'bg-[#25D366] text-white' : 'bg-[#25D366] text-white border-2 border-white/20'}`}><MessageCircle size={28} fill="currentColor" /></a>
      )}
    </div>
  );
};

export default App;