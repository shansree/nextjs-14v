import React from 'react'
import { IoIosArrowForward } from "react-icons/io";

function Trialsec() {
  return (
    <>
    <section className="trial-section pt-min-100 pb-100  page-bg page-bg-1">
  <div className="container">
    <div
      className="section-title section-title-lg section-title-white mb-0"
      data-cues="slideInUp"
      data-duration={900}
    >
      <h2>Offering a quick call for details on our service</h2>
      <p>Our purpose is to deliver excellence in service and execution.</p>
      <a
        href="contact-menu"
        className="btn main-btn main-btn-white main-btn-rounded-icon"
      >
        Get Started
        <span>
        <IoIosArrowForward />
        </span>
      </a>
    </div>
  </div>
</section>

    </>
  )
}

export default Trialsec