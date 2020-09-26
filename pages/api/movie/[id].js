import fs from "fs";
import path from "path";

export default (req, res) => {
  const id = req.query.id;

  let jsonFile = JSON.parse(
    fs.readFileSync(path.join(process.cwd(), "file.json"), "utf8")
  );

  let { results } = jsonFile;

  res.end(JSON.stringify(results[id]));
};
