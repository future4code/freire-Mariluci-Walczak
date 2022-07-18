import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios"
import { TelaLista } from "./styled";

export const AdminHomePage = (props) => {

    const [trips, setTrips] = useState([])
    useEffect(() => {
        buscaViagens(props.listaViagensId)
    }, [props.listaViagensId])

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

    const buscaViagens = () => {
        axios
            .get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/mariluci-lima-Freire/trips`)
            .then((res) => {
                setTrips(res.data.trips)
            })
            .catch((error) => {
                alert(error);
            });
    }

    return (
        <TelaLista>

            <h1>Painel Administrativo</h1>

            <button onClick={goToHomePage}>Voltar</button>
            <button onClick={goToCreateTripPage}>Criar Viagem</button>
            <button onClick={goToLoginPage}>Logout</button>

            {trips.map(trip => {
                return (
                    <figure>
                        <p><b>{trip.name}</b></p>
                    </figure>
                )
            })}

        </TelaLista>
    )
}