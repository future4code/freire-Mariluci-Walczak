import React from 'react';
import TelaCadastroPlaylist from './components/TelaCadastroPlaylist';
import TelaListaPlaylists from './components/TelaListaPlaylists';
import TelaAdicionaMusica from './components/TelaAdicionaMusica';
import TelaMostraListaMusicas from './components/TelaMostraListaMusicas'
/* import { render } from '@testing-library/react'; */


export default  class App extends React.Component {
  state = {
    telaAtual: "cadastro"
  }
  escolheTela = () => {
    switch (this.state.telaAtual){
      case "cadastro":
        return <TelaCadastroPlaylist />
      case "lista":
        return <TelaListaPlaylists />
      case "adiciona":
        return <TelaAdicionaMusica />
      case "mostra":
          return <TelaMostraListaMusicas />  
      default:
        return <TelaCadastroPlaylist />
    }
  };
mudaTela = (nomeTela) => {
  this.setState({telaAtual: nomeTela})
}

  render (){
    return <div>
      <button onClick={() => this.mudaTela ("cadastro")}>Cadastro</button>
      <button onClick={() => this.mudaTela ("lista")}>Lista </button>
      <button onClick={() => this.mudaTela ("adiciona")}>Adiciona</button>
      <button onClick={() => this.mudaTela ("mostra")}>Mostra </button>
       {this.escolheTela()}
      </div>;
    
  }
  
}



