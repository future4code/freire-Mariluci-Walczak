import React, { useState } from "react";
import styled from "styled-components";
import Post from "./components/Post/Post";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const FormContainer = styled.div`
        display:grid;
        justify-content: space-between;
        flex-direction: row;
        /* height: 180px; */
        /* width: 240px; */
        /* border: 1px solid gray; */
        /* margin: 15px; */
        padding: 20px;
      `;

function App() {

  const [posts, setPosts] = useState([
    {
      nomeUsuario: "Karol",
      fotoUsuario: "https://picsum.photos/51/51",
      fotoPost: "https://picsum.photos/200/155"
    },
    {
      nomeUsuario: "Fábio",
      fotoUsuario: "https://picsum.photos/52/50",
      fotoPost: "https://picsum.photos/200/150"
    },
    {
      nomeUsuario: "Jun",
      fotoUsuario: "https://picsum.photos/50/53",
      fotoPost: "https://picsum.photos/200/160"
    }
  ]);

  const [valorInputNomeUsuario, setValorInputNomeUsuario] = useState("");
  const [valorInputFotoUsuario, setValorInputFotoUsuario] = useState("");
  const [valorInputFotoPost, setValorInputFotoPost] = useState("");

  const adicionaPosts = () => {
    const novoPosts = {
      nomeUsuario: valorInputNomeUsuario,
      fotoUsuario: valorInputFotoUsuario,
      fotoPost: valorInputFotoPost
    };

    const novoArrayPosts = [...posts, novoPosts];
    setPosts(novoArrayPosts);

  };

  const onChangeInputNomeUsuario = (event) => {
    setValorInputNomeUsuario(event.target.value);
  };
  const onChangeInputFotoUsuario = (event) => {
    setValorInputFotoUsuario(event.target.value)
  };
  const onChangeInputFotoPost = (event) => {
    setValorInputFotoPost(event.target.value)
  };

  const listaDeComponentesPost = posts.map((post, index) => {
    return (
      <Post key={index}
        nomeUsuario={post.nomeUsuario}
        fotoUsuario={post.fotoUsuario}
        fotoPost={post.fotoPost}>
      </Post>
    )
  })

  return (
    <MainContainer>
      <FormContainer>
          <input
            placeholder="Nome Usuário"
            value={valorInputNomeUsuario}
            onChange={onChangeInputNomeUsuario}
          />
          <input
            placeholder="Foto do Usuário"
            value={valorInputFotoUsuario}
            onChange={onChangeInputFotoUsuario}
          />
          <input
            placeholder="Foto do Post"
            value={valorInputFotoPost}
            onChange={onChangeInputFotoPost}
          />
          <button onClick={adicionaPosts}>Postar</button>
      </FormContainer>
      {listaDeComponentesPost}
    </MainContainer>
  );
}

export default App;
