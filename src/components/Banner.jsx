import Image from "next/image";
import React from "react";
import banner from "../assets/images/header-shape.png";
const Banner = () => {
  return (
    <div>
      <div className="pt-5">
        <div className="container-fluid p-lg-0">
          <div className="row m-lg-0 d-flex align-items-center ">
            <div className="col-lg-6 p-lg-0">
              <div className="max-585 ms-auto">
                <div className="header-content">
                  <h1>Best Machine Learning Product Creator</h1>
                  <p>
                    Proin gravida nibh vel velit auctor aliquet. Aenean
                    sollicitudin, lorem quis bibendum auctor, nisi elit
                    consequat ipsum, nec sagittis sem nibh
                  </p>
                  <div className="button-group button-group-animated">
                    <a href="" className="btn main-btn">
                      Get Started
                    </a>
                  
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 p-lg-0">
            <div className="">
          {/* <img src={banner} alt="shape" /> */}
          <Image src={banner} alt="image" />
        </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Banner;
