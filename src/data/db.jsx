import React from 'react';
import { TrendingUp, Search, Play } from 'lucide-react';

export const TridentIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 2v20M5 7v4a7 7 0 0 0 14 0V7M12 11V7" />
    <path d="M9 3l3-1 3 1" />
    <circle cx="12" cy="11" r="2" fill="#8b0000" stroke="none" />
  </svg>
);

export const PRODUCTS = [
  { id: 1, name: 'Banho de Conexão Feminina', price: 92.15, originalPrice: 97.00, shortDesc: 'Ritual Mulheres de Quimbanda.', category: 'Banhos', type: 'physical', status: 'disponivel', image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&q=80&w=400', description: 'Banho preparado e cruzado no Templo Cabaré da Sete Saias...' },
  { id: 2, name: 'Óleo de Prosperidade - Rosa de Ouro', price: 101.65, originalPrice: 107.00, shortDesc: 'Abertura de caminhos financeiros.', category: 'Óleos', type: 'physical', status: 'disponivel', image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=400', description: 'Óleo cruzado focado na energia da fartura e prosperidade...' },
  { id: 3, name: 'Patuá de Proteção do Exu Cruzeiro', price: 82.65, originalPrice: 87.00, shortDesc: 'Defesa contra demandas.', category: 'Patuás', type: 'physical', status: 'disponivel', image: 'https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?auto=format&fit=crop&q=80&w=400', description: 'Patuá consagrado e firmado na força do Exu Cruzeiro...' },
  { id: 4, name: 'Pó das Feiticeiras', price: 130.15, originalPrice: 137.00, shortDesc: 'Força nas magias.', category: 'Pós', type: 'physical', status: 'esgotado', image: 'https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&q=80&w=400', description: 'Elemento ritualístico de alta voltagem...' }
];

export const SERVICES = [
  // CONSULTAS
  { id: 'c1', name: 'Consulta Búzios de Exu', price: 297.00, icon: <TridentIcon className="w-10 h-10" />, description: 'Oráculo de Quimbanda para todas as áreas da vida.', category: 'Consulta', status: 'aberta' },
  { id: 'c2', name: 'Cartomancia de Pombagira', price: 197.00, icon: <Search className="w-10 h-10" />, description: 'Leitura focada em caminhos amorosos e financeiros.', category: 'Consulta', status: 'aberta' },
  { id: 'c3', name: 'Consulta Espiritual Breve', price: 150.00, icon: <TrendingUp className="w-10 h-10" />, description: 'Orientação objetiva para uma questão específica urgente.', category: 'Consulta', status: 'aberta' },
  
  // CURSOS
  { id: 'cur1', name: 'Magias de Exus e Pombagiras', price: 497.00, icon: <Play className="w-10 h-10" />, description: 'Aprenda os fundamentos das magias e feitiços.', category: 'Curso', status: 'aberta' },
  { id: 'cur2', name: 'Imersão Sete Saias', price: 0, icon: <Play className="w-10 h-10" />, description: 'Conexão profunda com a energia feminina do Cabaré.', category: 'Curso', status: 'fechada' },
  { id: 'cur3', name: 'Introdução à Quimbanda', price: 0, icon: <Play className="w-10 h-10" />, description: 'Os primeiros passos na estrutura e culto da religião.', category: 'Curso', status: 'fechada' },
  
  // RITUAIS
  { id: 'r1', name: 'Ritual de Virada - Rosa de Ouro', price: 297.00, icon: <TridentIcon className="w-10 h-10" />, description: 'Tudo o que você queria: dinheiro e amor.', category: 'Ritual', status: 'aberta' },
  { id: 'r2', name: 'Banquete de Encantamento', price: 497.00, icon: <TrendingUp className="w-10 h-10" />, description: 'Sedução, Beleza, Autoestima e Magnetismo Pessoal.', category: 'Ritual', status: 'fora_catalogo' },
  { id: 'r3', name: 'Ritual Coletivo de Destruição', price: 97.00, icon: <Search className="w-10 h-10" />, description: 'Rompimento, Justiça, Acerto de Contas e Libertação.', category: 'Ritual Coletivo', status: 'aberta' }
];

export const FEEDBACKS = [
  { id: 1, text: "O banho de conexão mudou completamente a minha energia. Sinto-me outra mulher, muito mais confiante!", author: "M. S., São Paulo", stars: 5 },
  { id: 2, text: "A consulta com os búzios foi cirúrgica. Tudo o que a Mameto me orientou aconteceu exatamente como dito.", author: "J. Souza, Rio de Janeiro", stars: 5 },
  { id: 3, text: "Fiz o Ritual de Virada e em menos de 15 dias os meus caminhos financeiros abriram de forma inexplicável.", author: "Ana C., Minas Gerais", stars: 5 },
  { id: 4, text: "Incrível o poder do patuá! Sinto-me blindada e protegida contra toda e qualquer energia densa.", author: "Carla M., Curitiba", stars: 5 },
  { id: 5, text: "O curso de magias abriu a minha mente de uma forma que nenhum outro material na internet faz. Recomendo demais!", author: "Rafael L., Porto Alegre", stars: 5 }
];