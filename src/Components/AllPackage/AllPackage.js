import React, {useEffect, useState} from 'react';
import Hotels from './Hotels';
import Vehicles from './Vehicles';
import Package from '../Package/Package'

const AllPackage = () => {
    const [ packages, setPackages ] = useState([]);

    useEffect(() => {

        document.title = "All Packages";

        const uri = 'http://localhost:5000/allpackage'
        fetch(uri)
            .then(res => res.json())
            .then(data => setPackages(data))
    }, [])

    return (
        <div className="container mx-auto">
            <h2 className="text-4xl py-4 text-center">Best Sajek Tours for You</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 my-6">
                {
                    packages.map(tour => <Package key={tour._id} tour={tour}></Package>)
                }
            </div>
            <h2 className="text-4xl py-4 text-center">We Have the best Vehicles for your tour</h2>
            <Vehicles></Vehicles>
            <h2 className="text-4xl py-4 text-center">Best Hotels for You</h2>
            <Hotels></Hotels>
        </div>
    );
};

export default AllPackage;