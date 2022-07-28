import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { TelaForm } from "./styled";
import { useForm} from "react"

export const ApplicationFormPage = () => {

    const [tripList, setTripList] = useState([])
    const [tripNome, setTripNome] = useState("")

    const { form, onChange, cleanFields } = useForm({
        nome: "",
        idade: "",
        viajante: "",
        profissao: "",
        pais: ""
    })

    /* const [nome, setNome] = useState("")
    const [idade, setIdade] = useState("")
    const [viajante, setViajante] = useState("")
    const [profissao, setProfissao] = useState("")
    const [pais, setPais] = useState("")  */

    const navigate = useNavigate()

    /* const recebeNome = (event) => {
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
    } */

    const cadastrar = (event) => {
        event.preventDefault();
        console.log("Cadastro realizado", form);
        cleanFields();
    };

    const pegaViagem = () => {
        axios
            .get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/mariluci-lima-Freire/trips`)
            .then((res) => {
                setTripList(res.data.trips)
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        pegaViagem()
    }, [])

    const buscaNome = (event) => {
        setTripNome(event.target.value)
    };

    const tripOptions = tripList.map(trip => {
        return (
            <option key={trip.name} value={trip.name}>
                {trip.name}
            </option>
        );
    });

    const goToListTripsPage = () => {
        navigate("/list/trips")
    }

    const goToApplicationFormPage = () => {
        navigate("/trips/application")
    }

    // const viagem = tripNome && <TripsSelection tripNome={tripNome} />

    return (
        <TelaForm>
            <figure>
                <h1>Inscreva-se para uma viagem</h1>
                <label htmlFor={"select-viagem"}>Escolha uma Viagem: </label>
                <select id={"select-viagem"} onChange={buscaNome}>
                    <option value={""}></option>
                    {tripOptions}
                </select>
            </figure>
            <form onSubmit={cadastrar}></form>
            <input
                name={"nome"}
                value={form.nome}
                onChange={onChange}
                placeholder={"Nome do viajante"}
                required
                pattern={"^.{10,}"}
                title={"O nome deve ter no mínimo 10 letras"}
            />

            <input
                name={"idade"}
                value={form.idade}
                onChange={onChange}
                placeholder={"Idade"}
                required
                type={"number"}
                min={18}
            />

            <input
                name={"viajante"}
                value={form.vianjante}
                onChange={onChange}
                placeholder={"Por que deseja viajar ?"}
                required
                pattern={"^.{30,}"}
                title={"Aqui você deve escrever no mínimo 30 letras"}
                />

            <input
                name={"profissao"}
                value={form.profissao}
                onChange={onChange}
                placeholder={"Profissão"} 
                required
                pattern={"^.{10,}"}
                title={"profissão ter no mínimo 10 letras"}
                />

            <input
                value={form.pais}
                onChange={onChange}
                placeholder={"Escolha um País"} 
                /> 

            <button onClick={goToListTripsPage}>Voltar</button>
            {/* <button onClick={goToApplicationFormPage}>Enviar</button> */}

        </TelaForm>
    )
}