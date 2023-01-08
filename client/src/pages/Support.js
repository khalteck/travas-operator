import Footer from "../Footer";
import Header from "../Header";
import ScrollToTop from "../ScrollToTop";

const Support = () => {
  return (
    <>
      <Header />
      <div className="pt-[60px] md:pt-[90px] min-h-[95vh] px-0 md:px-12">
        <div className="w-full bg-white pt-[20px] md:pt-[50px]">
          <div className="w-full mb-16 px-3 md:px-0">
            <h1 className="text-[1.5rem] md:text-[3rem] my-6">support</h1>
            <p>
              Reach out to our customer support for any complaint or enquiries
            </p>

            <div className="my-12">
              <h2 className="text-[1.25rem] mb-4">Contact us</h2>
              <p className="text-gray-500 mb-4">
                Contact us via any of these channels
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
              <div className="w-full p-3 flex gap-12">
                <p>Complaints:</p>
                <p>Response would take not more than 3 working days</p>
              </div>
            </div>
          </div>
        </div>
        <ScrollToTop />
      </div>
      <Footer />
    </>
  );
};

export default Support;
