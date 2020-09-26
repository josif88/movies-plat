import { Input } from "antd";

export default function Navbar() {
  return (
    <div className="container spacer">
      <div>
        <img src="/assets/logo.png" />
      </div>
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
