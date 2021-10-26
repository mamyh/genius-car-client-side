import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const [service, setService] = useState({})
    const { serviceId } = useParams();
    useEffect(() => {
        axios.get(`http://localhost:5000/services/${serviceId}`).then((res) => {
            if (res.data !== {}) {
                setService(res.data)
            }
        })
    }, [serviceId]);

    const { _id, name, img, Description } = service;
    return (
        <div>
            <img src={img} alt="" />
            <h2>this is booking: {_id}</h2>
            <h1>service name :{name}</h1>
            <p>{Description}</p>

        </div>
    );
};

export default Booking;