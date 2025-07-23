import React from "react";

function MedicalStore() {
  return (
    <div>
      <div className="Hero-content relative flex flex-col pb-16 md:flex-row justify-between items-center bg-primary p-8">
        <div className=" hero-left ml-20 mr-20 mb-10 gap-y-5 justify-center md:mb-0 md:ml-50 md:mr-50 lg:ml-40">
          <h1 className="text-5xl font-medium mt-10 md:mt-0 text-primary">
            Your trusted care now and always
          </h1>
          <p className="text-sm w-80 text-primary mt-2 md:mt-8 ">
            For the best results, align your health needs with your medication
            plan.
          </p>
          <button className=" flex gap-2 mt-6 px-6 py-2 md:mt-8 button-primary rounded-lg cursor-pointer">
            <img src="../images/MedicalStore/bag.png" alt="" />
            Shop Now
          </button>
        </div>
        <div className="hero-right w-full  justify-center items-center ml-10 mr-10 md:mr-40 sm:mr-20 sm:ml-20">
          <img src="../images/MedicalStore/Img-1.png" alt="hero-img" />
        </div>
      </div>
      <div className="">
        <img
          src="../images/Vector.png"
          alt="Card"
          className="absolute hidden sm:flex sm:bottom-45 left-5 w-1/6 sm:w-1/8 opacity-30"
        />
      </div>

      {/* // Shop by category section */}
      <div className="Shop-by-catagory bg-primary-light flex flex-col justify-center items-center ">
        <div>
          <h2 className="text-3xl font-medium text-primary text-center mt-10 mb-5">
            Shop by Category
          </h2>
        </div>

        <div className="card-section flex flex-wrap gap-8 justify-center items-center mt-10 mb-10">
          <div className="card bg-primary-light flex flex-row flex-wrap w-40 h-50 gap-2 justify-center items-center shadow  rounded-lg">
            <div className="flex flex-col justify-center items-center ">
              <img
                src="../images/MedicalStore/sbc-1.png"
                alt="catagory-img"
                className="w-20 h-20 mb-4"
              />
              <h1 className="text-lg text-primary">Medicine</h1>
              <p className="text-sm text-primary-light ">32 Items</p>
            </div>
          </div>
          <div className="card bg-primary-light flex flex-row flex-wrap w-40 h-50 gap-2 justify-center items-center shadow  rounded-lg">
            <div className="flex flex-col justify-center items-center ">
              <img
                src="../images/MedicalStore/sbc-2.png"
                alt="catagory-img"
                className="w-20 h-20 mb-4"
              />
              <h1 className="text-lg text-primary">Health care</h1>
              <p className="text-sm text-primary-light ">20 Items</p>
            </div>
          </div>
          <div className="card bg-primary-light flex flex-row flex-wrap w-40 h-50 gap-2 justify-center items-center shadow  rounded-lg">
            <div className="flex flex-col justify-center items-center ">
              <img
                src="../images/MedicalStore/sbc-3.png"
                alt="catagory-img"
                className="w-20 h-20 mb-4"
              />
              <h1 className="text-lg text-primary">Beauty care</h1>
              <p className="text-sm text-primary-light ">30 Items</p>
            </div>
          </div>
          <div className="card bg-primary-light flex flex-row flex-wrap w-40 h-50 gap-2 justify-center items-center shadow  rounded-lg">
            <div className="flex flex-col justify-center items-center ">
              <img
                src="../images/MedicalStore/sbc-4.png"
                alt="catagory-img"
                className="w-20 h-20 mb-4"
              />
              <h1 className="text-lg text-primary">Fitness</h1>
              <p className="text-sm text-primary-light ">35 Items</p>
            </div>
          </div>
          <div className="card bg-primary-light flex flex-row flex-wrap w-40 h-50 gap-2 justify-center items-center shadow  rounded-lg">
            <div className="flex flex-col justify-center items-center ">
              <img
                src="../images/MedicalStore/sbc-5.png"
                alt="catagory-img"
                className="w-20 h-20 mb-4"
              />
              <h1 className="text-lg text-primary">Lab equipment</h1>
              <p className="text-sm text-primary-light ">25 Items</p>
            </div>
          </div>
          <div className="card bg-primary-light flex flex-row flex-wrap w-40 h-50 gap-2 justify-center items-center shadow  rounded-lg">
            <div className="flex flex-col justify-center items-center ">
              <img
                src="../images/MedicalStore/sbc-6.png"
                alt="catagory-img"
                className="w-20 h-20 mb-4"
              />
              <h1 className="text-lg text-primary">Medkits</h1>
              <p className="text-sm text-primary-light ">40 Items</p>
            </div>
          </div>
        </div>

        {/* // Project section */}

        <div className="products flex flex-col flex-warp md:flex-row max-w-fit justify-center items-center gap-4 mt-10">
          <div className="product-card flex flex-row justify-between items-center bg-white w-100 h-60 rounded-lg p-4">
            <div className=" product-left flex flex-col gap-8 justify-between items-start">
              <button className="brand-btn ">Sanitizer</button>
              <div className="product-text flex flex-col gap-y-2 mt-2">
                <h1 className="text-primary text-2xl">
                  Hand sanitizer collection
                </h1>
                <div className=" flex flex-row gap-2 items-center ">
                  <img src="../images/MedicalStore/Vector.png" alt="" />
                  <p className="text-primary-light-thin-hover underline cursor-pointer hover:text-amber-200">
                    {" "}
                    Shop now{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="product-right justify-center">
              <img
                src="../images/MedicalStore/sbc-project-1.png"
                alt="sbc-p-img"
              />
            </div>
          </div>

          <div className="product-card flex flex-row justify-between items-center bg-white w-100 h-60 rounded-lg p-4">
            <div className=" product-left flex flex-col gap-8 justify-between items-start">
              <button className="brand-btn ">Top deals</button>
              <div className="product-text flex flex-col gap-y-2 mt-2">
                <h1 className="text-primary text-2xl">
                  Face wash sale collection
                </h1>
                <div className=" flex flex-row gap-2 items-center ">
                  <img src="../images/MedicalStore/eye.png" alt="" />
                  <p className="text-primary-light-thin-hover underline cursor-pointer hover:text-amber-200">
                    {" "}
                    Discover now{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="product-right justify-center">
              <img
                src="../images/MedicalStore/sbc-project-2.png"
                alt="sbc-p-img"
              />
            </div>
          </div>

          <div className="product-card flex flex-row justify-between items-center bg-white w-100 h-60 rounded-lg p-4">
            <div className=" product-left flex flex-col gap-8 justify-between items-start">
              <button className="brand-btn ">Face mask</button>
              <div className="product-text flex flex-col gap-y-2 mt-2">
                <h1 className="text-primary text-2xl">
                  Facial mask deals save up to 50%
                </h1>
                <div className=" flex flex-row gap-2 items-center ">
                  <img src="../images/MedicalStore/eye.png" alt="" />
                  <p className="text-primary-light-thin-hover underline cursor-pointer hover:text-amber-200">
                    {" "}
                    Discover now{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="product-right justify-center">
              <img
                src="../images/MedicalStore/sbc-project-3.png"
                alt="sbc-p-img"
              />
            </div>
          </div>
        </div>
      </div>

      {/* // Latest health product section */}
      <div className="latest-health-product bg-primary-light flex flex-col justify-center items-center pb-10 md:pb-20">
        <div>
          <h2 className="text-3xl font-medium text-primary text-center mt-10 mb-10">
            Latest health product
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 flex-warp bg-primary-light justify-center items-center gap-6 mb-10 mt-5">
          <div className="">
            <div className="product-card flex flex-col flex-warp bg-white w-50 h-55 md:w-70 md:h-65 rounded-lg p-4">
              <div className="product-left w-1/2 md:w-full">
                <button className="brand-btn ">New </button>
              </div>
              <div className="product-right flex justify-center items-center">
                <img
                  className="w-1/2 md:w-fit"
                  src="../images/MedicalStore/lhp-1.png"
                  alt="sbc-p-img"
                />
              </div>
            </div>
            <div className="mt-3">
              <h1 className="text-2xl text-primary">Microscope</h1>
              <p className="text-sm text-primary-light ">$45.00 USD</p>
            </div>
          </div>

          <div className="">
            <div className="product-card flex flex-col flex-warp bg-white w-50 h-55 md:w-70 md:h-65 rounded-lg p-4">
              <div className="product-left ">
                <button className="brand-btn ">Save 10% </button>
              </div>
              <div className="product-right flex justify-center items-center">
                <img
                  className="w-4/5 md:w-fit"
                  src="../images/MedicalStore/lhp-2.png"
                  alt="sbc-p-img"
                />
              </div>
            </div>
            <div className="mt-3">
              <h1 className="text-2xl text-primary">Pulse oximeter</h1>
              <div className="text-sm text-primary-light flex gap-2">
                <p className="text-sm text-primary-light ">$19.00 USD</p>
                <p className="text-sm text-primary-light line-through">
                  $19.00 USD
                </p>
              </div>
            </div>
          </div>

          <div className="">
            <div className="product-card flex flex-col flex-warp bg-white w-50 h-55 md:w-70 md:h-65 rounded-lg p-4">
              <div className="product-left ">
                <button className=" "> </button>
              </div>
              <div className="product-right flex justify-center items-center">
                <img
                  className="w-1/2 md:w-fit"
                  src="../images/MedicalStore/lhp-3.png"
                  alt="sbc-p-img"
                />
              </div>
            </div>
            <div className="mt-3">
              <h1 className="text-2xl text-primary">Vitamin serum</h1>
              <div className="text-sm text-primary-light flex gap-2">
                <p className="text-sm text-primary-light ">$20.00 USD</p>
                <p className="text-sm text-primary-light line-through">
                  $30.00 USD
                </p>
              </div>
            </div>
          </div>

          <div className="">
            <div className="product-card flex flex-col flex-wrap  bg-white w-50 h-55 md:w-70 md:h-65 rounded-lg p-4">
              <div className="product-left ">
                <button className="brand-btn ">New </button>
              </div>
              <div className="product-right flex justify-center items-center-safe">
                <img
                  className="w-1/3 md:w-fit"
                  src="../images/MedicalStore/lhp-4.png"
                  alt="sbc-p-img"
                />
                <img
                  className="w-1/5 md:w-1/5"
                  src="../images/MedicalStore/lhp-4.png"
                  alt="sbc-p-img"
                />
              </div>
            </div>
            <div className="mt-3">
              <h1 className="text-2xl text-primary">High protein </h1>
              <p className="text-sm text-primary-light ">$50.00 USD</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center sm:gap-6 md:gap-10 bg-white mb-10 p-4 mt-10 md:mt-15 rounded-lg">
          <div className="md:flex md:gap-3 flex-col md:flex-row justify-center items-center">
            <div className="relative w-fit ">
              <img src="../images/MedicalStore/lhp-down-bg-img.png" alt="Bg" />
              <img
                className="absolute top-1/2 left-1/2 transform -translate-x-4 -translate-y-4"
                src="../images/MedicalStore/lhp-down-1.png"
                alt="credit card"
              />
            </div>
            <div className="flex flex-col justify-center items-start">
              <h1 className="text-lg text-primary">30 Days warranty</h1>
              <p className="text-sm text-primary-light-thin font-light">
                Enjoy peace of mind with warranty
              </p>
            </div>
          </div>

          <div className="md:flex md:gap-3 flex-col md:flex-row justify-center items-center">
            <div className="relative w-fit ">
              <img src="../images/MedicalStore/lhp-down-bg-img.png" alt="Bg" />
              <img
                className="absolute top-1/2 left-1/2 transform -translate-x-4 -translate-y-4"
                src="../images/MedicalStore/lhp-down-2.png"
                alt="credit card"
              />
            </div>
            <div className="flex flex-col justify-center items-start">
              <h1 className="text-lg text-primary">Exchange policy</h1>
              <p className="text-sm text-primary-light-thin font-light">
                You’re satisfied with your purchase
              </p>
            </div>
          </div>

          <div className="md:flex md:gap-3 flex-col md:flex-row justify-center items-center">
            <div className="relative w-fit ">
              <img src="../images/MedicalStore/lhp-down-bg-img.png" alt="Bg" />
              <img
                className="absolute top-1/2 left-1/2 transform -translate-x-4 -translate-y-4"
                src="../images/MedicalStore/lhp-down-3.png"
                alt="credit card"
              />
            </div>
            <div className="flex flex-col justify-center items-start">
              <h1 className="text-lg text-primary">Secure payment</h1>
              <p className="text-sm text-primary-light-thin font-light">
                Shop with confidence every time
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* // Explore Our Store Collection section */}
      <div className="Explore-Our-store-Collection bg-primary flex flex-col justify-center items-center pb-20 ">
        <div>
          <h2 className="text-3xl font-medium text-primary text-center mt-10 mb-10">
            Explore Our store Collection
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 flex-warp  justify-center items-center gap-6 mb-10 mt-5">
          <div className="">
            <div className="product-card flex justify-center items-center bg-white w-50 h-55 md:w-70 md:h-65 rounded-lg p-4">
              <img
                className="w-1/2 md:w-fit"
                src="../images/MedicalStore/eosc-p-1.png"
                alt="sbc-p-img"
              />
            </div>
            <div className="mt-3">
              <h1 className="text-2xl text-primary">B12 medicine</h1>
              <div className="text-sm flex gap-2">
                <p className="text-sm text-primary-light-thin ">$19.00 USD</p>
                <p className="text-sm text-primary-light-thin line-through">
                  $25.00 USD
                </p>
              </div>
            </div>
          </div>

          <div className="">
            <div className="product-card flex justify-center items-center bg-white w-50 h-55 md:w-70 md:h-65 rounded-lg p-4">
              <img
                className="w-1/2 md:w-fit"
                src="../images/MedicalStore/eosc-p-2.png"
                alt="sbc-p-img"
              />
            </div>
            <div className="mt-3">
              <h1 className="text-2xl text-primary">Tonometer</h1>
              <div className="text-sm flex gap-2">
                <p className="text-sm text-primary-light-thin ">$76.00 USD</p>
                <p className="text-sm text-primary-light-thin line-through"></p>
              </div>
            </div>
          </div>
          <div className="">
            <div className="product-card flex justify-center items-center bg-white w-50 h-55 md:w-70 md:h-65 rounded-lg p-4">
              <img
                className="w-1/2 md:w-fit"
                src="../images/MedicalStore/eosc-p-3.png"
                alt="sbc-p-img"
              />
            </div>
            <div className="mt-3">
              <h1 className="text-2xl text-primary">ECG cardiograph</h1>
              <div className="text-sm flex gap-2">
                <p className="text-sm text-primary-light-thin ">$99.00 USD</p>
                <p className="text-sm text-primary-light-thin line-through">
                  $119.00 USD
                </p>
              </div>
            </div>
          </div>

          <div className="">
            <div className="product-card flex justify-center items-center bg-white w-50 h-55 md:w-70 md:h-65 rounded-lg p-4">
              <img
                className="w-1/2 md:w-fit"
                src="../images/MedicalStore/eosc-p-4.png"
                alt="sbc-p-img"
              />
            </div>
            <div className="mt-3">
              <h1 className="text-2xl text-primary">Blood glucose meter</h1>
              <div className="text-sm flex gap-2">
                <p className="text-sm text-primary-light-thin ">$45.00 USD</p>
                <p className="text-sm text-primary-light-thin line-through"></p>
              </div>
            </div>
          </div>

          <div className="">
            <div className="product-card flex justify-center items-center bg-white w-50 h-55 md:w-70 md:h-65 rounded-lg p-4">
              <img
                className="w-1/2 md:w-fit"
                src="../images/MedicalStore/eosc-p-5.png"
                alt="sbc-p-img"
              />
            </div>
            <div className="mt-3">
              <h1 className="text-2xl text-primary">Lab hand gloves</h1>
              <div className="text-sm flex gap-2">
                <p className="text-sm text-primary-light-thin ">$5.00 USD</p>
                <p className="text-sm text-primary-light-thin line-through">
                  $8.00 USD
                </p>
              </div>
            </div>
          </div>
          <div className="">
            <div className="product-card flex justify-center items-center bg-white w-50 h-55 md:w-70 md:h-65 rounded-lg p-4">
              <img
                className="w-1/2 md:w-fit"
                src="../images/MedicalStore/eosc-p-6.png"
                alt="sbc-p-img"
              />
            </div>
            <div className="mt-3">
              <h1 className="text-2xl text-primary">Stethoscope</h1>
              <div className="text-sm flex gap-2">
                <p className="text-sm text-primary-light-thin ">$50.00 USD</p>
                <p className="text-sm text-primary-light-thin line-through">
                  $80.00 USD
                </p>
              </div>
            </div>
          </div>
          <div className="">
            <div className="product-card flex justify-center items-center bg-white w-50 h-55 md:w-70 md:h-65 rounded-lg p-4">
              <img
                className="w-1/2 md:w-fit"
                src="../images/MedicalStore/eosc-p-7.png"
                alt="sbc-p-img"
              />
            </div>
            <div className="mt-3">
              <h1 className="text-2xl text-primary">Inhaler pressure drop </h1>
              <div className="text-sm flex gap-2">
                <p className="text-sm text-primary-light-thin ">$35.00 USD</p>
                <p className="text-sm text-primary-light-thin line-through"></p>
              </div>
            </div>
          </div>
          <div className="">
            <div className="product-card flex justify-center items-center bg-white w-50 h-55 md:w-70 md:h-65 rounded-lg p-4">
              <img
                className="w-1/2 md:w-fit"
                src="../images/MedicalStore/eosc-p-8.png"
                alt="sbc-p-img"
              />
            </div>
            <div className="mt-3">
              <h1 className="text-2xl text-primary">Multi vitamin</h1>
              <div className="text-sm flex gap-2">
                <p className="text-sm text-primary-light-thin ">$20.00 USD</p>
                <p className="text-sm text-primary-light-thin line-through"></p>
              </div>
            </div>
          </div>
        </div>

        <div className="join-section grid md:grid-cols-2 gap-8 md:m-30 md:mb-10">
          <div className="join-img ">
            <img src="../images/MedicalStore/Join-img.png" alt="Join image" />
          </div>
          <div className="join-details flex flex-col bg-white rounded-2xl sm:rounded-lg justify-between items-center ">
            <div className=" w-full mt-15 items-center mb-30">
              <p className="text-2xl text-primary-light text-center">
                Join our newsletter
              </p>
              <h1 className="flex flex-wrap text-5xl font-medium text-primary text-center  md:ml-8 md:mr-8 mt-10 mb-5 ">
                Sign Up for an Instant 15% Discount
              </h1>
            </div>
            <div className="flex flex-row items-center gap-3 sm:gap-4 pb-10  rounded-lg max-w-md ">
              <input
                type="text"
                placeholder="Enter email"
                className="px-5 pr-20 py-2 text-primary text-lg border bg-primary-light border-amber-900 rounded-lg focus:outline-none "
              />
              <button className=" flex flex-row button-primary text-lg text-white border-amber-900 rounded-lg px-8 py-2 cursor-pointer">
                <p>Sign up</p>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="Our-happy-clients bg-primary-light flex flex-col justify-center items-center pb-10 ">
        <div>
          <h2 className="text-3xl font-medium text-primary text-center mt-10 mb-10">
            Our happy clients
          </h2>
        </div>

        <div className=" flex flex-col md:flex-row bg-white rounded-2xl m-5 md:m-30 md:mb-10 md:mt-10 p-10 pt-0 sm:pb-15 sm:pr-20 sm:pt-10">
          <div className="sm:pl-5 sm:mb-10">
            <img
              className=" sm:w-2xs "
              src="../images/MedicalStore/ohc-colon-1.png"
              alt=""
            />
          </div>
          <div className=" md:pt-15">
            <p className="text-primary-light-thin text-lg text-center items-center justify-center">
              I’m so impressed with this online medical store. The product
              selection is extensive and the prices are great. I found
              everything i needed in one place. The ordering process was easy,
              delivery was prompt, and the items arrived in perfect condition.
              Plus, the customer service team was incredibly helpful.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
          <div className="flex flex-col md:flex-row gap-3 w-40 md:w-60 md:h-30 md:justify-start items-center md:pl-5 pt-2 pb-1 md:pb-0 md:pt-0 rounded-2xl border border-transparent hover:border-[#503217] transition-all duration-300">
            <div className="">
              <img src="../images/MedicalStore/ohc-client-1.png" alt="" />
            </div>
            <div className="flex flex-col justify-center items-center sm:items-start">
              <p className="text-primary">James Wilson</p>
              <p className="text-primary-light-thin">Manager</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-3 w-40 md:w-60 md:h-30 md:justify-start items-center md:pl-5 pt-2 pb-1 md:pb-0 md:pt-0 rounded-2xl border border-transparent hover:border-[#503217] transition-all duration-300">
            <div className="">
              <img src="../images/MedicalStore/ohc-client-2.png" alt="" />
            </div>
            <div className="flex flex-col justify-center items-center sm:items-start">
              <p className="text-primary">Henry Adams</p>
              <p className="text-primary-light-thin">CEO</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-3 w-40 md:w-60 md:h-30 md:justify-start items-center md:pl-5 pt-2 pb-1 md:pb-0 md:pt-0 rounded-2xl border border-transparent hover:border-[#503217] transition-all duration-300">
            <div className="">
              <img src="../images/MedicalStore/ohc-client-3.png" alt="" />
            </div>
            <div className="flex flex-col justify-center items-center sm:items-start">
              <p className="text-primary">Ethan Harris</p>
              <p className="text-primary-light-thin">Business manager</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-3 w-40 md:w-60 md:h-30 md:justify-start items-center md:pl-5 pt-2 pb-1 md:pb-0 md:pt-0 rounded-2xl border border-transparent hover:border-[#503217] transition-all duration-300">
            <div className="">
              <img src="../images/MedicalStore/ohc-client-4.png" alt="" />
            </div>
            <div className="flex flex-col justify-center items-center sm:items-start">
              <p className="text-primary">Lily Baker</p>
              <p className="text-primary-light-thin">Product manager</p>
            </div>
          </div>
        </div>
      </div>

      <div className="Our-happy-clients bg-primary-light flex flex-col justify-center items-center pb-20 ">
        <div>
          <h2 className="text-4xl font-medium text-primary text-center mt-10 mb-10">
            Follow us @medifit
          </h2>
        </div>

        <div className="follow-us-images flex flex-row gap-3 sm:gap-5 w-1/5 sm:w-full justify-center">
          <img
            className="rounded-lg"
            src="../images/MedicalStore/follow-us-img-1.png"
            alt=""
          />
          <img
            className="rounded-t-4xl rounded-b-lg h-1/2"
            src="../images/MedicalStore/follow-us-img-2.png"
            alt=""
          />
          <img
            className="rounded-full h-1/2"
            src="../images/MedicalStore/follow-us-img-3.png"
            alt=""
          />
          <img
            className="rounded-b-lg rounded-t-full  h-1/2"
            src="../images/MedicalStore/follow-us-img-4.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default MedicalStore;
