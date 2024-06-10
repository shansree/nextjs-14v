"use client";
import Link from "next/link";
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaTelegramPlane } from "react-icons/fa";
import logo from "@/assets/images/logo-main.png";
import Image from "next/image";
import clsx from "clsx";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  return (
    <>
      <div className=" header-bgs">
        <div className="topbar">
          <div className="container">
            <div className="topbar-inner">
              <div className="row justify-content-center justify-content-lg-between">
                <div className="topbar-item topbar-left">
                  <ul className="topbar-list">
                    <li>
                      <FaPhoneAlt />
                      <a href="tel:+91-973-933-9575">+91-973-933-9575</a>
                    </li>
                    <li>
                      <MdEmail />
                      <a href="mailto:info@canuminfotech.com">
                        <span className="__cf_email__" data-cfemail="" />
                        info@canuminfotech.com
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="topbar-item topbar-right">
                  <ul className="topbar-list">
                    <li>
                      <FaTelegramPlane />
                      <a href="contact-menu">Get a Free Quote</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <nav class="navbar navbar-expand-sm  navbar-dark text-dark p-3">
          <div class="container">
            <div className="row w-100">
              <div className="col-lg-3">
                <a class="navbar-brand" href="#">
                  <Image src={logo} alt="image" />
                </a>
                <button
                  class="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapsibleNavbar"
                >
                  <span class="navbar-toggler-icon"></span>
                </button>
              </div>
              <div className="col-lg-9">
                <div
                  class="collapse navbar-collapse justify-content-end"
                  id="collapsibleNavbar"
                >
                  <ul class="navbar-nav">
                    <li class="nav-item">
                      <Link
                        href="/"
                        className={clsx("nav-link", {
                          active: pathname === "/",
                        })}
                      >
                        Home
                      </Link>
                    </li>
                    <li class="nav-item">
                      {/* <Link className="nav-link" href={"/about"}>
                        About
                      </Link> */}
                      <Link
                        href="/about"
                        className={clsx("nav-link", {
                          active: pathname === "/about",
                        })}
                      >
                        About
                      </Link>
                    </li>
                    <li class="nav-item">
                      {/* <Link className="nav-link" href="/service">
                        Service
                      </Link> */}
                      <Link
                        href="/service"
                        className={clsx("nav-link", {
                          active: pathname === "/service",
                        })}
                      >
                        Service
                      </Link>
                    </li>
                    <li class="nav-item">
                      {/* <Link className="nav-link" href={"/blog"}>
                        Blog
                      </Link> */}
                      <Link
                        href="/blog"
                        className={clsx("nav-link", {
                          active: pathname === "/blog",
                        })}
                      >
                        Blog
                      </Link>
                    </li>
                    <li class="nav-item">
                      {/* <Link className="nav-link" href={"/casestudy"}>
                        Case Studies
                      </Link> */}
                      <Link
                        href="/casestudy"
                        className={clsx("nav-link", {
                          active: pathname === "/casestudy",
                        })}
                      >
                        Case Studies
                      </Link>
                    </li>
                    <li class="nav-item">
                      {/* <Link className="nav-link" href={"/contactus"}>
                        Contact Us
                      </Link> */}
                      <Link
                        href="/contactus"
                        className={clsx("nav-link", {
                          active: pathname === "/contactus",
                        })}
                      >
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
