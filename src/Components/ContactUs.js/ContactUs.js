import React from "react";
import { useForm } from "react-hook-form";

const ContactUs = () => {

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div
      style={{
        background:
          "linear-gradient(to bottom, rgba(0,0,0,.5),rgba(0,0,0,.5)), url('https://ttg.com.bd/uploads/tours/hotels/166_59850003_2327146334271309_2210451880058814464_njpg.jpg') center center/cover no-repeat",
      }}

    >
      <div className="my-container py-20">
        <div className="grid grid-cols-1 md:grid-cols-1 items-center">

          <div className="p-10">
            <form
              className="w-full mx-auto flex flex-col  justify-center space-y-2"
              onSubmit={handleSubmit(onSubmit)}
            >
              <label
                className="text-left mt-8 inline-block text-xl text-white"
                htmlFor="title"
              >
                Name
              </label>
              <input
                id="title"
                type="text"
                className="rounded-full w-full px-4 py-1 border-2 border-green-300 focus:outline-none focus:border-green-600"
                placeholder="Your Name"
                {...register("name")}
              />

              <label
                className="text-left mt-8 inline-block text-xl text-white"
                htmlFor="email"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                className="rounded-full w-full px-4 py-1 border-2 border-green-400 focus:outline-none focus:border-green-600"
                placeholder="Your Email"
                {...register("email")}
              />

              <label
                className="text-left mt-8 inline-block text-xl text-white"
                htmlFor="description"
              >
                Message
              </label>
              <textarea
                id="message"
                className="rounded-lg w-full px-4 py-1 border-2 border-green-400 focus:outline-none focus:border-green-600"
                placeholder="Your Messages"
                {...register("message")}
              />

              <input
                className="bg-green-600 text-white border-none focus:outline-none focus:ring-2 focus:ring-lightBlue focus:ring-offset-2 hover:bg-green-500 hover:shadow-lg cursor-pointer py-2 rounded-full text-lg"
                value="Send Us"
                type="submit"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
