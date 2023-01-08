import { Link } from "react-router-dom";
import Footer from "../Footer";
import ScrollToTop from "../ScrollToTop";
import Sidebar from "./Sidebar";

const Withdraw = ({ currentPage, handleCurrentPage }) => {
  return (
    <div className="w-full">
      <Sidebar
        currentPage={currentPage}
        handleCurrentPage={handleCurrentPage}
      />
      <div className="w-[80%] float-right bg-white pt-[50px] px-12">
        <div className="w-full min-h-[80vh] mb-16">
          <div className="flex items-center gap-2 mt-5 mb-5 text-[1.25rem] relative">
            <Link to="/payment">
              <img
                alt=""
                src="/images/arrow.svg"
                className="w-8 h-4 absolute top-2 left-[-60px]"
              />
            </Link>
            <strong>Withdraw</strong>
          </div>
          <p>Provide the following details in order to get your funds</p>

          <div className="w-2/3 my-16">
            <form>
              <input
                type="text"
                id="name"
                placeholder="Bank name"
                className="w-full py-3 px-4 rounded-md bg-gray-200/70 mb-8"
                required
              />
              <input
                type="text"
                id="accountname"
                placeholder="Account name"
                className="w-full py-3 px-4 rounded-md bg-gray-200/70 mb-8"
                required
              />
              <input
                type="number"
                id="accountnumber"
                placeholder="Account number"
                className="w-full py-3 px-4 rounded-md bg-gray-200/70 mb-8"
                required
              />
              <div className="w-full p-2 bg-[#FFF38A] mt-8">
                Please ensure you confirm the details provided
              </div>
              <button className="bg-blue-500 hover:bg-blue-400 text-white rounded-md py-3 px-6 my-8">
                Withdraw
              </button>
            </form>
            <p>Funds should arrive within the next one working day</p>
          </div>
        </div>
        <Footer />
      </div>
      <ScrollToTop />
    </div>
  );
};

export default Withdraw;
