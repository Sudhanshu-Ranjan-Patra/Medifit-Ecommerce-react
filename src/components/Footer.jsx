import React from "react";

function Footer() {
  return (
    <div>
      <div className="footer-container grid grid-cols-1 sm:grid-cols-3 bg-primary pt-20 pb-10 justify-center items-center md:pl-30 md:pr-30">
        <div className="footer-left hidden sm:flex flex-row justify-center gap-10 ">
          <div className="pages flex flex-col gap-5">
            <h2 className="text-primary text-2xl">Pages</h2>
            <ul className=" text-lg flex flex-col gap-3 ">
              <li className="text-primary-light-thin-hover">Home</li>
              <li className="text-primary-light-thin-hover">Shop</li>
              <li className="text-primary-light-thin-hover">About</li>
              <li className="text-primary-light-thin-hover">Contact</li>
              <li className="text-primary-light-thin-hover">Blog</li>
              <li className="text-primary-light-thin-hover">Privacy policy</li>
              <li className="text-primary-light-thin-hover">FAQs</li>
            </ul>
          </div>
          <div className="utility flex flex-col gap-5">
            <h2 className="text-primary text-2xl">Utility</h2>
            <ul className="text-lg flex flex-col gap-3 ">
              <li className="text-primary-light-thin-hover">Style guide</li>
              <li className="text-primary-light-thin-hover">Instruction</li>
              <li className="text-primary-light-thin-hover">Changelog</li>
              <li className="text-primary-light-thin-hover">Link in bio</li>
              <li className="text-primary-light-thin-hover">Licenses</li>
              <li className="text-primary-light-thin-hover">Error 404</li>
              <li className="text-primary-light-thin-hover">
                Password protected
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-middle flex flex-col gap-5 justify-center items-center">
          <div className="flex flex-row gap-2 ">
            <img
              className="w-full "
              src="../images/medifit-logo.png"
              alt="Medifit Logo"
            />
            <p className="text-6xl text-primary font-medium">Medifit</p>
          </div>
          <div className="text-primary-light-thin text-center w-65">
            We provides the ultimate solution for your online store and all the
            healthcare needs.
          </div>
          <div className="flex flex-row gap-5 ">
            <span className="flex button-primary rounded-lg justify-center items-center text-center w-8 h-8 transition-all duration-300 hover:scale-110 cursor-pointer">
              <img src="../images/MedicalStore/facebook.png" alt="" />
            </span>
            <span className="flex button-primary rounded-lg justify-center items-center text-center w-8 h-8 transition-all duration-300 hover:scale-110 cursor-pointer">
              <img src="../images/MedicalStore/instagram.png" alt="" />
            </span>
            <span className="flex button-primary rounded-lg justify-center items-center text-center w-8 h-8 transition-all duration-300 hover:scale-110 cursor-pointer">
              <img src="../images/MedicalStore/twitter.png" alt="" />
            </span>
            <span className="flex button-primary rounded-lg justify-center items-center text-center w-8 h-8 transition-all duration-300 hover:scale-110 cursor-pointer">
              <img src="../images/MedicalStore/youtube.png" alt="" />
            </span>
          </div>
        </div>

        <div className="footer-right w-60 flex flex-row sm:flex-col m-10  gap-10 md:gap-20 md:ml-20 ">
          <div className="address flex flex-col gap-5">
            <h2 className="text-primary text-2xl">Address</h2>
            <div className="flex flex-row gap-2">
              <img
                src="../images/location-pin.png"
                alt=""
                className="w-fit mb-7 mt-1.5"
              />
              <p className="text-primary-light-thin text-start w-60">
                1640 Parker Rd. Allentown, New Mexico 31134
              </p>
            </div>
          </div>

          <div className="contact flex flex-col gap-5">
            <h2 className="text-primary text-2xl">Contact</h2>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row gap-2">
                <img src="../images/email.png" alt="" className="mb-2 mt-1.5" />
                <p className="text-primary-light-thin text-start">
                  SRP@bhai.com
                </p>
              </div>
              <div className="flex flex-row gap-2">
                <img
                  src="../images/phone-no.png"
                  alt=""
                  className="mb-2 mt-1.5"
                />
                <p className="text-primary-light-thin text-start w-40">
                  (209) 555-0404
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
