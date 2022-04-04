import { useNavigate } from "react-router-dom";
import Card from "../Card/Card";
import useReviews from "../hooks/useReviews";
import img from "../images/car.jpg";
import "./Home.css";

const Home = () => {
  const [reviews] = useReviews();
  const navigate = useNavigate();
  return (
    <section className="px-8 pt-20 pb-24 mx-auto max-w-7xl md:px-2">
      <div className="home-container">
        <div className="description">
          <h1>
            <span className=" text-5xl font-sans font-medium mb-4  text-gray-600">
              Your next vehicle
            </span>
            <br></br>
            <span
              className="text-5xl font-sans
              font-medium
              mb-8
              text-amber-400"
            >
              Your best car
            </span>
          </h1>
          <p className="my-5">
            Millions of unbiased reviews. Trusted by 700 Million+ users.
          </p>
          <button
            type="button"
            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-9 py-3 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800
          "
          >
            Live Demo
          </button>
        </div>
        <div className="image-container">
          <img src={img} alt="homepag"></img>
        </div>
      </div>
      <div className="my-20 mx-auto">
        <h2 className=" text-5xl font-sans font-medium mb-4 text-center text-gray-600">
          Customer Reviews ({reviews.slice(0, 3).length})
        </h2>
        <div className="card-container">
          {reviews.slice(0, 3).map((review) => (
            <Card key={review.id} review={review}></Card>
          ))}
        </div>
        <div className="text-center">
          <button
            onClick={() => navigate("/reviews")}
            type="button"
            className=" focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-9 py-3 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            See All reviews
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
