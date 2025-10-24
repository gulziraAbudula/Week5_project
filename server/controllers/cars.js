import { pool } from '../config/database.js'

// Get all cars
export const getCars = async (req, res) => {
    try {
        const results = await pool.query('SELECT * FROM cars ORDER BY id ASC')
        res.status(200).json(results.rows)
    } catch (error) {
        res.status(409).json({ error: error.message })
    }
}

// Get a car by ID
export const getCarById = async (req, res) => {
    try {
        const id = parseInt(req.params.id)
        const results = await pool.query('SELECT * FROM cars WHERE id = $1', [id])
        if (results.rows.length === 0) {
            return res.status(404).json({ error: 'Car not found' })
        }
        res.status(200).json(results.rows[0])
    } catch (error) {
        res.status(409).json({ error: error.message })
    }
}

// Create a new car
export const createCar = async (req, res) => {
    try {
        const { make, model, year, color, price } = req.body
        const results = await pool.query(
            `INSERT INTO cars (make, model, year, color, price)
             VALUES ($1, $2, $3, $4, $5)
             RETURNING *`,
            [make, model, year, color, price]
        )
        res.status(201).json(results.rows[0])
    } catch (error) {
        res.status(409).json({ error: error.message })
    }
}

// Update an existing car
export const updateCar = async (req, res) => {
    try {
        const id = parseInt(req.params.id)
        const { make, model, year, color, price } = req.body
        const results = await pool.query(
            `UPDATE cars 
             SET make = $1, model = $2, year = $3, color = $4, price = $5
             WHERE id = $6
             RETURNING *`,
            [make, model, year, color, price, id]
        )

        if (results.rows.length === 0) {
            return res.status(404).json({ error: 'Car not found' })
        }

        res.status(200).json(results.rows[0])
    } catch (error) {
        res.status(409).json({ error: error.message })
    }
}

// Delete a car
export const deleteCar = async (req, res) => {
    try {
        const id = parseInt(req.params.id)
        const results = await pool.query('DELETE FROM cars WHERE id = $1 RETURNING *', [id])

        if (results.rows.length === 0) {
            return res.status(404).json({ error: 'Car not found' })
        }

        res.status(200).json({ message: 'Car deleted successfully' })
    } catch (error) {
        res.status(409).json({ error: error.message })
    }
}
