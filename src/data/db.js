// src/data/db.js

export const PRODUCTS = [
  { id: 1, name: 'Banho de Conexão Feminina', price: 92.15, originalPrice: 97.00, shortDesc: 'Ritual Mulheres de Quimbanda.', category: 'Banhos', type: 'physical', stock: 0, status: 'esgotado', image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&q=80&w=400', description: 'Banho preparado e cruzado no Templo Cabaré da Sete Saias...' },
  { id: 2, name: 'Óleo de Prosperidade', price: 101.65, originalPrice: 107.00, shortDesc: 'Abertura de caminhos financeiros.', category: 'Óleos', type: 'physical', stock: 44, status: 'disponível', image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=400', description: 'Óleo cruzado focado na energia da fartura...' },
  { id: 3, name: 'Patuá de Proteção', price: 82.65, originalPrice: 87.00, shortDesc: 'Amuleto contra demandas.', category: 'Patuás', type: 'physical', stock: 24, status: 'disponível', image: 'https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?auto=format&fit=crop&q=80&w=400', description: 'Patuá consagrado na força do Exu Cruzeiro...' },
  { id: 4, name: 'Pó das Feiticeiras', price: 130.15, originalPrice: 137.00, shortDesc: 'Pó para mediunidade e força.', category: 'Pós', type: 'physical', stock: 16, status: 'disponível', image: 'https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&q=80&w=400', description: 'Elemento ritualístico de alta voltagem...' },
  { id: 5, name: 'Perfume Sete Saias', price: 130.15, originalPrice: 137.00, shortDesc: 'Magnetismo e atração.', category: 'Perfumes', type: 'physical', stock: 62, status: 'disponível', image: 'https://images.unsplash.com/photo-1595532542520-505eb147fc26?auto=format&fit=crop&q=80&w=400', description: 'Perfume de Atração cruzado sob a regência da Pombagira...' }
];

export const SERVICES = [
  { id: 's1', name: 'Ritual de Virada - Rosa de Ouro', price: 297.00, description: 'Tudo o que você queria: dinheiro e amor.', category: 'Ritual' },
  { id: 's2', name: 'Consulta Búzios', price: 350.00, description: 'Oráculo de Quimbanda.', category: 'Consulta' },
  { id: 's3', name: 'Destruição - Dona Caveira', price: 97.00, description: 'Justiça e Acerto de Contas.', category: 'Ritual Coletivo' },
  { id: 's4', name: 'Banquete de Encantamento', price: 497.00, description: 'Sedução e Magnetismo Pessoal.', category: 'Ritual' }
];

// NOVOS FEEDBACKS (Pode colocar os links reais das capturas de ecrã do WhatsApp depois)
export const FEEDBACKS = [
  { id: 1, image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&q=80&w=400', alt: 'Feedback Cliente 1' },
  { id: 2, image: 'https://images.unsplash.com/photo-1611162618828-bc409f073cbf?auto=format&fit=crop&q=80&w=400', alt: 'Feedback Cliente 2' },
  { id: 3, image: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&q=80&w=400', alt: 'Feedback Cliente 3' }
];