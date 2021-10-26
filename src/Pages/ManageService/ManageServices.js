import axios from 'axios'
import React, { useState, useEffect } from 'react'

const ManageServices = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        axios('http://localhost:5000/services').then(res => setServices(res.data))
    }, [services]);
    const handleDelete = (id) => {
        const url = `http://localhost:5000/services/${id}`;
        axios.delete(url).then(res => {
            if (res.data.deletedCount) {
                alert('successfully deleted');
            }
        }
        )
    }
    return (
        <div>
            <h2>this is mange service</h2>
            {services.map(service => <div key={service._id}>
                <h3>{service.name}</h3>
                <button onClick={() => handleDelete(service._id)}>Delete</button>
            </div>)}
        </div>
    )
}

export default ManageServices
