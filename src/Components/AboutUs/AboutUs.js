import React, {useEffect} from "react";
import { BiBus } from "react-icons/bi";
import { BsChat, BsEmojiSmile } from "react-icons/bs";
import { CgToolbox } from "react-icons/cg";
import ContactUs from '../ContactUs.js/ContactUs'
import { Link } from 'react-router-dom'


const AboutUS = () => {

  useEffect(() => {
    document.title = "About Us";
  }, [])

  return (
    <div className="bg-blue-50 container mx-auto">
      <div
        style={{
          background:
            "linear-gradient(to right bottom, rgba(0,0,0,.95),rgba(0,0,0,.5)), url('https://ttg.com.bd/uploads/tours/hotels/166_21150456_1915711408748139_2496047448058524604_njpg.jpg') center center/cover no-repeat",
          minHeight: "40vh",
        }}
        className="flex items-center justify-center flex-col"
      >
        <div className="text-8xl font-bold text-white">About Us</div>

      </div>

      <div className="my-container my-20">
        <div className="grid grid-cols-1 md:grid-cols-2 px-5">
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img
              className="transition transform hover:scale-110 rounded-2xl w-full h-full"
              src="https://ttg.com.bd/uploads/tours/hotels/166_60046190_2327146404271302_7938816544904052736_njpg.jpg"
              alt=""
            />
          </div>
          <div className="p-10">
            <h3 className="text-3xl text-gray-700">
              Your Trusted Travel Parnter
            </h3>
            <p className="text-gray-600 mt-2">
              Ghurbo Bangladesh Holidays is a fast growing Tours & Travel Planner in Dhaka Bangladesh.

              We started our journey in 2009 as an IT Company known as UNITECH BD SOFTWARE. In 2018 we start our travel agency Kite Bangladesh Holidays.

              We are 100% local tour operator in Bangladesh. We always operate all tours by our own guides.

              We don’t just offer tours and travel services but also provide reliable and hassle free travel planning facilities.

              If you are planning to explore THE BANGLADESH, then we are here to Keep SURPRISING YOU!! We always make the tour comfortable & hassle free.
            </p>

            <button className="px-6 py-3 bg-green-600 border-none focus:outline-none focus:ring-offset-2 focus:ring-2 focus:ring-lightBlue text-white mt-4 rounded-2xl transition hover:bg-lightBlue hover:shadow-xl">
              <Link to='/allpackage'>See Packages</Link>
              
            </button>
          </div>
        </div>

        <div className="my-20 mx-auto flex justify-center items-center w-full px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full gap-8">
            <div className="text-4xl flex flex-col items-center justify-center space-y-2 bg-gray-50 shadow-lg hover:shadow-xl transition p-6 rounded-lg">
              <BsEmojiSmile className="text-orange" />
              <p className="text-green-700 m-0 font-bold">2,000</p>
              <p className="text-darkBlue font-medium text-lg tracking-wide">
                Happy Customer
              </p>
            </div>
            <div className="text-4xl flex flex-col items-center justify-center space-y-2 bg-gray-50 shadow-lg hover:shadow-xl transition p-6 rounded-lg">
              <BiBus className="text-orange" />
              <p className="text-green-700 m-0 font-bold">122</p>
              <p className="text-darkBlue font-medium text-lg tracking-wide">
                Amazing Tours
              </p>
            </div>
            <div className="text-4xl flex flex-col items-center justify-center space-y-2 bg-gray-50 shadow-lg hover:shadow-xl transition p-6 rounded-lg">
              <CgToolbox className="text-orange" />
              <p className="text-purple-700 m-0 font-bold">287</p>
              <p className="text-darkBlue font-medium text-lg tracking-wide">
                In Business
              </p>
            </div>
            <div className="text-4xl flex flex-col items-center justify-center space-y-2 bg-gray-50 shadow-lg hover:shadow-xl transition p-6 rounded-lg">
              <BsChat className="text-orange" />
              <p className="text-blue-600 m-0 font-bold">165</p>
              <p className="text-darkBlue font-medium text-lg tracking-wide">
                Support Cases
              </p>
            </div>
          </div>
        </div>
      </div>
      <ContactUs></ContactUs>
    </div>
  );
};

export default AboutUS;
