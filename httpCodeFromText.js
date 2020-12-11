export {
    httpCodeFromText,
    textFromHttpCode,
};

import {STATUS_CODES} from "http";


const textFromHttpCode = STATUS_CODES;
const httpCodeFromText = Object.fromEntries(Object.entries(textFromHttpCode).map(([key, value]) => {
    return [value, key];
}));
