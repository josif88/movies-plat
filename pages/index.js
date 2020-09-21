import { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import FeaturedMovies from "../components/featuredMovies";
import MovieCard from "../components/movieCard";

export default function Home() {
  let [featured, setfeaturd] = useState([]);
  let [topRated, setTopRated] = useState([]);
  let [upComing, setUpComing] = useState([]);
  let [loadingFlag, setLoadingFlag] = useState(true);
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=2fa5f55d6b9b49c888ed0bb517768275"
    )
      .then((res) => res.json())
      .then((json) => {
        setfeaturd(json.results);
        setLoadingFlag(false);
      });

    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=2fa5f55d6b9b49c888ed0bb517768275"
    )
      .then((reponse) => reponse.json())
      .then((json) => {
        setTopRated(json.results);
        setLoadingFlag(false);
      });

    fetch(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=2fa5f55d6b9b49c888ed0bb517768275"
    )
      .then((reponse) => reponse.json())
      .then((json) => {
        setUpComing(json.results);
        setLoadingFlag(false);
      });
  }, []);

  return loadingFlag ? (
    <h1></h1>
  ) : (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <section class="featured">
          <FeaturedMovies movieList={featured} />
        </section>
        <section>
          <div className="container">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: 25,
              }}
            >
              <h3>Top Rate</h3>
              <span style={{ fontWeight: 700, fontSize: 36 }}>...</span>
            </div>
            <div className="horizontal-holder">
              {topRated.map((item, index) => (
                <MovieCard key={index} {...item} />
              ))}
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: 25,
              }}
            >
              <h3>Must Popular</h3>
              <span style={{ fontWeight: 700, fontSize: 36 }}>...</span>
            </div>
            <div className="horizontal-holder">
              {featured.map((item, index) => (
                <MovieCard key={index} {...item} />
              ))}
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: 25,
              }}
            >
              <h3>Up Coming</h3>
              <span style={{ fontWeight: 700, fontSize: 36 }}>...</span>
            </div>
            <div className="horizontal-holder">
              {upComing.map((item, index) => (
                <MovieCard key={index} {...item} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
