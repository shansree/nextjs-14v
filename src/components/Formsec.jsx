import Image from 'next/image'
import React from 'react'
import contact1 from '@/assets/images/contact1.png'
import contact2 from '@/assets/images/contact2.png'
import contact3 from '@/assets/images/contact3.png'

function Formsec() {
  return (

   <>
  {/* contact section */}
  <section>
    <div className="container ">
      <div className="row mx-lg-5 mx-0 my-md-5 my-0">
        <div className="col-lg-5 py-5 px-3 contact_img_bg  bg-white">
          <div className="d-flex">
        
            <Image src={contact1} className='contact_img ' alt='image' />
            <div>
              <h6>Location</h6>
              <p>HSR Layout Bengaluru, Karnataka, India</p>
            </div>
          </div>
          <hr />
          <div className="d-flex pt-3">
          <Image src={contact2} className='contact_img ' alt='image' />
            <div>
              <h6>Make A Call</h6>
              <p>
                <a href="tel:+91-973-933-9575">+91-973-933-9575</a>
              </p>
            </div>
          </div>
          <hr />
          <div className="d-flex  pt-3">
          <Image src={contact3} className='contact_img ' alt='image' />
            <div>
              <h6>Send A Mail</h6>
              <p>
                <a href="mailto:info@canuminfotech.com">
                  info@canuminfotech.com
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-7 px-lg-5 px-0">
          <h2 className="pb-5 pt-4 pt-lg-0">
            We’d love to hear from you anytime
          </h2>
          <form
            id="myForm"
            className="needs-validation"
            action="submit_form.php"
            method="POST"
            noValidate=""
          >
            <input
              type="hidden"
              name="id"
              defaultValue={1}
              className="form-control input-bg-color"
              id="id"
              required=""
            />
            <div className="row">
              <div className="col-lg-12">
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="form-control input-bg-color"
                    id="name"
                    required=""
                    onkeydown="preventLeadingSpace(event)"
                  />
                  <div className="invalid-feedback">
                    Please provide a valid name.
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="form-control input-bg-color"
                    id="email"
                    required=""
                  />
                  <div className="invalid-feedback">
                    Please provide a valid email address.
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    className="form-control input-bg-color"
                    id="phone"
                    required=""
                  />
                  <div className="invalid-feedback">
                    Please provide a valid phone number.
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="mb-3">
                  <label htmlFor="project" className="form-label">
                    About Project
                  </label>
                  <textarea
                    className="form-control input-bg-color"
                    name="project"
                    id="project"
                    rows={4}
                    required=""
                    onkeydown="preventLeadingSpace(event)"
                    defaultValue={""}
                  />
                  <div className="invalid-feedback">
                    Please provide information about your project.
                  </div>
                </div>
              </div>
            </div>
            <button type="button" className="message_btn">
              Send Message <i className="icofont-telegram ps-3" />
            </button>
          </form>
          <div></div>
        </div>
      </div>
    </div>
  </section>
  {/* contact section */}
</>

   
  )
}

export default Formsec