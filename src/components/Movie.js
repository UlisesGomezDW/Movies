import React from 'react'

const Movie = (props) => (
    <div>
        <h2>{props.movie.titulo}</h2>
        <p>Titulo: {props.movie.titulo}</p>
        <p>Duracion: {props.movie.duracion}</p>
        <p>Año: {props.movie.año}</p>
        <p>Director: {props.movie.director}</p>
        <p>Productora: {props.movie.productora}</p>
        <img src={props.movie.imagen} alt={props.movie.titulo} height="200" width="200" />
        
    </div>
)

export default Movie