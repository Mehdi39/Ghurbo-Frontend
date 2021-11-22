import React from 'react';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

const Footer = () => {
    return (
        <footer className="w-full">
            <div className="bg-green-800 text-white p-10 container mx-auto">
                <div className="my-container">
                    <div className="grid space-y-4 space-x-4 grid-cols-1 md:grid-cols-3">
                        <div className="space-y-2">
                            <h2 className="text-white text-3xl font-bold">
                                Ghurbo
                            </h2>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                            </p>
                            <div className="flex space-x-4">
                                <FontAwesomeIcon icon={faFacebook} className="transition text-xl cursor-pointer hover:text-white" />

                                <FontAwesomeIcon icon={faTwitter} className="transition text-xl cursor-pointer hover:text-white" />
                                <FontAwesomeIcon icon={faLinkedin} className="transition text-xl cursor-pointer hover:text-white" />
                            </div>
                        </div>
                        <div className="flex md:justify-center">
                            <div className="">
                                <h3 className="text-3xl mb-2">Quick Links</h3>
                                <div className="flex flex-col list-none">
                                    <li className="flex items-center space-x-1 group">

                                        <Link className="transition group-hover:text-white" to="/">
                                        👉 Terms &amp; Conditions
                                        </Link>
                                    </li>
                                    <li className="flex items-center space-x-1 group">

                                        <Link className="transition group-hover:text-white" to="/">
                                        👉 About Us
                                        </Link>
                                    </li>
                                    <li className="flex items-center space-x-1 group">

                                        <Link className="transition group-hover:text-white" to="/">
                                        👉 Latest News
                                        </Link>
                                    </li>
                                    <li className="flex items-center space-x-1 group">

                                        <Link className="transition group-hover:text-white" to="/">
                                        👉 Subscribe
                                        </Link>
                                    </li>
                                    <li className="flex items-center space-x-1 group">

                                        <Link className="transition group-hover:text-white" to="/">
                                        👉 Our Policies
                                        </Link>
                                    </li>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <h3 className="text-3xl mb-2">Newsletter</h3>
                            <p>
                                Join us on a Ghurbo Sajek Tours and Step behind the scenes.
                            </p>

                            <div className="flex space-x-1 items-center rounded-lg p-2 border-2 border-lightBlue mt-4">
                                <FontAwesomeIcon icon={faEnvelope} className="text-lg text-lightBlue" />
                                <input
                                    className="bg-transparent w-full focus:outline-none border-none focus:ring-0 px-2"
                                    type="text"
                                    placeholder="Your Email:"
                                />
                            </div>
                            <button className="bg-darkBlue text-white font-bold outline-none border-2 border-darkBlue rounded-lg px-6 py-2 mt-2 w-full shadow-lg hover:text-gray-800 hover:bg-white hover:border-lightBlue">
                                Subscribe
                            </button>
                        </div>
                    </div>
                    <hr className="my-6" />
                    <div className="flex items-center justify-between">
                        <p className="text-gray-200 text-sm">
                            &copy;2021-2022{" "}
                            <span className="text-white text-sm font-bold">
                               Ghurbo
                            </span>
                        </p>
                    </div>
                </div>
            </div>

        </footer>
    );
};

export default Footer;