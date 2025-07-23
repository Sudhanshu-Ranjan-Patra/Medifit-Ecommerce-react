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
            <img className="w-1/2 sm:1/2 md:w-fit " src="../images/Home/Hero-left.png" alt="" />
            <div className="">
              <p className="text-sm w-40 sm:60 md:w-80 text-primary mt-2 md:mt-8 ">
                Your health is in good hands with Medifit. 
                We’re here to provide you with a wide range of healthcare essentials, carefully selected.
              </p>
              <button className=" flex gap-2 mt-6 px-6 py-2 md:mt-8 button-primary rounded-lg cursor-pointer">
                <img src="../images/MedicalStore/bag.png" alt="" />
                Shop Now
              </button>
            </div>
          </div>
        </div>
        <div className="hero-right w-fit  justify-center items-center ">
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
      
    </div>
  );
}

export default Home;
