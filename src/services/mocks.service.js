import { generateMockUsers } from "../mocks/users.mocks.js";
import { userRepository } from "../repository/user.Repository.js";
import { AppError } from "../utils/errors.js";
import { ERROR_CODES } from "../utils/errorDictionary.js";


const MAX_MOCK_ITEMS = 400
const DEFAULT_MOCK_ITEMS = 10

// qty puede llegar como texto (query string) o número (body)
const validateQty = (qty = DEFAULT_MOCK_ITEMS) => {
    const parsedQty = Number(qty)
    if (!Number.isInteger(parsedQty) || parsedQty < 0) {
        throw new AppError(
            ERROR_CODES.INVALID_MOCK_QUANTITY,
            "qty debe ser un número entero mayor o igual a 0"
        );
    }

    if (parsedQty > MAX_MOCK_ITEMS) {
        throw new AppError(
            ERROR_CODES.INVALID_MOCK_QUANTITY,
            `qty no puede superar ${MAX_MOCK_ITEMS}`
        )
    }

    return parsedQty
}


export const mockService = {
    getMockUsers: (qty) => {
        return generateMockUsers(validateQty(qty))
    },

    seed: async (qty) => {
        const parsedQty = validateQty(qty)

        if (parsedQty === 0) {
            throw new AppError(ERROR_CODES.INVALID_MOCK_QUANTITY, "qty debe ser mayor a 0")
        }

        let createdUsers;
        try {
            createdUsers = await userRepository.insertMany(generateMockUsers(parsedQty))
        } catch (error) {
            throw new AppError(
                ERROR_CODES.MOCK_LOAD_FAILED,
                "No fue posible cargar los usuarios mock en MongoDB",
                error.message
            )
        }

        return {
            insertados: createdUsers.length,
            coleccion: "usuarios"
        }
    }
}