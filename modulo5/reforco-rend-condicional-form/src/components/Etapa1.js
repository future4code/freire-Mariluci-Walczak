import React from "react";
import FormEtapa123 from "./FormEtapa123";
import FormSelectEtapa13 from "./FormSelectEtapa13";

function Etapa1() {
  return (
    <div>
        <h2>ETAPA 01</h2>
        <h3>DADOS GERAIS</h3>
        <FormEtapa123 pergunta={"1.Qual seu nome :"}/>
        <FormEtapa123 pergunta={"2.Qual sua idade :"}/>
        <FormEtapa123 pergunta={"3.Qual seu email :"}/>
        <FormSelectEtapa13 
          pergunta={"4.Qual a sua escolaridade :"}
            selecione={[
              "Ensino Médio Completo",
              "Ensino Médio Incompleto",
              "Ensino Superior Completo",
              "Ensino Superior Incompleto"
            ]}
            />
    </div>
  );
}

export default Etapa1;
