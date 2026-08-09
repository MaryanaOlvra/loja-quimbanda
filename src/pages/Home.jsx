import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Moon, ShoppingCart, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { PRODUCTS, SERVICES, FEEDBACKS } from '../data/db.jsx';

const Home = ({ isLightMode, theme, addToCart }) => {
  const navigate = useNavigate();

  // Estado para controlar o carrossel de feedbacks
  const [feedbackIndex, setFeedbackIndex] = useState(0);

  const produtos = PRODUCTS.slice(0, 3);
  const consultas = SERVICES.filter(s => s.category === 'Consulta').slice(0, 3);
  const cursos = SERVICES.filter(s => s.category === 'Curso').slice(0, 3);
  const rituais = SERVICES.filter(s => s.category === 'Ritual' || s.category === 'Ritual Coletivo').slice(0, 3);

  // Funções para mover o carrossel de feedbacks
  const nextFeedback = () => {
    setFeedbackIndex((prev) => (prev + 1) % FEEDBACKS.length);
  };

  const prevFeedback = () => {
    setFeedbackIndex((prev) => (prev - 1 + FEEDBACKS.length) % FEEDBACKS.length);
  };

  const btnFilled = isLightMode 
    ? 'bg-[#4a0404] text-[#f4ebe1] hover:bg-[#630606] border border-[#c5a059]' 
    : 'bg-[#730808] text-[#f4ebe1] hover:bg-[#8f0b0b] border border-[#c5a059]/50 shadow-[0_0_15px_rgba(197,160,89,0.15)]';

  const btnGold = isLightMode
    ? 'bg-[#c5a059] text-[#310202] hover:bg-[#b08c48] font-black'
    : 'bg-[#c5a059] text-black hover:bg-[#d4b268] font-black shadow-[0_0_15px_rgba(197,160,89,0.2)]';

  const SectionTitle = ({ title }) => (
    <div className="text-center mb-16 flex flex-col items-center">
      <h2 className="text-3xl md:text-5xl font-serif italic mb-6 text-[#c5a059] uppercase tracking-widest font-bold">
        {title}
      </h2>
      <div className={`w-24 h-[2px] ${isLightMode ? 'bg-[#4a0404]' : 'bg-[#c5a059]'}`}></div>
    </div>
  );

  return (
    <div className="animate-in fade-in duration-700">
      
      {/* BANNER PRINCIPAL */}
      <section className="relative h-[85vh] md:h-[95vh] flex items-center justify-center overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-b ${isLightMode ? 'from-[#4a0404]/90 via-[#730808]/40' : 'from-[#0a0101]/95 via-[#1f0505]/60'} to-transparent z-10`} />
        <img src="https://images.unsplash.com/photo-1514306191717-452ec28c7814?auto=format&fit=crop&q=80&w=1600" className="absolute inset-0 w-full h-full object-cover grayscale opacity-30 scale-105" alt="Altar" />
        <div className="relative z-20 text-center px-4 max-w-5xl flex flex-col items-center">
          <div className="mb-6 md:mb-10 flex justify-center text-[#c5a059]"><Moon size={48} strokeWidth={1} className="animate-pulse" /></div>
          <h2 className={`text-4xl md:text-7xl font-serif mb-8 tracking-tight italic uppercase leading-tight drop-shadow-2xl ${isLightMode ? 'text-[#f4ebe1]' : 'text-white'}`}>Mameto <span className="text-[#c5a059]">M'bande</span></h2>
          <p className={`text-xs md:text-lg uppercase tracking-[0.4em] mb-12 font-bold ${isLightMode ? 'text-[#e8dccc]' : 'text-[#cba693]'}`}>Cartomancia, Búzios e Magias.</p>
        </div>
      </section>

      {/* SEÇÃO 1: PRODUTOS */}
      <section className={`py-20 md:py-32 px-4 md:px-6 ${theme.bg}`}>
        <div className="max-w-7xl mx-auto">
          <SectionTitle title="Produtos" />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {produtos.map(p => (
              <div key={p.id} className={`${theme.card} p-8 flex flex-col justify-between text-center rounded-sm border-t-4 border-t-[#c5a059] relative`}>
                <div className="relative h-64 w-full overflow-hidden mb-6 border border-[#c5a059]/20 bg-black/40 cursor-pointer rounded-sm" onClick={() => navigate(`/produto/${p.id}`)}>
                  <img src={p.image} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105" alt={p.name} />
                  {p.status === 'esgotado' && (
                    <div className="absolute inset-0 bg-black/80 flex items-center justify-center">
                      <span className="text-white border border-[#c5a059] px-6 py-2 text-xs font-black uppercase tracking-widest bg-black/80">Esgotado</span>
                    </div>
                  )}
                </div>
                <h3 className={`${theme.text} font-black uppercase text-sm tracking-widest mb-3 line-clamp-1`}>{p.name}</h3>
                
                <p className={`font-sans text-lg font-bold uppercase tracking-widest mb-6 whitespace-nowrap ${isLightMode ? 'text-[#730808]' : 'text-[#c5a059]'}`}>R$ {p.price.toFixed(2)}</p>
                
                <div className="mt-auto flex flex-col gap-3">
                  <button onClick={() => addToCart(p)} disabled={p.status === 'esgotado'} className={`w-full py-4 text-[10px] uppercase font-black tracking-widest flex justify-center items-center gap-2 transition-all ${btnGold} disabled:opacity-50 disabled:cursor-not-allowed`}>
                    <ShoppingCart size={16}/> Adicionar ao Carrinho
                  </button>
                  <button onClick={() => navigate(`/produto/${p.id}`)} className={`w-full py-4 text-[10px] uppercase font-black tracking-widest transition-all ${btnFilled}`}>
                    Mais Informações
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-16">
            <button onClick={() => navigate('/produtos')} className={`px-12 py-5 text-xs font-black uppercase tracking-widest transition-all ${btnGold}`}>Ver Todos os Produtos</button>
          </div>
        </div>
      </section>

      {/* SEÇÃO 2: CONSULTAS */}
      <section className={`py-20 md:py-32 px-4 md:px-6 border-y border-[#c5a059]/20 ${isLightMode ? 'bg-[#dccbb8]' : 'bg-[#0a0101]'}`}>
        <div className="max-w-7xl mx-auto text-center">
          <SectionTitle title="Consultas" />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {consultas.map(c => (
              <div key={c.id} className={`${theme.card} p-8 flex flex-col items-center justify-between text-center rounded-sm border-t-4 border-t-[#c5a059]`}>
                <div className={`p-4 rounded-full mb-6 ${isLightMode ? 'bg-[#4a0404]/10 text-[#4a0404]' : 'bg-[#c5a059]/10 text-[#c5a059]'}`}>{c.icon}</div>
                <h3 className={`${theme.text} font-black uppercase text-sm tracking-widest mb-3`}>{c.name}</h3>
                <p className={`text-[11px] mb-6 leading-relaxed ${theme.textMuted}`}>{c.description}</p>
                
                <div className={`${isLightMode ? 'text-[#730808]' : 'text-[#c5a059]'} text-lg font-sans font-bold uppercase tracking-widest mb-8 mt-auto whitespace-nowrap`}>R$ {c.price.toFixed(2)}</div>
                
                <div className="w-full flex flex-col gap-3">
                  <button onClick={() => navigate(`/servico/${c.id}`)} className={`w-full py-4 text-[10px] uppercase font-black tracking-widest transition-all ${btnFilled}`}>Mais Informações</button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-16">
             <button onClick={() => navigate('/consultas')} className={`px-12 py-5 text-xs font-black uppercase tracking-widest transition-all ${btnGold}`}>Ver Todas as Consultas</button>
          </div>
        </div>
      </section>

      {/* SEÇÃO 3: CURSOS */}
      <section className={`py-20 md:py-32 px-4 md:px-6 ${theme.bg}`}>
        <div className="max-w-7xl mx-auto text-center">
          <SectionTitle title="Cursos" />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {cursos.map(curso => (
              <div key={curso.id} className={`${theme.card} p-8 flex flex-col justify-between text-center rounded-sm border-t-4 border-t-[#c5a059]`}>
                <div>
                  <span className={`px-4 py-1 text-[9px] font-black uppercase tracking-widest rounded-full border border-[#c5a059]/30 ${isLightMode ? 'bg-[#4a0404]/10 text-[#4a0404]' : 'bg-[#c5a059]/10 text-[#c5a059]'} mb-6 inline-block`}>
                    {curso.status === 'aberta' ? 'Turma Aberta' : 'Turma Fechada'}
                  </span>
                  <h3 className={`${theme.text} font-black uppercase text-sm tracking-widest mb-3`}>{curso.name}</h3>
                  <p className={`text-[11px] mb-6 ${theme.textMuted}`}>{curso.description}</p>
                </div>
                
                <div className="border-t border-[#c5a059]/20 pt-6 mt-auto">
                  <div className={`text-lg font-sans font-bold uppercase tracking-widest mb-6 whitespace-nowrap ${isLightMode ? 'text-[#730808]' : 'text-[#c5a059]'}`}>
                     {curso.price > 0 ? `R$ ${curso.price.toFixed(2)}` : 'R$ A Definir'}
                  </div>
                  
                  <div className="flex flex-col gap-3">
                    {curso.status === 'aberta' ? (
                      <button onClick={() => navigate(`/servico/${curso.id}`)} className={`w-full py-4 text-[10px] uppercase font-black tracking-widest transition-all ${btnGold}`}>Inscrever-se</button>
                    ) : (
                      <button disabled className="w-full py-4 text-[10px] uppercase font-black tracking-widest border border-gray-600 text-gray-500 bg-transparent cursor-not-allowed transition-all">
                        Turma Em Breve
                      </button>
                    )}
                    <button onClick={() => navigate(`/servico/${curso.id}`)} className={`w-full py-4 text-[10px] uppercase font-black tracking-widest transition-all ${btnFilled}`}>Mais Informações</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-16">
             <button onClick={() => navigate('/cursos')} className={`px-12 py-5 text-xs font-black uppercase tracking-widest transition-all ${btnGold}`}>Ver Todos os Cursos</button>
          </div>
        </div>
      </section>

      {/* SEÇÃO 4: RITUAIS */}
      <section className={`py-20 md:py-32 px-4 md:px-6 border-y border-[#c5a059]/20 ${isLightMode ? 'bg-[#dccbb8]' : 'bg-[#0a0101]'}`}>
        <div className="max-w-7xl mx-auto text-center">
          <SectionTitle title="Rituais" />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {rituais.map(r => (
              <div key={r.id} className={`${theme.card} p-8 flex flex-col justify-between text-center rounded-sm border-t-4 border-t-[#c5a059]`}>
                <div>
                  <h3 className={`${theme.text} font-black uppercase text-sm tracking-widest mb-3`}>{r.name}</h3>
                  <p className={`text-[11px] mb-8 ${theme.textMuted}`}>{r.description}</p>
                </div>
                <div className="pt-6 border-t border-[#c5a059]/20 mt-auto">
                  
                  <div className={`text-lg font-sans font-bold uppercase tracking-widest mb-6 whitespace-nowrap ${isLightMode ? 'text-[#730808]' : 'text-[#c5a059]'}`}>
                     {r.status === 'fora_catalogo' ? 'R$ A Consultar' : `R$ ${r.price.toFixed(2)}`}
                  </div>
                  
                  <div className="flex flex-col gap-3">
                    {r.status === 'fora_catalogo' && (
                       <button disabled className="w-full py-4 text-[10px] font-black uppercase tracking-widest border border-gray-600 text-gray-500 bg-transparent cursor-not-allowed transition-all">
                         Agenda Em Breve
                       </button>
                    )}
                    <button onClick={() => navigate(`/servico/${r.id}`)} className={`w-full py-4 text-[10px] uppercase font-black tracking-widest transition-all ${btnFilled}`}>Mais Informações</button>
                  </div>

                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-16">
             <button onClick={() => navigate('/rituais')} className={`px-12 py-5 text-xs font-black uppercase tracking-widest transition-all ${btnGold}`}>Ver Todos os Rituais</button>
          </div>
        </div>
      </section>

      {/* SEÇÃO 5: FEEDBACKS (COM CARROSSEL FUNCIONAL E SETAS) */}
      <section className={`py-24 md:py-32 px-4 md:px-6 ${theme.bg}`}>
        <div className="max-w-4xl mx-auto text-center relative">
          <SectionTitle title="Feedbacks" />
          
          <div className="relative px-12">
            {/* Cartão do Feedback Ativo */}
            <div className={`${theme.card} p-10 md:p-14 flex flex-col items-center text-center rounded-sm border-t-4 border-t-[#c5a059] shadow-2xl min-h-[220px] justify-center transition-all duration-500`}>
              <div className="flex gap-1 text-[#c5a059] mb-6">
                {[...Array(FEEDBACKS[feedbackIndex].stars)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
              </div>
              <p className={`text-sm md:text-base leading-relaxed italic mb-8 ${theme.text}`}>"{FEEDBACKS[feedbackIndex].text}"</p>
              <div className={`text-xs font-black uppercase tracking-widest ${theme.textMuted}`}>— {FEEDBACKS[feedbackIndex].author}</div>
            </div>

            {/* Setas de Navegação do Carrossel */}
            <button 
              onClick={prevFeedback} 
              className="absolute left-0 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#1f0505] border border-[#c5a059]/40 text-[#c5a059] hover:bg-[#c5a059] hover:text-black transition-all shadow-lg z-10"
              title="Feedback Anterior"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextFeedback} 
              className="absolute right-0 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#1f0505] border border-[#c5a059]/40 text-[#c5a059] hover:bg-[#c5a059] hover:text-black transition-all shadow-lg z-10"
              title="Próximo Feedback"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Indicadores de Ponto (Dots) */}
          <div className="flex justify-center gap-2 mt-8">
            {FEEDBACKS.map((_, idx) => (
              <button 
                key={idx} 
                onClick={() => setFeedbackIndex(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${feedbackIndex === idx ? 'bg-[#c5a059] w-6' : 'bg-gray-600'}`}
                title={`Ir para feedback ${idx + 1}`}
              />
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};

export default Home;