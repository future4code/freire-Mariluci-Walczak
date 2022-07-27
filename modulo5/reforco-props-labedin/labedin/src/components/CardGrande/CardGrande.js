import React from 'react';
import { BigCardContainer, Texto } from './Styles';

function CardGrande(props) {
    return (
        // <div className="BigCardContainer">
        <BigCardContainer>
            <img src={ props.imagem } />
            <Texto>
                <h4>{ props.nome }</h4>
                <p>{ props.descricao }</p>
            </Texto>
            </BigCardContainer>
    )
}

export default CardGrande;