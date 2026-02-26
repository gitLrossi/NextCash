import React from 'react'

const Cadastro = () => {
  return (
    <div>
      <h3>Faça seu cadastro</h3>
        <label htmlFor="">Nome completo</label>
        <input type="text" />
        <br />
        <br />
        <label htmlFor="">Email</label>
        <input type="text" />
        <br />
        <br />
        <label htmlFor="">Senha</label>
        <input type="password" />
        <button>*</button>
        <br />
        <br />
        <label htmlFor="">Confirme sua enha</label>
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