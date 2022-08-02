import React from "react";
import FormEtapa123 from "./FormEtapa123";

function Etapa2() {
  return (
    <div>
      <h2>ETAPA 02 </h2> 
      <h3>INFORMAÇÕES DO ENSINO SUPERIOR</h3> 
      <FormEtapa123 pergunta={"5.Qual o curso :"}/> 
      <FormEtapa123 pergunta={"6.Qual a unidade de ensino :"}/>    
    </div>
  );
}

export default Etapa2;
