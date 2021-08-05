var fs = require("fs");

const dir = "./v1.0";

const newContext = {
  "@version": 1.1,
  id: "@id",
  type: "@type",
  name: "https://schema.org/name",
  description: "https://schema.org/description",
  identifier: "https://schema.org/identifier",
};

function readFiles() {
  const filenames = fs.readdirSync(dir);
  const result = filenames.filter((filename) => {
    return filename.split(".")[1] === "jsonld";
  });
  result.map((filename) => {
    const content = fs.readFileSync(dir + "/" + filename, "utf-8");
    newContext[filename.split(".jsonld")[0]] = JSON.parse(content);
  });
  fs.writeFileSync("contexts-v1.jsonld", JSON.stringify(newContext));
}

readFiles();
