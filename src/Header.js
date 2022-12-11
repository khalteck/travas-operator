import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full h-20 bg-white px-[5%] fixed top-0 left-0 flex items-center z-[100] shadow-md">
      <Link to="/" className="mr-[150px]">
        <div className="w-20 h-10 border-[2px] border-blue-500 flex items-center gap-[0px] cursor-pointer">
          LOGO
          {/*<img alt="logo" src={logo} className="w-[60px] h-[60px]" />
          <p className="font-dyna text-[1.5rem] text-rose-300 tracking-widest">
            Note app
  </p>*/}
        </div>
      </Link>
      <nav className="mr-auto">
        <div className="flex items-center gap-[60px] mr-auto">
          <Link
            to="/about"
            className="cursor-pointer px-[10px] py-[5px] rounded-md hover:bg-blue-500 hover:text-white hover:translate-y-[6px] transition-all duration-300"
          >
            About
          </Link>
          <Link
            to="/pricing"
            className="cursor-pointer px-[10px] py-[5px] rounded-md hover:bg-blue-500 hover:text-white hover:translate-y-[6px] transition-all duration-300"
          >
            Pricing
          </Link>
          <Link
            to="/support"
            className="cursor-pointer px-[10px] py-[5px] rounded-md hover:bg-blue-500 hover:text-white hover:translate-y-[6px] transition-all duration-300"
          >
            Support
          </Link>
        </div>
      </nav>
      <div>
        <button className="bg-white font-[700] text-[0.90rem] text-blue-500 mr-[20px] px-[20px] py-[5px] border-2 border-blue-500 rounded-md hover:bg-blue-500 hover:text-white hover:translate-y-[6px] transition-all duration-300">
          <Link to="/login">Log In</Link>
        </button>
        <button className="bg-blue-500 font-[700] text-[0.90rem] text-white px-[20px] py-[5px] rounded-md border-2 border-blue-500 hover:bg-blue-500 hover:translate-y-[6px] transition-all duration-300">
          <Link to="/register">Sign Up</Link>
        </button>
      </div>
    </header>
  );
};

export default Header;
