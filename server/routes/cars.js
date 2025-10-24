import express from 'express'
import { 
    getCars, 
    getCarById, 
    createCar, 
    updateCar, 
    deleteCar 
} from '../controllers/cars.js'

const router = express.Router()

// GET all cars
router.get('/', getCars)

// GET a single car by ID
router.get('/:id', getCarById)

// CREATE a new car
router.post('/', createCar)

// UPDATE an existing car
router.put('/:id', updateCar)

// DELETE a car
router.delete('/:id', deleteCar)

export default router
