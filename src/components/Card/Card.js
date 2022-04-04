import React from "react";
import "./Card.css";

const Card = ({ review }) => {
  return (
    <div className="card p-3 mx-auto shadow-lg">
      <div className="flex items-center">
        <img className="card-image" src={review.img} alt="person1"></img>
        <h3 classname="text-xl font-semibold">{review.name}</h3>
      </div>
      <div>
        <p className="mt-4">Rating: {review.rating}</p>
        <p>
          <small>Date posted on {review.date}</small>
        </p>
        <p className="pb-5">
          {review.details.length < 250
            ? review.details
            : review.details.slice(0, 250) + "..."}
        </p>
      </div>
    </div>
  );
};

export default Card;
