import Sidebar from "../components/Sidebar";
import Footer from "../Footer";
import ScrollToTop from "../ScrollToTop";

const SupportUser = ({ currentPage, handleCurrentPage }) => {
  return (
    <div className="w-full">
      <Sidebar
        currentPage={currentPage}
        handleCurrentPage={handleCurrentPage}
      />
      <div className="w-full md:w-[80%] float-right bg-white pt-[70px] md:pt-[50px] px-0 md:px-12">
        <div className="w-full min-h-[80vh] mb-16 px-3 md:px-0">
          <div className="flex items-center gap-2 mt-5 mb-5 text-[1.25rem]">
            <strong>Support</strong>
          </div>
          <p>
            Reach out to our customer support for any complaint or enquiries
          </p>

          <div className="my-12">
            <h2 className="text-[1.25rem] mb-4">Contact us</h2>
            <p className="text-gray-500 mb-4">
              Contact us via a any of these channels
            </p>
            <div className="w-full sm:w-[300px] grid grid-cols-2 gap-6">
              <p>Email:</p>
              <p>info@travas.com</p>
              <p>Call:</p>
              <p>+2348026441652</p>
            </div>
          </div>

          <div className="w-[fit-content] p-2 border border-slate-700 my-8">
            How long would a reply take
          </div>

          <div className="w-full bg-gray-200/50">
            <div className="w-full p-3 flex gap-16 border-b border-gray-300">
              <p>Enquiries:</p>
              <p>Response would take not more than 24 hrs </p>
            </div>
            <div className="w-full p-3 flex gap-16">
              <p>Complaints:</p>
              <p>Response would take not more than 3 working days</p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
      <ScrollToTop />
    </div>
  );
};

export default SupportUser;
