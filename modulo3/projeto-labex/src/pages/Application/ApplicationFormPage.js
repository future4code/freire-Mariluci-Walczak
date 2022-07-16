import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";

export const TelaForm = styled.div`
    display: flex;
    flex-direction:column ;
    align-items: center;
`


export const ApplicationFormPage = () => {
    const [viagem, setViagem] = useState("")
    const [nome, setNome] = useState("")
    const [idade, setIdade] = useState("")
    const [viajante, setViajante] = useState("")
    const [profissao, setProfissao] = useState("")
    const [pais, setPais] = useState("")

    const recebeViagem = (event) => {
        setViagem(event.target.value)
    }
    const recebeNome = (event) => {
        setNome(event.target.value)
    }
    const recebeIdade = (event) => {
        setIdade(event.target.value) 
    }
    const recebeViajante = (event) => {
        setViajante(event.target.value)    
    }
    const recebeProfissao = (event) => {
        setProfissao(event.target.value)   
    }
    const recebePais = (event) => {
        setPais(event.target.value)  
    }

    const navigate = useNavigate()

    const goToListTripsPage = () => {
        navigate("/list/trips")
    }

    const goToApplicationFormPage = () => {
        navigate("/trips/application")
    }

    return (
        <TelaForm>

            <h1>Inscreva-se para uma viagem</h1>

            <input
                value={viagem}
                onChange={recebeViagem}
                placeholder={"Escolha uma viagem"} />

            <input
                value={nome}
                onChange={recebeNome}
                placeholder={"Nome do viajante"} />

            <input
                value={idade}
                onChange={recebeIdade}
                placeholder={"Idade"} />

            <input
                value={viajante}
                onChange={recebeViajante}
                placeholder={"Por que deseja viajar ?"} />

            <input
                value={profissao}
                onChange={recebeProfissao}
                placeholder={"Profissão"} />

            <input
                value={pais}
                onChange={recebePais}
                placeholder={"Escolha um País"} />

            <button onClick={goToListTripsPage}>Voltar</button>
            <br />
            <button onClick={goToApplicationFormPage}>Enviar</button>
        </TelaForm>
    )
}