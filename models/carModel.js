const { Schema, model } = require("mongoose");
// const Joi = require("joi");

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
    id: {
      type: Schema.Types.ObjectId,
    },
    name: {
      type: String,
      required: [true, "Write name for your car"],
    },
    price: {
      type: Number,
      required: [true, "Write price for your car"]
    },
    location: {
      type: String,
      required: [true, "Write location of your car"]
    },
    year: {
      type: Number, 
      required: [true, "Write production year of your car"]
    },
    drive: {
      type: String,
      required: [true, "Write drive type of yuor car"]
    },
    fuel: {
      type: String,
      required: [true, "Write fuel type of your car"]
    },
    transmission: {
      type: String,
      required: [true, "Write your transmission type"]
    },
    mileage: {
      type: Number,
      required: [true, "Write your mile range"]
    },
    reviews: {
      type: Number,
      required: [true, "Write your mile range"]
    },
    img: {
        type: String,
        required: [true, "Write img link for your car"]
    }
  },
  { versionKey: false, timestamps: true }
);

carSchema.post("save", Error);

// const addSchema = Joi.object({
//     name: Joi.string().required().messages({
//         "string.empty": `Car name cannot be empty`,
//         "any.required": `Car name is required`,
//     }),
//     price: Joi.number().required().messages({
//         "string.empty": `Car price cannot be empty`,
//         "any.required": `Car price is required`,
//     }),
//     img: Joi.string().required().messages({
//         "string.empty": `Car img cannot be empty`,
//         "any.required": `Car img is required`,
//     }),
// });

const CarItem = model("cars", carSchema);

module.exports = {
  // addSchema,
  CarItem
};