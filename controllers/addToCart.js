const { CarItem } = require('../models/carModel');
const { UserCart } = require('../models/userCartModel'); 

const addToCart = async (req, res) => {
    const { userId, carId, quantity, color } = req.body;

    const car = await CarItem.findById(carId);
    if (!car) {
      return res.status(404).json({
        code: 404,
        status: 'error',
        message: 'Car not found',
      });
    }

    let userCart = await UserCart.findOne({ userId });
    if (!userCart) {
      userCart = new UserCart({ userId, cars: [] });
    }

    const carInCart = userCart.cars.find(item => item.carId.toString() === carId);
    if (carInCart) {
      carInCart.quantity += quantity;
    } else {
      userCart.cars.push({ carId, quantity, color });
    }

    await userCart.save();

    res.status(200).json({
      code: 200,
      status: 'success',
      message: 'Car added to cart successfully',
      data: userCart,
    });
};

module.exports = addToCart;
