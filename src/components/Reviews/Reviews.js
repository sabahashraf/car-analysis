import React from "react";
import Card from "../Card/Card";
import useReviews from "../hooks/useReviews";

const Reviews = () => {
  const [reviews] = useReviews();
  return (
    <section className="px-8 pt-20 pb-24 mx-auto max-w-7xl md:px-2">
      <h2 className=" text-4xl font-sans font-medium mb-4 text-center mb-20">
        What customers have said..
      </h2>
      {reviews.map((review) => (
        <Card review={review} key={review.id}></Card>
      ))}
    </section>
  );
};

export default Reviews;
