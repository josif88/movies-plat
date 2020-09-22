import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const { default: Navbar } = require("../components/navbar");

const MovieInfo = () => {
  const [movie, setMovie] = useState({});
  const movieId = useRouter().query.id;

  return (
    <div>
      <Navbar />
      <p>{movie.title}</p>
    </div>
  );
};

export default MovieInfo;
