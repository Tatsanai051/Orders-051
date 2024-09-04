const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  customer_name: { type: String, required: true },
  product: { type: String, required: true },
  quantity: { type: Number, required: true },
  order_date: { type: String, required: true },
  status: { type: String, required: true },
});

const Orders = mongoose.model('Orders', orderSchema);

module.exports = Orders;
