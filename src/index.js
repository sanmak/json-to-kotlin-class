const constants = require("./constant");
class App {
  constructor() {
    this.counter = 1;
    this.className = {};
    this._KEY_NAME = "JsonToKotlin";
    this._KEY_NAME_INDEX_1 = "JsonToKotlin1";
    this._KEY_NAME_MAIN = "JsonToKotlinMain";
    this._BASE_KEY_NAME = "JsonToKotlinBase";
    this._DATA_CLASS = "data class";
  }
  format(json) {
    try {
      let answer = "";

      let cName = `${this._KEY_NAME}${this.counter}`;
      for (const [key, value] of Object.entries(json)) {
        const valueType = typeof value;
        if (valueType != constants.js.object) {
          answer += `val ${key}: ${this.identifyType(value, valueType)},`;
        } else if (Array.isArray(value)) {
          answer += this.formatArrayType(key, value);
        } else {
          let cName = `${
            this._BASE_KEY_NAME
          }${key[0].toUpperCase()}${key.substr(1, key.length)}`;
          answer += `val ${key}: ${cName},`;
          this.className[cName] = this.format(value);
          this.counter--;
          delete this.className[`${this._KEY_NAME}${this.counter}`];
          continue;
        }
      }
      answer = answer.replace(/,/g, ", ");
      this.className[cName] = answer;
      this.counter++;

      return answer;
    } catch (error) {
      console.error(error);
    }
  }
  formatArrayType(key, value) {
    try {
      let dataType = constants.kotlin.any;
      for (let index = 1; index < value.length; index++) {
        const elementType = typeof value[index];
        const prevElementType = typeof value[index - 1];
        if (elementType != prevElementType) {
          dataType = constants.kotlin.any;
          break;
        } else {
          dataType = this.identifyType(value[index], elementType);
        }
      }
      return `val ${key}: ${constants.kotlin.array}<${dataType}>,`;
    } catch (error) {
      console.error(error);
    }
  }
  identifyType(value, valueType) {
    try {
      let answer = "";
      if (valueType === constants.js.string) {
        if (value.length == 1) {
          answer = constants.kotlin.char;
        } else {
          answer = constants.kotlin.String;
        }
      } else if (valueType === constants.js.boolean) {
        answer = constants.kotlin.boolean;
      } else if (valueType === constants.js.number) {
        if (Math.floor(value) === value) {
          if (value >= -128 && value <= 127) {
            answer = constants.kotlin.byte;
          } else if (value >= -32768 && value <= 32767) {
            answer = constants.kotlin.short;
          } else if (
            value >= -Math.pow(2, 31) &&
            value <= Math.pow(2, 31) - 1
          ) {
            answer = constants.kotlin.int;
          } else if (
            value >= -Math.pow(2, 63) &&
            value <= Math.pow(2, 63) - 1
          ) {
            answer = constants.kotlin.long;
          }
        } else {
          answer = constants.kotlin.double;
        }
      } else if (valueType == constants.kotlin.any) {
        answer = constants.kotlin.any;
      }
      return answer;
    } catch (error) {
      console.error(error);
    }
  }

  init(json) {
    try {
      this.format(json);

      let answer = `\n ${this._DATA_CLASS} ${this._KEY_NAME_MAIN} (${
        this.className[this._KEY_NAME_INDEX_1]
      })`;

      for (const [key, value] of Object.entries(this.className)) {
        if (key != this._KEY_NAME_INDEX_1) {
          answer += `\n ${this._DATA_CLASS} ${key} (${value})`;
        }
      }
      return answer;
    } catch (error) {
      console.error(error);
    }
  }
}
module.exports = new App();
