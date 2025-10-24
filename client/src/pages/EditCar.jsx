import React from 'react'
import '../App.css'
import { useParams, useNavigate } from 'react-router-dom'
import { getCarById, updateCar } from '../services/CarsAPI'

const EditCar = () => {

    const { id } = useParams()
    const [formData, setFormData] = useState({
        make: '',
        model: '',
        year: '',
        color: '',
        price: ''
    })

    const navigate = useNavigate()

    useEffect(() => {
        fetchCar()
    }, [id])

    const fetchCar = async () => {
        const data = await getCarById(id)
        setFormData(data)
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await updateCar(id, formData)
        navigate('/')
    }
    
    return (
        <div>
            <h2>Edit Car</h2>
            <form onSubmit={handleSubmit}>
                <input name="make" value={formData.make} onChange={handleChange} required />
                <input name="model" value={formData.model} onChange={handleChange} required />
                <input name="year" value={formData.year} type="number" onChange={handleChange} required />
                <input name="color" value={formData.color} onChange={handleChange} required />
                <input name="price" value={formData.price} type="number" onChange={handleChange} required />
                <button type="submit">Update</button>
            </form>
        </div>
    )
}

export default EditCar