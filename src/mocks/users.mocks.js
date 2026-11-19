import { USER_ROLES } from "../utils/constants.js"


export const generateMockUser = (index = 0) => {
    const firstName = `Usuario${index + 1}`
    const lastName = "Mock"
    const email = `mock${Date.now()}_${index}_${Math.random().toString(36).slice(2)}@shipnow.test`
    return {
        firstName,
        lastName,
        email,
        password: "coder123!",
        role: index % 4 === 0 ? USER_ROLES.DRIVER : USER_ROLES.CUSTOMER
    }
}

export const generateMockUsers = (qty) => {
    return Array.from({ length: qty }, (_, index) => generateMockUser(index))
}