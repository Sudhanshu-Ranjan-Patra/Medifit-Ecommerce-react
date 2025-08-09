import React from "react";

function Home() {
  return (
    <div>
      <div className="Hero-content relative flex flex-col pt-10 md:pt-0 md:flex-row justify-between items-center bg-primary ">
        <div className="hero-left flex flex-col gap-10 max-w-screen justify-center items-center mb-10 md:mb-0 md:ml-60 md:mr-40 lg:ml-40">
          <h1 className="text-5xl font-medium text-primary ml-5">
            From wellness to care all in one place
          </h1>
          <div className="flex flex-row items-end gap-5 ml-5">
            <img
              className="w-1/2 sm:1/2 md:w-fit "
              src="../images/Home/Hero-left.png"
              alt=""
            />
            <div className="">
              <p className="text-sm w-40 sm:60 md:w-80 text-primary mt-2 md:mt-8 ">
                Your health is in good hands with Medifit. We’re here to provide
                you with a wide range of healthcare essentials, carefully
                selected.
              </p>
              <button className=" flex gap-1 mt-6 px-4 py-2 md:mt-8 button-primary rounded-lg cursor-pointer">
                <img src="../images/MedicalStore/bag.png" alt="" />
                Shop Now
              </button>
            </div>
          </div>
        </div>
        <div className="hero-right w-fit sm:hidden md:flex justify-center items-center ">
          <img src="../images/Home/Hero-img.png" alt="hero-img" />
        </div>
      </div>
      <div className="">
        <img
          src="../images/Home/hero-emoji.png"
          alt="Card"
          className="absolute hidden sm:flex sm:top-55 left-25"
        />
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-6 pl-10 gap-4 p-3 sm:p-4 bg-primary-dark">
        <img className="w-1/2" src="../images/Home/Company-logo-1.png" alt="" />
        <img className="w-1/2" src="../images/Home/Company-logo-2.png" alt="" />
        <img className="w-1/2" src="../images/Home/Company-logo-3.png" alt="" />
        <img className="w-1/2" src="../images/Home/Company-logo-4.png" alt="" />
        <img className="w-1/2" src="../images/Home/Company-logo-5.png" alt="" />
        <img className="w-1/2" src="../images/Home/Company-logo-6.png" alt="" />
      </div>

      <div className="our-story-content relative flex flex-col justify-center pb-16 md:flex-row bg-primary-light">
        <div className=" our-story-left mb-10 sm:mt-20 justify-center items-start  md:mb-0 md:ml-40 md:mr-10 lg:ml-40 p-5">
          <h1 className="text-4xl sm:w-xl font-medium mt-5 md:mt-0 text-primary">
            Bringing trusted health solutions to your doorstep focused on
            quality care & reliability
          </h1>
          <p className="text-sm w-80 sm:w-xl text-primary mt-2 md:mt-8 ">
            Our store offers a comprehensive range of pharmaceuticals, health
            and wellness products, and medical supplies to meet the diverse
            needs of our community.
          </p>
          <button className=" flex gap-1 mt-6 px-4 py-2 md:mt-8 button-primary rounded-lg cursor-pointer">
            Our story
            <img src="../images/Home/history.png" alt="" />
          </button>
        </div>
        <div className="our-story-right flex justify-center items-center p-0 w-full sm:hidden md:flex md:w-full md:mt-20 md:mr-40 ">
          <img src="../images/Home/our-story-img.png" alt="hero-img" />
        </div>
      </div>

      <div className="card-section grid grid-cols-2 sm:grid-cols-4 gap-5 bg-primary-light items-center md:px-30 pb-10">
        <div className=" flex flex-row  justify-center items-center ">
          <div className="flex flex-col justify-center items-center ">
            <img
              src="../images/Home/os-item-1.png"
              alt="catagory-img"
              className="mb-5"
            />
            <h1 className="text-lg text-primary">Thoughtfully Made</h1>
          </div>
        </div>
        <div className="flex flex-row  justify-center items-center">
          <div className="flex flex-col justify-center items-center ">
            <img
              src="../images/Home/os-item-2.png"
              alt="catagory-img"
              className="mb-5"
            />
            <h1 className="text-lg text-primary">Non-Toxic Formula</h1>
          </div>
        </div>
        <div className="flex flex-row  justify-center items-center">
          <div className="flex flex-col justify-center items-center ">
            <img
              src="../images/Home/os-item-3.png"
              alt="catagory-img"
              className="mb-5"
            />
            <h1 className="text-lg text-primary">Organic Essentials</h1>
          </div>
        </div>
        <div className="flex flex-row  justify-center items-center">
          <div className="flex flex-col justify-center items-center ">
            <img
              src="../images/Home/os-item-4.png"
              alt="catagory-img"
              className="mb-5"
            />
            <h1 className="text-lg text-primary">Safe for Everyone</h1>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-y-5 md:gap-y-0 bg-primary-light pb-10 md:pb-20 md:pl-30 md:pr-30 lg:pl-40 p-5">
        <div className=" sm:mt-20 justify-center items-start  ">
          <h1 className="text-4xl w-50 font-medium mt-5 md:mt-0 text-primary">
            Discover our collection
          </h1>
          <p className="text-sm w-60 sm:w-80 text-primary mt-2 md:mt-4 ">
            Our medical store offers trusted products easy navigation, and fast
            shipping
          </p>
          <button className=" flex gap-1 mt-6 px-4 py-2 md:mt-15 button-primary rounded-lg cursor-pointer">
            View all products ➤
          </button>
        </div>

        <div className=" sm:mt-20 justify-center items-start  md:mb-0 ">
          <div className="product-card flex flex-col flex-warp bg-white w-50 h-40 md:w-80 md:h-60 rounded-lg p-4">
            <div className="product-right flex justify-center items-center">
              <img
                className="w-auto"
                src="../images/Home/os-doc-p-1.png"
                alt="sbc-p-img"
              />
            </div>
          </div>
          <div className="mt-3">
            <h1 className="text-xl md:text-2xl text-primary">Hair tablets</h1>
            <div className="text-sm flex gap-2">
              <p className="text-sm text-primary-light-thin ">$19.00 USD</p>
              <p className="text-sm text-primary-light-thin line-through">
                $25.00 USD
              </p>
            </div>
          </div>
        </div>

        <div className=" sm:mt-20 justify-center items-start ">
          <div className="product-card flex flex-col flex-warp bg-white w-50 h-40 md:w-80 md:h-60 rounded-lg p-2">
            <div className="product-right flex justify-center items-center ">
              <img
                className="w-2/3 md:w-auto "
                src="../images/Home/os-doc-p-2.png"
                alt="sbc-p-img"
              />
            </div>
          </div>
          <div className="mt-3">
            <h1 className="text-xl md:text-2xl text-primary">
              Pressure  measuring
            </h1>
            <div className="text-sm flex gap-2">
              <p className="text-sm text-primary-light-thin ">$25.00 USD</p>
              <p className="text-sm text-primary-light-thin line-through"></p>
            </div>
          </div>
        </div>

        <div className=" sm:mt-20 justify-center items-start  md:mb-0 ">
          <div className="product-card flex flex-col flex-warp bg-white w-50 h-40 md:w-80 md:h-60 rounded-lg p-4">
            <div className="product-right flex justify-center items-center">
              <img
                className="pt-2 w-2/3 md:w-auto"
                src="../images/Home/os-doc-p-3.png"
                alt="sbc-p-img"
              />
            </div>
          </div>
          <div className="mt-3">
            <h1 className="text-xl md:text-2xl text-primary">Diving mask</h1>
            <div className="text-sm flex gap-2">
              <p className="text-sm text-primary-light-thin ">$40.00 USD</p>
              <p className="text-sm text-primary-light-thin line-through"></p>
            </div>
          </div>
        </div>

        <div className=" sm:mt-20 justify-center items-start  md:mb-0 ">
          <div className="product-card flex flex-col flex-warp bg-white w-50 h-40 md:w-80 md:h-60 rounded-lg p-4">
            <div className="product-right flex justify-center items-center">
              <img
                className="w-auto"
                src="../images/Home/os-doc-p-4.png"
                alt="sbc-p-img"
              />
            </div>
          </div>
          <div className="mt-3">
            <h1 className="text-xl md:text-2xl text-primary">Nebulizer mask</h1>
            <div className="text-sm flex gap-2">
              <p className="text-sm text-primary-light-thin ">$40.00 USD</p>
              <p className="text-sm text-primary-light-thin line-through">
                $50.00 USD
              </p>
            </div>
          </div>
        </div>

        <div className=" sm:mt-20 justify-center items-start  md:mb-0 ">
          <div className="product-card flex flex-col flex-warp bg-white w-50 h-40 md:w-80 md:h-60 rounded-lg p-2">
            <div className="product-right flex justify-center items-center">
              <img
                className="w-1/2 md:w-auto"
                src="../images/Home/os-doc-p-5.png"
                alt="sbc-p-img"
              />
            </div>
          </div>
          <div className="mt-3">
            <h1 className="text-xl md:text-2xl text-primary">
              Temperature gun
            </h1>
            <div className="text-sm flex gap-2">
              <p className="text-sm text-primary-light-thin ">$57.00 USD</p>
              <p className="text-sm text-primary-light-thin line-through">
                $65.00 USD
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="shop-by-category bg-primary flex flex-col justify-center items-center py-5 ">
        <div>
          <h2 className="text-3xl font-medium text-primary text-center mt-10 mb-10">
            Shop by category
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
          <div className="flex flex-row justify-between md:gap-10 w-50 md:w-60 md:h-35 md:justify-start items-center pl-2 md:pl-5 pt-2 pb-1 md:pb-0 md:pt-0 bg-white rounded-2xl border border-transparent hover:border-[#d2cbc4] transition-all duration-300">
            <div className="flex flex-col justify-center items-center">
              <img className="w-1/3" src="../images/Home/heart.png" alt="" />
              <p className="text-primary font-medium">Health care</p>
            </div>
            <div>
              <img className="w-2/3" src="../images/Home/sbc-p-1.png" alt="" />
            </div>
          </div>

          <div className="flex flex-row justify-between md:gap-10 w-50 md:w-60 md:h-35 md:justify-start items-center pl-2 md:pl-5 pt-2 pb-1 md:pb-0 md:pt-0 bg-white rounded-2xl border border-transparent hover:border-[#d2cbc4] transition-all duration-300">
            <div className="flex flex-col justify-center items-center">
              <img className="w-1/3" src="../images/Home/leaf.png" alt="" />
              <p className="text-primary font-medium">Beauty care</p>
            </div>
            <div>
              <img className="w-2/3" src="../images/Home/sbc-p-2.png" alt="" />
            </div>
          </div>

          <div className="flex flex-row justify-between md:gap-10 w-50 md:w-60 md:h-35 md:justify-start items-center pl-2 md:pl-5 pt-2 pb-1 md:pb-0 md:pt-0 bg-white rounded-2xl border border-transparent hover:border-[#d2cbc4] transition-all duration-300">
            <div className="flex flex-col justify-center items-center ">
              <img
                className="w-1/2"
                src="../images/Home/heartbeat.png"
                alt=""
              />
              <p className="text-primary font-medium">Fitness</p>
            </div>
            <div>
              <img className="w-2/3" src="../images/Home/sbc-p-3.png" alt="" />
            </div>
          </div>

          <div className="flex flex-row justify-between md:gap-10 w-50 md:w-60 md:h-35 md:justify-start items-center pl-2 md:pl-5 pt-2 pb-1 md:pb-0 md:pt-0 bg-white rounded-2xl border border-transparent hover:border-[#d2cbc4] transition-all duration-300">
            <div className="flex flex-col justify-center items-center">
              <img className="w-1/2" src="../images/Home/capsule.png" alt="" />
              <p className="text-primary font-medium">Medicine</p>
            </div>
            <div>
              <img className="w-2/3" src="../images/Home/sbc-p-4.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
