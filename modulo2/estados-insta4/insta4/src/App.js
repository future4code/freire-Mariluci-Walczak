import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer  = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

/* class App extends React.Component {
  render() {
    return (
      <MainContainer>
       <Post
         nomeUsuario={'paulinha'}
         fotoUsuario={'https://picsum.photos/50/50'}
         fotoPost={'https://picsum.photos/200/150'}
        />
       <Post
         nomeUsuario={'mariluci'}
         fotoUsuario={'https://picsum.photos/50/51'}
         fotoPost={'https://picsum.photos/200/151'}
       />
        <Post
         nomeUsuario={'karoline'}
         fotoUsuario={'https://picsum.photos/50/52'}
         fotoPost={'https://picsum.photos/200/152'}
       />
    </MainContainer>
    );
  }
} */

class Lista extends React.Component{
  state = {
    posts: [
      {
        nomeUsuario:"Mariluci",
        fotoUsuario:"https://picsum.photos/50/51",
        fotoPostUsuario:"https://picsum.photos/200/151"
      },
      {
        nomeUsuario:"Karoline",
        fotoUsuario:"https://picsum.photos/50/52",
        fotoPostUsuario:"https://picsum.photos/200/152"
      },
    ],
    valorInputNomeUsuario: "",
    valorInputFotoUsuario: "",
    valorInputFotoPostUsuario: ""
  };

  adicionaUsuario = ()=>{
    const novoUsuario = {
      nomeUsuario: this.state.valorInputNomeUsuario,
      fotoUsuario: this.state.valorInputFotoUsuario,
      fotoPostUsuario: this.state.valorInputFotoPostUsuario
    };

    const novoPosts = [...this.state.posts, novoPosts];
    this.setState({ posts: novoPosts});
  };

  onChangeInputNomeUsuario = (event) => {
    this.setState({valorInputNomeUsuario: event.target.value });
  };

  onChangeInputFotoUsuario = (event) => {
    this.setState({valorInputFotoUsuario: event.target.value });
  };

  onChangeInputFotoPostUsuario = (event) => {
    this.setState({valorInputFotoPostUsuario: event.target.value });
  };

  render(){
    const listaDeComponentes = this.state.posts.map((posts) => {
      return(
        <p>
          {posts.nomeUsuario} - {posts.fotoUsuario} - {posts.fotoPost}
        </p>
      );
    });
    return (
      <div>
        <h1>Minha Lista de Posts</h1>
        {/* <div>{listaDeComponentes}</div> */}

        <div>
          <input
          value={this.state.valorInputNomeUsuario}
          onChange={this.onChangeInputNomeUsuario}
          placeholder={"Nome"}
          />

          <input
          value={this.state.valorInputFotoUsuario}
          onChange={this.onChangeInputFotoUsuario}
          placeholder={"Foto"}
          />

          <input
          value={this.state.valorInputFotoPostUsuario}
          onChange={this.onChangeInputFotoPostUsuario}
          placeholder={"Imagem"}
          />

          <button onClick={this.adicionaUsuario}>Adicionar</button>
        </div>
      <div>{listaDeComponentes}</div>
      </div>
    );
  }
}

export default Lista;
