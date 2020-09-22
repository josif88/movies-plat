import Link from "next/link";

const { Card, Meta } = require("antd");

const MovieCard = ({ poster_path, title, id }) => {
  return (
    <Link
      href={{
        pathname: "/movieInfo",
        query: { id: id },
      }}
    >
      <a>
        <Card
          cover={
            <img
              style={{ height: 250, width: 200 }}
              alt={title}
              src={`https://image.tmdb.org/t/p/w200/${poster_path}`}
            />
          }
        >
          <b className="card-title">
            {title
              .split(" ")
              .slice(0, 6)
              .reduce((a, b) => `${a} ${b}`)}
          </b>
        </Card>
      </a>
    </Link>
  );
};

export default MovieCard;
