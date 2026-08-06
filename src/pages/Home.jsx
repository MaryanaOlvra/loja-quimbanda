import React from 'react';

export function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Seção Hero / Destaque */}
      <section className="relative py-24 bg-gradient-to-b from-zinc-900 to-zinc-950 border-b border-amber-900/20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="text-amber-500 uppercase tracking-widest text-xs font-semibold mb-4 block">
            Tradição, Axé e Fundamento
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-amber-100 mb-6 tracking-wide">
            Artigos Consagrados da Quimbanda M'bande
          </h1>
          <p className="max-w-2xl mx-auto text-zinc-400 text-base md:text-lg mb-8 leading-relaxed">
            Encontre artefatos sagrados preparados com rigor espiritual e excelência para o seu culto e proteção.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-amber-600 hover:bg-amber-500 text-zinc-950 font-bold px-8 py-3 rounded shadow-lg transition-all uppercase text-sm tracking-wider">
              Ver Catálogo
            </button>
            <button className="border border-amber-700/60 hover:border-amber-500 text-amber-300 font-medium px-8 py-3 rounded transition-all uppercase text-sm tracking-wider">
              Agendar Consulta
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}