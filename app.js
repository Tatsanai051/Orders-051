const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const ordersRoute = require('./routes/orders');

const app = express();
app.use(express.json());

dotenv.config();

// ConnectDB
mongoose.connect(process.env.MONGO_DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

// Define Route
app.use('/api', ordersRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
