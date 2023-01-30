import Footer from "../Footer";
import Header from "../Header";
import ScrollToTop from "../ScrollToTop";

const About = () => {
  return (
    <>
      <Header />
      <div className="pt-[90px] min-h-[92vh] mb-10 px-4">
        <div className="sm:pl-6 space-y-12">
          {/* About */}
          <div className="space-y-4">
            <h1 className="text-[1.5rem] md:text-[3rem]">Welcome to Travas</h1>
            <p className="font-light md:text-lg">
              Travas assist domestic tour operators in Nigeria to market their
              products efficiently to individuals who want them.
            </p>
          </div>
          {/* Why choose travas */}
          <div className="space-y-4">
            <h5 className="font-semibold text-xl">Why choose Travas?</h5>
            <p className="font-light md:text-lg">
              <strong>More revenue</strong>
              <br />
              Getting your products in front of the right audience could
              increaseyour overall bookings greatly.
            </p>
            <p className="font-light md:text-lg">
              <strong>Customers insight</strong>
              <br />
              Get indepth insight into what tourists are inerested in via tour
              requests.
            </p>
            <p className="font-light md:text-lg">
              <strong>No charges, No commission</strong>
              <br />
              Get indepth insight into what tourists are inerested in via tour
              requests.
            </p>
          </div>
          {/* More Sales */}
          {/* <div className="space-y-4">
                <h4 className="text-xl font-semibold">More sales</h4>
                <p className="md:text-lg">
                  Lorem ispum et tu, Lorem ispum et tu Lorem ispum et tu, Lorem
                  ispum et tu, Lorem ispum et tu, Lorem ispum et tu, Lorem ispum
                  et tu, Lorem ispum et tu, Lorem ispum et tu, Lorem ispum et tu
                  ,Lorem ispum et tu, Lorem ispum et tu, Lorem ispum et tu,
                  Lorem i, Lorem ispum et tu, Lorem ispum et tu, Lorem ispum et
                  tu, Lorem ispum et tu, Lorem ispum et tu, Lorem ispum et tu,
                  Lorem ispum et tu, Lorem ispum et tu
                </p>
              </div>
              {/* Tour requests 
              <div className="space-y-4">
                <h4 className="text-xl font-semibold">Tour requests</h4>
                <p className="md:text-lg">
                  Lorem ispum et tu, Lorem ispum et tu Lorem ispum et tu, Lorem
                  ispum et tu, Lorem ispum et tu, Lorem ispum et tu, Lorem ispum
                  et tu, Lorem ispum et tu, Lorem ispum et tu, Lorem ispum et tu
                  ,Lorem ispum et tu, Lorem ispum et tu, Lorem ispum et tu,
                  Lorem i, Lorem ispum et tu, Lorem ispum et tu, Lorem ispum et
                  tu, Lorem ispum et tu, Lorem ispum et tu, Lorem ispum et tu,
                  Lorem ispum et tu, Lorem ispum et tu
                </p>
              </div>
              {/* Manage bookings 
              <div className="space-y-4">
                <h4 className="text-xl font-semibold">Manage bookings</h4>
                <p className="font-light md:text-lg">
                  Lorem ispum et tu, Lorem ispum et tu Lorem ispum et tu, Lorem
                  ispum et tu, Lorem ispum et tu, Lorem ispum et tu, Lorem ispum
                  et tu, Lorem ispum et tu, Lorem ispum et tu, Lorem ispum et tu
                  ,Lorem ispum et tu, Lorem ispum et tu, Lorem ispum et tu,
                  Lorem i, Lorem ispum et tu, Lorem ispum et tu, Lorem ispum et
                  tu, Lorem ispum et tu, Lorem ispum et tu, Lorem ispum et tu,
                  Lorem ispum et tu, Lorem ispum et tu
                </p>
              </div>*/}
          {/* Support Section */}
          <div className="w-[90%] mx-auto flex flex-col items-start sm:flex-row ">
            <img src="/images/rectangle.svg" alt="rectangle"></img>

            <div className="sm:pl-6 space-y-12">
              {/* Support */}
              <div className="space-y-4">
                <h4 className="pt-2 text-xl font-semibold">Support</h4>
                <p className="font-light md:text-lg">
                  For support and enquiries,
                  <br />
                  Contact us;
                  <br />
                  Phone: +2348026441652
                  <br />
                  Email:
                </p>
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

export default About;
