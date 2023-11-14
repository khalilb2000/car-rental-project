const {Schema} = require('mongoose');

const carSchema = new Schema({
  carName: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String
  },
})

module.exports = carSchema;
