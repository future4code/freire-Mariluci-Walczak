import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TelaLista } from "./styled";

export const ListTripsPage = (props) => {
    
    const [trips, setTrips] = useState([])

    useEffect(() => {
        buscaViagens(props.listaViagensId)
    }, [props.listaViagensId])
    
    const navigate = useNavigate()

    const goToApplicationFormPage = () => {
        navigate("/trips/application")
    }

    const goToHomePage = () => {
        navigate("/")
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

            <h1>Labex</h1>

            <div>
                <button onClick={goToHomePage}>Voltar</button>
                <button onClick={goToApplicationFormPage}>Inscrever-se</button>
            </div>

            <h3>Lista de Viagens</h3>

            {trips.map(trip => {
                return (
                    <figure>
                        <p><b>Nome da viagem:</b>{trip.name} </p>
                        <p><b>Descrição:</b>{trip.description} </p>
                        <p><b>Planeta:</b>{trip.planet} </p>
                        <p><b>Duração:</b>{trip.durationInDays} </p>
                        <p><b>Data:</b>{trip.date} </p>
                    </figure>
                )
            })}



        </TelaLista>
    )

}