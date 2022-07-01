import React from "react";
import axios from "axios"

export default class TelaCadastroPlaylist extends React.Component {

    state = {
        nome: ""
    }
    handleNome = (event) => {
        this.setState({nome: event.target.value})
    }

    fazerCadastro = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        const body = {
            name: this.state.nome
        }

        axios
        .post(url, body, {
            headers: {
                Authorization: "mariluci-lima-freire"
            }
        })
        .then((res) => {
            alert("Playlist cadastrada com sucesso !")
            this.setState({nome: ""})
        })
        .catch((err) => {
            alert(err.response.data.message)
            this.setState({nome: ""})
        })
        
    }

    render(){
        return (
           <div>
                <h2>Cadastro da Playlist</h2>
                <input 
                    placeholder={"Nome"}
                    value={this.state.nome}
                    onChange={this.handleNome}
                />
                
            <button onClick={this.fazerCadastro}>Cadastrar</button>
            </div>
        )


    }
}