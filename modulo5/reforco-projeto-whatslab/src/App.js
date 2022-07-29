import React, { useState } from "react";
import styled from "styled-components";


const AppContainer = styled.div`
border: 1px solid black;
height: 98vh;
box-sizing: border-box;
width: 480px;
margin: auto;
display: flex;
flex-direction: column;
`
const MessagesContainer = styled.div`
flex-grow: 1;
padding: 10px;
display: flex;
flex-direction: column-reverse;
flex-wrap:nowrap
`
const InputsContainer = styled.div`
display: flex;
`
const NameInput = styled.input`
width: 100px;
`
const MessageInput = styled.input`
flex-grow: 1;
`

function App() {
  const [mensagem, setMensagem] = useState([
    {
      nome: "",
      texto: ""
    }
  ]);
  const [inputName, setInputName] = useState("");
  const [inputText, setInputText] = useState("");

  const onChangeInputName = (event) => {
    setInputName(event.target.value)
  }
  const onChangeInputText = (event) => {
    setInputText(event.target.value)
  }

  const enviaMensagem = () => {
    const novaMensagem = {
      nome: inputName,
      texto: inputText
    }
    const ArrayNovaMensagem = [...mensagem, novaMensagem]
    setMensagem(ArrayNovaMensagem);
  }

  return (
    <AppContainer>
      <MessagesContainer>
       
      {mensagem.map((msg, index) => {
          return (
            <p key={index}>
              <strong>{msg.nome}</strong> {msg.texto}
            </p>
          )
        }
        )
      }

      </MessagesContainer>

      <InputsContainer>

        <NameInput
          onChange={onChangeInputName}
          value={inputName}
          placeholder="Nome"
        />

        <MessageInput
          onChange={onChangeInputText}
          value={inputText}
          placeholder="Mensagem"
        />

        <button onClick={enviaMensagem}>Enviar</button>

      </InputsContainer>
    </AppContainer>

  );

}

export default App;
