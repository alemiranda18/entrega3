import { createError, errorResponse } from "../utils/apiResponse.js";
import { ERROR_CODES } from "../utils/errorDictionary.js";

export const errorHandler = (error, req, res, next) => {
    let handledError = error;

    if (error.name === "CastError") {
        handledError = createError(ERROR_CODES.VALIDATION_ERROR, "ID invalido");
    }

    if (error.name === "ValidationError") {
        handledError = createError(
            ERROR_CODES.VALIDATION_ERROR,
            "Datos invalidos",
            Object.values(error.errors || {}).map(item => item.message)
        );
    }

    return errorResponse(res, handledError);
};