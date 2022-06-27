import React from "react"
import axios from "axios"
import styled from "styled-components"


const CardPlaylist = styled.div`
    border: 1px solid black;
    padding: 10px;
    margin: 10px;
    width: 300px;
    display: flex;
    justify-content: space-between;
`

export default class TelaListaPlaylists extends React.Component {

    state = {
        playlists: []
    }

    componentDidMount() {
        this.buscarPlaylists()
    }

    buscarPlaylists = async() => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        try {
            const res = axios.get(url, {
                headers: {
                    Authorization: "mariluci-lima-freire"
                }
            })
            this.setState({ playlists: (await res).data })
        } catch (err){
            alert("Ocorreu um problema, tente novamente")
        }
    }

    render(){
        const listaPlaylists = this.state.playlists.map((list) => {
            return <CardPlaylist key={list.id}>
                {list.name}</CardPlaylist>
        })
        
        return(
            <div>   
                <h2>Playlists</h2>
                {listaPlaylists}
            </div>
        )
    }
}
