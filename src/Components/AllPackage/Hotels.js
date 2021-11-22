import React, { useState, useEffect } from 'react';
import Hotel from './Hotel'

const Hotels = () => {
    const [hotels, setHotels] = useState([])

    useEffect(() => {
        const uri = 'http://localhost:5000/allhotel'
        fetch(uri)
            .then(res => res.json())
            .then(data => setHotels(data))
    }, [])

    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 my-10">
                {
                    hotels.map(hotel => <Hotel key={hotel._id} hotel={hotel}></Hotel>)
                }
            </div>
        </div>
    );
};

export default Hotels;