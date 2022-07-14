import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export const TelaForm = styled.div`
    display: flex;
    flex-direction:column ;
    align-items: center;
`


export const ApplicationFormPage = () => {
    const navigate = useNavigate()

    const goToListTripsPage = () => {
        navigate("/list/trips")
    }

    const goToApplicationFormPage = () => {
        navigate("/trips/application")
    }

    return (
        <TelaForm>

            <h3>Inscreva-se para uma viagem</h3>

            <button onClick={goToListTripsPage}>Voltar</button>
            <br/>
            <button onClick={goToApplicationFormPage}>Enviar</button>
        </TelaForm>
    )
}