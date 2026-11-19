import { ERROR_CODES, ERROR_DICTIONARY } from "./errorDictionary.js";

export class AppError extends Error {
    constructor(code = ERROR_CODES.INTERNAL_SERVER_ERROR, message, details) {
        const legacyStatusCode = typeof message === "number" ? message : undefined;
        const dictionaryEntry = legacyStatusCode
            ? { statusCode: legacyStatusCode, message: code }
            : errorDictionaryEntry(code);
        const finalMessage = legacyStatusCode ? code : (message || dictionaryEntry.message);
        super(finalMessage);
        this.name = "AppError";
        this.code = legacyStatusCode ? (
            legacyStatusCode >= 500 ? ERROR_CODES.INTERNAL_SERVER_ERROR : ERROR_CODES.INVALID_REQUEST
        ) : code;
        this.statusCode = dictionaryEntry.statusCode;
        this.details = details;
    }
}

function errorDictionaryEntry(code) {
    return ERROR_DICTIONARY[code] || ERROR_DICTIONARY[ERROR_CODES.INTERNAL_SERVER_ERROR];
}
