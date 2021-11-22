import React, { useEffect, useState } from "react";
import { GiWaterRecycling } from "react-icons/gi";
import { ImCheckmark } from "react-icons/im";
import { MdCancel } from "react-icons/md";
import useAuth from '../../Hooks/useAuth'
import useMethods from '../../Hooks/useMethods'

const ManageOrders = () => {
  const [allOrders, setAllMyOrders] = useState([]);
  const { user } = useAuth();
  const { cancelOrder, updateUI, updateOrder } = useMethods();

  useEffect(() => {
      document.title = "Manage Order";

    fetch(`http://localhost:5000/manageOrders`)
      .then((res) => res.json())
      .then((data) => setAllMyOrders(data));
  }, [user.email, updateUI]);


  return (
    <div>
      <div
        className="flex items-center justify-center "
        style={{
          background:
            "linear-gradient(to right bottom, rgba(0,0,0,.95),rgba(0,0,0,.5)) ,url('https://ttg.com.bd/uploads/tours/hotels/166_59526912_2322586171393992_7712803198146183168_njpg.jpg') center bottom/cover no-repeat fixed",
          minHeight: "40vh",
        }}
      >
        <h2 className="text-center text-4xl md:text-5xl text-lightBlue font-bold">
          Manage All Packages
        </h2>
      </div>

      <div className="my-container py-20">
        <div className="text-center">
          <h2 className="text-4xl text-lightBlue">
            Hello, <span className="text-green-500">Admin!</span>
          </h2>
          <p className="text-lg text-lightBlue">
            Your are Sign in as , {user.email}
          </p>
        </div>

        <div className=" w-2/3 mx-auto text-gray-800">
          <h3 className="text-3xl mb-4 mt-8">Your All Booked Items</h3>
          <div className="flex flex-col space-y-4">
            {allOrders.length > 0 ? (
              allOrders.map((order, index) => (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row space-y-2 items-center justify-between space-x-2 shadow-md hover:shadow-lg rounded-md py-6 px-10 ${
                    order.status === "pending"
                      ? "bg-yellow-50"
                      : "bg-green-100"
                  } text-2xl`}
                >
                  <img
                    src={order.img}
                    alt=""
                    className="w-20 h-20 rounded-full"
                  />

                  <div className="">
                    <h4>{order.title}</h4>
                    <p className="text-sm italic text-gray-600">
                      Booked by {order.email}
                    </p>
                    <p
                      className={`${
                        order.status === "pending"
                          ? "text-yellow-600"
                          : "text-green-600"
                      } text-base`}
                    >
                      Status: <span>{order.status}</span>
                      {order.status === "pending" ? (
                        <GiWaterRecycling className="inline-block ml-1" />
                      ) : (
                        <ImCheckmark className="inline-block ml-1 " />
                      )}
                    </p>
                  </div>

                  <div className="flex flex-col space-y-2">
                    <div
                      onClick={() => cancelOrder(order._id)}
                      className="flex space-x-3 items-center bg-red-500 text-white px-4 py-1 rounded-full text-base hover:shadow-md focus:ring-2 focus:ring-offset-2 focus:ring-orange cursor-pointer"
                    >
                      <MdCancel className="text-red-200" />
                      <button>Delete</button>
                    </div>
                    {order.status === "pending" ? (
                      <div
                        onClick={() => updateOrder(order._id)}
                        className="flex space-x-3 items-center bg-green-500 text-white px-4 py-1 rounded-full text-base hover:shadow-md focus:ring-2 focus:ring-offset-2 focus:ring-green-500 cursor-pointer"
                      >
                        <ImCheckmark className="text-green-200" />
                        <button>Approve</button>
                      </div>
                    ) : (
                      <div className="flex space-x-3 items-center bg-green-700 cursor-not-allowed text-white px-4 py-1 rounded-full text-base hover:shadow-md">
                        <button className="cursor-not-allowed">Approved</button>
                      </div>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <h2 className="text-center text-orange text-4xl">
                No Order Found
              </h2>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageOrders;
