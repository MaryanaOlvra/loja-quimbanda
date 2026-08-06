import React from 'react';
import { ShoppingBag, Sparkles, Flame, Eye, ArrowRight, Star } from 'lucide-react';

const Home = () => {
  // Dados reais extraídos das artes da Quimbanda M'bande
  const servicos = [
    { id: 1, nome: "Consulta Búzios de Exu", desc: "Todas as áreas da vida", preco: "297,00", icon: <Eye size={28} strokeWidth={1.5} /> },
    { id: 2, nome: "Ritual de Destruição", desc: "Dona Caveira", preco: "97,00", icon: <Flame size={28} strokeWidth={1.5} /> },
    { id: 3, nome: "Ritual de Virada", desc: "Rosa de Ouro", preco: "Consultar", icon: <Sparkles size={28} strokeWidth={1.5} /> },
    { id: 4, nome: "Curso de Baralho", desc: "Acesso vitalício", preco: "Consultar", icon: <Star size={28} strokeWidth={1.5} /> },
  ];

  const produtos = [
    // Usando placeholders temporários premium (unsplash) que combinam com a paleta
    { id: 101, nome: "Perfume Sete Saias", desc: "Atração e Magnetismo", preco: "130,15", img: "https://images.unsplash.com/photo-1594035987173-1f31f2474587?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" }, 
    { id: 102, nome: "Óleo de Prosperidade", desc: "Rosa de Ouro", preco: "101,65", img: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" }, 
    { id: 103, nome: "Banho Conexão Feminina", desc: "Ritual Mulheres", preco: "97,00", img: "https://images.unsplash.com/photo-1615397323136-1e0e8549ce6b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" }, 
    { id: 104, nome: "Pó das Feiticeiras", desc: "Mediunidade", preco: "130,15", img: "https://images.unsplash.com/photo-1606314811822-540bb96ea78e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" }, 
  ];

  return (
    <div className="min-h-screen bg-[#050505] font-sans text-white">

      {/* HERO SECTION - Premium */}
      <section className="relative w-full py-32 px-4 flex flex-col items-center justify-center overflow-hidden">
        {/* Efeito de Fundo Luxuoso */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#4a0404]/30 via-[#050505] to-[#050505] z-0"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 z-0"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center mt-8">
          <span className="text-[#c5a059] tracking-[0.4em] text-[10px] md:text-xs font-bold uppercase mb-6 border border-[#c5a059]/30 px-6 py-2 rounded-full shadow-[0_0_15px_rgba(197,160,89,0.1)]">
            Templo Cabaré das Sete Saias
          </span>

          <h1 className="text-5xl md:text-7xl font-[Playfair_Display] font-bold text-white mb-6 leading-tight drop-shadow-2xl">
            A Força da <span className="text-[#c5a059] italic font-light">Quimbanda</span> <br/>
            em suas mãos
          </h1>

          <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            Artigos consagrados, rituais e oráculos direcionados pela Mameto M'bande. 
            Desperte o magnetismo, abra seus caminhos e transforme sua realidade.
          </p>

          <button className="group relative px-8 py-4 bg-[#c5a059] text-[#050505] font-bold uppercase tracking-widest text-xs hover:bg-white transition-all duration-500 overflow-hidden shadow-[0_0_20px_rgba(197,160,89,0.2)]">
            <span className="relative z-10 flex items-center gap-2">
              Agendar Consulta <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </div>
      </section>

      {/* RITUAIS E CONSULTAS - Grid Minimalista Escuro */}
      <section className="py-24 px-4 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-[Playfair_Display] text-white mb-4">Rituais & Consultas</h2>
            <div className="h-[1px] w-16 bg-[#c5a059] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicos.map((item) => (
              <div key={item.id} className="bg-[#050505] border border-white/5 p-8 flex flex-col items-center text-center hover:border-[#c5a059]/50 transition-all duration-500 group relative overflow-hidden">
                {/* Linha de topo decorativa (brilha no hover) */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#c5a059]/20 to-transparent group-hover:via-[#c5a059] transition-all"></div>

                <div className="text-[#4a0404] group-hover:text-[#c5a059] transition-colors mb-6 mt-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-[Playfair_Display] text-white mb-3 tracking-wide">{item.nome}</h3>
                <p className="text-xs text-gray-500 mb-8 flex-grow font-light">{item.desc}</p>
                <div className="text-[#c5a059] font-semibold text-xl mb-8 font-[Playfair_Display]">
                  {item.preco !== "Consultar" ? `R$ ${item.preco}` : "Sob Consulta"}
                </div>
                <button className="w-full border border-white/10 text-gray-300 py-3 text-[10px] uppercase tracking-[0.2em] group-hover:border-[#c5a059] group-hover:text-[#c5a059] transition-all duration-300">
                  Detalhes
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUTOS CONSAGRADOS - Layout de Vitrine Premium */}
      <section className="py-24 px-4 bg-[#050505] border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-[Playfair_Display] text-white mb-4">Artigos Consagrados</h2>
              <div className="h-[1px] w-16 bg-[#4a0404]"></div>
            </div>
            <button className="text-[#c5a059] text-xs font-bold uppercase tracking-widest hover:text-white transition-colors border-b border-[#c5a059]/30 pb-1">
              Ver todo o catálogo
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {produtos.map((prod) => (
              <div key={prod.id} className="group cursor-pointer">
                {/* Imagem do Produto com Overlay */}
                <div className="relative w-full aspect-[4/5] bg-[#0a0a0a] border border-white/5 mb-6 overflow-hidden">
                  <img 
                    src={prod.img} 
                    alt={prod.nome} 
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 saturate-50 group-hover:saturate-100"
                  />
                  {/* Borda interna brilhante no hover */}
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/10 group-hover:ring-[#c5a059]/50 transition-all duration-500"></div>
                  
                  {/* Botão flutuante Quick Add */}
                  <button className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-[#050505]/90 backdrop-blur-md border border-[#c5a059]/50 text-[#c5a059] px-6 py-3 text-[10px] uppercase tracking-widest opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-2 hover:bg-[#c5a059] hover:text-black font-bold whitespace-nowrap">
                    <ShoppingBag size={14} /> Adicionar
                  </button>
                </div>
                
                {/* Info do Produto */}
                <div className="text-center px-2">
                  <h3 className="text-sm font-[Playfair_Display] tracking-wider text-white mb-2 group-hover:text-[#c5a059] transition-colors">{prod.nome}</h3>
                  <p className="text-[11px] text-gray-500 mb-3 uppercase tracking-widest">{prod.desc}</p>
                  <span className="text-base text-[#c5a059] font-[Playfair_Display]">R$ {prod.preco}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;