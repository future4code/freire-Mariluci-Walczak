import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "./styles.css";

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`;

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({ completa }) => (completa ? "line-through" : "none")};
`;

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`;

function App() {
  const [tarefas, setTarefas] = useState([
    {
      id: Date.now(),
      texto: 'Texto da primeira tarefa',
      completa: false // Indica se a tarefa está completa (true ou false)
    },
    {
      id: Date.now(), // Explicação abaixo
      texto: 'Texto da segunda tarefa',
      completa: true // Indica se a tarefa está completa (true ou false)
    }

  ]);
  const [inputValue, setInputValue] = useState("");
  const [filtro, setFiltro] = useState("");

  useEffect(() => {

    const guardar = JSON.stringify('tarefas')
    localStorage.setItem('tarefas', guardar)

    JSON.parse(localStorage.getItem('tarefas'))

    if (localStorage.getItem('tarefas')) {
      (JSON.parse(localStorage.getItem('tarefas')))
    }

  }, [setTarefas]);

  const onChangeInput = (event) => {
    setInputValue(event.target.value)
  };

  const criaTarefa = () => {
    const novaTarefa = {
      id: Date.now(),
      texto: inputValue,
      completa: false
    }

    const arrayDeTarefas = [...tarefas, novaTarefa]
    setTarefas(arrayDeTarefas)
    setInputValue("")
  };

  const selectTarefa = (id) => {
    const novasTarefas = tarefas.map((tarefa) => {
      if (tarefa.id === id) {
        tarefa.completa = !tarefa.completa
      }
      return tarefa
    })
    setTarefas(novasTarefas)
  };

  const onChangeFilter = (event) => {
    setFiltro(event.target.value)
  };

  const listaFiltrada = tarefas.filter((tarefa) => {
    switch (filtro) {
      case "pendentes":
        return !tarefa.completa;
      case "completas":
        return tarefa.completa;
      default:
        return true;
    }
  });

  return (
    <div className="App">
      <h1>Lista de Tarefas</h1>
      <InputsContainer>
        <input value={inputValue} onChange={onChangeInput} />
        <button onClick={criaTarefa}>Adicionar</button>
      </InputsContainer>
      <br />

      <InputsContainer>
        <label>Filtro</label>
        <select value={filtro} onChange={onChangeFilter}>
          <option value="">Nenhum</option>
          <option value="pendentes">Pendentes</option>
          <option value="completas">Completas</option>
        </select>
      </InputsContainer>
      <TarefaList>
        {listaFiltrada.map((tarefa) => {
          return (
            <Tarefa
              completa={tarefa.completa}
              onClick={() => selectTarefa(tarefa.id)}
            >
              {tarefa.texto}
            </Tarefa>
          );
        })}
      </TarefaList>
    </div>
  );
}

export default App;
