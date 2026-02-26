import React from 'react'

const Login = () => {
  return (
    <div>
        <h3>Faça seu login</h3>
        <label htmlFor="">Email</label>
        <input type="text" />
        <br />
        <br />
        <label htmlFor="">Senha</label>
        <input type="text" />
        <button>*</button>
        <br />
        <br />
        <a href="/cadastro"></a>
        <button>Entrar</button>
    </div>
  )
}

export default Login