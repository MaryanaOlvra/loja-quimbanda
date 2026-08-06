import { collection, addDoc } from "firebase/firestore";
import { db } from "../config/firebase";

// Lista de produtos físicos (com frete obrigatório) e serviços/infoprodutos baseada no dossiê
const INITIAL_PRODUCTS = [
  {
    name: "Banho de Conexão Feminina",
    price: 97.00,
    category: "Físico",
    stock: 13,
    description: "Edição limitada. Exclusivo para as participantes do Ritual Mulheres de Pombagira.",
    image: "banho_conexao.jpg",
    isActive: true
  },
  {
    name: "Óleo de Prosperidade - Rosa de Ouro",
    price: 101.65,
    category: "Físico",
    stock: 20,
    description: "Frasco roll-on elegante para uso diário e conta-gotas em vidro âmbar para uso magístico.",
    image: "oleo_prosperidade.jpg",
    isActive: true
  },
  {
    name: "Atuá de Proteção do Exu Cruzeiro",
    price: 82.65,
    category: "Físico",
    stock: 15,
    description: "Amuletos artesanais em couro com cruzes de madeira.",
    image: "atua_protecao.jpg",
    isActive: true
  },
  {
    name: "Pó das Feiticeiras",
    price: 130.15,
    category: "Físico",
    stock: 25,
    description: "Pote de vidro com pó escuro e brilhante para potencializar mediunidade e magias.",
    image: "po_feiticeiras.jpg",
    isActive: true
  },
  {
    name: "Perfume de Atração Sete Saias do Cabaré",
    price: 130.15,
    category: "Físico",
    stock: 18,
    description: "Frasco em formato de maçã vermelha com tampa e laço dourados.",
    image: "perfume_atracao.jpg",
    isActive: true
  }
];

const INITIAL_SERVICES = [
  {
    name: "Consulta Completa: Búzios de Exu",
    price: 297.00,
    category: "Serviço",
    description: "Via videochamada (1h). Indicação de trabalhos espirituais e cultos a Exu e Pombagira.",
    isActive: true
  },
  {
    name: "Ritual Coletivo de Destruição (Dona Caveira)",
    price: 97.00,
    category: "Sazonal",
    description: "Rompimento de amarras, encerramento de ciclos e justiça. Data: 12 de Agosto.",
    isActive: true
  },
  {
    name: "Curso de Magias de Exus e Pombagiras",
    price: 197.00,
    category: "Infoproduto",
    description: "Aulas gravadas, apostila completa com checklist e acesso vitalício com Mameto M'bande.",
    isActive: true
  }
];

export async function seedDatabase() {
  try {
    const productsRef = collection(db, "products");
    for (const prod of INITIAL_PRODUCTS) {
      await addDoc(productsRef, prod);
    }

    const servicesRef = collection(db, "services");
    for (const serv of INITIAL_SERVICES) {
      await addDoc(servicesRef, serv);
    }

    console.log("Banco de dados populado com sucesso com os artefatos da Quimbanda M'bande!");
  } catch (error) {
    console.error("Erro ao popular o banco de dados: ", error);
  }
}