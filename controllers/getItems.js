const { CarItem } = require("../models/carModel")

const getCarsRouter = async (req, res) => {
    const cars = await CarItem.find(); 
    console.log(cars)
    res.status(200).json({
        code: 200,
        status: "success",
        data: {cars}
    }); 
};

module.exports = getCarsRouter;
