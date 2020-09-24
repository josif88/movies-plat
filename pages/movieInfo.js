import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Cover from "../components/cover";
import { Image, Rate, Tag, Typography } from "antd";

const { default: Navbar } = require("../components/navbar");

const MovieInfo = () => {
  const [movie, setMovie] = useState({});
  const [loadingFlag, setLoadingFlag] = useState(true);
  const movieId = useRouter().query.id;

  useEffect(() => {
    if (!movieId) return;

    fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "?api_key=2fa5f55d6b9b49c888ed0bb517768275"
    )
      .then((resp) => resp.json())
      .then(setMovie)
      .then(setLoadingFlag);
  }, [movieId]);

  return loadingFlag ? (
    <div>Loading</div>
  ) : (
    <div>
      <Navbar />
      <Cover {...movie} />
      <div className="single-page-content single-page-aligment">
        <div
          className="single-page-image-holder"
          style={{ width: 125, display: "inline-table" }}
        >
          <Image
            style={{ margin: "10px 10px 0px 10px" }}
            width={125}
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          />
        </div>
        <div style={{ display: "block" }}>
          <span style={{ marginRight: 5 }}>
            <b>Rating:</b>
          </span>
          <Rate
            disabled
            count={5}
            value={movie.vote_average / 2}
            allowHalf
            width={100}
          />
          <div>
            <span style={{ marginRight: 5 }}>
              <b>Description:</b>
            </span>
            <p>{movie.overview}</p>
          </div>
          <span style={{ marginRight: 5 }}>
            <b>Genres:</b>
          </span>
          {movie.genres.map((item,index) => (
            <Tag key={index}>{item.name}</Tag>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
