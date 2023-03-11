import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import ScrollToTop from "../ScrollToTop";
import Loader from "./Loader";

const AddTourGuide = ({
  showLoader,
  handleTourGuideInputChange,
  handlePhotoChange,
  handleTourGuideIdChange,
  handleTourGuideSubmit,
  tourGuideformData,
  displaProfileImage,
}) => {
  return (
    <>
      {showLoader && <Loader />}
      <div className="pt-[70px] pb-48 w-[90%] mx-auto sm:w-full md:pt-[100px] md:mx-0 md:pl-[80px]">
        <Link to="/tour-guide">
          <div className="flex items-center space-x-4 mb-4">
            <img src="/images/arrow.svg" alt="arrow" className="w-8 h-5" />
            <p>Back</p>
          </div>
        </Link>

        <h2 className="text-[1.5rem] text-center mb-6 font-bold">
          Tour Guide Registration
        </h2>

        <form className="w-full sm:w-[600px] space-y-12 mx-auto">
          <div className="space-y-2 pt-5 ">
            <h3 className="font-medium">Tour guide details</h3>
            <p className="font-light">
              Please provide some necessary information of your tour guide
            </p>
            <p className="font-medium">
              This is a compulsory step before being able to create tour package
            </p>
          </div>
          {/* name */}
          <div className="space-y-3">
            <input
              id="fullName"
              className="login-input"
              type="text"
              placeholder="Full name"
              onChange={handleTourGuideInputChange}
            />
            <label
              className="block font-light text-[.75rem]"
              htmlFor="full-name"
            >
              This would be visible by tourists on the Travas tourist’s platform{" "}
            </label>
          </div>
          <div className="space-y-3">
            <div className="">
              <h3 className="font-medium">Bio</h3>
              <p className="font-light">
                Provide a short bio of your tour guide
              </p>
              <p className="font-light">
                Your Tour guide’s bio influences the chances of your tour
                package being booked
              </p>
            </div>
            <div className="space-x-3 flex">
              <textarea
                id="bio"
                className="w-full h-[200px] bg-[#F5F5F5] text-black text-opacity-50 pl-4 py-2.5 focus:outline-none rounded-sm"
                placeholder="Short bio"
                onChange={handleTourGuideInputChange}
              />
            </div>
          </div>

          {/* profile photo*/}
          <div>
            <div className="">
              <h3 className="font-medium">Profile photo</h3>
            </div>

            <div className="mt-3">
              <div className="w-full rounded-sm border p-2">
                {displaProfileImage && (
                  <img
                    src={displaProfileImage}
                    alt="selected"
                    className="w-[120px] h-[120px] object-cover rounded-full mb-3"
                  />
                )}
                <input
                  id="profileImage"
                  className="custom-file-input"
                  type="file"
                  placeholder="Upload ID"
                  accept="image/*"
                  onChange={handlePhotoChange}
                />
                {/* <p>{.idImage?.name}</p> */}
              </div>
              <label
                className="block font-light text-[.75rem]"
                htmlFor="full-name"
              >
                This would be visible by tourists on the Travas tourist’s
                platform{" "}
              </label>
            </div>
            {/* <button className="bg-[#B6B1B1] text-center py-2 px-12 rounded-lg pointer">
              Upload
            </button> */}
          </div>

          {/* Business/Company details form */}
          <div>
            <div className="space-y-2">
              <h3 className="font-medium">Means of identification</h3>
              <p className="font-light">
                Provide a valid means of identification of your tour guide
              </p>
              <p className="font-light">
                Any of Drivers license, National Identity Card, Voters Card
              </p>
            </div>

            {/* means of identification */}
            <div className="space-y-8 mt-3">
              <div className="w-full rounded-sm border p-2 block sm:flex justify-start items-center gap-2">
                <input
                  id="tourGuideIdImage"
                  className="custom-file-input"
                  type="file"
                  placeholder="Upload ID"
                  accept="image/*"
                  onChange={handleTourGuideIdChange}
                />
                <p>{tourGuideformData.tourGuideIdImage?.name}</p>
              </div>
            </div>
          </div>

          <div className="space-y-12">
            <div className="space-y-2">
              <p className="font-light">
                The information provided would be reviewed
              </p>
              <p className="font-medium">Review might take up to 24 hours.</p>
            </div>

            <div className=" mx-auto">
              <button
                onClick={handleTourGuideSubmit}
                className="bg-[#B6B1B1] text-center py-2 px-12 rounded-md pointer w-full"
                type="submit"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default AddTourGuide;
