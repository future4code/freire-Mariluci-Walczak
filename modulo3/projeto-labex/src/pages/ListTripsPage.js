import React from "react";
import {useNavigate} from "react-router-dom";
import styled from "styled-components";


export const TelaLista = styled.div`
    display: flex;
    flex-direction:column ;
    align-items: center;
`

export const ListTripsPage = () => {
    const navigate = useNavigate()

    const goToApplicationFormPage = () => {
        navigate("/trips/application")
    }

    const goToHomePage = () => {
        navigate("/")
    }

    return (
        <TelaLista>

            <h1>Lista de Viagens</h1>

            <button onClick={goToHomePage}>Voltar</button>
            <br/>
            <button onClick={goToApplicationFormPage}>Inscrever-se</button>
        </TelaLista>
    )
}