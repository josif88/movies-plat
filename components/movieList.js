import MovieCard from "./movieCard";

const MovieList = ({ movieList, title }) => {
  return (
    <div>
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: 25,
        }}
      >
        <h3>{title}</h3>
        <span style={{ fontWeight: 700, fontSize: 36 }}>...</span>
      </div>
      <div className="horizontal-holder">
        <div className="shallow-card">&nbsp;</div>
        {movieList.map((item, index) => (
          <MovieCard key={index} {...item} />
        ))}
        <div className="shallow-card">&nbsp;</div>
      </div>
    </div>
  );
};

export default MovieList;