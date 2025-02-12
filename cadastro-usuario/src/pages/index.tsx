import './style.css'
import Trash from '../assets/garbage-trash-svgrepo-com.svg';
import { useUserStore } from '../store/useUserStore';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function Home() {

  const { users, addUser, removeUser } = useUserStore();
  const [ form, setForm ] = useState({ nome: '', idade: '', email: ' '})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({...form, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = () => {
    if(!form.nome || !form.idade || !form.email) {
      window.alert('preencha todos os campos!');
      return;
    }

    addUser ({
      id: uuidv4(),
      nome: form.nome,
      idade: Number(form.idade),
      email: form.email
    });

    setForm({ nome: '', idade: '', email: '' });
  }


  return (
    <>
      <div className='container'>
        <form onSubmit={(e) => e.preventDefault()}>
          <h1>Cadastro de Usuários</h1>
          <input placeholder="Nome"  name="nome"  type="text" value={form.nome} onChange={handleChange}/>
          <input placeholder="Idade" name="idade" type="number" value={form.idade} onChange={handleChange}/>
          <input placeholder="E-mail" name="email" type="email" value={form.email} onChange={handleChange}/>

          <button type='button' onClick={handleSubmit}>Cadastrar</button>
        </form>
        {users.map((user) =>
          <div className='card' key={user.id}>
            <div>
              <p>Nome: <span>{user.nome}</span> </p>
              <p>Idade: <span>{user.idade}</span> </p>
              <p>E-mail: <span>{user.email}</span> </p>
            </div>

            <button onClick={() => removeUser(user.id)}>
              <img src={Trash} alt='Excluir'/>
            </button>
           </div>
        )} 
      </div>
    </>
  )
}

export default Home
