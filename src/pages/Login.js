import ScrollToTop from "../ScrollToTop";
import { Link } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  //to save reg form input
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  //to handle form input change chnage
  function handleChange(event) {
    const { id, value } = event.target;
    setLoginForm((prevState) => {
      return {
        ...prevState,
        [id]: value,
      };
    });
  }

  return (
    <div className="pt-[150px] w-[90%] min-h-[90vh] mx-auto space-y-16 md:pl-[80px] md:mx-0  md:w-[45%] ">
      <div>
        <h2 className="font-bold md:text-2xl mb-8">Login</h2>

        {/* Login form container */}
        <div className=" mx-auto">
          <form className="space-y-16">
            {/* email */}
            <div>
              <input
                className="login-input"
                type="email"
                id="email"
                onChange={handleChange}
                placeholder="Email address"
              />
            </div>
            {/* password */}
            <div>
              <input
                className="login-input"
                type="password"
                id="password"
                onChange={handleChange}
                placeholder="Password"
              />
            </div>
            {/* Login Button */}
            <div className="pt-8">
              <button
                className="bg-[#B6B1B1] font-semibold text-center py-2.5 rounded-sm pointer w-full"
                type="submit"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="w-full space-y-5">
        <p className="text-center">
          Don't have an account?<span> </span>
          <Link to="/register" className="text-[#1F66D0]">
            Sign up
          </Link>
        </p>
      </div>
      <ScrollToTop />
    </div>
  );
};

export default Login;
