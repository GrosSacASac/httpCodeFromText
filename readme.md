# httpCodeFromText

Reverse [http.STATUS_CODES](https://nodejs.org/api/http.html#http_http_status_codes) from Node

## Installation

[`npm i http-code-from-text`](https://www.npmjs.com/package/http-code-from-text)

## Usage

```js
import {
    httpCodeFromText,
    textFromHttpCode,
} from "http-code-from-text";


httpCodeFromText[`Ok`] === 200

textFromHttpCode[200] === `Ok` // an alias for http.STATUS_CODES
http.STATUS_CODES[200] === `Ok` 
```

## About

### Changelog

[Changelog](./changelog.md)


### License

[CC0](./license.txt)


