import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import SecureContent from "../Secure/SecureContent";
import {useProfile} from "../../context/profile-context";
import PostReview from "../Blog/PostReview";
import RenderReviewsForMovie from "../Blog/RenderReviews/renderReviewsForMovie";
import {likeMovie, dislikeMovie} from "../../actions/movies-actions";
import {useDispatch, useSelector} from "react-redux";
import {findAllMovies} from "../../actions/movies-actions";

const OmdbDetails = () => {
    const [movieDetails, setMovieDetails] = useState({})
    const url = 'http://www.omdbapi.com/?apikey=852159f0'
    const {imdbID} = useParams()
    const {profile} = useProfile()
    const searchMovieByImdbID = async () => {
        const response = await axios.get(`${url}&i=${imdbID}`)
        setMovieDetails(response.data)
    }
    const dispatch = useDispatch();
    useEffect(() => {
        searchMovieByImdbID()
        findAllMovies()
    }, [])

    const movies = useSelector((state) => state.movies);
    console.log(movies)
    let movie = movies.find(mv => mv.imdbID == imdbID);
    console.log(movie);
    const navigate = useNavigate()

    const handleLike = async () => {
        const newMovie = {
            title: movieDetails.Title,
            poster: movieDetails.Poster,
            imdbID: movieDetails.imdbID
        }
        {
            movie ? await likeMovie(dispatch, movie) : await likeMovie(dispatch, newMovie)
        }
        navigate(`/details/${imdbID}`)
    }

    const handleDislike = async () => {
        const newMovie = {
            title: movieDetails.Title,
            poster: movieDetails.Poster,
            imdbID: movieDetails.imdbID
        }
        {
            movie ? await dislikeMovie(dispatch, movie) : await dislikeMovie(dispatch, newMovie)
        }
        navigate(`/details/${imdbID}`)
    }

    let id = movieDetails.imdbID
    return (
        <div>
            <h1>{movieDetails.Title}</h1>
            <div className="movieDetailsContainer list-group-item">
                <img className="imageContainer " src={movieDetails.Poster}/>
                <div className="moviePlot ps-3">
                    {movieDetails.Plot}
                </div>
                <SecureContent>
                    <button className="rounded-pill likes-dislikes-button m-2"
                            onClick={handleLike}>Like: {movie && movie.likes}
                    </button>
                    <button className="rounded-pill likes-dislikes-button "
                            onClick={handleDislike}>Dislike: {movie
                                                              && movie.dislikes}
                    </button>
                </SecureContent>
            </div>

            <div className=" wd-whats-happening-container">

            </div>


            {/*{ourMovieDetails && <Preformatted obj={ourMovieDetails}/>}*/}
            {/*<Preformatted obj={movieDetails}/>*/}

            <SecureContent>
                {profile && movieDetails.imdbID && profile.role == 'REVIEWER' ? <PostReview
                    idDetails={{"movieID": movieDetails.imdbID, "userID": profile._id}}/> : <></>}
            </SecureContent>

            {movieDetails.imdbID && <RenderReviewsForMovie movieID={id}/>}
        </div>
    );
};

export default OmdbDetails;