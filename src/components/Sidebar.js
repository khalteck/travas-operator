const Sidebar = () => {
  return (
    <div className="w-[20%] h-[100vh] py-10 fixed top-0 left-0 bg-white">
      <img
        alt=""
        src="/images/Travas Logo.png"
        className="w-1/3 h-auto ml-12 mb-12"
      />
      <ul className="w-full">
        <li className="w-[90%] mb-8 bg-gray-200 py-3 px-12 cursor-pointer hover:bg-white hover:border-slate-600 border border-gray-200 rounded-r-2xl">
          Dashboard
        </li>
        <li className="w-[90%] mb-8 bg-gray-200 py-3 px-12 cursor-pointer hover:bg-white hover:border-slate-600 border border-gray-200 rounded-r-2xl">
          Tour Requests
        </li>
        <li className="w-[90%] mb-8 bg-gray-200 py-3 px-12 cursor-pointer hover:bg-white hover:border-slate-600 border border-gray-200 rounded-r-2xl">
          My tour guides
        </li>
        <li className="w-[90%] mb-8 bg-gray-200 py-3 px-12 cursor-pointer hover:bg-white hover:border-slate-600 border border-gray-200 rounded-r-2xl">
          Payment
        </li>
        <li className="w-[90%] mb-8 bg-gray-200 py-3 px-12 cursor-pointer hover:bg-white hover:border-slate-600 border border-gray-200 rounded-r-2xl">
          Support
        </li>
        <li className="w-[90%] mb-8 bg-gray-200 py-3 px-12 cursor-pointer hover:bg-white hover:border-slate-600 border border-gray-200 rounded-r-2xl">
          Product Feedback
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
