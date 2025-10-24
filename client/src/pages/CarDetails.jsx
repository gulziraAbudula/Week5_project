import React from 'react'
import '../App.css'
import { useParams, Link } from 'react-router-dom'
import { getCarById } from '../services/CarsAPI'

const CarDetails = () => {

    const { id } = useParams()
    const [car, setCar] = useState(null)

    useEffect(() => {
        fetchCar()
    }, [id])

    const fetchCar = async () => {
        const data = await getCarById(id)
        setCar(data)
    }

    if (!car) return <p>Loading car details...</p>

    return (
        <div>
            <h2>{car.make} {car.model}</h2>
            <p><strong>Year:</strong> {car.year}</p>
            <p><strong>Color:</strong> {car.color}</p>
            <p><strong>Price:</strong> ${car.price}</p>

            <Link to={`/edit/${car.id}`}>Edit</Link> | <Link to="/">Back to list</Link>
        </div>
    )
}

export default CarDetails