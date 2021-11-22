import React from 'react';
import { useHistory } from 'react-router-dom';

const Tour = ({ tour }) => {
    const {_id, title, img, price, description, duration} = tour;
    const history = useHistory()

    const handleBooking = id => {
        history.push(`/booking/${id}`)
    }
    return (
        <div className="rounded-lg overflow-hidden bg-gray-100 hover:shadow-md transition">
        <div className="overflow-hidden">
          <img
            className="transition duration-500 transform hover:scale-110"
            src={img}
            alt={title}
          />
        </div>
        <div className="mt-2 p-4">
          <div className="text-2xl flex-wrap">
            <h4 className="text-gray-900 break-words">{title}</h4>
          </div>
  
          <p className="text-gray-700 my-3">{description.slice(0, 150)}</p>
  
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center text-gray-500">
              <p>Duration: <span>{duration}</span> Days</p>
            </div>

            <p className="text-lightBlue font-bold">${price}</p>
          </div>
  
          <div className="text-white flex item-center justify-between mt-4">
            <button
              onClick={() => handleBooking(_id)}
              className="bg-green-600 transition hover:bg-green-500 px-3 py-0.5 rounded-full"
            >
              See Details
            </button>
            <button
              onClick={() => handleBooking(_id)}
              className="bg-green-600 transition hover:bg-green-500 px-4 py-0.5 rounded-full"
            >
              Book
            </button>
          </div>
        </div>
      </div>
    );
};

export default Tour;