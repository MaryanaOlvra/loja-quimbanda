import React, { useState, useEffect, useMemo } from 'react';

import {

  ShoppingBag, MessageCircle, Menu, X, ChevronRight, ShieldCheck,

  Eye, Sparkles, CreditCard, Smartphone, FileText, Trash2, Plus,

  Minus, Moon, Lock, LayoutDashboard, Package,

  Users, ShoppingCart, LogOut, ArrowLeft, ExternalLink, CheckCircle,

  TrendingUp, Clock, Truck, Sun, ChevronLeft

} from 'lucide-react';



const TridentIcon = ({ className }) => (

  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>

    <path d="M12 2v20M5 7v4a7 7 0 0 0 14 0V7M12 11V7" />

    <path d="M9 3l3-1 3 1" />

  </svg>

);



const INITIAL_PRODUCTS = [

  {

    id: 1,

    name: 'Perfume 7 Saias',

    price: 89.90,

    shortDesc: 'Magnetismo para encantamento e poder feminino.',

    description: 'Fragrância ritualística preparada com essências de magnetismo e poder feminino. Passa por um cruzamento no altar da Lira, sendo ideal para rituais de atracção, abertura de caminhos amorosos e fortalecimento da autoestima.',

    image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=400',

    category: 'Consagrado',

    type: 'physical',

    stock: 12,

    status: 'disponível'

  },

  {

    id: 2,

    name: 'Óleo da Prosperidade',

    price: 57.00,

    shortDesc: 'Abertura de caminhos financeiros e abundância.',

    description: 'Composição herbal fina para abertura de caminhos e atracção de abundância financeira. Pode ser usado para untar velas, amuletos ou em banhos de brilho para atrair novas oportunidades.',

    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&q=80&w=400',

    category: 'Ritualístico',

    type: 'physical',

    stock: 0,

    status: 'esgotado'

  },

  {

    id: 3,

    name: 'Patuá de Proteção',

    price: 45.00,

    shortDesc: 'Amuleto de couro artesanal para defesa sagrada.',

    description: 'Amuleto costurado à mão em couro legítimo e preenchido com ervas de descarrego, minerais e símbolos sagrados. Funciona como um escudo vibratório denso contra inveja e demandas enviadas.',

    image: 'https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?auto=format&fit=crop&q=80&w=400',

    category: 'Amuleto',

    type: 'physical',

    stock: 5,

    status: 'disponível'

  }

];



const INITIAL_SERVICES = [

  {

    id: 's1',

    name: 'Consulta Vidas Passadas',

    price: 307.00,

    icon: <Eye className="w-8 h-8" />,

    description: 'Entenda carmas e conexões de vidas anteriores.',

    longDescription: 'Nesta consulta, utilizamos a força dos Exus e Pombagiras da Lira para aceder a memórias que a sua alma carrega de outras encarnações. O foco é identificar bloqueios cármicos que impedem a sua evolução atual e realizar o corte dessas amarras.',

    type: 'service'

  },

  {

    id: 's2',

    name: 'Consulta Completa',

    price: 247.00,

    icon: <TridentIcon className="w-8 h-8" />,

    description: 'Análise integral de todos os seus caminhos espirituais.',

    longDescription: 'A Consulta Completa oferece um panorama de 360 graus da sua vida. Através dos oráculos de Quimbanda, abrimos os caminhos para ouvir o que os seus guardiões têm a dizer sobre o seu momento presente, amor, saúde e finanças.',

    type: 'service'

  },

  {

    id: 's3',

    name: 'Consulta Emergencial',

    price: 347.00,

    icon: <Clock className="w-8 h-8" />,

    description: 'Atendimento prioritário em até 24h para crises.',

    longDescription: 'Para situações de urgência máxima que requerem o direcionamento imediato. Este atendimento fura a fila para garantir que não fica sem resposta num momento de desespero ou ataque espiritual agudo.',

    type: 'service'

  },

  {

    id: 's4',

    name: 'Consulta por Área',

    price: 147.00,

    icon: <Moon className="w-8 h-8" />,

    description: 'Foco num tema específico: Amor, Trabalho ou Saúde.',

    longDescription: 'Se tem uma pergunta objetiva sobre um campo específico da sua vida, esta consulta direcciona toda a energia para desvendar os mistérios apenas daquela área, oferecendo soluções focadas.',

    type: 'service'

  }

];



