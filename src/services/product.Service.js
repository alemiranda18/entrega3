import { productRepository } from '../repository/product.Repository.js';
import { PRODUCT_STATUS } from '../utils/constants.js';
import { AppError } from '../utils/errors.js';
import { ERROR_CODES } from '../utils/errorDictionary.js';

export const productService = {
    getProducts: async () => {
        const products = await productRepository.getAll();
        return products;
    },
    getProductByCode: async (code) => {
        const product = await productRepository.getByCode(code);

        if (!product) {
            throw new AppError(ERROR_CODES.PRODUCT_NOT_FOUND);
        }

        return product;
    },
    getAvailableProducts: async () => {
        const allProducts = await productRepository.getAll();
        const productAvailable = allProducts.filter((product) => product.status !== PRODUCT_STATUS.OUT_OF_STOCK);
        return productAvailable

    },
    createProduct: async (productData) => {
        const { title, description, code, price, stock, category, status } = productData;
        if (!title || !code || !price || stock === undefined || !category || !status) {
            throw new AppError(ERROR_CODES.VALIDATION_ERROR);
        }

        const existing = await productRepository.getByCode(code);
        if (existing) {
            throw new AppError(ERROR_CODES.VALIDATION_ERROR, 'El codigo del producto ya esta en uso');
        }
        return productRepository.create({ title, description, code, price, stock, category, status });
    },

    updateProduct: async (code, updates) => {
        const product = await productRepository.update(code, updates);

        if (!product) {
            throw new AppError(ERROR_CODES.PRODUCT_NOT_FOUND);
        }

        return product;
    },

    deleteProduct: async (code) => {
        const product = await productRepository.delete(code);

        if (!product) {
            throw new AppError(ERROR_CODES.PRODUCT_NOT_FOUND);
        }

        return product;
    }
};