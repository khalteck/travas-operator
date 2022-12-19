import React from "react";
import Footer from "../Footer";

export default function Preview() {
  return (
    <>
      <div className="pt-[100px] md:pt-[120px] w-[90%] px-1 mx-auto md:w-full md:mx-0 md:px-[80px] pb-20">
        <div className="flex items-center space-x-4">
          <img className="w-[16px]" src="/images/arrow.svg" alt="arrow" />
          <p>Preview</p>
        </div>

        <p className="font-light pt-10">
          Check through the information you provided, carefully before
          submitting
        </p>
        {/* Grid */}
        <div className="grid grid-cols-2 space-x-9 md:space-x-24 mt-10">
          {/* left grid */}
          <div className="space-y-3">
            <div>
              <h3 className="font-medium">Tour title:</h3>
              <p className="font-light">The Hiking Lord</p>
            </div>
            <div>
              <h3 className="font-medium">Meeting point:</h3>
              <p className="font-light">
                Idere motor park, Ondo state, Nigeria
              </p>
            </div>
            <div>
              <h3 className="font-medium">Duration:</h3>
              <p className="font-light">23 - 26th September 2022</p>
            </div>
            <div>
              <h3 className="font-medium">Maximum:</h3>
              <p className="font-light">80 persons</p>
            </div>
          </div>
          {/* right grid */}
          <div className="space-y-3">
            <div>
              <h3 className="font-medium">Destination:</h3>
              <p className="font-light">
                Idere hills, Idere, Ondo state, Nigeria
              </p>
            </div>
            <div>
              <h3 className="font-medium">Start time:</h3>
              <p className="font-light">8:00 AM</p>
            </div>
            <div>
              <h3 className="font-medium">Price:</h3>
              <p className="font-light">NGN 10,000</p>
            </div>
          </div>
        </div>
        {/* Itinerary */}
        <div className="mt-10">
          <h3 className="font-medium">Itinerary:</h3>
          <p className="font-light pt-4">
            Lorem ispum et tu, Lorem ispum et tu,Lorem ispum et tu, Lorem ispum
            et tu, Lorem ispum et tu, Lorem ispum et tu, Lorem ispum et tu,
            Lorem ispum et tu, Lorem ispum et tu , Lorem ispum et tu, Lorem
            ispum et tu, Lorem ispum et tu, Lorem ispum et tu, Lorem ispum et
            tu, Lorem ispum et tu, Lorem ispum et tu, Lorem ispum et tu, Lorem
            ispum et tu, Lorem ispum et tu, Lorem ispum et tu, Lorem ispum et
            tu, Lorem ispum et tu, Lorem ispum et tu, Lorem ispum et tu, Lorem
            ispum et tu, Lorem ispum et tu, Lorem ispum et tu, Lorem ispum et
            tu, v, Lorem ispum et tu, Lorem ispum et tu, Lorem ispum et tu, v,
            v, Lorem ispum et tu, Lorem ispum et tu, Lorem ispum et tu Read more
          </p>
        </div>

        {/* What to expect */}
        <div className="mt-10">
          <h3 className="font-medium">What to expect:</h3>
          <ul className="font-light pt-4">
            <li>Luxury accomodation</li>
            <li>Tasty snacks and cold drinks</li>
            <li>Interesting knowledgeable and caring guide</li>
          </ul>
        </div>

        {/* Tour photos */}
        <div className="mt-10">
          <h3 className="font-medium">Tour photos</h3>
          <div className="flex items-center flex-wrap gap-4 pt-4 w-[100%]">
            <img src="/images/tour-photo-1.svg" alt="tour" className="" />
            <img src="/images/tour-photo-2.svg" alt="tour" />
            <img src="/images/tour-photo-3.svg" alt="tour" />
            <img src="/images/tour-photo-4.svg" alt="tour" />
            <img src="/images/tour-photo-5.svg" alt="tour" />
            <img src="/images/tour-photo-6.svg" alt="tour" />
          </div>
        </div>

        {/* Guidelines */}
        <div className="mt-10">
          <h3 className="font-medium">Guidelines:</h3>
          <ul className="font-light pt-4">
            <li>Not wheelchair accessable</li>
            <li>Not suitable for pregnant women</li>
          </ul>
        </div>

        {/* Tour guide */}
        <div className="mt-10">
          <h3 className="font-medium">Tour guide</h3>
          <div className="flex items-center space-x-4 pt-4">
            <img src="/images/tour-guide-photo.svg" alt="tour-guide" />
            <div>
              <p className="font-medium">Williams Kennedy</p>
              <p className="font-light">
                A passionate soul, a nature lover, a culture lover and someone
                who just love making people happy.
              </p>
            </div>
          </div>
        </div>

        {/* note div */}
        <div className="md:w-[50%] mx-auto mt-20 border-2 font-light text-sm py-2.5 pl-3 pr-5 space-y-2">
          <p className="font-medium">Note</p>
          <p>
            This tour package would be reviewed before being accepted an the
            Travas touurist platform
          </p>
          <p>This may take up to three(3) working days</p>
        </div>

        {/* Edit and submit button */}
        <div className="flex sm:justify-end justify-between mt-24 space-x-6">
          <button className="text-[#1F66D0] bg-white border border-[#1F66D0] font-semibold px-12 py-3 md:px-24">
            Edit
          </button>
          <button className="bg-[#1F66D0] text-white font-semibold px-12 py-3 md:px-24">
            Submit
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}