const App = () => {

  const [view, setView] = useState('home');

  const [products] = useState(INITIAL_PRODUCTS);

  const [services] = useState(INITIAL_SERVICES);

  const [selectedProduct, setSelectedProduct] = useState(null);

  const [cart, setCart] = useState([]);

  const [user, setUser] = useState(null);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isLightMode, setIsLightMode] = useState(false);

  const [cep, setCep] = useState('');

  const [shippingValue, setShippingValue] = useState(null);

  const [coupon, setCoupon] = useState('');

  const [discount, setDiscount] = useState(0);

  const [paymentMethod, setPaymentMethod] = useState('pix');

  const [isProcessing, setIsProcessing] = useState(false);

  const [isAdmin, setIsAdmin] = useState(false);



  // Lógica de Navegação Principal

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



  const removeFromCart = (id) => setCart(cart.filter(item => item.id !== id));

 

  const calculateShipping = () => { if (cep.length >= 8) setShippingValue(25.00); };

  const applyCoupon = () => { if (coupon.toUpperCase() === 'LIRA10') setDiscount(10); else alert('Cupom inválido.'); };



  const subtotal = useMemo(() => cart.reduce((acc, item) => acc + (item.price * item.quantity), 0), [cart]);

  const total = useMemo(() => {

    const base = subtotal + (shippingValue || 0);

    return base - (base * (discount / 100));

  }, [subtotal, shippingValue, discount]);



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



  const navigateService = (direction) => {

    const currentIndex = services.findIndex(s => s.id === selectedProduct.id);

    let nextIndex = direction === 'next' ? currentIndex + 1 : currentIndex - 1;

    if (nextIndex >= services.length) nextIndex = 0;

    if (nextIndex < 0) nextIndex = services.length - 1;

    setSelectedProduct(services[nextIndex]);

  };



  // Tema com Cores de Contraste Elevado e Tipografia Aprimorada

  const theme = {

    bg: isLightMode ? 'bg-[#fdf6e3]' : 'bg-[#050505]',

    text: isLightMode ? 'text-[#4a0404]' : 'text-[#f3f4f6]',

    textMuted: isLightMode ? 'text-[#7f1d1d]' : 'text-[#9ca3af]',

    card: isLightMode ? 'bg-white border border-[#c5a059]/40 shadow-xl' : 'bg-[#0a0a0a] border border-[#c5a059]/20 shadow-[0_4px_30px_rgba(0,0,0,0.8)]',

    header: isLightMode ? 'bg-[#4a0404] text-white shadow-md' : 'bg-[#050505]/95 border-b border-[#c5a059]/20 text-white',

    footer: isLightMode ? 'bg-[#310202] text-white border-t-8 border-[#c5a059]' : 'bg-black border-t border-[#c5a059]/20 text-white',

    accent: 'text-[#c5a059]'

  };



  // Componentes de UI (Botões e Inputs padronizados)

  const Button = ({ children, variant = 'primary', onClick, className = '', disabled }) => {

    const baseStyle = "flex items-center justify-center gap-3 px-8 py-4 font-bold uppercase tracking-widest text-xs rounded-sm transition-all duration-300 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {

      primary: isLightMode ? "bg-[#4a0404] text-white hover:bg-[#310202] shadow-lg" : "bg-[#4a0404] text-white border border-[#c5a059]/30 hover:bg-[#630606] shadow-[0_0_15px_rgba(74,4,4,0.4)]",

      secondary: isLightMode ? "bg-transparent border-2 border-[#4a0404] text-[#4a0404] hover:bg-[#4a0404]/5" : "bg-transparent border border-[#c5a059] text-[#c5a059] hover:bg-[#c5a059]/10",

      gold: "bg-[#c5a059] text-black hover:bg-white shadow-lg"

    };

    return (

      <button onClick={onClick} disabled={disabled} className={`${baseStyle} ${variants[variant]} ${className}`}>

        {children}

      </button>

    );

  };



  const Input = ({ label, type = "text", placeholder, value, onChange, required }) => (

    <div className="flex flex-col gap-2 w-full text-left">

      {label && <label className={`text-[10px] font-bold uppercase tracking-widest ${isLightMode ? 'text-[#4a0404]' : 'text-[#c5a059]'}`}>{label}</label>}

      <input

        type={type}

        placeholder={placeholder}

        value={value}

        onChange={onChange}

        required={required}

        className={`w-full p-4 text-sm rounded-sm outline-none transition-all duration-300 focus:ring-2 focus:ring-[#c5a059] ${isLightMode ? 'bg-white border border-gray-300 text-black placeholder-gray-400' : 'bg-[#111] border border-white/10 text-white placeholder-gray-600'}`}

      />

    </div>

  );



  const Header = () => (

    <header className={`fixed top-0 w-full z-[60] ${theme.header} backdrop-blur-md`}>

      <div className="max-w-7xl mx-auto px-6 h-20 md:h-24 flex items-center justify-between">

        <div className="flex items-center gap-4 cursor-pointer group" onClick={() => navigate('home')}>

          <div className={`w-10 h-10 border border-[#c5a059]/50 rounded-full flex items-center justify-center transition-transform duration-500 group-hover:rotate-12`}>

            <TridentIcon className={`w-5 h-5 ${isLightMode ? 'text-white' : 'text-[#c5a059]'}`} />

          </div>

          <div className="leading-none hidden sm:block">

            <h1 className="text-sm md:text-lg font-serif italic tracking-widest uppercase">Quimbanda M'bande</h1>

            <p className={`text-[8px] uppercase tracking-[0.4em] mt-1 font-bold ${isLightMode ? 'text-[#c5a059]' : 'text-[#c5a059]'}`}>Reino da Lira</p>

          </div>

        </div>



        <nav className="hidden lg:flex items-center gap-10 text-[10px] font-bold uppercase tracking-[0.2em] text-white/80">

          {['Início', 'Produtos', 'Serviços', 'Sobre', 'Contato'].map(item => (

            <button key={item} onClick={() => {

              if(item === 'Início') navigate('home');

              else if(item === 'Produtos') navigate('products');

              else if(item === 'Serviços') navigate('services-list');

              else if(item === 'Sobre') navigate('about-page');

              else { navigate('home'); setTimeout(() => document.getElementById('contato')?.scrollIntoView({behavior:'smooth'}), 100); }

            }} className="hover:text-[#c5a059] hover:scale-105 transition-all">{item}</button>

          ))}

        </nav>



        <div className="flex items-center gap-2 md:gap-4 text-white">

          <button onClick={() => setIsLightMode(!isLightMode)} className="p-2 hover:bg-white/10 rounded-full transition-all">{isLightMode ? <Moon size={20}/> : <Sun size={20}/>}</button>

          <button onClick={() => navigate(user ? 'customer-orders' : 'login')} className="p-2 hover:bg-white/10 rounded-full"><Users size={20} /></button>

          <button className="relative p-2 hover:bg-white/10 rounded-full" onClick={() => navigate('cart')}>

            <ShoppingBag size={20} />

            {cart.length > 0 && <span className="absolute top-0 right-0 bg-[#c5a059] text-black text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-lg">{cart.length}</span>}

          </button>

          <button className="lg:hidden p-2" onClick={() => setIsMenuOpen(true)}><Menu size={26}/></button>

        </div>

      </div>

    </header>

  );



  const MobileMenuOverlay = () => (

    <div className={`fixed inset-0 z-[70] ${isLightMode ? 'bg-[#4a0404]' : 'bg-[#050505]'} flex flex-col transition-transform duration-500 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} lg:hidden`}>

      <div className="h-20 px-6 flex items-center justify-between border-b border-white/10 text-white">

        <span className="uppercase text-xs font-bold tracking-widest text-[#c5a059]">Navegação</span>

        <button onClick={() => setIsMenuOpen(false)}><X size={32}/></button>

      </div>

      <div className="flex-grow flex flex-col items-center justify-center gap-10 text-white font-serif text-3xl italic uppercase tracking-widest">

        {['Início', 'Produtos', 'Serviços', 'Sobre', 'Contato'].map(item => (

          <button key={item} onClick={() => {

            if(item === 'Início') navigate('home');

            else if(item === 'Produtos') navigate('products');

            else if(item === 'Serviços') navigate('services-list');

            else if(item === 'Sobre') navigate('about-page');

            else { navigate('home'); setTimeout(() => document.getElementById('contato')?.scrollIntoView({behavior:'smooth'}), 100); }

            setIsMenuOpen(false);

          }} className="active:text-[#c5a059] transition-colors">{item}</button>

        ))}

      </div>

    </div>

  );



  const Footer = () => (

    <footer className={`${theme.footer} pt-20 pb-10 px-6 mt-auto transition-all`}>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

        <div className="text-center sm:text-left">

          <div className="flex items-center justify-center sm:justify-start gap-3 mb-6 text-[#c5a059]">

            <TridentIcon className="w-6 h-6" />

            <span className="text-sm font-bold tracking-[0.3em] uppercase font-serif">M'bande</span>

          </div>

          <p className="text-[11px] leading-loose text-white/70">Segurança e fundamento espiritual. Honramos as tradições do Reino da Lira em cada detalhe consagrado.</p>

        </div>

        <div className="text-center sm:text-left">

          <h4 className="text-[#c5a059] text-[10px] font-bold uppercase tracking-widest mb-6">Marca</h4>

          <ul className="space-y-4 text-[11px] uppercase tracking-widest text-white/60">

            <li className="cursor-pointer hover:text-white transition-colors" onClick={() => navigate('about-page')}>Sobre Nós</li>

            <li className="cursor-pointer hover:text-white transition-colors">Privacidade & Termos</li>

          </ul>

        </div>

        <div className="text-center sm:text-left">

          <h4 className="text-[#c5a059] text-[10px] font-bold uppercase tracking-widest mb-6">Suporte</h4>

          <ul className="space-y-4 text-[11px] uppercase tracking-widest text-white/60">

            <li className="cursor-pointer hover:text-white transition-colors" onClick={() => navigate('products')}>Produtos Físicos</li>

            <li className="cursor-pointer hover:text-white transition-colors" onClick={() => navigate('services-list')}>Consultas</li>

            <li className="cursor-pointer hover:text-white transition-colors" onClick={() => { navigate('home'); setTimeout(() => document.getElementById('contato')?.scrollIntoView({behavior:'smooth'}), 100); }}>Contato Direto</li>

          </ul>

        </div>

        <div className="flex flex-col items-center sm:items-start gap-8">

          <div className="flex gap-6 text-[#c5a059]">

            <div className="p-3 bg-white/5 rounded-full hover:bg-[#c5a059] hover:text-black transition-all cursor-pointer"><MessageCircle size={20}/></div>

          </div>

          <button onClick={() => navigate('admin-login')} className="text-[9px] uppercase font-bold border-b border-white/20 text-white/40 hover:text-white transition-all pb-1">Acesso Administrativo</button>

        </div>

      </div>

      <div className="text-center border-t border-white/10 pt-8 text-[9px] text-white/40 uppercase tracking-widest">

        © 2024 Quimbanda M'bande. Todos os direitos reservados.

      </div>

    </footer>

  );



  const renderContent = () => {

    switch (view) {

      // --- TELA INICIAL (HOME) ---

      case 'home':

        return (

          <div className="animate-in fade-in duration-700">

            <section className="relative h-[85vh] md:h-[95vh] flex items-center justify-center overflow-hidden">

              <div className={`absolute inset-0 bg-gradient-to-b ${isLightMode ? 'from-black/80 via-[#4a0404]/40' : 'from-black/95 via-[#4a0404]/30'} to-transparent z-10`} />

              <img src="https://images.unsplash.com/photo-1514306191717-452ec28c7814?auto=format&fit=crop&q=80&w=1600" className="absolute inset-0 w-full h-full object-cover grayscale opacity-40 scale-105" alt="Altar da Lira" />

              <div className="relative z-20 text-center px-4 max-w-5xl flex flex-col items-center">

                <div className="mb-6 flex justify-center text-[#c5a059]"><Moon size={48} strokeWidth={1.5} className="animate-pulse" /></div>

                <h2 className="text-4xl md:text-7xl font-serif text-white mb-8 tracking-tight italic uppercase leading-tight drop-shadow-2xl">

                  “Produtos preparados com <br className="hidden md:block"/><span className="text-[#c5a059]">fundamento real</span>.”

                </h2>

                <Button onClick={() => navigate('products')} variant="primary" className="px-12 md:px-16 py-5 md:py-6 shadow-2xl text-xs md:text-sm">

                  Explorar Catálogo Sagrado

                </Button>

              </div>

            </section>



            {/* Secção de Produtos Físicos */}

            <section id="produtos" className={`py-20 md:py-32 px-6 ${theme.bg} transition-all`}>

              <div className="max-w-7xl mx-auto">

                <div className="text-center mb-16 md:mb-20">

                  <h2 className={`text-3xl md:text-5xl font-serif italic ${isLightMode ? 'text-[#4a0404]' : 'text-[#c5a059]'}`}>Produtos Físicos</h2>

                  <div className={`w-20 h-1 ${isLightMode ? 'bg-[#4a0404]' : 'bg-[#c5a059]'} mx-auto mt-6 rounded-full`}></div>

                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">

                  {products.map(p => (

                    <div key={p.id} className={`${theme.card} p-6 rounded-md group hover:-translate-y-2 transition-transform duration-500`}>

                      <div className="relative h-64 md:h-80 overflow-hidden mb-8 rounded-sm cursor-pointer border-b border-[#c5a059]/10" onClick={() => navigate('details', p)}>

                        <img src={p.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110" alt={p.name} />

                        {p.status === 'esgotado' && <div className="absolute inset-0 bg-black/80 flex items-center justify-center"><span className="text-red-500 font-bold uppercase tracking-widest text-xs border border-red-500 px-4 py-2">Esgotado</span></div>}

                      </div>

                      <h4 className={`${theme.text} uppercase text-sm md:text-base font-bold mb-2 tracking-widest`}>{p.name}</h4>

                      <p className={`${theme.textMuted} text-xs mb-6 leading-relaxed line-clamp-2`}>{p.shortDesc}</p>

                      <div className="flex items-center justify-between border-t border-[#c5a059]/10 pt-6">

                        <p className={`font-serif text-xl md:text-2xl font-bold ${isLightMode ? 'text-[#4a0404]' : 'text-[#c5a059]'}`}>R$ {p.price.toFixed(2)}</p>

                        <div className="flex gap-2">

                           <Button onClick={() => navigate('details', p)} variant="secondary" className="px-5 py-3 text-[10px]">Ver</Button>

                           <Button onClick={() => addToCart(p)} variant="gold" className="px-4 py-3" disabled={p.status === 'esgotado'}><ShoppingCart size={18}/></Button>

                        </div>

                      </div>

                    </div>

                  ))}

                </div>

              </div>

            </section>



            {/* Secção de Serviços */}

            <section id="servicos" className={`py-20 md:py-32 px-6 ${isLightMode ? 'bg-[#4a0404] text-white' : 'bg-[#020202] text-white'} border-y border-[#c5a059]/20`}>

              <div className="max-w-7xl mx-auto">

                <div className="text-center mb-16 md:mb-24">

                   <h2 className="text-3xl md:text-5xl font-serif italic uppercase tracking-widest text-white">Serviços <span className="text-[#c5a059]">Espirituais</span></h2>

                   <div className="w-16 h-1 bg-[#c5a059] mx-auto mt-6 rounded-full"></div>

                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

                  {services.map(s => (

                    <div key={s.id} className={`${isLightMode ? 'bg-white text-[#4a0404]' : 'bg-[#0a0a0a]'} border border-[#c5a059]/30 p-10 flex flex-col items-center text-center group hover:border-[#c5a059] transition-all rounded-md shadow-2xl`}>

                      <div className="text-[#c5a059] mb-8 group-hover:scale-125 transition-transform duration-500">{s.icon}</div>

                      <h3 className="font-bold uppercase text-xs tracking-widest mb-4 h-8 flex items-center justify-center">{s.name}</h3>

                      <div className={`text-2xl font-serif font-black mb-8 ${isLightMode ? 'text-[#4a0404]' : 'text-[#c5a059]'}`}>R$ {s.price.toFixed(2)}</div>

                      <Button onClick={() => navigate('service-details', s)} variant={isLightMode ? "secondary" : "primary"} className="w-full text-[10px]">Saiba Mais</Button>

                    </div>

                  ))}

                </div>

              </div>

            </section>



            {/* Secção de Contato */}

            <section id="contato" className={`py-20 md:py-32 px-6 ${theme.bg}`}>

              <div className="max-w-2xl mx-auto text-center">

                <h2 className={`text-3xl md:text-4xl font-serif mb-12 italic ${theme.text}`}>Fale Conosco</h2>

                <form className={`space-y-6 p-8 md:p-12 rounded-md ${theme.card}`}>

                  <Input label="Seu Nome Completo" placeholder="Ex: Maria Joaquina" required />

                  <Input label="Seu E-mail" type="email" placeholder="maria@email.com" required />

                  <div className="flex flex-col gap-2 w-full text-left">

                    <label className={`text-[10px] font-bold uppercase tracking-widest ${isLightMode ? 'text-[#4a0404]' : 'text-[#c5a059]'}`}>A sua mensagem</label>

                    <textarea rows="4" className={`w-full p-4 text-sm rounded-sm outline-none focus:ring-2 focus:ring-[#c5a059] ${isLightMode ? 'bg-white border border-gray-300 text-black' : 'bg-[#111] border border-white/10 text-white'}`} placeholder="Como podemos ajudar?" required></textarea>

                  </div>

                  <Button variant="primary" className="w-full py-5 text-xs shadow-xl mt-4">Enviar Mensagem</Button>

                </form>

              </div>

            </section>

          </div>

        );



      // --- LISTAGEM DE PRODUTOS ---

      case 'products':

        return (

          <section className={`py-24 md:py-32 px-6 ${theme.bg} min-h-screen`}>

             <div className="max-w-7xl mx-auto">

                <div className="text-center mb-20">

                  <h2 className={`text-4xl md:text-6xl font-serif italic ${theme.text}`}>Coleção Completa</h2>

                  <div className={`w-24 h-1 ${isLightMode ? 'bg-[#4a0404]' : 'bg-[#c5a059]'} mx-auto mt-6 rounded-full`}></div>

                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">

                   {products.map(p => (

                      <div key={p.id} className={`${theme.card} p-6 md:p-8 rounded-md group hover:-translate-y-2 transition-all`}>

                         <div className="relative h-72 md:h-80 overflow-hidden mb-8 rounded-sm cursor-pointer" onClick={() => navigate('details', p)}>

                            <img src={p.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" />

                         </div>

                         <h4 className={`${theme.text} uppercase text-base font-bold mb-2 tracking-widest`}>{p.name}</h4>

                         <p className={`${theme.textMuted} text-xs mb-8 leading-relaxed`}>{p.shortDesc}</p>

                         <div className="flex items-center justify-between border-t border-[#c5a059]/20 pt-6">

                            <p className={`${isLightMode ? 'text-[#4a0404]' : 'text-[#c5a059]'} font-serif text-2xl font-bold`}>R$ {p.price.toFixed(2)}</p>

                            <Button onClick={() => addToCart(p)} variant="gold" className="px-5 py-3 shadow-lg"><ShoppingCart size={20}/></Button>

                         </div>

                      </div>

                   ))}

                </div>

             </div>

          </section>

        );



      // --- DETALHES DO PRODUTO FÍSICO ---

      case 'details':

        const item = selectedProduct;

        return (

          <div className="animate-in fade-in duration-500">

            <section className={`py-24 md:py-32 px-6 max-w-7xl mx-auto min-h-[80vh] ${theme.text}`}>

              <button onClick={() => navigate('products')} className="flex items-center gap-2 mb-10 text-[10px] uppercase tracking-widest font-bold hover:text-[#c5a059] transition-colors"><ArrowLeft size={16}/> Voltar à Loja</button>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start">

                <div className={`p-4 border ${isLightMode ? 'border-[#4a0404]/20 bg-white' : 'border-[#c5a059]/20 bg-[#0a0a0a]'} rounded-md shadow-2xl`}>

                  <img src={item.image} className="w-full h-[400px] md:h-[650px] object-cover grayscale opacity-90 rounded-sm" alt={item.name}/>

                </div>

                <div className="flex flex-col">

                  <span className="text-[#c5a059] text-[10px] font-bold uppercase tracking-[0.3em] mb-4">{item.category}</span>

                  <h2 className={`text-4xl md:text-5xl font-serif mb-6 italic ${theme.text}`}>{item.name}</h2>

                  <div className="text-3xl md:text-4xl font-bold mb-10 font-serif text-[#c5a059]">R$ {item.price.toFixed(2)}</div>

                 

                  <div className={`p-8 md:p-10 border-l-4 ${isLightMode ? 'border-[#4a0404] bg-[#4a0404]/5' : 'border-[#c5a059] bg-white/5'} mb-12 rounded-r-md`}>

                     <h3 className="font-bold uppercase text-[10px] tracking-widest mb-4">Sobre o Produto</h3>

                     <p className={`text-sm md:text-base leading-relaxed ${theme.textMuted}`}>{item.description}</p>

                  </div>



                  <div className="space-y-4">

                    <Button onClick={() => addToCart(item)} variant="primary" className="w-full py-6 text-sm">

                      <ShoppingCart size={20} /> Adicionar ao Carrinho

                    </Button>

                    <Button onClick={() => window.open(`https://wa.me/5511930027669?text=Dúvidas sobre o ${item.name}`, '_blank')} variant="secondary" className="w-full py-5 text-xs">

                      Consultar Zeladoria via WhatsApp

                    </Button>

                  </div>

                </div>

              </div>

            </section>

           

            {/* Aba de Exploração Dinâmica (Apenas Físicos) */}

            <section className={`py-20 md:py-32 px-6 border-t ${isLightMode ? 'bg-[#4a0404] border-[#c5a059]/50' : 'bg-[#0a0a0a] border-[#c5a059]/10'}`}>

               <div className="max-w-7xl mx-auto">

                  <h3 className="text-[#c5a059] text-center font-serif text-3xl md:text-4xl mb-16 italic">Pode também <span className="text-white">Interessar</span></h3>

                  <div className="relative overflow-x-auto pb-8 scrollbar-hide snap-x">

                    <div className="flex gap-8 w-max px-4">

                      {products.filter(other => other.id !== item.id).map(prod => (

                        <div key={prod.id} className={`w-72 md:w-80 p-6 ${isLightMode ? 'bg-white' : 'bg-[#111]'} border border-[#c5a059]/30 rounded-md shadow-xl snap-center hover:-translate-y-2 transition-transform`}>

                          <img src={prod.image} className="w-full h-48 object-cover grayscale mb-6 rounded-sm" />

                          <h4 className={`${isLightMode ? 'text-[#4a0404]' : 'text-white'} font-bold uppercase text-sm mb-2 text-center tracking-widest`}>{prod.name}</h4>

                          <p className="text-[#c5a059] text-center font-serif text-lg font-bold mb-6">R$ {prod.price.toFixed(2)}</p>

                          <Button onClick={() => navigate('details', prod)} variant={isLightMode ? "primary" : "secondary"} className="w-full py-4 text-[10px]">Ver Detalhes</Button>

                        </div>

                      ))}

                    </div>

                  </div>

               </div>

            </section>

          </div>

        );



      // --- SERVIÇOS E CARROSSEL "SAIBA MAIS" ---

      case 'services-list':

        return (

          <section className={`py-24 md:py-32 px-6 max-w-7xl mx-auto min-h-screen ${theme.bg}`}>

             <div className="text-center mb-16 md:mb-20">

               <h2 className={`text-4xl md:text-5xl font-serif italic ${theme.text}`}>Catálogo de <span className="text-[#c5a059]">Serviços</span></h2>

               <div className={`w-20 h-1 ${isLightMode ? 'bg-[#4a0404]' : 'bg-[#c5a059]'} mx-auto mt-6 rounded-full`}></div>

             </div>

             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">

                {services.map(s => (

                  <div key={s.id} className={`${theme.card} p-10 text-center hover:-translate-y-2 transition-transform duration-300 rounded-md flex flex-col`}>

                     <div className="text-[#c5a059] mb-8 flex justify-center">{s.icon}</div>

                     <h3 className={`font-bold uppercase text-sm tracking-widest mb-4 ${theme.text}`}>{s.name}</h3>

                     <p className={`text-xs mb-8 leading-relaxed flex-grow ${theme.textMuted}`}>{s.description}</p>

                     <div className={`text-3xl font-serif font-bold mb-8 ${isLightMode ? 'text-[#4a0404]' : 'text-[#c5a059]'}`}>R$ {s.price.toFixed(2)}</div>

                     <Button onClick={() => navigate('service-details', s)} variant="primary" className="w-full py-4 text-[10px]">Saiba Mais</Button>

                  </div>

                ))}

             </div>

          </section>

        );



      case 'service-details':

        const s = selectedProduct;

        return (

          <section className={`py-24 md:py-32 px-6 min-h-screen flex flex-col justify-center animate-in fade-in duration-500 ${theme.bg}`}>

             <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12 w-full">

                <button onClick={() => navigateService('prev')} className={`p-4 rounded-full border border-[#c5a059] text-[#c5a059] hover:bg-[#c5a059] hover:text-black transition-colors hidden md:block`}><ChevronLeft size={36} /></button>

               

                <div className={`${theme.card} p-8 md:p-16 text-center flex-grow relative overflow-hidden rounded-md w-full`}>

                   <h2 className={`text-3xl md:text-5xl font-serif mb-6 italic ${theme.text}`}>{s.name}</h2>

                   <div className={`text-3xl font-bold mb-10 text-[#c5a059] font-serif`}>R$ {s.price.toFixed(2)}</div>

                   <div className={`space-y-6 text-sm md:text-base leading-relaxed max-w-2xl mx-auto text-justify border-t border-[#c5a059]/20 pt-10 ${theme.textMuted}`}>

                      <p className="font-bold text-center mb-6 uppercase tracking-widest text-[#c5a059] text-xs">O Fundamento</p>

                      <p>{s.longDescription}</p>

                   </div>

                   <div className="mt-12 md:mt-16">

                      <Button onClick={() => window.open(`https://wa.me/5511930027669?text=Desejo agendar a consulta: ${s.name}`, '_blank')} variant="primary" className="px-10 py-6 md:w-auto w-full mx-auto shadow-xl bg-green-700 hover:bg-green-800 border-none text-white">

                         <MessageCircle size={22}/> Agendar pelo WhatsApp

                      </Button>

                   </div>

                </div>



                <button onClick={() => navigateService('next')} className={`p-4 rounded-full border border-[#c5a059] text-[#c5a059] hover:bg-[#c5a059] hover:text-black transition-colors hidden md:block`}><ChevronRight size={36} /></button>

               

                {/* Controlos Mobile Carrossel */}

                <div className="flex justify-between w-full md:hidden mt-6">

                  <Button onClick={() => navigateService('prev')} variant="secondary" className="px-6 py-3"><ChevronLeft size={20}/></Button>

                  <Button onClick={() => navigateService('next')} variant="secondary" className="px-6 py-3"><ChevronRight size={20}/></Button>

                </div>

             </div>

             <div className="flex justify-center mt-12 gap-3">

                {services.map((item) => (

                  <div key={item.id} className={`w-2 h-2 rounded-full transition-all ${item.id === s.id ? 'bg-[#c5a059] w-8' : 'bg-gray-400'}`} />

                ))}

             </div>

          </section>

        );



      // --- CARRINHO DE COMPRAS ---

      case 'cart':

        return (

          <section className={`py-24 md:py-32 px-6 max-w-6xl mx-auto min-h-[85vh] ${theme.bg}`}>

            <h2 className={`text-4xl font-serif mb-16 flex items-center gap-4 italic ${theme.text}`}><ShoppingBag className="text-[#c5a059]" size={36} /> Seu Altar de Compras</h2>

            {cart.length === 0 ? (

              <div className={`${theme.card} text-center py-24 border-dashed rounded-md`}>

                <p className={`${theme.textMuted} uppercase text-xs tracking-widest mb-8 font-bold`}>O altar do carrinho está vazio...</p>

                <Button onClick={() => navigate('products')} variant="primary" className="mx-auto px-12">Explorar Loja</Button>

              </div>

            ) : (

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                <div className="lg:col-span-2 space-y-6">

                  {cart.map(i => (

                    <div key={i.id} className={`${theme.card} p-6 md:p-8 flex flex-col sm:flex-row items-center gap-8 rounded-md`}>

                      <img src={i.image} className="w-24 h-24 object-cover grayscale rounded-sm border border-[#c5a059]/30" alt={i.name} />

                      <div className="flex-grow text-center sm:text-left">

                        <h4 className={`font-bold uppercase text-xs md:text-sm tracking-widest ${theme.text}`}>{i.name}</h4>

                        <p className={`text-[#c5a059] text-sm mt-2 font-bold`}>R$ {i.price.toFixed(2)}</p>

                        <button onClick={() => removeFromCart(i.id)} className="text-red-600 mt-4 flex items-center justify-center sm:justify-start gap-2 text-[10px] font-bold uppercase hover:text-red-800 transition-colors"><Trash2 size={16}/> Remover</button>

                      </div>

                      <div className={`font-serif font-bold text-2xl ${theme.text}`}>R$ {(i.price * i.quantity).toFixed(2)}</div>

                    </div>

                  ))}

                  <div className={`${theme.card} p-8 md:p-10 rounded-md`}>

                     <h4 className={`text-xs font-bold uppercase tracking-widest mb-6 flex items-center justify-center sm:justify-start gap-3 ${theme.text}`}><Truck size={20} className="text-[#c5a059]"/> Cálculo de Envio (SEDEX)</h4>

                     <div className="flex flex-col sm:flex-row gap-4">

                        <Input placeholder="Digite seu CEP (Ex: 00000-000)" value={cep} onChange={(e) => setCep(e.target.value)} />

                        <Button onClick={calculateShipping} variant="gold" className="px-10 h-[52px]">Calcular</Button>

                     </div>

                     {shippingValue && <p className="mt-6 text-sm font-bold text-green-600 text-center sm:text-left animate-in fade-in">✓ Frete Simulado: R$ 25,00 (Entrega em 3 dias úteis)</p>}

                  </div>

                </div>

                <div className={`${theme.card} p-8 md:p-10 h-fit lg:sticky lg:top-32 rounded-md`}>

                  <h3 className={`font-bold uppercase text-xs mb-8 pb-6 border-b border-[#c5a059]/20 ${theme.text}`}>Resumo do Pedido</h3>

                  <div className={`space-y-6 mb-8 text-sm uppercase tracking-widest ${theme.textMuted}`}>

                    <div className="flex justify-between"><span>Subtotal</span> <span>R$ {subtotal.toFixed(2)}</span></div>

                    <div className="flex justify-between"><span>Envio</span> <span>{shippingValue ? `R$ ${shippingValue.toFixed(2)}` : 'Pendente'}</span></div>

                  </div>

                  <div className={`flex justify-between text-2xl md:text-3xl font-serif font-bold mb-10 border-t border-[#c5a059]/20 pt-8 ${theme.text}`}><span>Total</span> <span className="text-[#c5a059]">R$ {total.toFixed(2)}</span></div>

                  <Button onClick={() => navigate('checkout')} variant="primary" className="w-full py-6">Ir para o Checkout</Button>

                </div>

              </div>

            )}

          </section>

        );



      case 'checkout':

        return (

          <section className={`py-24 md:py-32 px-6 max-w-6xl mx-auto min-h-screen ${theme.bg}`}>

            <h2 className={`text-4xl font-serif mb-12 italic ${theme.text} text-center md:text-left`}>Finalização</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

              <div className="space-y-12">

                <div className={`${theme.card} p-8 rounded-md`}>

                  <h3 className={`text-xs font-bold uppercase tracking-widest mb-6 ${theme.text}`}>Dados de Entrega</h3>

                  <div className="space-y-6">

                    <Input label="Nome Completo" defaultValue={user?.name} />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                      <Input label="E-mail" type="email" defaultValue={user?.email} />

                      <Input label="Telefone" defaultValue={user?.phone} />

                    </div>

                    <Input label="Endereço Completo (Rua, Número, Complemento)" />

                  </div>

                </div>

                <div className={`${theme.card} p-8 rounded-md`}>

                   <h3 className={`text-xs font-bold uppercase tracking-widest mb-6 ${theme.text}`}>Cupom de Desconto</h3>

                   <div className="flex gap-4">

                      <Input placeholder="Ex: LIRA10" value={coupon} onChange={(e) => setCoupon(e.target.value)} />

                      <Button onClick={applyCoupon} variant="secondary" className="px-8 h-[52px]">Aplicar</Button>

                   </div>

                   {discount > 0 && <p className="mt-4 text-green-600 text-xs font-bold uppercase tracking-widest">✓ Cupom Aplicado com Sucesso!</p>}

                </div>

              </div>

              <div className={`${theme.card} p-8 md:p-12 h-fit rounded-md shadow-2xl`}>

                <h3 className={`font-bold uppercase text-sm mb-8 pb-6 border-b border-[#c5a059]/30 ${theme.text}`}>Resumo Final</h3>

                <div className={`space-y-6 mb-10 text-sm uppercase tracking-widest ${theme.textMuted}`}>

                  <div className="flex justify-between"><span>Subtotal Itens</span> <span>R$ {subtotal.toFixed(2)}</span></div>

                  {shippingValue && <div className="flex justify-between"><span>Frete SEDEX</span> <span>R$ {shippingValue.toFixed(2)}</span></div>}

                  {discount > 0 && <div className="flex justify-between text-green-600 font-bold"><span>Desconto ({discount}%)</span> <span>- R$ {((subtotal + shippingValue) * (discount/100)).toFixed(2)}</span></div>}

                  <div className={`flex justify-between text-3xl font-serif font-bold border-t border-[#c5a059]/20 pt-8 ${theme.text}`}><span>Total</span> <span className="text-[#c5a059]">R$ {total.toFixed(2)}</span></div>

                </div>

                <Button onClick={() => navigate('payment')} variant="primary" className="w-full py-6 shadow-xl">Prosseguir para Pagamento</Button>

              </div>

            </div>

          </section>

        );



      case 'payment':

        return (

          <section className="py-32 px-6 flex items-center justify-center min-h-screen bg-gray-100">

             <div className="max-w-md w-full bg-white p-10 rounded-md shadow-2xl text-center animate-in zoom-in duration-500">

                <div className="bg-[#009ee3] h-16 flex items-center justify-center -mx-10 -mt-10 mb-10 rounded-t-md">

                   <span className="text-white font-bold italic text-2xl tracking-tight">mercado pago</span>

                </div>

                <h3 className="text-gray-800 font-bold text-xl mb-2 font-sans">Simulação de Pagamento</h3>

                <p className="text-gray-500 text-sm mb-10 font-bold tracking-widest uppercase">Valor: R$ {total.toFixed(2)}</p>

                <div className="space-y-4 mb-10 text-left">

                   <div onClick={() => setPaymentMethod('pix')} className={`p-5 border-2 rounded-md flex items-center gap-5 cursor-pointer transition-all ${paymentMethod === 'pix' ? 'border-[#009ee3] bg-blue-50' : 'border-gray-200 hover:bg-gray-50'}`}>

                      <div className="bg-blue-100 p-3 rounded-full text-blue-600"><Smartphone size={24}/></div>

                      <div><p className="font-bold text-gray-900 text-sm">Pix</p><p className="text-[10px] text-gray-500 uppercase mt-1">Aprovação imediata</p></div>

                   </div>

                   <div onClick={() => setPaymentMethod('card')} className={`p-5 border-2 rounded-md flex items-center gap-5 cursor-pointer transition-all ${paymentMethod === 'card' ? 'border-[#009ee3] bg-blue-50' : 'border-gray-200 hover:bg-gray-50'}`}>

                      <div className="bg-green-100 p-3 rounded-full text-green-600"><CreditCard size={24}/></div>

                      <div><p className="font-bold text-gray-900 text-sm">Cartão de Crédito</p><p className="text-[10px] text-gray-500 uppercase mt-1">Até 12x Sem Juros</p></div>

                   </div>

                </div>

                <button onClick={handlePayment} disabled={isProcessing} className="w-full py-5 bg-[#009ee3] text-white font-bold rounded-md shadow-lg hover:bg-blue-600 transition-all text-xs uppercase tracking-widest disabled:opacity-50">

                  {isProcessing ? 'A Processar...' : 'Confirmar e Pagar'}

                </button>

             </div>

          </section>

        );



      case 'success':

        return (

          <section className={`py-40 px-6 max-w-2xl mx-auto text-center min-h-screen ${theme.bg}`}>

             <div className="flex justify-center mb-10 text-[#c5a059] animate-bounce"><CheckCircle size={80} strokeWidth={1.5} /></div>

             <h2 className={`text-4xl md:text-5xl font-serif mb-6 italic ${theme.text}`}>Pedido Confirmado!</h2>

             <p className={`text-[#c5a059] text-sm font-bold tracking-widest mb-12`}>O seu pedido foi recebido no Reino da Lira.</p>

             <div className={`${theme.card} p-10 text-left mb-12 rounded-md relative overflow-hidden`}>

                <div className="absolute -right-6 -top-6 opacity-5 pointer-events-none text-[#c5a059]"><TridentIcon size={150}/></div>

                <div className="flex justify-between text-xs text-gray-500 uppercase mb-6 pb-4 border-b border-[#c5a059]/20 font-bold"><span>ID do Pedido</span> <span className={`${theme.text}`}>#QM-1099</span></div>

                <div className="flex justify-between text-xs text-gray-500 uppercase mb-4 font-bold"><span>Status</span> <span className="text-yellow-600 italic">Preparação</span></div>

                <p className={`text-xs leading-relaxed mt-8 border-t border-[#c5a059]/20 pt-6 ${theme.textMuted}`}>Os seus itens estão a ser devidamente separados e consagrados. O código de rastreamento será enviado em breve para o seu e-mail.</p>

             </div>

             <Button onClick={() => navigate('home')} variant="primary" className="mx-auto px-12">Retornar à Home</Button>

          </section>

        );



      case 'login':

        return (

          <section className={`py-32 md:py-48 px-6 max-w-sm mx-auto min-h-screen flex flex-col justify-center ${theme.bg}`}>

             <div className={`${theme.card} p-8 md:p-12 w-full rounded-md`}>

                <h2 className={`text-3xl font-serif text-center italic mb-10 ${theme.text}`}>Acesso ao Templo</h2>

                <form className="space-y-6" onSubmit={e => { e.preventDefault(); setUser({ name: 'Maryana Oliveira', email: 'mlopeslucariello@gmail.com' }); navigate('home'); }}>

                  <Input label="E-mail" placeholder="seu@email.com" required />

                  <Input label="Palavra-passe" type="password" placeholder="******" required />

                  <Button variant="primary" className="w-full mt-4">Entrar</Button>

                  <div className="flex flex-col gap-4 text-[10px] uppercase tracking-widest font-bold text-center mt-8 pt-6 border-t border-[#c5a059]/20">

                     <span className="cursor-pointer text-[#c5a059] hover:underline" onClick={() => navigate('register')}>Criar Nova Conta</span>

                     <span className={`cursor-pointer ${theme.textMuted} hover:text-[#c5a059]`} onClick={() => navigate('forgot-password')}>Esqueci a Senha</span>

                  </div>

                </form>

             </div>

          </section>

        );



      case 'admin-login':

        return (

          <section className="py-48 px-6 max-w-sm mx-auto min-h-screen text-center bg-[#050505] text-white">

             <div className="w-20 h-20 border border-[#c5a059] rounded-full flex items-center justify-center mx-auto mb-10 text-[#c5a059] shadow-[0_0_20px_rgba(197,160,89,0.2)]"><Lock size={32}/></div>

             <h2 className="text-xl font-bold uppercase tracking-[0.4em] mb-12 text-[#c5a059]">Acesso Interno</h2>

             <form className="space-y-6" onSubmit={e => { e.preventDefault(); setIsAdmin(true); navigate('admin-dash'); }}>

                <Input placeholder="UTILIZADOR" type="text" />

                <Input placeholder="PALAVRA-PASSE MESTRA" type="password" />

                <Button variant="gold" className="w-full mt-8">Aceder Painel</Button>

             </form>

          </section>

        );



      case 'admin-dash':

        return (

          <div className="flex min-h-screen bg-[#050505] text-white font-sans">

             <div className="w-64 border-r border-white/10 p-8 hidden md:flex flex-col gap-12 bg-[#0a0a0a]">

                <div className="flex items-center gap-4 text-[#c5a059]"><TridentIcon className="w-8 h-8"/><span className="font-black uppercase text-xs tracking-widest">Painel M'bande</span></div>

                <nav className="flex flex-col gap-4 text-xs font-bold uppercase tracking-widest text-gray-500">

                   <button className="text-left text-[#c5a059] bg-[#c5a059]/10 p-4 rounded-sm">Dashboard</button>

                   <button className="text-left hover:text-white p-4">Produtos</button>

                   <button className="text-left hover:text-white p-4">Pedidos</button>

                   <button onClick={() => { setIsAdmin(false); navigate('home'); }} className="text-left text-red-700 p-4 mt-10">Encerrar Sessão</button>

                </nav>

             </div>

             <div className="flex-grow p-8 md:p-12 overflow-y-auto">

                <h2 className="text-2xl font-serif italic text-[#c5a059] mb-10">Visão Geral</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">

                   {/* Componente StatCard Inline para o Admin */}

                   {[ {t: "Pedidos", v: "458"}, {t: "Pendentes", v: "12", c: "text-red-500"}, {t: "Stock", v: "89"}, {t: "Faturação", v: "R$ 15k"} ].map(stat => (

                      <div key={stat.t} className="bg-[#0a0a0a] border border-[#c5a059]/20 p-6 rounded-sm text-center">

                         <div className="text-[10px] uppercase font-bold text-gray-500 mb-2">{stat.t}</div>

                         <div className={`text-3xl font-black ${stat.c || 'text-white'}`}>{stat.v}</div>

                      </div>

                   ))}

                </div>

                <div className="bg-[#0a0a0a] border border-[#c5a059]/20 p-8 rounded-sm">

                   <h3 className="text-white font-black uppercase text-xs mb-8 tracking-widest">Atividade Recente</h3>

                   <div className="flex justify-between p-4 border-b border-white/5 text-[10px] uppercase font-bold text-gray-400 hover:bg-white/5 transition-colors cursor-pointer">

                      <span>Maryana Oliveira realizou pedido #QM-1099</span><span className="text-[#c5a059]">R$ 134,90</span>

                   </div>

                </div>

             </div>

          </div>

        );



      default:

        return <div className={`py-48 text-center uppercase tracking-widest min-h-screen font-bold ${theme.text}`}>Templo em Construção...</div>;

    }

  };



  return (

    <div className={`min-h-screen flex flex-col ${theme.bg} transition-colors duration-700 selection:bg-[#c5a059] selection:text-black font-sans`}>

      {!view.startsWith('admin-') && <Header />}

     

      <main className="flex-grow pt-20">

        {renderContent()}

      </main>



      {!view.startsWith('admin-') && !['payment', 'success', 'checkout'].includes(view) && <Footer />}



      {/* Botão Flutuante do WhatsApp */}

      {!view.startsWith('admin-') && (

        <a

          href="https://wa.me/5511930027669"

          target="_blank"

          className="fixed bottom-6 right-6 md:bottom-8 md:right-8 w-14 h-14 md:w-16 md:h-16 bg-green-600 rounded-full flex items-center justify-center text-white shadow-2xl z-50 hover:scale-110 active:scale-90 transition-transform"

        >

          <MessageCircle size={28} md:size={32} fill="currentColor" />

        </a>

      )}

    </div>

  );

};



export default App;