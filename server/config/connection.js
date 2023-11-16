require('dotenv').config();
const mongoose = require('mongoose');
const password = process.env.clusterPW;
const user = process.env.clusterUser

mongoose.connect(process.env.MONGODB_URI || `mongodb+srv://${user}:${password}@cluster1.th6nhgl.mongodb.net/carRentalDB`);

// mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/car-rental');

module.exports = mongoose.connection;
