import { create } from 'zustand';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

interface User {
  id: string;
  nome: string;
  idade: number;
  email: string;
}

interface UserStore {
  usuarios: User[];
  fetchUsuarios: () => Promise<void>;
  addUsuarios: (user: Omit<User, 'id'>) => Promise<void>;
  removeUsuarios: (id: string) => Promise<void>;
}

export const useUserStore = create<UserStore>((set) => ({
  usuarios: [],

  fetchUsuarios: async () => {
    try{
      const response = await axios.get('http://localhost:3000/usuarios');
      set({ usuarios: response.data });
    } catch ( error ) {
      console.error('Erro ao buscar usuários', error);
    }
  },

  addUsuarios: async (usuarios) => {
    try {
      const novoUsuario = { id: uuidv4(), ...usuarios };
      await axios.post('http://localhost:3000/usuarios');
      set((state) => ({ usuarios: [...state.usuarios, novoUsuario] }));
    } catch ( error ) {
      console.error('Erro ao adicionar o usuário: ', error);
    }
  },

  removeUsuarios: async (id) => {
    try {
      await axios.delete('http://localhost:3000/usuarios');
      set((state) => ({ usuarios: state.usuarios.filter((usuarios) => usuarios.id !== id) }));
    } catch ( error ) {
      console.error('Erro ao remover usuário: ', error);
    }
  }

}));
