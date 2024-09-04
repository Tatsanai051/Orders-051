const express = require('express');
const { getOrders, getOrderById, createOrder, updateOrder, deleteOrder } = require('../controllers/ordersController.js');

const router = express.Router();

router.get('/orders', getOrders);
router.get('/orders/:id', getOrderById);
router.post('/orders', createOrder);
router.put('/orders/:id', updateOrder);
router.delete('/orders/:id', deleteOrder);

module.exports = router;
