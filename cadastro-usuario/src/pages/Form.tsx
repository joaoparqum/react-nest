import './style.css'
import Trash from '../assets/garbage-trash-svgrepo-com.svg';
import { useUserStore } from '../store/useUserStore';
import { useEffect, useState } from 'react';

export const Form = () => {

  //chamando os métodos e objeto declarados no zustand 
  const { usuarios, fetchUsuarios, addUsuarios, removeUsuarios } = useUserStore();
  const [ form, setForm ] = useState({ nome: '', idade: '', email: ' '})

  useEffect(() =>{
    fetchUsuarios(); //carrega os usuarios vindos do back-end
  }, [fetchUsuarios])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({...form, [e.target.name]: e.target.value });
  };
  
  //método de POST
  const handleSubmit = async () => {
    if(!form.nome || !form.idade || !form.email) {
      window.alert('preencha todos os campos!');
      return;
    }

    await addUsuarios ({
      nome: form.nome,
      idade: Number(form.idade),
      email: form.email
    });

    setForm({ nome: '', idade: '', email: '' }); //limpa formulário 
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

        {usuarios.map((user) =>
          <div className='card' key={user.id}>
            <div>
              <p>Nome: <span>{user.nome}</span> </p>
              <p>Idade: <span>{user.idade}</span> </p>
              <p>E-mail: <span>{user.email}</span> </p>
            </div>

            <button onClick={() => removeUsuarios(user.id)}>
              <img src={Trash} alt='Excluir'/>
            </button>
           </div>
        )} 
        
      </div>
    </>
  )
}