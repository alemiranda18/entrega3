import { deliveryRepository } from '../repository/delivery.repository.js';
import { orderRepository } from '../repository/order.repository.js';
import { userRepository } from '../repository/user.Repository.js';
import { AppError } from '../utils/errors.js';
import { USER_ROLES } from '../utils/constants.js';
import { ERROR_CODES } from '../utils/errorDictionary.js';

export const deliveryService = {
    getDeliveries: async () => {
        return deliveryRepository.getAll();
    },

    getDeliveryById: async (id) => {
        const delivery = await deliveryRepository.getById(id);

        if (!delivery) {
            throw new AppError(ERROR_CODES.DELIVERY_NOT_FOUND);
        }

        return delivery;
    },

    createDelivery: async (newDelivery) => {
        const order = await orderRepository.getById(newDelivery.order);
        if (!order) {
            throw new AppError(ERROR_CODES.ORDER_NOT_FOUND, 'El pedido especificado no existe');
        }

        if (newDelivery.driver) {
            const driver = await userRepository.getById(newDelivery.driver);
            if (!driver) {
                throw new AppError(ERROR_CODES.USER_NOT_FOUND, 'El repartidor especificado no existe');
            }
            if (driver.role !== USER_ROLES.DRIVER) {
                throw new AppError(ERROR_CODES.INVALID_REQUEST, 'El usuario no es driver');
            }
        }

        return deliveryRepository.create(newDelivery);
    },

    updateDelivery: async (id, updates) => {
        const delivery = await deliveryRepository.update(id, updates);

        if (!delivery) {
            throw new AppError(ERROR_CODES.DELIVERY_NOT_FOUND);
        }

        return delivery;
    },

    deleteDelivery: async (id) => {
        const delivery = await deliveryRepository.delete(id);

        if (!delivery) {
            throw new AppError(ERROR_CODES.DELIVERY_NOT_FOUND);
        }

        return delivery;
    }
};