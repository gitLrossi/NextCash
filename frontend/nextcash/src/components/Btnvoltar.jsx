import React from 'react'
import { useNavigate } from "react-router";

function Voltar() {
  let navigate = useNavigate();
  return (
    <button onClick={() => navigate(-1)}>
      Voltar 
    </button>
  );
}

const Btnvoltar = () => {
  return (
    <Voltar />
  )
}

export default Btnvoltar