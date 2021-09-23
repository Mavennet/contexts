var fs = require("fs");

const versions = [1, 2];

const newContext = {};

function readFiles() {
  versions.forEach(num => {
    const dir = `./v${num}.0`;
    const filenames = fs.readdirSync(dir);
    const result = filenames.filter((filename) => {
      return filename.split(".")[1] === "md";
    });
    fs.rmSync("v1.md");
    result.map((filename) => {
      const content = fs.readFileSync(dir + "/" + filename, "utf-8");
      console.log(content);
      fs.appendFileSync(`v${num}.md`, content);
    });
  })
}

readFiles();
