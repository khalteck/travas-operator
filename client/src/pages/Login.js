import ScrollToTop from "../ScrollToTop";
import { Link } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import Loader from "../components/Loader";

const Login = ({
  handleLoginChange,
  showLoader,
  login,
  invalidCred,
  closeUserMod,
  registerSuccess,
  userExists,
  loginGo,
}) => {
  return (
    <>
      <Header />
      <div
        className={`w-full ${
          registerSuccess || userExists ? "pt-[100px]" : "pt-0"
        } transition-all duration-500`}
      >
        {showLoader && <Loader />}
        {userExists && (
          <div className=" p-10 float-center mx-5 md:mr-16 border border-[#B6B1B1] rounded-xl float-right relative flex gap-4 items-center">
            <img
              className="w-[20px] h-[20px] cursor-pointer absolute top-[15px] right-[15px]"
              alt=""
              src="/images/icons8-close-50.png"
              onClick={closeUserMod}
            />
            <img
              alt=""
              src="/images/icons8-information-64.png"
              className="w-10 h-10"
            />
            <p>User already exists, redirected to Login page</p>
          </div>
        )}
        {registerSuccess && (
          <div className=" p-10 float-center mx-5 md:mr-16 border border-[#B6B1B1] rounded-xl float-right relative flex gap-4 items-center">
            <img
              className="w-[20px] h-[20px] cursor-pointer absolute top-[15px] right-[15px]"
              alt=""
              src="/images/icons8-close-50.png"
              onClick={closeUserMod}
            />
            <img
              alt=""
              src="/images/icons8-checkmark-64.png"
              className="w-10 h-10"
            />
            <p>Successful Sign up, Proceed to Login</p>
          </div>
        )}
        <div className="pt-[150px] w-[90%] min-h-[90vh] mx-auto space-y-16 md:pl-[80px] md:w-[45%] md:mx-auto">
          <div>
            <h2 className="font-bold text-2xl mb-10 mx-auto text-center">
              Login
            </h2>

            {/* Login form container */}
            <div className=" mx-auto">
              <form className="space-y-16">
                {/* email */}
                <div>
                  <input
                    className="login-input"
                    type="email"
                    id="email"
                    onChange={handleLoginChange}
                    placeholder="Email address"
                  />
                </div>
                {/* password */}
                <div>
                  <input
                    className="login-input"
                    type="password"
                    id="password"
                    onChange={handleLoginChange}
                    placeholder="Password"
                  />
                </div>
                {invalidCred && (
                  <p className="text-red-500">Invalid Login Credentials</p>
                )}
                {/* Login Button */}
                <div className="pt-5">
                  <button
                    className="bg-[#B6B1B1] font-semibold text-center py-2.5 rounded-sm pointer w-full"
                    type="submit"
                    onClick={loginGo}
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
      </div>
      <Footer />
    </>
  );
};

export default Login;
