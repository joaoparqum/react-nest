import { create } from 'zustand';

interface User {
  id: string;
  nome: string;
  idade: number;
  email: string;
}

interface UserStore {
  users: User[];
  addUser: (user: User) => void;
  removeUser: (id: string) => void;
}

export const useUserStore = create<UserStore>((set) => ({
  users: [
    { id: '123234sdffdsg', nome: 'João', idade: 25, email: 'joao@gmail.com' },
    { id: 'sdfdsffds4345', nome: 'Paulo', idade: 25, email: 'paulo@gmail.com' },
    { id: 'sldkjfldskjf', nome: 'Guts', idade: 5, email: 'guts@gmail.com' },
  ],
  addUser: (user) => set((state) => ({ users: [...state.users, user] })),
  removeUser: (id) => set((state) => ({ users: state.users.filter((user) => user.id !== id) })),
}));
