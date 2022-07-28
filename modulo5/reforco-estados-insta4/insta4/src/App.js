import React from "react";
import styled from "styled-components";
import Post from "./components/Post/Post";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

function App() {
  return (
    <MainContainer>
      <Post
        nomeUsuario={"Paulinha"}
        fotoUsuario={"https://picsum.photos/51/51"}
        fotoPost={"https://picsum.photos/200/155"}
      />
      
      <Post
        nomeUsuario={"Julinha"}
        fotoUsuario={"https://picsum.photos/52/50"}
        fotoPost={"https://picsum.photos/200/150"}
      />
      <Post
        nomeUsuario={"Luizinha"}
        fotoUsuario={"https://picsum.photos/50/53"}
        fotoPost={"https://picsum.photos/200/160"}
      />
    </MainContainer>
  );
}

export default App;
