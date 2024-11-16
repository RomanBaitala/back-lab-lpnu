// models/cartModel.js

const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define schema for each car in the cart
const CartItemSchema = new Schema({
  carId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'CarItem', // Reference to the Car model
    required: true,
  },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  location: { type: String },
  year: { type: Number },
  drive: { type: String },
  fuel: { type: String },
  transmission: { type: String },
  mileage: { type: Number },
  reviews: { type: Number },
  description: { type: String },
  image: { type: String },
  quantity: { type: Number, required: true, default: 1 }, // Quantity of this car in the cart
  color: { type: String, required: true },               // Color chosen for this car
});

// Define the schema for the user's cart
const UserCartSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model
    required: true,
    unique: true, // Each user should have only one cart
  },
  cars: [CartItemSchema], // Array of cars in the cart
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Middleware to update `updatedAt` every time the cart is modified
UserCartSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

// Create the UserCart model from the schema
const UserCart = mongoose.model('UserCart', UserCartSchema);

module.exports = { UserCart };
