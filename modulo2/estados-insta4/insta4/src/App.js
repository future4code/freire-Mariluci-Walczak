import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

    const arrayPosts = [
      {
        nomeUsuario:"Paulinha",
        fotoUsuario:"https://picsum.photos/50/50",
        fotoPost:"https://picsum.photos/200/150"
      },
      {
        nomeUsuario:"Mariluci",
        fotoUsuario:"https://picsum.photos/50/51",
        fotoPost:"https://picsum.photos/200/151"
      },
      {
        nomeUsuario:"Karoline",
        fotoUsuario:"https://picsum.photos/50/52",
        fotoPost:"https://picsum.photos/200/152"
      },
    ];

    const AppContainer = styled.div`
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      
    `;

      const FormContainer = styled.div`
        display:flex;
        justify-content: space-between;
        flex-direction: column;
        height: 180px;
        width: 240px;
        border: 1px solid gray;
        margin: 5px;
        padding: 30px;
      `;

    class App extends React.Component {
      state = {
        posts: arrayPosts,
        nome: "",
        fotoNome: "",
        fotoPost: ""
      }

      changeNome = (event) => {
        this.setState({ nome: event.target.value });
      };
      
      changeFotoNome = (event) => {
        this.setState({fotoNome: event.target.value});
      };

      changeFotoPost = (event) => {
        this.setState({fotoPost: event.target.value});
      };
   
  adicionaPost = () => {
    const novoPost = {
      nomeUsuario: this.state.nome,
      fotoUsuario: this.state.fotoNome,
      fotoPost: this.state.fotoPost
    };

    this.setState({
      posts: [...this.state.posts, novoPost],
      nome: "",
      fotoNome: "",
      fotoPost: ""
    });
  };

  render() {
    const listaDeComponentes = this.state.posts.map((p) => {
      return(
        <Post
          nomeUsuario={p.nomeUsuario}
          fotoUsuario={p.fotoUsuario}
          fotoPost={p.fotoPost}
        />
      );
    });

    return (
      <AppContainer>
        <FormContainer>
          <input
            placeholder={"Nome do Usuário"}
            value={this.state.nome}
            onChange={this.changeNome}
          />
          <input
            placeholder={"Foto do Usuário"}
            value={this.state.fotoNome}
            onChange={this.changeFotoNome}
          />
          <input
            placeholder={"Foto do Post"}
            value={this.state.fotoPost}
            onChange={this.changeFotoPost}
          />          

          <button onClick={this.adicionaPost}>Novo Post</button>
        </FormContainer>
        {listaDeComponentes}
        </AppContainer>
    );
  }
}

export default App;
