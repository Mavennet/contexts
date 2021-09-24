var fs = require("fs");

const versions = [1, 2];

function readFiles() {
  versions.forEach(num => {
    const dir = `./v${num}.0`;
    const filenames = fs.readdirSync(dir);
    const result = filenames.filter((filename) => {
      return filename.split(".")[1] === "md";
    });
    fs.rmSync(`v${num}.md`);
    result.map((filename) => {
      const content = fs.readFileSync(dir + "/" + filename, "utf-8");
      fs.appendFileSync(`v${num}.md`, content);
    });
  })
}

readFiles();
