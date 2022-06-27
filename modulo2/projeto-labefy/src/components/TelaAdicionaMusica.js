import React from "react";
import axios from "axios"

export default class TelaAdicionaMusica extends React.Component {

    state = {
        musica: "",
        cantor: "",
        link: "",
        nomePlaylist:""

    }

    handleNomePlaylist = (event) => {
        this.setState({nomePlaylist: event.target.value})
    }
    handleMusica = (event) => {
        this.setState({musica: event.target.value})
    }
    handleCantor = (event) => {
        this.setState({cantor: event.target.value})
    }
    handleLink = (event) => {
        this.setState({link: event.target.value})
    }
   
    fazerCadastroMusica = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:playlistId/tracks"
        const body = {
            name: this.state.musica,
            artist: this.state.cantor,
            url: this.state.link
        }

        axios
        .post(url, body, {
            headers: {
                Authorization: "mariluci-lima-freire"
            }
        })
        .then((res) => {
            alert("Playlist cadastrada com sucesso !")
            this.setState({musica: "", cantor: "", link: ""})
        })
        .catch((err) => {
            alert(err.response.data.message)
            this.setState({musica: "", cantor: "", link: ""})
        })
        
    }

    render(){
        return (
           <div>
                <h2>Adicionar Música na Playlist</h2>
                <input 
                    placeholder={"Play list"}
                    value={this.state.nomePlaylist}
                    onChange={this.handleNomePlaylist}
                />
                <input 
                    placeholder={"Música"}
                    value={this.state.musica}
                    onChange={this.handleMusica}
                />
                <input 
                    placeholder={"Cantor/Banda"}
                    value={this.state.cantor}
                    onChange={this.handleCantor}
                />
                <input 
                    placeholder={"Link"}
                    value={this.state.link}
                    onChange={this.handleLink}
                />
                
            <button onClick={this.fazerCadastroMusica}>Adicionar</button>
            </div>
        )


    }
}