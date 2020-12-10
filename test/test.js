const should = require("chai").should();
const app = require("../src/index");

describe("Kotlin Class Simple", () => {
  const json = {
    string: "string",
    char: "c",
    int: 123456,
    double: 2020.2,
    boolean: true,
    array: [1, 2, 2020.2],
  };
  const ans =
    "\n data class JsonToKotlinMain (val string: String, val char: Char, val int: Int, val double: Double, val boolean: Boolean, val array: Array<Double>, )\n data class JsonToKotlin2 (val string: String, val char: Char, val int: Int, val double: Double, val boolean: Boolean, val array: Array<Double>, )";
  describe("Data Type", function () {
    it("should be string", function () {
      app(json).should.be.a("string");
    });
  });
  describe("String Match", function () {
    it("should match with defined variable", function () {
      app(json).should.equal(ans);
    });
  });
});

describe("Kotlin Class Nested", () => {
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
  const ans = `data class JsonToKotlinMain (val string: String, val char: Char, val int: Int, val double: Double, val boolean: Boolean, val array: Array<Double>, val simpleObject: JsonToKotlinBaseSimpleObject, val simpleObject2: JsonToKotlinBaseSimpleObject2, )
          data class JsonToKotlinBaseSimpleObject (val stringS: String, val char: Char, val int: Int, )
          data class JsonToKotlinBaseSimpleObject231 (val stringS2: String, val char: Char, val int: Byte, )
          data class JsonToKotlinBaseSimpleObject23 (val stringS2: String, val char: Char, val int: Byte, val simpleObject231: JsonToKotlinBaseSimpleObject231, )
          data class JsonToKotlinBaseSimpleObject2 (val string: String, val char: Char, val int: Byte, val simpleObject23: JsonToKotlinBaseSimpleObject23, )`;
  describe("Data Type", function () {
    it("should be string", function () {
      app(json).should.be.a("string");
    });
  });
  describe("String Match Fail", function () {
    it("should not match with defined variable", function () {
      app(json).should.not.equal(ans);
    });
  });
});
