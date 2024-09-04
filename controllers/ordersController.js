const Orders = require('../models/orders'); // Ensure this file has the correct schema defined

// getOrders -- Get All Orders
exports.getOrders = async (req, res) => {
    try {
        const orders = await Orders.find();
        res.json(orders);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// getOrderById -- Get Specific Order By Id
exports.getOrderById = async (req, res) => {
    try {
        const { id } = req.params;
        const order = await Orders.findById(id); // Changed 'Order' to 'Orders'
        if (!order) return res.status(404).json({ message: 'Order not found' });
        res.json(order);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// createOrder -- Create New Order
exports.createOrder = async (req, res) => {
    const { customer_name, product, quantity, order_date, status } = req.body;
    const order = new Orders({ customer_name, product, quantity, order_date, status }); // Changed 'Product' to 'Orders'
    try {
        const newOrder = await order.save();
        res.status(201).json(newOrder);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// updateOrder -- Update Order by Specific Id
exports.updateOrder = async (req, res) => {
    try {
        const { id } = req.params;
        const order = await Orders.findById(id); // Changed 'Product' to 'Orders'
        if (!order) return res.status(404).json({ message: 'Order not found' });

        const updates = req.body;
        Object.assign(order, updates);

        const updatedOrder = await order.save();
        res.json(updatedOrder);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// deleteOrder -- Delete Order by Specific Id
exports.deleteOrder = async (req, res) => {
    try {
        const order = await Orders.findByIdAndDelete(req.params.id); // Changed 'Product' to 'Orders'
        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }
        res.status(200).json({ message: 'Order deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
