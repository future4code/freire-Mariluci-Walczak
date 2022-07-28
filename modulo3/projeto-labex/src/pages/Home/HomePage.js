import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export const TelaHome = styled.div`
    width: 100vw;
    display: flex;
    flex-direction:column ;
    align-items: center;
    margin-top: 80px;
`


export const HomePage = () => {
    const navigate = useNavigate()

    const goToListTripsPage = () => {
        navigate("/list/trips")
    }
    const goToLoginPage = () => {
        navigate("/login")
    }

    return (
        <TelaHome>

            <h1>Labex</h1>
            <div>
            <button onClick={goToListTripsPage}>Ver Viagens</button>
            <button onClick={goToLoginPage}>Área Administrativa</button>
            </div>

        </TelaHome>
    )
}