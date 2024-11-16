const { UserCart } = require('../models/userCartModel');

const removeFromCart = async (req, res) => {
    const { userId, carId } = req.body;

    const userCart = await UserCart.findOne({ userId });
    if (!userCart) {
        return res.status(404).json({
        code: 404,
        status: 'error',
        message: 'Cart not found',
        });
    }

    userCart.cars = userCart.cars.filter(item => item.carId.toString() !== carId);
    await userCart.save();

    res.status(200).json({
        code: 200,
        status: 'success',
        message: 'Car removed from cart successfully',
        data: userCart,
    });

};

module.exports = removeFromCart;
