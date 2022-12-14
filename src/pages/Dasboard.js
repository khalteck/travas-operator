import Sidebar from "../components/Sidebar";
import Footer from "../Footer";

const Dashboard = () => {
  return (
    <div className="w-full">
      <Sidebar />
      <div className="w-[80%] float-right bg-white pt-[50px] px-12">
        <div className="w-full min-h-[80vh]">
          <p>Welcome back</p>
          <div className="flex items-center gap-2 mt-5">
            <strong>Angie style travels and tours limited</strong>
            <img
              alt=""
              src="/images/icons8-chevron-right-30.png"
              className="w-3 h-4"
            />
          </div>
          <div className="w-full h-[80px] flex gap-4 mt-6">
            <div className="p-3 flex items-center border border-gray-300 rounded-md">
              <img alt="" src="/images/Vector-info.png" className="w-10" />
            </div>
            <div className="w-full py-3 px-6 border border-gray-300 rounded-md flex justify-between">
              <div>
                <p>How can we serve you better?</p>
                <p className="text-[0.8rem] mt-2">
                  Help us improve the platform by giving us your feedback
                </p>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-blue-500">Send feedback</p>
                <img
                  alt=""
                  src="/images/icons8-chevron-right-blue.png"
                  className="w-3 h-4"
                />
              </div>
            </div>
          </div>
          <div className="w-full h-[60px] flex gap-4 mt-6">
            <div className="p-3 flex items-center border border-gray-300 rounded-md">
              <img alt="" src="/images/Invite.png" className="w-10" />
            </div>
            <div className="w-full py-3 px-6 border border-gray-300 rounded-md flex items-center justify-between">
              <div className="flex gap-8">
                <p className="underline">7</p>
                <p>How can we serve you better?</p>
              </div>
              <div className="w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center">
                <img
                  alt=""
                  src="/images/icons8-chevron-right-blue.png"
                  className="w-3 h-4"
                />
              </div>
            </div>
          </div>

          <div className="w-full flex justify-between mt-8">
            <h1 className="font-bold text-[1.25rem]">Packages</h1>
            <button className="bg-blue-500 text-white rounded-md p-3">
              Create new package
            </button>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
