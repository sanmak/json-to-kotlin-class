const app = require("../src/index");
const json = {
  string: "string",
  char: "c",
  int: 123456,
  double: 2020.2,
  boolean: true,
  array: [1, 2, 2020.2],
};
console.log(app.init(json));
