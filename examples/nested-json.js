const app = require("../src/index");
const json = {
  string: "string",
  char: "c",
  int: 123456,
  double: 2020.2,
  boolean: true,
  array: [1, 2, 2020.2],
  simpleObject: { stringS: "string", char: "c", int: 123456 },
  simpleObject2: {
    string: "string",
    char: "c",
    int: 12,
    simpleObject23: {
      stringS2: "string",
      char: "c",
      int: 12,
      simpleObject231: { stringS2: "string", char: "c", int: 12 },
    },
  },
};
console.log(app.init(json));
