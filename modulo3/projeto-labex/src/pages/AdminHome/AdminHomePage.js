import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";


export const TelaAdminHome = styled.div`
    display: flex;
    flex-direction:column ;
    align-items: center;
    padding: 0 20px 20px 20px;
    margin: 20px;

    `
export const AdminHomePage = () => {
    const navigate = useNavigate()

    const goToHomePage = () => {
        navigate("/")
    }

    const goToCreateTripPage = () => {
        navigate("/admin/trips/create")
    }

    const goToLoginPage = () => {
        navigate("/login")
    }

    return (
        <TelaAdminHome>

            <h1>Painel Administrativo</h1>

            <button onClick={goToHomePage}>Voltar</button>
            <br/>
            <button onClick={goToCreateTripPage}>Criar Viagem</button>
            <br/>
            <button onClick={goToLoginPage}>Logout</button>
        </TelaAdminHome>
    )
}