const { CarItem } = require("../models/carModel")

const deleteCar = async (req, res) => {
    const { id } = req.params
    const car = await CarItem.findByIdAndDelete(id); 
    console.log(car)
    res.status(200).json({
        code: 200,
        status: "success",
        data: {car}
    }); 
};

module.exports = deleteCar;