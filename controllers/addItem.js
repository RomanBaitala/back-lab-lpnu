const { CarItem, addSchema } = require("../models/carModel"); 


const addCar = async (req, res) => {
  const { error } = addSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
    const newCar = new CarItem(req.body);
    await newCar.save();
    res.status(201).json({
        code: 201, 
        status: "success",
        data: {newCar}
    }); 

    res.status(500).json({ message: "Failed to add car", error });
};

module.exports = addCar;
