import React from 'react'
import AboutsecImg from '@/assets/images/feature-shape-1.png'
import Image from 'next/image'
import { FaStar } from 'react-icons/fa'; // Importing an icon from FontAwesome
import { IoIosArrowForward } from "react-icons/io";
function Aboutsec() {
  return (
   <>
   <section className="about-section About-card-ajust bg-off-white pt-60 pb-40 pt-5">
  <div className="container">
    <div className="row align-items-center">
      <div
        className="col-lg-6 pb-30 pt-4"
        data-cues="slideInUp"
        data-duration={800}
      >
        <div className="about-section-item about-item-image text-center">
          {/* <img src={AboutsecImg} alt="shape" /> */}
          <Image src={AboutsecImg} alt='img'/>
        </div>
      </div>
      <div
        className="col-lg-6 pb-30"
        data-cues="slideInDown"
        data-duration={800}
      >
        <div className="about-section-item about-item-details">
          <div className="section-title section-title-left text-start">
            <small>Reliable AI Solutions</small>
            <h2>
              Accelerate Your Digital Transformation with Leading AI and Apps
              with Security Solutions
            </h2>
          </div>
          <div className="about-content">
            <p>
              Our expertise lies in full stack digital engineering, providing
              smart and safe solutions. Enhance your digital experience with our
              state-of-the-art services, guaranteeing a strong and secure future
              for your online business. Elevate your business’s digital journey
              with our cutting-edge services as we ensure satisfactory customer
              experience.
            </p>
            <ul>
              <li>Advance Advisory Team
              <FaStar style={{ position: 'absolute', left: '0', top: '0px', fontSize: '20px', color: '#f16b8e' }} />
              </li>
              <li>Advance Quality Experts
              <FaStar style={{ position: 'absolute', left: '0', top: '0px', fontSize: '20px', color: '#f16b8e' }} />
              </li>
              <li>Many variations of passages
              <FaStar style={{ position: 'absolute', left: '0', top: '0px', fontSize: '20px', color: '#f16b8e' }} />
              </li>
              <li>High-Quality Results
              <FaStar style={{ position: 'absolute', left: '0', top: '0px', fontSize: '20px', color: '#f16b8e' }} />
              </li>
            </ul>
            <p>
              We at Canum Digital prioritize&nbsp;test-driven development,
              ensuring your business security through automated discovery and
              technical advancements. We deliver&nbsp;cost-effective solutions
              with speed and quality as our approach emphasizes zero defects,
              agility, and gives freedom from upfront costs and digital
              constraints.
            </p>
            <a href="about.php">
              <span>View More</span>
              <IoIosArrowForward />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

   </>
  )
}

export default Aboutsec