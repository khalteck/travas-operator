import Sidebar from "../components/Sidebar";
import Footer from "../Footer";
import ScrollToTop from "../ScrollToTop";

const TourRequest = ({ currentPage, handleCurrentPage, logout }) => {
  return (
    <div className="w-full">
      <Sidebar
        currentPage={currentPage}
        handleCurrentPage={handleCurrentPage}
        logout={logout}
      />
      <div className="w-full md:w-[80%] float-right bg-white pt-[50px] px-0 md:px-12">
        <div className="w-full min-h-[80vh] mb-16 px-3">
          <div className="flex items-center gap-2 mt-8 md:mt-5 mb-5 text-[1.25rem]">
            <strong>Tour Request</strong>
          </div>
          <p>
            These request are from Travas tourist platform. These data can
            thereby be helpful when orgaanising your tour package
          </p>

          <div className="my-16 text-center">
            <img
              alt=""
              src="/images/undraw_no_data_re_kwbl 1.png"
              className="w-[180px] h-auto mx-auto mb-8"
            />
            <p className="text-gray-500">
              Tour requests from the Travas tourist platform would appear here
            </p>
          </div>
        </div>
        <Footer />
      </div>
      <ScrollToTop />
    </div>
  );
};

export default TourRequest;
