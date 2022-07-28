import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react";

export const TripDetailsPage = () => {

    const navigate = useNavigate()

    const goToAdminHomePage = () => {
        navigate("/")
    }

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token === null) {
            console.log('Não está logado !!!')
            navigate("/")
        }
    }, [])

    useEffect(() => {
        const token = localStorage.getItem('token')
        axios
            .get(
                'https://us-central1-labenu-apis.cloudfunctions.net/labeX/mariluci-lima-Freire/trip/:id',
                {
                    headers: {
                        auth: token
                    }
                }

            )
            .then((response) => {
                console.log("Deu certo ", response.data)
            })
            .catch((error) => {
                console.log("Deu erro ", error.response)
                alert(error)
            });
    }, []);

    return (
        <TelaLista>

            <h1>Labex</h1>

            <div>DETALHES DA VIAGEM</div>;

            {trips.map(trip => {
                return (
                    <div><p>{trip.name}</p>
                    <figure>
                        <p><b>Nome :</b>{trip.name} </p>
                        <p><b>Descrição:</b>{trip.description} </p>
                        <p><b>Planeta:</b>{trip.planet} </p>
                        <p><b>Duração:</b>{trip.durationInDays} </p>
                        <p><b>Data:</b>{trip.date} </p>
                    </figure>
                    <button onClick={goToHomePage}>Voltar</button>
                    <p><strong>Canditados Pendentes</strong></p>
                    //mostrar se tem algum candidato pendente
                    <p><strong>Canditados Aprovados</strong></p>
                    //mostrar se tem algum candidato aprovado
                    </div>
                               
                )
            })}

        </TelaLista>
    )
};