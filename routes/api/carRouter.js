const express = require('express')
const cars = require('../../controllers')

const router = express.Router()

router.get('/', cars.getCars)
router.get('/car/:id', cars.getCarById)
router.get('/filtered', cars.filterCars)

router.post('/', cars.addCar)
router.delete('/:id', cars.deleteCar)
router.patch('/:id', cars.updatedCar)

module.exports = router;