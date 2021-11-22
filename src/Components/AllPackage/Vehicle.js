import React from "react";

const Vehicle = ({ vehicle }) => {
    const { _id, title, img, price, description } = vehicle;
    return (
        <div className="bg-gray-50 transition hover:bg-gray-100 shadow-xl hover:shadow-2xl mt-4 overflow-hidden rounded-3xl">
            <div className="">
                <img className="rounded-3xl rounded-b-none" src={img} alt={title} />
            </div>
            <div className="px-8 py-4">
                <h3 className="text-lightBlue text-2xl font-medium">{title}</h3>
                <h5 className="text-lg text-darkBlue">{price}</h5>
                <p className="text-gray-600">{description}</p>
                <button className="mt-2 bg-green-600 transition hover:bg-green-500 py-1 px-10 rounded-full text-white">
                    Book
                </button>
            </div>
        </div>
    );
};

export default Vehicle;
