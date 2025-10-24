import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import { getAllCars, deleteCar } from '../services/CarsAPI'

const ViewCars = () => {

    const [cars, setCars] = useState([])

    useEffect(() => {
        fetchCars()
    }, [])

    const fetchCars = async () => {
        const data = await getAllCars()
        setCars(data)
    }

    const handleDelete = async (id) => {
        await deleteCar(id)
        fetchCars()
    }
    
    return (
        <div className="container">
        <h1>Car Inventory</h1>
        <Link to="/create">+ Add New Car</Link>
        <ul>
            {cars.map((car) => (
            <li key={car.id}>
                <Link to={`/cars/${car.id}`}>
                {car.make} {car.model} ({car.year})
                </Link>
                {' '}
                <Link to={`/edit/${car.id}`}>Edit</Link>
                {' '}
                <button onClick={() => handleDelete(car.id)}>Delete</button>
            </li>
            ))}
        </ul>
        </div>
    )
}

export default ViewCars