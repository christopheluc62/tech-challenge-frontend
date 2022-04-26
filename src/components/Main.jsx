import axios from 'axios';
import { useEffect, useState } from 'react';
import StyledMain from './styledComponents/Smain';

function Main() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:5050/crew`).then(({ data }) => {
      setUsers(data);
    });
  }, []);

  const [inputNewUser, setInputNewUser] = useState('');
  const handleChangeUser = (evt) => {
    setInputNewUser(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const dataToSend = {
      firstname: inputNewUser,
    };
    axios.post(`http://localhost:5050/crew`, dataToSend);
  };
  return (
    <StyledMain>
      <h2>Ajouter un(e) Argonaute</h2>
      <form className='new-member-form' onSubmit={handleSubmit}>
        <label for='name'>Nom de l&apos;Argonaute</label>
        <input
          id='name'
          name='name'
          type='text'
          placeholder='Charalampos'
          value={inputNewUser}
          onChange={handleChangeUser}
        />
        <button type='submit'>Envoyer</button>
      </form>

      <h2>Membres de l'équipage</h2>
      <ul className='member-list'>
        {users.map((user) => {
          return (
            <li className='member' key={user.id}>
              {user.firstname}
            </li>
          );
        })}
      </ul>
    </StyledMain>
  );
}

export default Main;
