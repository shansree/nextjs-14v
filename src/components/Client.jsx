import React from 'react'
import client1 from '@/assets/images/client1.png'
import client2 from '@/assets/images/client2.png'
import client3 from '@/assets/images/client3.png'
import client4 from '@/assets/images/client4.png'
import client5 from '@/assets/images/client5.png'
import client6 from '@/assets/images/client6.png'
import Image from 'next/image'

function Client() {
  return (
   <>
   <section className="news-section pb-50 pt-5">
  <div className="container">
    <div className="row mx-lg-5 mx-0 align-items-center">
      <div className="col-lg-12">
        <div className="text-center">
          <small className="title_small">Our Clients</small>
          <h2>Trusted Clients of Canum AI</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid
            ullam harum sit. Accusantium veritatis dolore ducimus illum,{" "}
          </p>
        </div>
      </div>
      <div className="col-lg-12">
        <div className="d-flex justify-content-between  align-items-center flex-wrapmob">
          <div>
         
             <Image src={client1} alt='image'  />
          </div>
          {/* <div>
                      <img src="./assets/images/client2.png" class="grayscale" alt="Image 2">
                  </div> */}
          <div>
         
             <Image src={client2} alt='image' />
          </div>
          <div>
           
             <Image src={client3} alt='image' />
          </div>
          <div>
          
             <Image src={client4} alt='image' />
          </div>
          <div>
         
             <Image src={client5} alt='image' />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

   </>
  )
}

export default Client