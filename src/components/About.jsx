import React from "react";

function About() {
  return (
    <div>
      <div className="bg-primary-light">
        <div className="Hero-content relative flex flex-col md:pt-10 justify-center items-center pt-30 mx-45">
          <div className=" text-center text-primary font-medium text-5xl w-3/5 pt-30">
            Health products you can trust service you deserve
          </div>
          <div className="flex flex-row gap-4 mt-15 ">
            <div>
              <img src="../images/About/About-hero-1.png" alt="pic 1" />
            </div>
            <div>
              <img src="../images/About/About-hero-2.png" alt="" />
            </div>
            <div>
              <img src="../images/About/About-hero-3.png" alt="" />
            </div>
          </div>
          <div className="flex flex-row mt-15 ">
            <div className="text-5xl font-semibold w-1/4 mb-5 text-primary">
              About Us
            </div>
            <div className="text-4xl font-medium  mb-5 text-primary w-4/5 ml-10">
              Our focus is on nurturing wellness and empowering health for all
              ages well being for people worldwide.
            </div>
          </div>

          <div className="grid grid-cols-4 gap-40 mt-15 mb-30 items-center text-center justify-center">
            <div className="flex flex-col gap-5 justify-center items-center">
              <img
                className="w-1/4"
                src="../images/About/About-icon-1.png"
                alt=""
              />
              <p className="text-primary font-medium">Free Shipping</p>
            </div>
            <div className="flex flex-col gap-5 justify-center items-center">
              <img
                className="w-1/4"
                src="../images/About/About-icon-2.png"
                alt=""
              />
              <p className="text-primary font-medium">Online Support</p>
            </div>
            <div className="flex flex-col gap-5 justify-center items-center">
              <img
                className="w-1/4"
                src="../images/About/About-icon-3.png"
                alt=""
              />
              <p className="text-primary font-medium">Fexible payment</p>
            </div>
            <div className="flex flex-col gap-5 justify-center items-center">
              <img
                className="w-1/4"
                src="../images/About/About-icon-4.png"
                alt=""
              />
              <p className="text-primary font-medium">Easy refund</p>
            </div>
          </div>
        </div>

        <div className="Shop-by-category bg-primary flex flex-col justify-center items-start  py-5 pb-20">
          <div className="mx-45 w-110">
            <h2 className="text-3xl font-medium text-primary text-start mt-5 sm:mt-10 mb-10">
              What to Expect When You Join Our Team
            </h2>
          </div>

          <div className="grid grid-cols-3 gap-4 mx-45">
            <div>
              <span className="flex flex-row gap-3 items-center mb-3 ">
                <img src="../images/About/arrow.png" alt="" />
                <p className="text-4xl font-medium text-primary-light-hover text-start">
                  Mission
                </p>
              </span>
              <span className="flex flex-row gap-3 items-center mb-3">
                <img src="../images/About/arrow.png" alt="" />
                <p className="text-4xl font-medium text-primary-light-hover text-start">
                  Commitments
                </p>
              </span>
              <span className="flex flex-row gap-3 items-center mb-3">
                <img src="../images/About/eye.png" alt="" />
                <p className="text-4xl font-medium text-primary-light-hover text-start">
                  Vision
                </p>
              </span>
            </div>
            <div>
              <img src="../images/About/what-to-expect-img.png" alt="" />
            </div>
            <div className="flex items-end text-primary-light-thin text-start  text-sm font-normal mr-10">
              <p>
                We're committed to supporting your health journey by offering
                valuable educational resources, wellness insights, and expert
                advice to help you make informed decisions.
              </p>
            </div>
          </div>
        </div>

        <div className="Hero-content relative flex flex-col md:pt-10 justify-center items-center pt-30 mx-45">  
          
        </div>
      </div>
    </div>
  );
}

export default About;
