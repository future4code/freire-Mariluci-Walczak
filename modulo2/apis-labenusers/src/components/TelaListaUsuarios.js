import React from "react"
import axios from "axios"
import styled from "styled-components"
/* import userEvent from "@testing-library/user-event" */

const CardUsuario = styled.div`
    border: 1px solid black;
    padding: 10px;
    margin: 10px;
    width: 300px;
    display: flex;
    justify-content: space-between;
`

export default class TelaListaUsuarios extends React.Component {

    state = {
        usuarios: []
    }

    componentDidMount() {
        this.pegarUsuarios()
    }

    /* pegarUsuarios = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        axios.get(url, {
            headers: {
                Authorization: "mariluci-freire"
            }
        })
        .then((res) => {
            this.setState({usuarios: res.data})
        })
        .catch((err) => {
            alert("Ocorreu um problema, tente novamente :(")
        })
    } */

    pegarUsuarios = async() => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        try {
            const res = axios.get(url, {
                headers: {
                    Authorization: "mariluci-freire"
                }
            })
            this.setState({ usuarios: (await res).data })
        } catch (err){
            alert("Ocorreu um problema, tente novamente")
        }
    }

    deletarUsuario = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
        axios.delete(url, {
            headers: {
                Authorization: "mariluci-freire"
            }
        })
        .then((res) =>{
            alert("Usuário(a) deletado(a) com sucesso !")
            this.pegarUsuarios()
        })
        .catch((err) => {
            alert("Ocorreu um problema, tente novamente :(")
        })
    }

    render(){
        const listaUsuarios = this.state.usuarios.map((user) => {
            return <CardUsuario key={user.id}>
                {user.name}
                <button onClick={() => this.deletarUsuario(user.id)}>Deleta</button>
                </CardUsuario>
        })

        return(
            <div>
                <button onClick={this.props.irParaCadastro}>Ir para Cadastro</button>
                <h2>Lista de Usuários</h2>
                {listaUsuarios}
            </div>
        )
    }
}