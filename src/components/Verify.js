import React from "react";

const Verify = () => {
  return (
    <div className="pt-[100px] pb-48 w-[90%] mx-auto md:w-[50%] md:pt-[150px] md:mx-0 md:pl-[80px]">
      <div className="flex items-center space-x-4">
        <img src="/images/arrow.svg" alt="arrow" />
        <h2>Verify identity</h2>
      </div>

      {/* Personnel details form */}
      <form className="space-y-12">
        <div className="space-y-2 pt-5 ">
          <h3 className="font-medium">Personal details</h3>
          <p className="font-light">
            Provide some neccessary information of a sole proprietor, director
            or representative of your business/company
          </p>
          <p className="font-medium">
            This is a compulsory step before being able to create tour package
          </p>
        </div>
        {/* name */}
        <div className="space-y-3">
          <input
            id="full-name"
            className="login-input"
            type="name"
            placeholder="Full name"
          />
          <label className="block font-light" for="full-name">
            Name of Sole proprietor, Director or representative
          </label>
        </div>
        {/* number */}
        <div className="space-y-3">
          <div className="space-x-3 flex">
            <input
              className="bg-[#F5F5F5] text-black text-opacity-50 w-[20%] pl-4 py-2.5 focus:outline-none rounded-sm"
              type="dropdown"
            />
            <input
              id="num"
              className="bg-[#F5F5F5] text-black text-opacity-50 w-[80%] pl-4 py-2.5 focus:outline-none rounded-sm"
              type="number"
              placeholder="Mobile number"
            />
          </div>
          <label className="block font-light" for="num">
            Mobile number of Sole proprietor Director or representative
          </label>
        </div>

        {/* means of identification */}
        <div className="space-y-8">
          <input
            className="verify-input"
            type=""
            placeholder="means of identification"
          />
          <button className="bg-[#B6B1B1] text-center py-2 px-12 rounded-lg pointer">
            Upload
          </button>
        </div>
      </form>

      {/* Business/Company details form */}
      <form className="pt-16 space-y-12">
        <div className="space-y-2">
          <h3 className="font-medium">Business/Company details</h3>
          <p className="font-light">
            Upload your business certificate of registration from the Coporate
            Affairs Commission
          </p>
        </div>

        {/* means of identification */}
        <div className="space-y-8">
          <input
            className="verify-input"
            type=""
            placeholder="CAC certificate of registration"
          />
          <button className="bg-[#1F66D0] text-white text-center py-2 px-12 rounded-lg pointer">
            Upload
          </button>
        </div>
      </form>

      <div className="pt-8 space-y-12">
        <div className="space-y-2 pt-6">
          <p className="font-light">
            The information provided would be reviewed
          </p>
          <p className="font-medium">Review might take up to 24 hours</p>
        </div>

        <div className=" mx-auto">
          <button
            className="bg-[#B6B1B1] text-center py-2 px-12 rounded-md pointer w-full"
            type="submit"
          >
            Submit
          </button>
        </div>
      </div>
      <div className="flex items-center space-x-5 pt-14">
        <img src="/images/Checkmark.svg" alt="checkmark" />
        <p>Your details have been submitted succesfully</p>
      </div>
    </div>
  );
};

export default Verify;
