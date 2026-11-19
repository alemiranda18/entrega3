import { productService } from '../services/product.Service.js';

export const getProducts = async (req, res, next) => {
    try {
        const products = await productService.getProducts();
        return res.status(200).json({ status: 'success', payload: products })
    } catch (error) {
        next(error);
    }
};

export const getProductByCode = async (req, res, next) => {
    try {
        const { code } = req.params
        const product = await productService.getProductByCode(code);
        return res.status(200).json({ status: 'success', payload: product })
    } catch (error) {
        next(error);
    }
};
export const getAvailableProducts = async (req, res, next) => {
    try {
        const productAvailable = await productService.getAvailableProducts()
        return res.status(200).json({ status: 'success', payload: productAvailable })
    } catch (error) {
        next(error);
    }
}

export const createProduct = async (req, res, next) => {
    try {
        const product = await productService.createProduct(req.body);
        return res.status(200).json({ status: 'success', payload: product })
    } catch (error) {
        next(error);
    }
}

export const updateProduct = async (req, res, next) => {
    try {
        const product = await productService.updateProduct(req.params.id, req.body);
        return res.status(200).json({ status: 'success', payload: product })
    } catch (error) {
        next(error);
    }
}

export const deleteProduct = async (req, res, next) => {
    try {
        const product = await productService.deleteProduct(req.params.id);
        return res.status(200).json({ status: 'success', payload: product })
    } catch (error) {
        next(error);
    }
}