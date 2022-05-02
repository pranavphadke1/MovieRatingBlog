import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import ReviewItem from "./renderReviewItem";
import {findAllReviews} from "../../../actions/reviews-actions";
const RenderAllReviews = () => {
    let reviews = useSelector((state) => state.reviews);
    const dispatch = useDispatch();
    useEffect(() =>
                  findAllReviews(dispatch)
        ,
              []);
    return (
        <ul className="list-group wd-list-group-override">
            <li className="list-group-item">
                All Recent Reviews
            </li>
            {reviews &&
                reviews.map(review => {
                    return (<ReviewItem review={review}/>);
                })
            }

        </ul>
    );
}

export default RenderAllReviews;

