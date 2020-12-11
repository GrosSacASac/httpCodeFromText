# httpCodeFromText

Reverse [http.STATUS_CODES](https://nodejs.org/api/http.html#http_http_status_codes) from Node

## Installation

[`npm i http-code-from-text`](https://www.npmjs.com/package/http-code-from-text)

## Usage

The source code is the documentation.


```js
import {
    httpCodeFromText,
    textFromHttpCode,
} from "http-code-from-text";


httpCodeFromText[`Ok`] === 200
textFromHttpCode[200] === `Ok` // just an alias
http.STATUS_CODES[200] === `Ok` 
```

## About

### Changelog

[Changelog](./changelog.md)


### License

[CC0](./license.txt)


