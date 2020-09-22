import { Input } from "antd";

export default function Navbar() {
  return (
    <div className="container spacer">
      <logo>
        <img src="./assets/logo.png" />
      </logo>
      <div className="search-input-holder">
        {" "}
        <Input.Search
          placeholder="search"
          onSearch={(value) => console.log(value)}
        />
      </div>
    </div>
  );
}
