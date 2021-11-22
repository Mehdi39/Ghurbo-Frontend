import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form'
import { useHistory, useParams } from 'react-router-dom'
import useAuth from '../../Hooks/useAuth'
import axios from 'axios'
import Swal from "sweetalert2";

const Booking = () => {
    const { user } = useAuth()
    const { id } = useParams()
    const [orders, setOrders] = useState({})
    const history = useHistory();

    const { register, handleSubmit, reset } = useForm()
    const onSubmit = data => placeOrder(data)

    useEffect(() => {document.title = "Ghurbo: Booking";}, [])

    useEffect(() => {
        
        fetch(`http://localhost:5000/allpackage/${id}`)
            .then((res) => res.json())
            .then((data) => setOrders(data));
    }, [id]);
    console.log(orders)

    const placeOrder = data => {

        const newData = { ...orders }
        newData.name = data.name
        newData.email = data.email
        newData.address = data.address
        newData.status = 'pending'
        delete newData._id
        console.log(newData)

        const uri = 'http://localhost:5000/addorder'
        axios.post(uri, newData)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        title: "Orded Added Successfully!",
                        showDenyButton: true,
                        confirmButtonText: "Go to HomePage?",
                        denyButtonText: 'See Orderd item'
                    }).then(res => {
                        if(res.isConfirmed) {
                            history.push("/home")
                        } else if (res.isDenied) {
                            history.push("/myorders")
                        }
                    })
                    reset()
                } else {
                    Swal.fire("Product already booked by you !")
                }
            })
    }

    return (
        <div className="container mx-auto">
            <div className="my-container py-20">
                <div className="grid rounded-xl shadow-lg grid-cols-1 md:grid-cols-2 bg-green-100">
                    <div className="p-10 ">
                        <img src={orders.img} alt="" />
                        <h3 className="text-3xl mt-2 text-orange">{orders.title}</h3>

                        <div className="px-10 mt-2 space-y-2">
                            <div className="flex items-center justify-between">
                                <p>Your Ordered Package:</p>
                                <p>X 1</p>
                            </div>
                            <div className="flex items-center justify-between">
                                <p>Your Total Cost:</p>
                                <p>${orders.price}</p>
                            </div>
                        </div>
                    </div>

                    <div className="p-10">
                        <h2 className="text-4xl text-orange">Hello, {user.displayName}</h2>
                        <p className="italic text-green-600 text-sm">
                            Your are logged in as {user.email}
                        </p>
                        <form
                            className="flex flex-col  justify-center space-y-2"
                            onSubmit={handleSubmit(onSubmit)}
                        >
                            <p className="text-left mt-8 inline-block text-xl text-lightBlue">
                                Bill to the same address
                            </p>
                            <input
                                type="text"
                                className="rounded-full w-full px-4 py-1 border-2 border-green-300 focus:outline-none bg-green-200"
                                defaultValue={user.displayName}
                                {...register("name", {required: true})}
                                readOnly
                            />
                            <input
                                type="text"
                                className="rounded-full w-full px-4 py-1 border-2 border-green-300 focus:outline-none bg-green-200"
                                defaultValue={user.email}
                                {...register("email", {required: true})}
                                readOnly
                            />
                            <label
                                className="text-left mt-8 inline-block text-xl text-lightBlue"
                                htmlFor="address"
                            >
                                Your Address
                            </label>
                            <textarea
                                id="address"
                                className="rounded-lg w-full px-4 py-1 border-2 border-green-400 focus:outline-none focus:border-green-600"
                                placeholder="73/2 A, Mirpur, Dhaka, Bangladesh"
                                {...register("address", {required: true})}
                            />

                            <input
                                className="bg-green-600 text-white border-none focus:outline-none focus:ring-2 focus:ring-lightBlue focus:ring-offset-2 hover:bg-green-500 hover:shadow-lg cursor-pointer py-2 rounded-full text-lg"
                                value="Place Order"
                                type="submit"
                            />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;