import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'

const AddPackage = () => {
  const { register, handleSubmit, reset } = useForm()

  useEffect(() => {
    document.title = "Add Package";
  }, [])

  const onSubmit = data => {

    axios.post('https://limitless-mesa-73949.herokuapp.com/addpackage', data)
      .then(res => {
        if (res.data.insertedId) {
          alert('Data Added Successfully')
          reset()
        }
      })
  }


  return (
    <div>
      <h2 className="text-4xl py-4 text-center">Add New Tour Package</h2>
      <div>
        <div className="my-container py-20">
          <form
            className="lg:-mt-24 w-full md:w-1/2 lg:w-1/3 mx-auto flex flex-col  justify-center space-y-2"
            onSubmit={handleSubmit(onSubmit)}
          >
            <label
              className="text-left mt-8 inline-block text-xl text-lightBlue"
              htmlFor="title"
            >
              Package Title
            </label>
            <input
              id="title"
              type="text"
              className="rounded-full w-full px-4 py-1 border-2 border-green-300 focus:outline-none focus:border-green-600"
              placeholder="Name of the Package"
              {...register("title", {required: true})}
            />
            <div className="flex items-center space-x-2">
              <div className="price">
                <label
                  className="text-left inline-block text-xl text-lightBlue"
                  htmlFor="price"
                >
                  Package Price
                </label>
                <input
                  id="price"
                  type="number"
                  className="rounded-full w-full px-4 py-1 border-2 border-green-300 focus:outline-none focus:border-green-600"
                  placeholder="Price of the Package"
                  {...register("price", {required: true})}
                />
              </div>
              <div className="price">
                <label
                  className="text-left inline-block text-xl text-lightBlue"
                  htmlFor="duration"
                >
                  Package Time
                </label>
                <input
                  id="duration"
                  type="text"
                  className="rounded-full w-full px-4 py-1 border-2 border-green-300 focus:outline-none focus:border-green-600"
                  placeholder="Package Duration"
                  {...register("duration", {required: true})}
                />
              </div>
            </div>

            <label
              className="text-left mt-8 inline-block text-xl text-lightBlue"
              htmlFor="img"
            >
              Package Image
            </label>
            <input
              id="img"
              type="text"
              className="rounded-full w-full px-4 py-1 border-2 border-green-400 focus:outline-none focus:border-green-600"
              placeholder="Image URL"
              {...register("img", {required: true})}
            />
            <label
              className="text-left mt-8 inline-block text-xl text-lightBlue"
              htmlFor="description"
            >
              Package Description
            </label>
            <textarea
              id="description"
              rows="8"
              className="rounded-lg w-full px-4 py-1 border-2 border-green-400 focus:outline-none focus:border-green-600"
              placeholder="Full Description"
              {...register("description", {required: true})}
            />

            <input
              className="bg-green-600 text-white border-none focus:outline-none focus:ring-2 focus:ring-lightBlue focus:ring-offset-2 hover:bg-green-400 hover:shadow-lg cursor-pointer py-2 rounded-full text-lg"
              value="Add Package"
              type="submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddPackage;