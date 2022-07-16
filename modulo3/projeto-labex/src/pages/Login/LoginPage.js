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
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate()

    const goToHomePage = () => {
        navigate("/")
    }

    const goToAdminHomePage = () => {
        navigate("/admin/trips/list")
    }

    const onChangeEmail = (event) => {
        setEmail(event.target.value);
    };
    const onChangePassword = (event) => {
        setPassword(event.target.value);
    }

    const onSubmitLogin = () => {
        console.log(email, password);

        const body = {
            email: email,
            password:password
        }
        axios
            .post(
                'https://us-central1-labenu-apis.cloudfunctions.net/labeX/mariluci-lima-Freire/login',body
            )
            .then((response) => {
                console.log("deu certo", response.data);
            })
            .catch((error) => {
                console.log("deu errado ", error.response)
                alert(error);
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
                type="password"
                value={password}
                onChange={onChangePassword}
            />

            <button onClick={goToHomePage}>Voltar</button>
            <br />
            <button onClick={onSubmitLogin}>Fazer Login</button>
            {/* <button onClick={goToAdminHomePage}>Fazer Login</button> */}
        </TelaLogin>
    )
}