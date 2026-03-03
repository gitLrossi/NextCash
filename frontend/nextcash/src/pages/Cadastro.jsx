import React from 'react'
import Voltar from '../components/Btnvoltar'

const Cadastro = () => {
  return (
    <div>
      <Voltar />
      <h3>Faça seu cadastro</h3>
        <label htmlFor="Nome" id='nome'>Nome completo</label>
        <input type="text" />
        <br />
        <br />
        <label htmlFor="Email" id='email'>Email</label>
        <input type="text" />
        <br />
        <br />
        <label htmlFor="Senha" id='senha'>Senha</label>
        <input type="password" />
        <button>*</button>
        <br />
        <br />
        <label htmlFor="ConfirmarSenha" id='confirmarsenha'>Confirme sua senha</label>
        <input type="password" />
        <button>*</button>
        <br />
        <br />
        <a href="/cadastro"></a>
        <button>Cadastrar</button>
    </div>
  )
}

export default Cadastro