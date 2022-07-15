import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export const TelaCreateTrip = styled.div`
    display: flex;
    flex-direction:column ;
    align-items: center;
    padding: 0 20px 20px 20px;
    margin: 20px;

    `


export const CreateTripPage = () => {
    const navigate = useNavigate()

    const goToAdminHomePage = () => {
        navigate("/admin/trips/list")
    }

    const goToCreateTripPage = () => {
        navigate("/admin/trips/create")
    }

    return (
        <TelaCreateTrip>

            <h1>Criar Viagem</h1>

            <button onClick={goToAdminHomePage}>Voltar</button>
            <br/>
            <button onClick={goToCreateTripPage}>Criar</button>
        </TelaCreateTrip>
    )
}