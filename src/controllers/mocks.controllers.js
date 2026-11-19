import { mockService } from '../services/mocks.service.js';

export const getMockUsers = async (req, res, next) => {
    try {
        const quantity = req.query.qty ?? 10;
        const users = mockService.getMockUsers(quantity);
        res.status(200).json({ status: 'success', payload: users });
    } catch (error) {
        next(error);
    }
};

export const seedMockUsers = async (req, res, next) => {
    try {
        const quantity = req.body?.qty ?? req.query.qty ?? 10;
        const result = await mockService.seed(quantity);
        res.status(201).json({ status: 'success', payload: result });
    } catch (error) {
        next(error);
    }
};