import { storeRepository } from '../repository/store.repository.js';
import { userRepository } from '../repository/user.Repository.js';
import { AppError } from '../utils/errors.js';
import { ERROR_CODES } from '../utils/errorDictionary.js';

export const storeService = {
    getStores: async () => {
        return storeRepository.findAll();
    },

    getStoreById: async (id) => {
        const store = await storeRepository.findById(id);

        if (!store) {
            throw new AppError(ERROR_CODES.STORE_NOT_FOUND);
        }

        return store;
    },

    createStore: async (storeData) => {
        const { name, address, owner } = storeData;

        if (!name || !address || !owner) {
            throw new AppError(ERROR_CODES.VALIDATION_ERROR);
        }

        const ownerFound = await userRepository.findById(owner);

        if (!ownerFound) {
            throw new AppError(ERROR_CODES.USER_NOT_FOUND);
        }

        if (ownerFound.role !== 'store') {
            throw new AppError(ERROR_CODES.INVALID_REQUEST, 'El propietario debe tener rol store');
        }

        return storeRepository.create(storeData);
    },

    updateStore: async (id, storeData) => {
        const store = await storeRepository.update(id, storeData);

        if (!store) {
            throw new AppError(ERROR_CODES.STORE_NOT_FOUND);
        }

        return store;
    },

    deleteStore: async (id) => {
        const store = await storeRepository.delete(id);

        if (!store) {
            throw new AppError(ERROR_CODES.STORE_NOT_FOUND);
        }

        return store;
    },
};