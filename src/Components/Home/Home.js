import React, {useState, useEffect} from 'react';
import Banner from './Banner';
import Search from './Search';
import Package from '../Package/Package';
import "./BannerSytle.css";
import Vehicles from '../AllPackage/Vehicles';
import Hotels from '../AllPackage/Hotels';
import ContactUs from '../ContactUs.js/ContactUs';

const Home = () => {
    const [ packages, setPackages ] = useState([]);

    useEffect(() => {
        document.title = "Ghurbo: Home";
          
        const uri = 'https://limitless-mesa-73949.herokuapp.com/allpackage'
        fetch(uri)
            .then(res => res.json())
            .then(data => setPackages(data))
    }, [])

    return (
        <div className="container mx-auto">
            <div className="banner flex-col">
                <Search></Search>
                <Banner></Banner>
            </div>
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
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;