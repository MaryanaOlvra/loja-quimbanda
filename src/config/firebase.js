import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Objeto de configuração utilizando as variáveis de ambiente seguras (.env)
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Exporta as instâncias do Banco de Dados (Firestore) e Autenticação (Auth)
export const db = getFirestore(app);
export const auth = getAuth(app);