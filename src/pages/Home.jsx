// src/pages/Home.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Moon } from 'lucide-react';
import { PRODUCTS, SERVICES, FEEDBACKS } from '../data/db';

const Home = ({ isLightMode, theme }) => {
  const navigate = useNavigate();

  return (
    <div className="animate-in fade-in duration-700">
      {/* 1. BANNER PRINCIPAL */}
      <section className="relative h-[85vh] md:h-[95vh] flex items-center justify-center overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-b ${isLightMode ? 'from-[#4a0404]/90 via-[#730808]/40' : 'from-[#0a0101]/95 via-[#1f0505]/60'} to-transparent z-10`} />
        <img src="https://images.unsplash.com/photo-1514306191717-452ec28c7814?auto=format&fit=crop&q=80&w=1600" className="absolute inset-0 w-full h-full object-cover grayscale opacity-30 scale-105" alt="Altar" />
        <div className="relative z-20 text-center px-4 max-w-5xl flex flex-col items-center">
          <div className="mb-6 md:mb-10 flex justify-center text-[#c5a059]"><Moon size={48} strokeWidth={1} className="animate-pulse" /></div>
          <h2 className={`text-4xl md:text-7xl font-serif mb-8 tracking-tight italic uppercase leading-tight drop-shadow-2xl ${isLightMode ? 'text-[#f4ebe1]' : 'text-white'}`}>Mameto <span className="text-[#c5a059]">M'bande</span></h2>
          <p className={`text-xs md:text-lg uppercase tracking-[0.4em] mb-12 font-bold ${isLightMode ? 'text-[#e8dccc]' : 'text-[#cba693]'}`}>Cartomancia, Búzios e Magias.</p>
        </div>
      </section>

      {/* 2. PRÉVIA DE PRODUTOS */}
      <section className={`py-20 px-4 md:px-6 ${theme.bg}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className={`text-3xl md:text-5xl font-serif italic mb-4 ${theme.text}`}>Axé <span className="text-[#c5a059]">Consagrado</span></h2>
            <div className={`w-24 h-[2px] mx-auto ${isLightMode ? 'bg-[#4a0404]' : 'bg-[#c5a059]'}`}></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {PRODUCTS.slice(0,3).map(p => (
              <div key={p.id} className={`${theme.card} p-4 rounded-md cursor-pointer group`} onClick={() => navigate(`/produto/${p.id}`)}>
                <div className="relative h-64 overflow-hidden bg-black/40">
                  <img src={p.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" alt={p.name}/>
                </div>
                <h4 className={`${theme.text} uppercase text-xs font-bold mt-4 tracking-widest line-clamp-1`}>{p.name}</h4>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <button onClick={() => navigate('/produtos')} className="px-8 py-3 text-[10px] font-black uppercase tracking-widest border border-[#c5a059] text-[#c5a059] hover:bg-[#c5a059]/10">Ver Catálogo</button>
          </div>
        </div>
      </section>

      {/* 3. PRÉVIA DE RITUAIS */}
      <section className={`py-20 px-4 md:px-6 border-y border-[#c5a059]/20 ${isLightMode ? 'bg-[#dccbb8]' : 'bg-[#0a0101]'}`}>
        <div className="max-w-7xl mx-auto text-center">
          <h2 className={`text-3xl md:text-5xl font-serif italic mb-10 ${isLightMode ? 'text-[#4a0404]' : 'text-white'}`}>Últimos <span className="text-[#c5a059]">Rituais</span></h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.slice(0,4).map(s => (
              <div key={s.id} className={`${theme.card} p-6 text-center group cursor-pointer`} onClick={() => navigate(`/servico/${s.id}`)}>
                <h3 className={`${theme.text} font-black uppercase text-[10px] tracking-widest mb-3 h-10 flex items-center justify-center`}>{s.name}</h3>
                <div className={`${isLightMode ? 'text-[#730808]' : 'text-[#cba693]'} text-lg font-serif font-black`}>R$ {s.price.toFixed(2)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. NOVA SECÇÃO: FEEDBACKS / PROVA SOCIAL */}
      <section className={`py-24 px-4 md:px-6 ${theme.bg}`}>
        <div className="max-w-7xl mx-auto text-center">
          <h2 className={`text-3xl md:text-5xl font-serif italic mb-4 ${theme.text}`}>O Que Dizem os <span className="text-[#c5a059]">Consulentes</span></h2>
          <p className={`text-[10px] uppercase tracking-widest mb-16 ${theme.textMuted}`}>Testemunhos reais de quem confiou na nossa Magia</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {FEEDBACKS.map(fb => (
              <div key={fb.id} className="relative h-96 border border-[#c5a059]/30 rounded-md overflow-hidden shadow-xl hover:-translate-y-2 transition-transform">
                {/* Aqui entrarão os prints reais do WhatsApp */}
                <img src={fb.image} alt={fb.alt} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;