var fs = require("fs");

const dir = "./v1.0";

const newContext = {};

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

// function changeFileNames() {
//   const filenames = fs.readdirSync(dir);
//   const result = filenames.filter((filename) => {
//     return filename.split(".")[1] === "jsonld";
//   });
//   result.map((filename) => {
//     // console.log(filename);
//     const content = fs.readFileSync(dir + "/" + filename, "utf-8");
//     if (filename.split("-.jsonld")[1] === "") {
//       // console.log(filename);
//       fs.rmSync(dir + "/" + filename);
//     }
//     // fs.rmSync(
//     //   dir + "/" + filename.split(".jsonld.jsonld")[0] + ".jsonld.jsonld"
//     // );
//     // fs.writeFileSync(
//     //   dir + "/" + filename.split("-.jsonld")[0] + ".jsonld",
//     //   content
//     // );
//     // console.log(filename.split("-v1.0.jsonld")[0] + ".jsonld");
//     // newContext[filename.split(".jsonld")[0]] = JSON.parse(content);
//   });
// }

// changeFileNames();
