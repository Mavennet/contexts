var fs = require("fs");

const dir = "./v1.0";

const newContext = {};

function readFiles() {
  const filenames = fs.readdirSync(dir);
  const result = filenames.filter((filename) => {
    return filename.split(".")[1] === "md";
  });
  fs.rmSync("v1.md");
  result.map((filename) => {
    const content = fs.readFileSync(dir + "/" + filename, "utf-8");
    console.log(content);
    fs.appendFileSync("v1.md", content);
  });
}

readFiles();
