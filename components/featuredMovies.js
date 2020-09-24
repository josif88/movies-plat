import { Carousel } from "antd";
import Link from "next/link";

export default function FeaturedMovies({ movieList }) {
  let featuredMovies = movieList.slice(0, 5);

  return (
    <section className="featured">
      <Carousel autoplay>
        {featuredMovies.map((item, index) => (
          <div className="content-style" key={index}>
            <div style={{ position: "relative" }}>
              <Link
                href={{
                  pathname: "/movieInfo",
                  query: { id: item.id },
                }}
              >
                <a>
                  <img
                    className="image-style"
                    src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                  />
                </a>
              </Link>
              <div className="overlay-style">
                <div className="container spacer">
                  <Link
                    href={{
                      pathname: "/movieInfo",
                      query: { id: item.id },
                    }}
                  >
                    <a>
                      <div className="movie-title">
                        <h1 style={{ fontSize: "36px", color: "#fff" }}>
                          {item.original_title}
                        </h1>
                        <p className="movie-desc">{item.overview}</p>
                        <b
                          style={{ color: "yellow" }}
                        >{`Release date: ${item.release_date}`}</b>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            marginTop: 10,
                          }}
                        >
                          <img
                            src="./assets/play.png"
                            style={{ width: 30, marginRight: 10 }}
                          />

                          <span style={{ fontSize: 16 }}>Watch Trailer</span>
                        </div>
                      </div>
                    </a>
                  </Link>
                  <img
                    className="featured-image-thumbnail"
                    src={`https://image.tmdb.org/t/p/w200/${item.poster_path}`}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
}
