import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import SecureContent from "../Secure/SecureContent";
import {useProfile} from "../../context/profile-context";
import PostReview from "../Blog/PostReview";
import RenderReviewsForMovie from "../Blog/RenderReviews/renderReviewsForMovie";
import {likeMovie, dislikeMovie} from "../../actions/movies-actions";
import {useDispatch, useSelector} from "react-redux";
import {findAllMovies} from "../../actions/movies-actions";

const OmdbDetails = () => {
    const [status, setStatus] = useState({})
    const [movieDetails, setMovieDetails] = useState({})

    const url = 'http://www.omdbapi.com/?apikey=852159f0'
    const {imdbID} = useParams()
    let {profile} = useProfile()
    const [info, setInfo] =
        useState(profile);
    const searchMovieByImdbID = async () => {
        const response = await axios.get(`${url}&i=${imdbID}`)
        setMovieDetails(response.data)
    }
    const dispatch = useDispatch();
    useEffect(() => {
        searchMovieByImdbID()
        setInfo(profile)
        findAllMovies()
    }, [])

    const movies = useSelector((state) => state.movies);
    let movie = movies.find(mv => mv.imdbID == imdbID);

    const handleLike = async () => {
        if (status == "LIKED") {
            return;
        } else if (status == "DISLIKED") {
            let x = info.dislikedMovies.indexOf(imdbID)
            info.dislikedMovies.splice(x,1);
            info.likedMovies.push(imdbID)
            const response = await axios.put(`http://localhost:4000/api/users/${profile._id}`, info)

            const newMovie = {
                title: movieDetails.Title,
                poster: movieDetails.Poster,
                imdbID: movieDetails.imdbID
            }
            {
                movie ? await likeMovie(dispatch, movie) : await likeMovie(dispatch, newMovie)
            }

        } else {
            info.likedMovies.push(imdbID)
            const response = await axios.put(`http://localhost:4000/api/users/${profile._id}`, info)
        }

        const newMovie = {
            title: movieDetails.Title,
            poster: movieDetails.Poster,
            imdbID: movieDetails.imdbID
        }
        {
            movie ? await likeMovie(dispatch, movie) : await likeMovie(dispatch, newMovie)
        }
        setStatus("LIKED");
    }

    const handleDislike = async () => {
        if (status == "DISLIKED") {
            return;
        } else if (status == "LIKED") {
            let x = info.likedMovies.indexOf(imdbID)
            info.likedMovies.splice(x,1);
            info.dislikedMovies.push(imdbID)
            const response = await axios.put(`http://localhost:4000/api/users/${profile._id}`, info)

            const newMovie = {
                title: movieDetails.Title,
                poster: movieDetails.Poster,
                imdbID: movieDetails.imdbID
            }
            {
                movie ? await dislikeMovie(dispatch, movie) : await dislikeMovie(dispatch, newMovie)
            }

        } else {
            info.dislikedMovies.push(imdbID)
            const response = await axios.put(`http://localhost:4000/api/users/${profile._id}`, info)
        }
        const newMovie = {
            title: movieDetails.Title,
            poster: movieDetails.Poster,
            imdbID: movieDetails.imdbID
        }
        {
            movie ? await dislikeMovie(dispatch, movie) : await dislikeMovie(dispatch, newMovie)
        }
        setStatus("DISLIKED");
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
                            onClick={handleLike}>Like
                    </button>
                    <button className="rounded-pill likes-dislikes-button "
                            onClick={handleDislike}>Dislike
                    </button>
                </SecureContent>
            </div>


            <SecureContent>
                {profile && movieDetails.imdbID && profile.role == 'REVIEWER' ? <PostReview
                    idDetails={{"movieID": movieDetails.imdbID, "userID": profile._id}}/> : <></>}
            </SecureContent>

            {movieDetails.imdbID && <RenderReviewsForMovie movieID={id}/>}
        </div>
    );
};

export default OmdbDetails;