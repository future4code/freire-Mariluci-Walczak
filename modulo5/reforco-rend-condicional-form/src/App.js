import React, { useState } from "react";
import { AppContainer } from "./AppStyles";
// import ReactDOM from "react-dom";
import Etapa1 from "./components/Etapa1";
import Etapa2 from "./components/Etapa2";
import Etapa3 from "./components/Etapa3";
import Final from "./components/Final";

function App() {
  const [etapa, setEtapa] = useState(1)

  const renderizaEtapa = () => {
    switch (etapa) {
      case 1:
        return <Etapa1 />;
      case 2:
        return <Etapa2 />;
      case 3:
        return <Etapa3 />;
      case 4:
        return <Final />;
      default:
        console.log(etapa)
        return <Final />;
    }
  }

  const irParaProximaEtapa = () => {
    setEtapa(etapa + 1)
  }

  return (
    <AppContainer>
      {renderizaEtapa()}
      <br />
      <br />
      {etapa !== 4 && (
        <button onClick={irParaProximaEtapa}>Próxima Etapa</button>
      )}
    </AppContainer>
  );
}

export default App;
