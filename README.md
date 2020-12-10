# json-to-kotlin-class

<!-- PROJECT LOGO -->
<br />
<p align="center">

  <h3 align="center">JSON to Kotlin Class</h3>

  <p align="center">
    Raw javascript to convert JSON to Kotlin Class
    <br />
    <a href="https://github.com/sanmak/json-to-kotlin-class"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    ·
    <a href="https://github.com/sanmak/json-to-kotlin-class/issues">Report Bug</a>
    ·
    <a href="https://github.com/sanmak/json-to-kotlin-class/issues">Request Feature</a>
  </p>
</p>

## Dead Simple to Use

```javascript
# Import Package
const jsonToKotlinClass = require("json-to-kotlin-class");

# Your JSON
const json = { key: "value" };

# Call init function to initiate conversion
console.log(jsonToKotlinClass.init(json));
```
## Resultant: A Kotlin Data Class

```Kotlin
data class JsonToKotlinMain (val key: String, )
```

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#contact">Sponsor</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Package

This package is created to generate respective Kotlin Class from a given JSON.

### Built With

This package is built with raw javascript and Mocha / Chai is used for testing.

* [Javascript](https://www.javascript.com/)
* [Mocha](https://mochajs.org/)
* [Chai](https://www.chaijs.com/)



<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/sanmak/json-to-kotlin-class.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```

<!-- USAGE EXAMPLES -->
## Usage

To use this package, import `src/index.js`, and call `init` function `app.init({your-respective-json})`. This will produce respective Kotlin Class.

Refer `examples` folder for more information. To run one of the example, `examples/simple-json.js`, execute `node examples/simple-json.js`

## Eg: 

### INPUT: JSON

```json
{
  "string": "string",
  "char": "c",
  "int": 123456,
  "double": 2020.2,
  "boolean": true,
  "array": [1, 2, 2020.2],
};
```

### OUTPUT: Kotin Class

```Kotlin
data class JsonToKotlinMain (val string: String, val char: Char, val int: Int, val double: Double, val boolean: Boolean, val array: Array<Double>, )
```

## Test

To test this package, run `npm run test`. Test cases is written in `test/test.js`.

<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/sanmak/json-to-kotlin-class/issues) for a list of proposed features (and known issues).



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

SANKET MAKHIJA - [@sanket_dude](https://twitter.com/sanket_dude) - sanket[dot]mahija[at]gmail[dot]com

## Sponsor ❤️

Consider sponsoring this package and help open source community and contributions.

 <a href="https://ko-fi.com/E1E72C2MM" target="_blank"> <img style={kofiStyle} src="https://cdn.ko-fi.com/cdn/kofi1.png?v=2"></img> </a>