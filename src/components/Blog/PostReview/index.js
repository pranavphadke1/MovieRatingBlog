import {useDispatch}
    from "react-redux";
import React, {useEffect, useState} from "react";
import {createReview} from "../../../actions/reviews-actions";
import axios from "axios";
import {useParams} from "react-router-dom";

const PostReview = ({
                        idDetails = {
                            movieID: "000",
                            userID: "000"
                        }

                    }) => {
    const dispatch = useDispatch();
    const [newReview, setNewReview] =
        useState({
                     movieID: idDetails.movieID,
                     postedBy: {
                         userID: idDetails.userID,
                     },
                     review: "",
                     likes: 0,
                     dislikes: 0,
                 });

    const [movieDetails, setMovieDetails] = useState({})
    const url = 'http://www.omdbapi.com/?apikey=852159f0'
    const {imdbID} = useParams()

    const searchMovieByImdbID = async () => {
        const response = await axios.get(`${url}&i=${imdbID}`)
        setMovieDetails(response.data)
    }

    const handleReview = async () => {
        const movie = {
            title: movieDetails.Title,
            poster: movieDetails.Poster,
            imdbID: movieDetails.imdbID
        }
        const response = await axios.post("http://localhost:4000/api/review", movie)
        await createReview(dispatch,newReview)
    }

    useEffect(() => {
        searchMovieByImdbID()
    }, [])

    return (
        <div className="list-group-item wd-whats-happening-container mb-5">
            <div className="p-3 wd-post-container">
                <textarea className="review-textarea" placeholder="My Review"
                          onChange={(e) =>
                              setNewReview({
                                               ...newReview,
                                               movieID: idDetails.movieID,
                                               review: e.target.value
                                           })}>
                </textarea>
                <button className="float-end rounded-pill review-button"
                        onClick={handleReview}>
                    Post
                </button>
            </div>
        </div>
    );
}
export default PostReview;