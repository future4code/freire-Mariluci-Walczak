import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TelaLogin } from "./styled";


export const LoginPage = () => {
    /* const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); */
    const [form, setForm] = useState({email: "", password:""})

    const navigate = useNavigate()

    const goToHomePage = () => {
        navigate("/")
    }

    /* const goToAdminHomePage = () => {
        navigate("/admin/trips/list")
    } */

    const onChangeEmail = (event) => {
        setForm({...form, email: event.target.value});
    };
    const onChangePassword = (event) => {
        setForm({...form, password: event.target.value});
    }

    const goToAdminHomePage = (event) => {
        navigate("/admin/trips/list")
        console.log(form);
        event.preventDefault()

        /* const body = {
            email: email,
            password:password
        } */
        axios
            .post(
                "https://us-central1-labenu-apis.cloudfunctions.net/labeX/mariluci-lima-Freire/login",form
            )
            .then((response) => {
                console.log("deu certo", response.data.token);
                localStorage.setItem('token',response.data.token)
            })
            .catch((error) => {
                console.log("deu errado ", error.response)
                alert(error);
            })
    };

    return (
        <TelaLogin>

            <h1>Login</h1>
           <form onSubmit={goToAdminHomePage}>
            <input
                placeholder={"E-mail"}
                value={form.email}
                required
                onChange={onChangeEmail}
            />
            <input
                placeholder={"Senha"}
                type="password"
                value={form.password}
                required
                onChange={onChangePassword}
            />
            <br />
            {/* <button>Fazer Login</button> */}
            <button>{goToAdminHomePage}Fazer Login</button>
            </form>
            <button onClick={goToHomePage}>Voltar</button>
       
        </TelaLogin>
    )
}