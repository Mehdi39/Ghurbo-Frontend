import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Transition } from "@headlessui/react";
import useAuth from '../../Hooks/useAuth'

const Header = () => {
    const [hamburgerMenu, setHamburgerMenu] = useState(true);
    const { user, logOut } = useAuth();

    return (
        <div className="w-full">
            <nav className="bg-green-700 py-4 lg:py-1">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center w-full">
                            <div className="">
                                <h2 className="text-white text-2xl sm:text-xl lg:text-3xl font-bold">
                                    Ghurbo
                                </h2>
                            </div>
                            <div className="ml-auto hidden lg:block">
                                <div className="ml-10 flex items-center space-x-2">
                                    <NavLink
                                        activeClassName=" text-2xl rounded-md text-white bg-green-500 px-3 py-2"
                                        to="/home"
                                        className="text-white nav-link"
                                    >
                                        Home
                                    </NavLink>

                                    <NavLink
                                        activeClassName="text-2xl rounded-md text-white bg-green-500 px-3 py-2"
                                        to="/allPackage"
                                        className="nav-link text-white "
                                    >
                                        All Packages
                                    </NavLink>

                                    {user.email ? (
                                        <NavLink
                                            activeClassName="text-2xl rounded-md text-white bg-green-500 px-3 py-2"
                                            to="/myorders"
                                            className="nav-link text-white"
                                        >
                                            My Order
                                        </NavLink>
                                    ) : (
                                        ""
                                    )}

                                    {user.email ? (
                                        <NavLink
                                            activeClassName="text-2xl rounded-md text-white bg-green-500 px-3 py-2"
                                            to="/manageorders"
                                            className="nav-link text-white"
                                        >
                                            Manage Order
                                        </NavLink>
                                    ) : (
                                        ""
                                    )}

                                    {user.email ? (
                                        <NavLink
                                            activeClassName="text-2xl rounded-md text-white bg-green-500 px-3 py-2"
                                            to="/addpackage"
                                            className="nav-link text-white"
                                        >
                                            Add Package
                                        </NavLink>
                                    ) : (
                                        ""
                                    )}

                                    <NavLink
                                        activeClassName="text-2xl rounded-md text-white bg-green-500 px-3 py-2"
                                        to="/aboutus"
                                        className="nav-link text-white"
                                    >
                                        About Us
                                    </NavLink>

                                    {user.email ? (
                                        <div className="flex item-center">
                                            <img
                                                src={user.displayName}
                                                alt="profile_picture"
                                                className="userImg hidden h-10 w-10 rounded-full"
                                            />
                                            <button
                                                onClick={logOut}
                                                className="text-white bg-orange nav-link ml-2"
                                            >
                                                Logout ({user.displayName.split(" ")[0]})
                                            </button>
                                        </div>
                                    ) : (
                                        <NavLink activeClassName="text-2xl rounded-md text-white bg-green-500 px-3 py-2" to="/login" className="bg-orange nav-link">
                                            Login
                                        </NavLink>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="-mr-2 flex lg:hidden">
                            <button
                                onClick={() => setHamburgerMenu(!hamburgerMenu)}
                                type="button"
                                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                {!hamburgerMenu ? (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                <Transition
                    show={hamburgerMenu}
                    enter="transition ease-out duration-100 transform"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-75 transform"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    {(ref) => (
                        <div className="text-center lg:hidden" id="mobile-menu">
                            <div
                                ref-setter={ref}
                                className="px-2 pt-2 pb-3 space-y-1 sm:px-3"
                            >
                                <NavLink
                                    activeClassName="text-white bg-gray-700 bg-green-500 px-3 py-2"
                                    to="/home"
                                    className="collapse-nav-link"
                                >
                                    Home
                                </NavLink>

                                <NavLink
                                    activeClassName="text-white bg-gray-700 bg-green-500 px-3 py-2"
                                    to="/allPackage"
                                    className="collapse-nav-link text-white"
                                >
                                    All Package
                                </NavLink>

                                <NavLink
                                    activeClassName="text-white bg-gray-700"
                                    to="/myOrders"
                                    className="collapse-nav-link"
                                >
                                    My Order
                                </NavLink>

                                <NavLink
                                    activeClassName="text-white bg-gray-700"
                                    to="/manageOrders"
                                    className="collapse-nav-link"
                                >
                                    Manage Orders
                                </NavLink>

                                <NavLink
                                    activeClassName="text-white bg-gray-700"
                                    to="/addPackage"
                                    className="collapse-nav-link"
                                >
                                    Add Package
                                </NavLink>

                                <NavLink
                                    activeClassName="text-white bg-gray-700"
                                    to="/aboutUs"
                                    className="collapse-nav-link"
                                >
                                    About Us
                                </NavLink>

                                {user.email ? (
                                    <div className="flex justify-center space-x-4 item-center">
                                        <img
                                            src={user.photoURL}
                                            alt=""
                                            className="h-10 w-10 rounded-full"
                                        />
                                        <button
                                            onClick={logOut}
                                            className="bg-orange nav-link"
                                        >
                                            Logout ({user.displayName.split(" ")[0]})
                                        </button>
                                    </div>
                                ) : (
                                    <NavLink to="/login" className="bg-orange nav-link">
                                        Login
                                    </NavLink>
                                )}
                            </div>
                        </div>
                    )}
                </Transition>
            </nav>
        </div>
    );
};

export default Header;