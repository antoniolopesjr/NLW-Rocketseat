import React from 'react';
import whatsappIcon from '../../images/icons/whatsapp.svg';

import './styles.css';


function TeacherItem () {
  return (
  <article className="teacher-item">
    <header>
      <img src="https://avatars1.githubusercontent.com/u/50596182?s=460&u=153345bab27d19442e0c69af22dd029fb0fb686d&v=4"
        alt="" />
      <div>
        <strong>Antonio Lopes</strong>
        <span>Química</span>
      </div>
    </header>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      <br></br>
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
      ut aliquip ex ea commodo consequat.
      <br></br>
      Duis aute irure dolor in reprehenderit
      in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      <br></br>
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
      officia deserunt mollit anim id est laborum.
    </p>

    <footer>
      <p>Preço/hora
        <strong> R$ 80,00</strong>
      </p>
      <button type="button">
        <img src={whatsappIcon} alt="Whatsapp" />Entrar em contato
      </button>
    </footer>
  </article>
  )
}

export default TeacherItem;