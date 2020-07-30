import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  }
  const [categorias, setCategorias] = useState([]);
  const [valores, setValores] = useState(valoresIniciais);


  function setValue(chave, valor) {
    // chave: nome, descricao, bla, bli
    setValores({
      ...valores,
      [chave]: valor, // nome: 'valor'
    })
  }

  function handleChange(infosDoEvento) {
    setValue(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value
    );
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {valores.nome}</h1>

      <form onSubmit={function handleSumit(submit) {
        submit.preventDefault();
        setCategorias([...categorias, valores])

      }}>

        <div>
          <label>
            Descrição:
            <textarea
              type="text"
              value={valores.nome}
              name="nome"
              onChange={handleChange}
            />
          </label>
        </div>

        <div>
          <label>
            Descrição:
            <textarea
              type="text"
              value={valores.descricao}
              name="descricao"
              onChange={handleChange}
            />
          </label>
        </div>

        <div>
          <label>
            Cor:
            <input
              type="color"
              value={valores.cor}
              name="cor"
              onChange={handleChange}
            />
          </label>
        </div>

        <button>
          Cadastrar
        </button>

      </form>

      <ul>
        {categorias.map((categoria, indice) => {
          return (
            <li key={`${categoria}${indice}`}>
              {categoria.nome}
            </li>
          )
        })}
      </ul>


      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;