import React, { useState, useEffect } from 'react';
import Vehicle from './Vehicle'

const Vehicles = () => {

    const [vehicles, setVehicles] = useState([]);

    useEffect( () => {
        const uri = 'http://localhost:5000/allcar'
        fetch(uri)
            .then(res => res.json())
            .then(data => setVehicles(data))
    }, [])

    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-5 my-10">
                {
                    vehicles.map(vehicle => <Vehicle key={vehicle._id} vehicle={vehicle}></Vehicle>)
                }
            </div>
        </div>
    );
};

export default Vehicles;