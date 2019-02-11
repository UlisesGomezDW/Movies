import React, { Component } from 'react'
import Movie from './Movie'

class Movies extends Component {
    constructor(props){
        super(props)
        this.state = {
            movies: [
                {
                    titulo:"Spider-Man: Un nuevo universo",
                    duracion: "140 minutos",
                    imagen: "https://img-cdn.hipertextual.com/files/2018/12/spider-man-un-nuevo-universo-poscreditos.jpg?strip=all&lossy=1&quality=60&resize=670%2C410&ssl=1",
                    año: "2018",
                    director: "Peter Ramsey",
                    productora: "Sony",
                    
                },
                {
                    titulo:"Cómo entrenar a tu dragón 3",
                    duracion: "120 minutos",
                    imagen: "http://es.web.img3.acsta.net/c_215_290/pictures/18/11/08/11/03/2583259.jpg",
                    año: "2019",
                    director: "Dean DeBlois",
                    productora: "Disney",
                },
                {
                    titulo:"Green Book: una amistad sin fronteras",
                    duracion: "120 minutos",
                    imagen: "http://diamondfilms.com/img/poster/5be9b147bfe3c36bd77ce5b69.jpg",
                    año: "2018",
                    director: "Peter Farrelly",
                    productora: "Fox",
                },
                {
                    titulo:"La gran aventura LEGO 2",
                    duracion: "135 minutos",
                    imagen: "https://i1.wp.com/www.locoxelcine.com/wp-content/uploads/2019/02/portada.jpg?fit=1568%2C1098&ssl=1",
                    año: "2019",
                    director: "Mike Mitchell",
                    productora: "Warner Animation Group",
                },
                {
                    titulo:"La favorita",
                    duracion: "120 minutos",
                    imagen: "https://www.elfinanciero.com.mx/uploads/2019/02/02/71e9c6620d1549130002_standard_desktop_medium_retina.jpeg",
                    año: "2018",
                    director: " Yorgos Lanthimos",
                    productora: "Sony"
                },
                
            ]
        }
    }

    render() {
        return (
            <div>
            <h1>Peliculas Disponibles</h1>
            {this.state.movies.map((movie, index)=>(
                <div>
                    <br></br>
                    <p>______________________________________________</p>
                    <img src={movie.imagen}
                    alt={movie.titulo} width="100" height="100" />
                    <h3>{movie.titulo}</h3>
                    <p>{movie.duracion}</p>
                    <p>{movie.año}</p>
                    <p>{movie.director}</p>
                    <p>{movie.productora}</p>
                    <p>------------------------------------</p>
                    <Movie movie={movie} />
                </div>
            ))}
            </div>
        )
    }
}

export default Movies;