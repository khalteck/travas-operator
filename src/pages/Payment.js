import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Footer from "../Footer";
import ScrollToTop from "../ScrollToTop";

const Payment = ({ currentPage, handleCurrentPage }) => {
  return (
    <div className="w-full">
      <Sidebar
        currentPage={currentPage}
        handleCurrentPage={handleCurrentPage}
      />
      <div className="w-full md:w-[80%] float-right bg-white pt-[70px] md:pt-[50px] px-0 md:px-12">
        <div className="w-full min-h-[80vh] mb-16 px-3 md:px-0">
          <div className="flex items-center gap-2 mt-5 mb-5 text-[1.25rem]">
            <strong>Payment</strong>
          </div>
          <p>Your earnings will show up here</p>

          <div className="w-full bg-gray-200 mt-8 block md:flex gap-8 p-5 justify-center">
            <div className="w-full md:w-[40%] mb-5 md:mb-0 p-5 text-center bg-white">
              <strong className="text-[1.25rem]">40,000</strong> NGN <br />{" "}
              Available balance
            </div>
            <div className="w-full md:w-[40%] p-5 text-center border border-slate-700">
              <strong className="text-[1.25rem]">200,000</strong> NGN <br />{" "}
              Book balance
            </div>
          </div>

          <div className="w-full p-2 border border-slate-700 mt-8">
            Funds from your bookings moves up to your Available ballance on the
            end date of your tour
          </div>

          <div>
            <Link to="/withdraw">
              <button className="bg-blue-500 hover:bg-blue-400 text-white rounded-md py-3 px-6 my-8">
                Withdraw
              </button>
            </Link>
            <p>Withdrawals can be made during any of the five working days</p>
          </div>

          <h2 className="font-bold text-[1.25rem] mt-8">Transactions</h2>
          <div className="my-16 text-center">
            <img
              alt=""
              src="/images/undraw_no_data_re_kwbl 1.png"
              className="w-[180px] h-auto mx-auto mb-8"
            />
            <p className="text-gray-500">Your transactions would appear here</p>
          </div>
        </div>
        <Footer />
      </div>
      <ScrollToTop />
    </div>
  );
};

export default Payment;
