var fs = require("fs");

const versions = [1, 2];

function readFiles() {
  versions.forEach(num => {
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
    const dir = `./v${num}.0`
    const filenames = fs.readdirSync(dir);
    const result = filenames.filter((filename) => {
      return filename.split(".")[1] === "jsonld";
    });
    fs.rmSync(`v${num}.jsonld`);
    result.map((filename) => {
      const content = fs.readFileSync(dir + "/" + filename, "utf-8");
      const contentObj = JSON.parse(content);
      contentObj["@id"] = `https://mavennet.github.io/contexts/v${num}#${
        filename.split(".")[0]
      }`;
      newContext["@context"][filename.split(".jsonld")[0]] = contentObj;
    });
    fs.writeFileSync(`v${num}.jsonld`, JSON.stringify(newContext, null, 2));
  })
}

readFiles();
