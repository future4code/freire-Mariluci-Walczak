import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export const TelaHome = styled.div`
    display: flex;
    flex-direction:column ;
    align-items: center;
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

                <button onClick={goToListTripsPage}>Ver Viagens</button>
                <br />
                <button onClick={goToLoginPage}>Área Administrativa</button>
 

        </TelaHome>
    )
}