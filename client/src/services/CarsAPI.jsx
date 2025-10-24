import axios from 'axios'

// Base URL for your backend API
// Adjust if your backend runs on a different port (e.g. 3000)
const API_BASE_URL = 'http://localhost:3000/api/cars'

// Get all cars
export const getAllCars = async () => {
  try {
    const response = await axios.get(API_BASE_URL)
    return response.data
  } catch (error) {
    console.error('Error fetching cars:', error)
    throw error
  }
}

// Get a single car by ID
export const getCarById = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/${id}`)
    return response.data
  } catch (error) {
    console.error('Error fetching car:', error)
    throw error
  }
}

// Create a new car
export const createCar = async (carData) => {
  try {
    const response = await axios.post(API_BASE_URL, carData)
    return response.data
  } catch (error) {
    console.error('Error creating car:', error)
    throw error
  }
}

// Update a car
export const updateCar = async (id, updatedData) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/${id}`, updatedData)
    return response.data
  } catch (error) {
    console.error('Error updating car:', error)
    throw error
  }
}

// Delete a car
export const deleteCar = async (id) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/${id}`)
    return response.data
  } catch (error) {
    console.error('Error deleting car:', error)
    throw error
  }
}
