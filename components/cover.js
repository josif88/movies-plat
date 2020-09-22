import { Image } from "antd";

const Cover = ({ poster_path }) => {
  return (
    <div className="content-style">
      <div style={{ position: "relative" }}>
        <img
          style={{ width: "100%" }}
          className="cover"
          src={`https://image.tmdb.org/t/p/original/${poster_path}`}
        />
        <div className="cover-overlay"></div>
      </div>
    </div>
  );
};

export default Cover;
