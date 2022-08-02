import React from "react";
import FormEtapa123 from "./FormEtapa123";
import FormSelectEtapa13 from "./FormSelectEtapa13";

function Etapa3() {
  return (
    <div>
      <h2>ETAPA 03</h2>
      <h3>INFORMAÇÕES GERAIS DE ENSINO</h3> 
      <FormEtapa123 pergunta={"5.Por que você não terminou sua graduação ?"}/> 
      <FormSelectEtapa13 
          pergunta={"6.Fez algum curso complementar :"}
            selecione={[
              "Nenhum",
              "Curso Técnico",
              "Curso de Inglês"
            ]}
            />   
    </div>
  );
}

export default Etapa3;
