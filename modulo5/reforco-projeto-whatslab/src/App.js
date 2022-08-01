import React, { useState } from "react";
import {AppContainer, MessagesContainer, InputsContainer} from "./AppStyles"
import {NameInput, MessageInput} from "./AppStyles"

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
    setInputName("")
    setInputText("")
  }

  return (
    <AppContainer>
      <MessagesContainer>

        {mensagem.map((msg, index) => {
          return (
            <p key={index}>
              <strong>{msg.nome}</strong>  {msg.texto}
            </p>
          )
        })}

      </MessagesContainer>

      <InputsContainer>

        <NameInput
          placeholder="Nome"
          value={inputName}
          onChange={onChangeInputName}
        />

        <MessageInput
          placeholder="Mensagem"
          value={inputText}
          onChange={onChangeInputText}
        />

        <button onClick={enviaMensagem}>Enviar</button>

      </InputsContainer>
    </AppContainer>

  );

}

export default App;
