var fs = require("fs");

const dir = "./v1.0";

const newContext = {
  "@context": {
    "@version": 1.1,
    id: "@id",
    type: "@type",
    name: "https://schema.org/name",
    description: "https://schema.org/description",
    identifier: "https://schema.org/identifier",
  },
};

function readFiles() {
  const filenames = fs.readdirSync(dir);
  const result = filenames.filter((filename) => {
    return filename.split(".")[1] === "jsonld";
  });
  result.map((filename) => {
    const content = fs.readFileSync(dir + "/" + filename, "utf-8");
    const contentObj = JSON.parse(content);
    contentObj["@id"] = `https://mavennet.github.io/contexts/contexts-v1#${
      filename.split(".")[0]
    }`;
    newContext["@context"][filename.split(".jsonld")[0]] = contentObj;
  });
  fs.writeFileSync("v1.jsonld", JSON.stringify(newContext, null, 2));
}

readFiles();
