import { Link } from "react-router-dom";
import ScrollToTop from "../ScrollToTop";
// import { useState } from "react";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../firebase/firebase-config";
import Loader from "../components/Loader";
import Header from "../Header";
import Footer from "../Footer";

const Register = ({ regForm, handleRegChange, showLoader, register }) => {
  return (
    <>
      <Header />
      <div className="pt-[150px] mx-auto mb-16 space-y-8 w-[90%] md:mx-0 md:w-[45%] md:pl-[80px]">
        {showLoader && <Loader />}
        <div className="pb-8">
          <h2 className="font-bold pb-4 md:text-2xl">Register</h2>
          <p>Enter these few information to become a Travas supplier today!</p>
        </div>
        <form className="space-y-4">
          {/* business/company name */}
          <div className="space-y-5 pb-8">
            <label htmlFor="business-name">
              Registered business/company name
              <span className="text-red-500"> *</span>
            </label>
            <input
              className="reg-input"
              type="text"
              id="companyName"
              onChange={handleRegChange}
              placeholder="Business/company name"
              required
            />
          </div>

          {/* Contact info */}
          <div className="space-y-12 pb-8">
            <div className="space-y-5">
              <label htmlFor="email">
                Contact info <span className="text-red-500">*</span>
              </label>
              <input
                className="reg-input"
                type="email"
                id="email"
                onChange={handleRegChange}
                placeholder="Email address"
                required
              />
            </div>
            <div className="w-full">
              <input
                className="bg-[#F5F5F5] text-black text-opacity-50 w-[20%] pl-4 py-2.5 focus:outline-none rounded-sm"
                type="dropdown"
              />
              <input
                className="bg-[#F5F5F5] text-black text-opacity-50 w-[80%] pl-6 py-2.5 focus:outline-none rounded-sm"
                type="number"
                id="phone"
                onChange={handleRegChange}
                placeholder="Mobile number"
                required
              />
            </div>
          </div>

          {/* Password */}
          <div className="space-y-5 pb-8">
            <label htmlFor="password">
              Set your password <span className="text-red-500">*</span>
            </label>
            <div className="space-y-12">
              <input
                className="reg-input"
                type="password"
                id="password"
                onChange={handleRegChange}
                placeholder="Password"
                required
              />
              <input
                type="password"
                className="reg-input"
                id="confirmPassword"
                onChange={handleRegChange}
                placeholder="Confirm password"
                required
              />
            </div>
          </div>

          {/* Register */}
          <div className="pt-8">
            <button
              onClick={register}
              className="bg-[#B6B1B1] font-semibold text-center py-3 w-full rounded-sm pointer"
              type="submit"
            >
              Register
            </button>
          </div>
        </form>

        <div className="w-full space-y-5">
          <p className="text-center">
            Already have an account?<span> </span>
            <Link to="/login" className="text-[#1F66D0]">
              Log in
            </Link>
          </p>
          <p>
            By registering, you hereby agree to the Travas<span> </span>
            <Link className="text-[#1F66D0]" to="/">
              Privacy Policy
            </Link>{" "}
            <span> </span>
            and <span> </span>
            <Link className="text-[#1F66D0]" to="/">
              Terms of use
            </Link>
          </p>
        </div>
        <ScrollToTop />
      </div>
      <Footer />
    </>
  );
};

export default Register;
