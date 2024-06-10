import Image from 'next/image';
import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import logo from '@/assets/images/logo-main.png'
function Footer() {
  return (
    <>
    <footer className="bg-light-blue  footer">
  {/* <div class="footer-shapes">
          <div class="footer-shape">
              <img src="./assets/images/shape-1.png" alt="shape">
          </div>
          <div class="footer-shape footer-round-shape">
              <img src="./assets/images/shape-2.png" alt="shape">
          </div>
      </div> */}
  <div className="footer-upper pt-5 pb-5 ">
    <div className="container">
      <div
        className="row   mx-0"
        data-cues="slideInUp"
        data-duration={800}
      >
        <div className="col-sm-12 col-md-6 col-lg-3">
          <div className="footer-content-item">
            <div className="footer-logo">
              <a href="index.php">
              <Image
        src={logo}
        alt="image"/>
              </a>
            </div>
            <div className="footer-details">
              <p>
                We prioritize safeguarding your data, meeting regulatory
                standards, and staying ahead of technological advancements to
                ensure a seamless and secure digital experience.
              </p>
              <ul className="social-list social-list-btn">
                <li>
                  <a href="https://www.facebook.com/" target="_blank">
                  <FaFacebookF />
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/918105765335" target="_blank">
                  <FaWhatsapp />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/" target="_blank">
                  <FaInstagram />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/canumdigital/"
                    target="_blank"
                  >
                  <FaLinkedin />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-6 col-lg-2">
          <div className="footer-content-list footer-content-item desk-pad-left-70">
            <div className="footer-content-title">
              <h3>Useful Links</h3>
            </div>
            <ul className="footer-details footer-list">
              <li>
                <a href="about">About Us</a>
              </li>
              <li>
                <a href="blog">Blogs</a>
              </li>
              <li>
                <a href="service">Services</a>
              </li>
              <li>
                <a href="product">Product</a>
              </li>
              <li>
                <a href="contact-menu">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-sm-6 col-md-6 col-lg-4">
          <div className="footer-content-list footer-content-item desk-pad-left-70">
            <div className="footer-content-title">
              <h3>Services</h3>
            </div>
            <ul className="footer-details footer-list">
              <li className="">
                <a
                  href="<?= BASEURL ?>service-details?slug=architecture-consulting"
                  className="nav-link <?= ($fileName == 'service-details.php?slug=architecture-consulting') ? 'active' : '' ?>"
                >
                  Architecture Consulting
                </a>
              </li>
              <li className="">
                <a
                  href="<?= BASEURL ?>service-details?slug=ux-and-system-design"
                  className="nav-link <?= ($fileName == 'service-details.php?slug=ux-and-system-design') ? 'active' : '' ?>"
                >
                  UX and System Design
                </a>
              </li>
              <li className="">
                <a
                  href="<?= BASEURL ?>service-details?slug=ai-powered-apps"
                  className="nav-link <?= ($fileName == 'service-details.php?slug=android-and-ios-apps') ? 'active' : '' ?>"
                >
                  AI-Powered Apps
                </a>
              </li>
              <li className="">
                <a
                  href="<?= BASEURL ?>service-details?slug=ai-powered-apps"
                  className="nav-link <?= ($fileName == 'service-details.php?slug=android-and-ios-apps') ? 'active' : '' ?>"
                >
                  Android And IOS Apps
                </a>
              </li>
              <li className="">
                <a
                  href="<?= BASEURL ?>service-details?slug=security-assessment"
                  className=" <?= ($fileName == 'service-details.php?slug=security-assessment') ? 'active' : '' ?>"
                >
                  Security Assessment details
                </a>
              </li>
              <li className="">
                <a
                  href="<?= BASEURL ?>service-details?slug=penetration-testing"
                  className="nav-link <?= ($fileName == 'service-details.php?slug=penetration-testing') ? 'active' : '' ?>"
                >
                  Penetration Testing details
                </a>
              </li>
              <li className="">
                <a
                  href="<?= BASEURL ?>service-details?slug=compliance-automation"
                  className="nav-link <?= ($fileName == 'service-details.php?slug=compliance-automation') ? 'active' : '' ?>"
                >
                  Compliance Automation details
                </a>
              </li>
              <li className="">
                <a
                  href="<?= BASEURL ?>service-details?slug=security-operations"
                  className="nav-link <?= ($fileName == 'service-details.php?slug=security-operations') ? 'active' : '' ?>"
                >
                  Security Operations details
                </a>
              </li>
              <li className="">
                <a
                  href="<?= BASEURL ?>service-details?slug=devOps-automation"
                  className="nav-link <?= ($fileName == 'service-details.php?slug=devOps-automation') ? 'active' : '' ?>"
                >
                  DevOps Automation
                </a>
              </li>
              <li className="">
                <a
                  href="<?= BASEURL ?>service-details?slug=test-automation"
                  className="nav-link <?= ($fileName == 'service-details.php?slug=test-automation') ? 'active' : '' ?>"
                >
                  Test Automation
                </a>
              </li>
              <li className="">
                <a
                  href="<?= BASEURL ?>service-details?slug=performance-and-load-testing"
                  className="nav-link <?= ($fileName == 'service-details.php?slug=performance-and-load-testing') ? 'active' : '' ?>"
                >
                  Performance and Load Testing
                </a>
              </li>
              <li className="">
                <a
                  href="<?= BASEURL ?>service-details?slug=managed-services"
                  className="nav-link <?= ($fileName == 'service-details.php?slug=managed-services') ? 'active' : '' ?>"
                >
                  Managed Services
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-sm-6 col-md-6 col-lg-3">
          <div className="footer-content-list footer-content-item desk-pad-left-70">
            <div className="footer-content-title">
              <h3>Contact Us</h3>
            </div>
            <div className="footer-details footer-address">
              <div className="footer-address-item">
                <div className="footer-address-text">
                  <h4>Location</h4>
                  <p>HSR Layout Bengaluru, Karnataka, India</p>
                </div>
              </div>
              <div className="footer-address-item">
                <div className="footer-address-text">
                  <h4>Phone:</h4>
                  <p>
                    <a href="tel:+91-973-933-9575">+91-973-933-9575</a>
                  </p>
                </div>
              </div>
              <div className="footer-address-item">
                <div className="footer-address-text">
                  <h4>Email:</h4>
                  {/* <p><a href="/cdn-cgi/l/email-protection#9cf5f2faf3dcf9eee9f8f9e4b2fff3f1"><span class="__cf_email__" data-cfemail="94fdfaf2fbd4f1e6e1f0f1ecbaf7fbf9">[email�&nbsp;protected]</span></a></p> */}
                  <p>
                    <a href="mailto:info@canuminfotech.com">
                      info@canuminfotech.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="footer-lower bg-blue position-relative">
    <div className="container">
      <div className="footer-copyright-text footer-copyright-text-white">
        <p>
          Copyright ©2024 <span className="Read_btn">CanumAI</span>
        </p>
      </div>
    </div>
  </div>
</footer>

    </>
  )
}

export default Footer