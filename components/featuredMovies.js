import { Carousel } from "antd";

export default function FeaturedMovies({ movieList }) {
  let featuredMovies = movieList.slice(0, 5);

  return (
    <section className="featured">
      <Carousel afterChange={onChange} autoPlay={true}>
        {featuredMovies.map((item, index) => (
          <div className="content-style">
            <div style={{ position: "relative" }}>
              <img
                className="image-style"
                src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
              />
              <div className="overlay-style">
                <img
                  className="featured-image-thumbnail"
                  src={`https://image.tmdb.org/t/p/w200/${item.poster_path}`}
                />
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
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
}

function onChange(a, b, c) {
  console.log(a, b, c);
}
