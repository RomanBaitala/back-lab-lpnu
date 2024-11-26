const ctrlWrapper = require('../middleware/ctrlwrapper')

const getCars = require('./getItems')
const addCar = require('./addItem')
const deleteCar = require('./deleteItem')
const updatedCar = require('./editItem')
const filterCar = require('./filterItems')
const getCarById = require('./getCarById')
const removeFromCart = require('./deleteFromCart')
const addToCart = require('./addToCart')

module.exports = {
    getCars: ctrlWrapper(getCars),
    addCar: ctrlWrapper(addCar),
    deleteCar: ctrlWrapper(deleteCar),
    updatedCar: ctrlWrapper(updatedCar),
    filterCars: ctrlWrapper(filterCar),
    getCarById: ctrlWrapper(getCarById),

    removeFromCart: ctrlWrapper(removeFromCart),
    addToCart: ctrlWrapper(addToCart)
}

