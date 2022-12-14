import Sidebar from "../components/Sidebar";
import Footer from "../Footer";
import ScrollToTop from "../ScrollToTop";

const ProductFeedback = ({ currentPage, handleCurrentPage }) => {
  return (
    <div className="w-full">
      <Sidebar
        currentPage={currentPage}
        handleCurrentPage={handleCurrentPage}
      />
      <div className="w-full md:w-[80%] float-right bg-white pt-[50px] px-12">
        <div className="w-full min-h-[80vh] mb-16">
          <div className="flex items-center gap-2 mt-5 mb-5 text-[1.25rem]">
            <strong>Product feedback</strong>
          </div>
          <p>Your feedback is greatly needed</p>

          <div className="my-12">
            <h2 className="text-[1.25rem] mb-4">
              How can we serve you better?
            </h2>
            <p className="text-gray-500 mb-4">
              Help us improve the Travas platform in order to serve your
              busioness better by telling us what your pain points are.
            </p>
          </div>

          <div className="my-12">
            <h2 className="text-[1.25rem] mb-6">
              Which of these features are you having issues with?
            </h2>
            <div className="w-full grid grid-cols-4 gap-8">
              <button className="bg-gray-200/40 border border-gray-300 p-3">
                Tour packages
              </button>
              <button className="bg-gray-200/40 border border-gray-300 p-3">
                Tour request
              </button>
              <button className="bg-gray-200/40 border border-gray-300 p-3">
                My tour guide
              </button>
              <button className="bg-gray-200/40 border border-gray-300 p-3">
                Payment
              </button>
              <button className="bg-gray-200/40 border border-gray-300 p-3">
                Support
              </button>
            </div>

            <div className="w-full my-12">
              <form>
                <textarea
                  id="issue"
                  placeholder="Tell us what exactly is the issue"
                  className="w-full h-[150px] bg-gray-200/50 p-3"
                  required
                />
                <button className="bg-blue-500 hover:bg-blue-400 text-white rounded-md py-3 px-6 my-8">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </div>
      <ScrollToTop />
    </div>
  );
};

export default ProductFeedback;
