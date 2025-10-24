import React from 'react'
import '../App.css'
import { useNavigate } from 'react-router-dom'
import { createCar } from '../services/CarsAPI'

const CreateCar = () => {

    const [formData, setFormData] = useState({
        make: '',
        model: '',
        year: '',
        color: '',
        price: ''
    })

    const navigate = useNavigate()

    const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
    e.preventDefault()
    await createCar(formData)
    navigate('/')
    }

    return (
        <div>
            <h2>Add a New Car</h2>
            <form onSubmit={handleSubmit}>
                <input name="make" placeholder="Make" onChange={handleChange} required />
                <input name="model" placeholder="Model" onChange={handleChange} required />
                <input name="year" placeholder="Year" type="number" onChange={handleChange} required />
                <input name="color" placeholder="Color" onChange={handleChange} required />
                <input name="price" placeholder="Price" type="number" onChange={handleChange} required />
                <button type="submit">Create</button>
            </form>
        </div>
    )
}

export default CreateCar