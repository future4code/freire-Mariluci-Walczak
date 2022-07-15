import React from "react";
import { useNavigate } from "react-router-dom";
import { TelaLista } from "./styled";

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

            <div>
                <button onClick={goToHomePage}>Voltar</button>
                <button onClick={goToApplicationFormPage}>Inscrever-se</button>
            </div>

            <h1>Lista de Viagens</h1>
            <p><b>Nome da viagem:</b> Planeta Vênus</p>
            <p><b>Descrição:</b> O planeta do homem mais poderoso de todas as galáxias</p>
            <p><b>Planeta:</b> Vegeta</p>
            <p><b>Duração:</b> 100 dias</p>
            <p><b>Data:</b> 2024-12-01</p>

        </TelaLista>
    )
}