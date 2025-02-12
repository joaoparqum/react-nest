import './style.css'
import Trash from '../assets/garbage-trash-svgrepo-com.svg';

function Home() {

  const users = [
    {
      id: '123234sdffdsg',
      nome: 'João',
      idade: 25,
      email: 'joao@gmail.com'
    },
    {
      id: 'sdfdsffds4345',
      nome: 'Paulo',
      idade: 25,
      email: 'paulo@gmail.com'
    },
    {
      id: 'sldkjfldskjf',
      nome: 'Guts',
      idade: 5,
      email: 'guts@gmail.com'
    }
  ];

  return (
    <>
      <div className='container'>
        <form>
          <h1>Cadastro de Usuários</h1>
          <input placeholder="Nome"  name="nome"  type="text" />
          <input placeholder="Idade" name="idade" type="number" />
          <input placeholder="E-mail" name="email" type="email"/>

          <button type='button'>Cadastrar</button>
        </form>
        {users.map((user) =>
          <div className='card'>
            <div>
              <p>Nome: <span>{user.nome}</span> </p>
              <p>Idade: <span>{user.idade}</span> </p>
              <p>E-mail: <span>{user.email}</span> </p>
            </div>

            <button><img src={Trash}/></button>
           </div>
        )} 
      </div>
    </>
  )
}

export default Home
