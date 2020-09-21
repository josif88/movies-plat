const { Card, Meta } = require("antd");

const MovieCard = ({ poster_path, title, release_date }) => {
  const { Meta } = Card;

  return (
    <Card
      cover={
        <img
          style={{ height: 250, width: 200 }}
          alt={title}
          src={`https://image.tmdb.org/t/p/w200/${poster_path}`}
        />
      }
    >
      <b>{title}</b>
    </Card>
  );
};

export default MovieCard;
