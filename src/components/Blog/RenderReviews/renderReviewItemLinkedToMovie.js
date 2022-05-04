import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {findAllUsers} from "../../../actions/users-actions";
import {Link} from "react-router-dom";
import axios from "axios";

const ReviewItemLinkedToMovie = ({
                                     review = {
                                         movieID: "",
                                         review: "",
                                     }
                                 }
) => {
    const [movie, setMovie] = useState([])
    const getTheMovie = async () => {
        const response = await axios.get('http://localhost:4000/api/movies')
        setMovie(response.data.find(m => m.imdbID == review.movieID));
    }
    useEffect(() => {
                  getTheMovie()
              }
        ,
              []);
    return (

        <li className="list-group-item movieDetailsContainer">


            <div className="">
                <Link className=" text-decoration-none"
                      to={movie && `/details/${movie.imdbID}`}>
                    <h6>{movie && movie.title}</h6>
                    <img className=" imageContainer" src={movie && movie.poster}/>
                </Link>
                <div className=" moviePlot"> {review && review.review}</div>
            </div>


        </li>

    );
}
export default ReviewItemLinkedToMovie;
