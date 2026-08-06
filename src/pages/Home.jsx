import React from 'react';
import { Eye, Flame, Clock, Moon, MessageCircle } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
  const servicos = [
    { id: 1, nome: "CONSULTA VIDAS PASSADAS", preco: "307,00", icon: <Eye size={32} /> },
    { id: 2, nome: "CONSULTA COMPLETA", preco: "247,00", icon: <Flame size={32} /> },
    { id: 3, nome: "CONSULTA EMERGENCIAL", preco: "347,00", icon: <Clock size={32} /> },
    { id: 4, nome: "CONSULTA POR ÁREA", preco: "147,00", icon: <Moon size={32} /> },
  ];

  return (
    <div className="min-h-screen bg-[#050505] font-sans">
      <Header />

      {/* Seção de Serviços - Baseada no Protótipo */}
      <main className="bg-[#3b0303] py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          
          {/* Título da Seção */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl text-white font-[Playfair_Display] tracking-wider mb-4">
              SERVIÇOS <span className="text-[#c5a059] italic">ESPIRITUAIS</span>
            </h2>
            <div className="h-1 w-24 bg-[#c5a059] mx-auto rounded-full"></div>
          </div>

          {/* Grid de Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicos.map((servico) => (
              <div key={servico.id} className="bg-white rounded-md p-8 flex flex-col items-center justify-between text-center shadow-2xl transform transition hover:-translate-y-1 hover:shadow-[#c5a059]/20">
                
                {/* Ícone Dourado */}
                <div className="text-[#c5a059] mb-6">
                  {servico.icon}
                </div>

                {/* Nome do Serviço */}
                <h3 className="text-[#3b0303] font-bold text-sm tracking-widest uppercase mb-6 h-10 flex items-center justify-center">
                  {servico.nome}
                </h3>

                {/* Preço */}
                <div className="text-2xl font-[Playfair_Display] font-bold text-[#3b0303] mb-8">
                  R$ {servico.preco}
                </div>

                {/* Botão */}
                <button className="w-full border border-[#3b0303] text-[#3b0303] py-3 text-xs font-bold uppercase tracking-widest hover:bg-[#3b0303] hover:text-white transition-colors duration-300">
                  Saiba Mais
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Botão Flutuante do WhatsApp */}
        <a 
          href="https://wa.me/5511999999999" 
          target="_blank" 
          rel="noopener noreferrer"
          className="fixed bottom-8 right-8 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform z-50 flex items-center justify-center"
        >
          <MessageCircle size={28} />
        </a>
      </main>

      <Footer />
    </div>
  );
};

export default Home;