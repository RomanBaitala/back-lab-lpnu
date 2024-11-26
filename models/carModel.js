const { Schema, model } = require("mongoose");
const Joi = require("joi");

// {
//   id: 6,
//   name: 'Audi Q7 Premium',
//   price: '69900',
//   location: 'Munich, Germany',
//   year: 2022,
//   drive: 'All-wheel Drive',
//   fuel: 'Gasoline',
//   transmission: 'Automatic',
//   mileage: 12000,
//   reviews: 15,
//   description: 'The Audi Q7 Premium combines a spacious interior with top-notch tech and luxury.',
//   image: 'https://audi.kz/userdata/cars/cars_17/image_13/1653392776_885752844_b.jpg',
// }

const carSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Write name for your car"],
    },
    price: {
      type: Number,
      required: [true, "Write price for your car"],
    },
    location: {
      type: String,
      required: [true, "Write location of your car"],
    },
    year: {
      type: Number,
      required: [true, "Write production year of your car"],
    },
    drive: {
      type: String,
      required: [true, "Write drive type of your car"],
    },
    fuel: {
      type: String,
      required: [true, "Write fuel type of your car"],
    },
    transmission: {
      type: String,
      required: [true, "Write transmission type of your car"],
    },
    mileage: {
      type: Number,
      required: [true, "Write mileage of your car"],
    },
    reviews: {
      type: Number,
      required: [true, "Write review count of your car"],
    },
    description: {
      type: String,
      required: [true, "Write a description for your car"],
    },
    image: {
      type: String,
      required: [true, "Provide an image URL for your car"],
    },
    quantity: {
      type: Number,
      required: [true, "Specify the quantity available"],
    },
    colors: {
      type: [String],
      required: [true, "Provide available colors for your car"],
    },
  },
  { versionKey: false, timestamps: true }
);


carSchema.post("save", Error);

const addSchema = Joi.object({
  name: Joi.string().required().messages({
    "string.empty": "Car name cannot be empty",
    "any.required": "Car name is required",
  }),
  price: Joi.number().required().messages({
    "number.base": "Car price must be a number",
    "any.required": "Car price is required",
  }),
  location: Joi.string().required().messages({
    "string.empty": "Car location cannot be empty",
    "any.required": "Car location is required",
  }),
  year: Joi.number().integer().required().messages({
    "number.base": "Car year must be a number",
    "any.required": "Car year is required",
  }),
  drive: Joi.string().required().messages({
    "string.empty": "Car drive type cannot be empty",
    "any.required": "Car drive type is required",
  }),
  fuel: Joi.string().required().messages({
    "string.empty": "Car fuel type cannot be empty",
    "any.required": "Car fuel type is required",
  }),
  transmission: Joi.string().required().messages({
    "string.empty": "Car transmission type cannot be empty",
    "any.required": "Car transmission type is required",
  }),
  mileage: Joi.number().required().messages({
    "number.base": "Car mileage must be a number",
    "any.required": "Car mileage is required",
  }),
  reviews: Joi.number().integer().required().messages({
    "number.base": "Car review count must be a number",
    "any.required": "Car review count is required",
  }),
  description: Joi.string().required().messages({
    "string.empty": "Car description cannot be empty",
    "any.required": "Car description is required",
  }),
  image: Joi.string().uri().required().messages({
    "string.empty": "Car image cannot be empty",
    "any.required": "Car image is required",
    "string.uri": "Car image must be a valid URL",
  }),
  quantity: Joi.number().integer().required().messages({
    "number.base": "Quantity must be a number",
    "any.required": "Quantity is required",
  }),
  colors: Joi.array().items(Joi.string()).required().messages({
    "array.base": "Colors must be an array of strings",
    "any.required": "Car colors are required",
  }),
});


const CarItem = model("cars", carSchema);

module.exports = {
  addSchema,
  CarItem
};