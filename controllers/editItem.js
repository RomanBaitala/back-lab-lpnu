const { CarItem, addSchema } = require("../models/carModel"); 

const editCar = async (req, res) => {
    const { id } = req.params;
    const { error } = addSchema.validate(req.body);

    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }

    const updatedCar = await CarItem.findByIdAndUpdate(id, req.body, { new: true });

    if (!updatedCar) {
        return res.status(404).json({ message: "Car not found" }); 
    }

    res.status(200).json({
        code: 200,
        status: "success",
        data: {updatedCar}
    }); 
    res.status(500).json({ message: "Failed to update car", error }); 
};

module.exports = editCar;
