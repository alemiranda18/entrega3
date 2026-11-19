import { Router } from 'express';
import { getDeliveries, getDeliveryById, createDelivery, updateDelivery, deleteDelivery } from '../controllers/delivery.controllers.js';

const router = Router();

router.get('/', getDeliveries);
router.get('/:id', getDeliveryById);
router.post('/', createDelivery);
router.put('/:id', updateDelivery);
router.delete('/:id', deleteDelivery);

export default router;