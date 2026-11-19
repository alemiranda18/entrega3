export const ERROR_CODES = {
    INTERNAL_SERVER_ERROR: "INTERNAL_SERVER_ERROR",
    ROUTE_NOT_FOUND: "ROUTE_NOT_FOUND",

    USER_NOT_FOUND: "USER_NOT_FOUND",
    VALIDATION_ERROR: "VALIDATION_ERROR",
    INVALID_USER_ROLE: "INVALID_USER_ROLE",
    EMAIL_ALREADY_IN_USE: "EMAIL_ALREADY_IN_USE",
    PRODUCT_NOT_FOUND: "PRODUCT_NOT_FOUND",
    STORE_NOT_FOUND: "STORE_NOT_FOUND",
    ORDER_NOT_FOUND: "ORDER_NOT_FOUND",
    DELIVERY_NOT_FOUND: "DELIVERY_NOT_FOUND",
    INVALID_MOCK_QUANTITY: "INVALID_MOCK_QUANTITY",
    MOCK_LOAD_FAILED: "MOCK_LOAD_FAILED",
    INVALID_REQUEST: "INVALID_REQUEST"
}

export const ERROR_DICTIONARY = {
    "INTERNAL_SERVER_ERROR": {
        statusCode: 500,
        message: "Error interno en el servidor"
    },

    "ROUTE_NOT_FOUND": {
        statusCode: 404,
        message: "Ruta no encontrada"
    },

    "USER_NOT_FOUND": {
        statusCode: 404,
        message: "Usuario no encontrado"
    },

    "VALIDATION_ERROR": {
        statusCode: 400,
        message: "Faltan datos obligatorios"
    },

    "INVALID_USER_ROLE": {
        statusCode: 400,
        message: "Rol invalido"
    },
    "EMAIL_ALREADY_IN_USE": {
        statusCode: 409,
        message: "El email ya esta en uso"
    },
    "PRODUCT_NOT_FOUND": {
        statusCode: 404,
        message: "Producto no encontrado"
    },
    "STORE_NOT_FOUND": {
        statusCode: 404,
        message: "Comercio no encontrado"
    },
    "ORDER_NOT_FOUND": {
        statusCode: 404,
        message: "Pedido no encontrado"
    },
    "DELIVERY_NOT_FOUND": {
        statusCode: 404,
        message: "Entrega no encontrada"
    },
    "INVALID_MOCK_QUANTITY": {
        statusCode: 400,
        message: "Cantidad de mocks invalida"
    },
    "MOCK_LOAD_FAILED": {
        statusCode: 500,
        message: "No fue posible cargar los datos mock en MongoDB"
    },
    "INVALID_REQUEST": {
        statusCode: 400,
        message: "Datos de solicitud invalidos"
    }
}