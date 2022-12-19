import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="w-full h-[100vh] fixed top-0 left-0 bg-slate-700/70 flex justify-center items-center">
      <div className="bg-white text-[2rem] font-bold w-[40%] h-[150px] rounded-lg flex flex-col justify-center items-center">
        Page not found
        <br />
        <span className="text-[1rem]">
          Go{" "}
          <Link to="/" className="text-blue-500 underline">
            Home
          </Link>
        </span>
      </div>
    </div>
  );
};

export default PageNotFound;
