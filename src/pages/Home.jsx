import React from 'react';
import { ShoppingBag, Sparkles, Flame, Eye } from 'lucide-react';

const Home = () => {
  // Dados extraídos diretamente das imagens reais da cliente
  const servicos = [
    { id: 1, nome: "Consulta Completa: Búzios de Exu", desc: "Todas as áreas da vida. Duração 1h", preco: "297,00", icon: <Eye size={24} /> },
    { id: 2, nome: "Ritual Coletivo de Destruição", desc: "Dona Caveira (Rompimento e Justiça)", preco: "97,00", icon: <Flame size={24} /> },
    { id: 3, nome: "Ritual de Prosperidade", desc: "Exu Rei das 7 Encruzilhadas", preco: "Consultar", icon: <Sparkles size={24} /> },
    { id: 4, nome: "Curso Baralho de Pombagira", desc: "Acesso vitalício", preco: "Consultar", icon: <Eye size={24} /> },
  ];

  const produtos = [
    { id: 101, nome: "Perfume Sete Saias do Cabaré", desc: "Atração e Magnetismo", preco: "130,15", img: "🍎" },
    { id: 102, nome: "Óleo de Prosperidade", desc: "Rosa de Ouro", preco: "101,65", img: "✨" },
    { id: 103, nome: "Banho de Conexão Feminina", desc: "Ritual Mulheres", preco: "97,00", img: "🌹" },
    { id: 104, nome: "Pó das Feiticeiras", desc: "Mediunidade e Força", preco: "130,15", img: "🏺" },
  ];

  return (
    <div className="min-h-screen bg-[#050505] font-sans text-white">
      
      {/* Hero Section - Banner Principal */}
      <section className="relative py-24 px-4 bg-gradient-to-b from-[#4a0404] to-[#050505] border-b border-[#c5a059]/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-[#c5a059] tracking-[0.3em] text-xs font-bold uppercase mb-4">
            Templo Cabaré das Sete Saias
          </h2>
          <h1 className="text-4xl md:text-6xl font-[Playfair_Display] font-bold text-white mb-6 leading-tight">
            Descubra a Força e o Mistério da <br/>
            <span className="text-[#c5a059] italic">Quimbanda M'bande</span>
          </h1>
          <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto mb-10">
            Artigos consagrados, rituais e oráculos direcionados pela Mameto M'bande. 
            Abertura de caminhos, prosperidade e magnetismo.
          </p>
          <button className="bg-[#c5a059] text-[#050505] px-8 py-4 font-bold uppercase tracking-widest text-xs hover:bg-white transition-colors duration-300 shadow-[0_0_20px_rgba(197,160,89,0.3)]">
            Agendar Consulta
          </button>
        </div>
      </section>

      {/* Seção 1: Serviços e Rituais */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-[Playfair_Display] text-[#c5a059] mb-4">Rituais & Consultas</h2>
          <div className="h-[1px] w-24 bg-[#4a0404] mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicos.map((item) => (
            <div key={item.id} className="bg-[#0a0a0a] border border-[#c5a059]/20 p-6 flex flex-col items-center text-center hover:border-[#c5a059] transition-colors duration-500 group">
              <div className="text-[#4a0404] group-hover:text-[#c5a059] transition-colors mb-4">
                {item.icon}
              </div>
              <h3 className="text-lg font-[Playfair_Display] font-bold text-white mb-2">{item.nome}</h3>
              <p className="text-xs text-gray-400 mb-6 flex-grow">{item.desc}</p>
              <div className="text-[#c5a059] font-bold mb-6">
                {item.preco !== "Consultar" ? `R$ ${item.preco}` : "Sob Consulta"}
              </div>
              <button className="w-full border border-[#4a0404] text-white py-3 text-xs uppercase tracking-widest group-hover:bg-[#4a0404] transition-colors">
                Saiba Mais
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Seção 2: Artigos Físicos */}
      <section className="py-20 px-4 max-w-7xl mx-auto bg-[#0a0a0a]/50 rounded-xl border border-white/5 mb-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-[Playfair_Display] text-white mb-4">Artigos Consagrados</h2>
          <div className="h-[1px] w-24 bg-[#c5a059] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {produtos.map((prod) => (
            <div key={prod.id} className="flex flex-col items-center group">
              <div className="w-full h-64 bg-[#050505] border border-white/10 flex items-center justify-center text-6xl mb-6 group-hover:border-[#c5a059]/50 transition-colors">
                {/* Aqui entrarão as fotos reais no futuro */}
                {prod.img}
              </div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-center mb-2">{prod.nome}</h3>
              <p className="text-xs text-gray-500 mb-4">{prod.desc}</p>
              <span className="text-lg font-[Playfair_Display] text-[#c5a059] mb-4">R$ {prod.preco}</span>
              <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white hover:text-[#c5a059] transition-colors">
                <ShoppingBag size={16} /> Adicionar
              </button>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

// Esta é a linha que resolve o seu erro!
export default Home;