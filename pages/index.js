import { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import FeaturedMovies from "../components/featuredMovies";
import MovieCard from "../components/movieCard";
import MovieList from "../components/movieList";
import Link from "next/link";

export default function Home() {
  let [featured, setfeaturd] = useState([]);
  let [topRated, setTopRated] = useState([]);
  let [upComing, setUpComing] = useState([]);
  let [loadingFlag, setLoadingFlag] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch(
        "https://api.themoviedb.org/3/movie/popular?api_key=2fa5f55d6b9b49c888ed0bb517768275"
      )
        .then((res) => res.json())
        .then((json) => {
          setfeaturd(json.results);
        }),
      fetch(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=2fa5f55d6b9b49c888ed0bb517768275"
      )
        .then((response) => response.json())
        .then((json) => {
          setTopRated(json.results);
        }),
      fetch(
        "https://api.themoviedb.org/3/movie/upcoming?api_key=2fa5f55d6b9b49c888ed0bb517768275"
      )
        .then((response) => response.json())
        .then((json) => {
          setUpComing(json.results);
        }),
    ]).then(setLoadingFlag(false));
  }, []);

  return loadingFlag ? (
    <h1></h1>
  ) : (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <section className="featured">
          <FeaturedMovies movieList={featured} />
        </section>
        <section id="top-rated">
          <MovieList {...{ movieList: topRated, title: "Top Rated" }} />
        </section>
        <section>
          <MovieList {...{ movieList: featured, title: "Most Popular" }} />
        </section>
        <section>
          <MovieList {...{ movieList: upComing, title: "Up Coming" }} />
        </section>
      </main>
    </>
  );
}
