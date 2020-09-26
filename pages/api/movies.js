import fs from "fs";
import path from "path";

export default (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");

  const jsonFile = fs.readFileSync(path.join(process.cwd(), "file.json"),'utf8');
  console.log(jsonFile);

  res.end(jsonFile);
};
