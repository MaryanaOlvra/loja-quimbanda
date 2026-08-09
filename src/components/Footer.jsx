import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, Smartphone, CreditCard, MessageCircle } from 'lucide-react';

const TridentIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 2v20M5 7v4a7 7 0 0 0 14 0V7M12 11V7" />
    <path d="M9 3l3-1 3 1" />
    <circle cx="12" cy="11" r="2" fill="#8b0000" stroke="none" />
  </svg>
);

const InstagramIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const TikTokIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5v3a3 3 0 0 1-3-3 8 8 0 0 1-5 8z" />
  </svg>
);

const Footer = ({ theme }) => {
  const navigate = useNavigate();

  return (
    <footer className={`${theme.footer} pt-20 pb-6 px-6 mt-auto transition-colors duration-700`}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
        
        {/* Marca & Atendimento */}
        <div>
          <div className="flex items-center gap-2 mb-6 text-[#c5a059]">
            <TridentIcon className="w-8 h-8" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase">Quimbanda M'bande</span>
          </div>
          <h4 className="text-[#c5a059] text-[10px] font-bold uppercase tracking-[0.2em] mb-4">Atendimento</h4>
          <ul className="space-y-3 text-[10px] uppercase tracking-widest opacity-80">
            <li className="cursor-pointer hover:text-[#c5a059] transition-colors">Fale Conosco</li>
            <li className="cursor-pointer hover:text-[#c5a059] transition-colors" onClick={() => window.open('https://wa.me/5517997167336', '_blank')}>WhatsApp</li>
            <li className="cursor-pointer hover:text-[#c5a059] transition-colors">E-mail</li>
          </ul>
        </div>

        {/* Institucional */}
        <div>
          <h4 className="text-[#c5a059] text-[10px] font-bold uppercase tracking-[0.2em] mb-6 mt-2">Institucional</h4>
          <ul className="space-y-3 text-[10px] uppercase tracking-widest opacity-80">
            <li className="cursor-pointer hover:text-[#c5a059] transition-colors" onClick={() => navigate('/sobre')}>Sobre Nós</li>
            <li className="cursor-pointer hover:text-[#c5a059] transition-colors">FAQ</li>
            <li className="cursor-pointer hover:text-[#c5a059] transition-colors">Contato</li>
          </ul>
        </div>

        {/* Políticas */}
        <div>
          <h4 className="text-[#c5a059] text-[10px] font-bold uppercase tracking-[0.2em] mb-6 mt-2">Políticas</h4>
          <ul className="space-y-3 text-[10px] uppercase tracking-widest opacity-80">
            <li className="cursor-pointer hover:text-[#c5a059] transition-colors">Privacidade</li>
            <li className="cursor-pointer hover:text-[#c5a059] transition-colors">Trocas e Devoluções</li>
            <li className="cursor-pointer hover:text-[#c5a059] transition-colors">Termos de Uso</li>
          </ul>
        </div>

        {/* Compra e Entrega */}
        <div>
          <h4 className="text-[#c5a059] text-[10px] font-bold uppercase tracking-[0.2em] mb-6 mt-2">Compra & Entrega</h4>
          <ul className="space-y-3 text-[10px] uppercase tracking-widest opacity-80">
            <li className="cursor-pointer hover:text-[#c5a059] transition-colors">Formas de Pagamento</li>
            <li className="cursor-pointer hover:text-[#c5a059] transition-colors">Frete e Entrega</li>
            <li className="cursor-pointer hover:text-[#c5a059] transition-colors">Como Comprar</li>
          </ul>
        </div>

        {/* Siga-nos & Segurança */}
        <div>
          <h4 className="text-[#c5a059] text-[10px] font-bold uppercase tracking-[0.2em] mb-6 mt-2">Siga-nos</h4>
          
          <ul className="space-y-4 mb-8">
            <li className="flex items-center gap-3 cursor-pointer text-[#c5a059] hover:text-white transition-colors" title="Instagram M'bande">
              <InstagramIcon className="w-4 h-4" />
              <span className="text-[10px] uppercase tracking-widest opacity-80">Loja M'bande</span>
            </li>
            <li className="flex items-center gap-3 cursor-pointer text-[#c5a059] hover:text-white transition-colors" title="Instagram do Templo">
              <InstagramIcon className="w-4 h-4" />
              <span className="text-[10px] uppercase tracking-widest opacity-80">Templo 7 Saias</span>
            </li>
            <li className="flex items-center gap-3 cursor-pointer text-[#c5a059] hover:text-white transition-colors" title="TikTok">
              <TikTokIcon className="w-4 h-4" />
              <span className="text-[10px] uppercase tracking-widest opacity-80">TikTok</span>
            </li>
            <li className="flex items-center gap-3 cursor-pointer text-[#c5a059] hover:text-white transition-colors" onClick={() => window.open('https://wa.me/5517997167336', '_blank')}>
              <MessageCircle className="w-4 h-4" />
              <span className="text-[10px] uppercase tracking-widest opacity-80">WhatsApp</span>
            </li>
          </ul>
          
          <h4 className="text-[#c5a059] text-[10px] font-bold uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
            <Lock size={14}/> Compra Segura
          </h4>
          <div className="flex items-center gap-4 text-gray-400">
            <Smartphone size={22} title="PIX" className="hover:text-green-500 transition-colors cursor-help"/>
            <CreditCard size={22} title="Cartão de Crédito" className="hover:text-blue-500 transition-colors cursor-help"/>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-6 border-t border-[#c5a059]/20 flex flex-col md:flex-row items-center justify-between gap-4 text-[9px] uppercase tracking-widest opacity-60">
        <p>© 2026 Quimbanda M'bande. Todos os direitos reservados.</p>
        <div className="flex gap-4">
          <span className="cursor-pointer hover:text-[#c5a059] transition-colors">Política de Privacidade</span>
          <span>|</span>
          <span className="cursor-pointer hover:text-[#c5a059] transition-colors">Termos de Uso</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;