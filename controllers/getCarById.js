const { CarItem } = require("../models/carModel");
const mongoose = require("mongoose");

const getCarById = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({
      code: 400,
      status: "error",
      message: "Invalid car ID format",
    });
  }

  const car = await CarItem.findById(id);

  if (!car) {
    return res.status(404).json({
      code: 404,
      status: "error",
      message: "Car not found",
    });
  }

  res.status(200).json({
    code: 200,
    status: "success",
    data: { car },
  });
};

module.exports = getCarById;

