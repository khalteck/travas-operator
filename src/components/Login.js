import ScrollToTop from "../ScrollToTop";

const Login = () => {
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
                placeholder="Email address"
              />
            </div>
            {/* password */}
            <div>
              <input
                className="login-input"
                type="password"
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
      <ScrollToTop />
    </div>
  );
};

export default Login;
