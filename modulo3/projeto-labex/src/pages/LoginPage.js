import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export const TelaLogin = styled.div`
    width: 100vw;
    display: flex;
    flex-direction:column ;
    align-items: center;
    padding: 0 20px 20px 20px;
    margin-top: 20px;

    input {
        width: 300px;
        margin-bottom: 12px;
    }
`

export const LoginPage = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const goToHomePage = () => {
        navigate("/")
    }

    const goToAdminHomePage = () => {
        navigate("/admin/trips/list")
    }

    const onChangeEmail = (event) => {
        setEmail(event.target.value);
    };
    const onChangeSenha = (event) => {
        setSenha(event.target.value);
    }

    const onSubmitLogin = () => {
        console.log(email, senha);
        const body = {
            email: email,
            password: senha
        };

        axios
            .post(
                "https://us-central1-labenu-apis.cloudfunctions.net/labeX/mariluci-lima-Freire/login"
            )
            .then((response) => {
                console.log("deu certo: ", response.data);
                // localStorage.setItem("token", response.data.token);
                // history.push("/")
            })
            .catch((error) => {
                console.log("deu errado ", error.response)
            })
    };

    return (
        <TelaLogin>

            <h1>Login</h1>
            <input
                placeholder="E-mail"
                type="email"
                value={email}
                onChange={onChangeEmail}
            />
            <input
                placeholder="Senha"
                type="senha"
                value={senha}
                onChange={onChangeSenha}
                />

            <button onClick={goToHomePage}>Voltar</button>
            <br />
            <button onClick={goToAdminHomePage}>Entrar</button>
        </TelaLogin>
    )
}