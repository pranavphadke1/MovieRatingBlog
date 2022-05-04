import React, {useEffect, useRef, useState} from 'react';
import axios from "axios";
import {Link, useNavigate, useParams} from "react-router-dom";

const OmdbSearch = () => {
    const titleSearchRef = useRef()
    const {movieSearch} = useParams()
    const navigate = useNavigate()
    const [movies, setMovies] = useState([])
    const searchUrl = 'https://www.omdbapi.com/?apikey=852159f0'
    const searchByTitle = async () => {
        const searchString = titleSearchRef.current.value || movieSearch || 'batman'
        const response = await axios.get(`${searchUrl}&s=${searchString}`)
        setMovies(response.data.Search)
        titleSearchRef.current.value = searchString
        navigate(`/search/${searchString}`)
    }
    useEffect(() => {
        searchByTitle()
    }, [])
    return (
        <div>
            <h1>Search a Movie!</h1>
            <ul className="list-group wd-list-group-override">
                <li className="list-group-item">
                    <button
                        onClick={searchByTitle}
                        className="btn btn-primary float-end">Search
                    </button>
                    <input
                        ref={titleSearchRef}
                        className="form-control w-75"/>
                </li>
                {
                    movies && movies.map(movie =>
                                             <li className="list-group-item">
                                                 <Link to={`/details/${movie.imdbID}`}>
                                                     <img src={movie.Poster} className="me-2"
                                                          height={60}/>
                                                     {movie.Title}
                                                 </Link>
                                             </li>
                    )
                }
            </ul>
        </div>
    );
};

export default OmdbSearch;