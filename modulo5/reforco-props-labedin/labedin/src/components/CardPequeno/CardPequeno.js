import React from 'react';
import { SmallCardContainer } from './Styles.js';

function CardPequeno(props) {
    return (
        <SmallCardContainer>
            <img src={ props.imagem }/>
            <h3>{ props.titulo }</h3>
            <p>{props.dados}</p>
        </SmallCardContainer>

    )
}

export default CardPequeno;