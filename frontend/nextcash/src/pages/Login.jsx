import React from 'react'
import { useState } from "react";
import { useNavigate } from "react-router";
import Voltar from '../components/Btnvoltar'
//import api from "../service/api";

const Login = () => {

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const navigate = useNavigate();

  const enviodados = async (e) => {
    e.preventDefault();

    if (!email || !senha) {
      alert("Preencha todos os campos!");
      return;
    }

    try {
      //const res = await api.post("", { email, senha });

      localStorage.setItem("token", /*res.data.token*/);
      localStorage.setItem("usuario", JSON.stringify(/*res.data.usuario*/));
      localStorage.setItem("usuarioId", /*res.data.usuario.id*/);

      alert("Login realizado com sucesso!");
      navigate("/");
    } catch (err) {
      alert(err.response?.data?.erro || "E-mail ou senha incorretos.");
    }
  };

  return (
    <div className='tela-login'>
        <Voltar />
        <form onSubmit={enviodados} className='login-form'>
          <h3>Faça seu login</h3>
        <label htmlFor="Email" id='email'>Email</label>
        <input type="email" placeholder='Informe seu e-mail' value={email} onChange={(e) => setEmail(e.target.value)}/>
        <br />
        <br />
        <label htmlFor="Senha" id='senha'>Senha</label>
        <input type={mostrarSenha ? "text" : "password"} placeholder='Informe sua senha' value={senha} onChange={(e) => setSenha(e.target.value)}/>
        <button type='button' className='btn-show' onClick={() => setMostrarSenha(!mostrarSenha)}>{mostrarSenha ? "Ocultar" : "Mostrar"}</button>
        <br />
        <br />
        <a href="/cadastro"></a>
        </form>
        <p>Não tem conta?</p>
        <button className="btn-secundario" onClick={() => navigate("/cadastro")}>Cadastre-se</button> 
    </div>
  )
}

export default Login