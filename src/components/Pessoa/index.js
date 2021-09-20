import React from 'react';
import "./style.css"

function Pessoa({
  nome,
  idade,
  altura,
  gostaDeProgramar,
  filmesFavoritos
}) {
  return (
    <div className="pessoa">
      <p className="text">Nome: {nome}</p>
      <p className="text">Idade: {idade}</p>
      <p className="text">Altura: {altura}</p>
      <p className="text">Gosta de programar? {gostaDeProgramar ? "Sim" : "Não"}</p>
      <ul className="list">
        {
          filmesFavoritos.map((filme) => (
            <li className="list-item">
              {filme}
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Pessoa;