import React, { useEffect } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom'
import useAuth from '../../Hooks/useAuth'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGoogle} from '@fortawesome/free-brands-svg-icons'

const Login = () => {

  useEffect(() => {
    document.title = "Login : Travel Vila";
  }, []);

  const { signInUsingGoogle } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || '/home';

  // google sign-in
  const handleGoogleLogin = () => {
      signInUsingGoogle(history, redirect_uri)
  }
  
  return (
    <div
      style={{
        minHeight: "80vh",
        background: `linear-gradient(rgba(0,0,0,.75),rgba(0,0,0,.75)),url('https://cdn.dribbble.com/users/1484145/screenshots/14190807/contact_us_4x.png')center center/cover no-repeat`,
      }}
      className="flex items-center justify-center container mx-auto"
    >
      <div
        style={{ minHeight: "300px", background: "rgba(255,255,255,.5)" }}
        className="my-container w-full md:w-2/3 my-20 py-14 md:rounded-2xl flex flex-col items-center justify-center text-center"
      >
        

        <div className="w-full">
          <h2 className="text-white text-6xl mb-9">Login With</h2>
          <div
            onClick={handleGoogleLogin}
            className="bg-white w-full sm:w-2/3 lg:w-1/3 mx-auto flex items-center justify-start sm:justify-center px-4 relative rounded-full border border-lightBlue transition shadow-sm hover:shadow-md cursor-pointer py-2"
          >
            <FontAwesomeIcon icon={faGoogle} className="text-2xl sm:text-4xl sm:absolute sm:left-2 pr-2 text-green-600 mr-5" />
            <p className="text-green-600 ml-4 sm:ml-0 pl-4"> Continue With google</p>
          </div>
          <p className="mt-2 text-gray-100">
            Don’t have an account?{" "}
            <Link
              className="text-gray-900 transition-all hover:text-lightBlue hover:underline"
              to="register"
            >
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
