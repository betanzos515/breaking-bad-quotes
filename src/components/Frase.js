import React from 'react'
import { ContenedorFrase } from '../syles/StylesApp';

export const Frase = ({frase}) => {
    const {quote,author} = frase;
    return (
        <ContenedorFrase>
            <h1>{quote}</h1>            
            <p> -{author}</p>
        </ContenedorFrase>
    )
}
