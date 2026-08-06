import React from 'react';

export function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-amber-900/40 text-amber-200/80 py-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-serif text-xl font-bold text-amber-500 mb-4">Quimbanda M'bande</h3>
          <p className="text-sm leading-relaxed text-zinc-400">
            Artigos religiosos consagrados, seriedade e respeito à tradição. Atendimento e produtos com fundamento.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-amber-400 mb-4 tracking-wider uppercase text-sm">Navegação</h4>
          <ul className="space-y-2 text-sm text-zinc-400">
            <li><a href="#" className="hover:text-amber-300">Início</a></li>
            <li><a href="#" className="hover:text-amber-300">Catálogo</a></li>
            <li><a href="#" className="hover:text-amber-300">Agendamentos</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-amber-400 mb-4 tracking-wider uppercase text-sm">Segurança e Confiabilidade</h4>
          <p className="text-sm text-zinc-400">
            Ambiente 100% seguro com criptografia e pagamentos integrados via Mercado Pago.
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-8 pt-8 border-t border-zinc-900 text-center text-xs text-zinc-500">
        © 2026 Quimbanda M'bande. Todos os direitos reservados.
      </div>
    </footer>
  );
}