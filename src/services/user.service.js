import { userRepository } from '../repository/user.Repository.js';
import { USER_ROLES } from '../utils/constants.js';
import { hashPassword } from '../utils/hashed.js';
import { AppError } from '../utils/errors.js';
import { ERROR_CODES } from '../utils/errorDictionary.js';

export const userService = {
    getUsers: async () => {
        const users = await userRepository.getAll();
        return users;
    },

    getUserById: async (id) => {
        const user = await userRepository.getByid(id);

        if (!user) {
            throw new AppError(ERROR_CODES.USER_NOT_FOUND);
        }

        return user;
    },

    createUser: async (newUser) => {
        const { firstName, lastName, email, password, role = "user" } = newUser;
        if (!firstName || !lastName || !email || !password) {
            throw new AppError(ERROR_CODES.VALIDATION_ERROR);
        }

        //falta comprobar si role tiene un valor valido
        if (!Object.values(USER_ROLES).includes(role)) {
            throw new AppError(ERROR_CODES.INVALID_USER_ROLE);
        }

        const existing = await userRepository.getByEmail(email);
        if (existing) {
            throw new AppError(ERROR_CODES.EMAIL_ALREADY_IN_USE);
        }
        const hashed = await hashPassword(password)

        return userRepository.create({ firstName, lastName, email, password: hashed, role });
    },

    updateUser: async (id, updates) => {
        if (updates.email) {
            const existingUser = await userRepository.getByEmail(updates.email)
            if (existingUser && existingUser._id.toString() !== id) {
                throw new AppError(ERROR_CODES.EMAIL_ALREADY_IN_USE);
            }
        }

        if (updates.password) {
            updates.password = await hashPassword(updates.password)
        }

        const user = await userRepository.update(id, updates);

        if (!user) {
            throw new AppError(ERROR_CODES.USER_NOT_FOUND);
        }

        return user;
    },

    deleteUser: async (id) => {
        const user = await userRepository.delete(id);

        if (!user) {
            throw new AppError(ERROR_CODES.USER_NOT_FOUND);
        }

        return user;
    }
};