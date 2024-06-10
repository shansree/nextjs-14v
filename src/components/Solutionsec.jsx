import React from 'react'
import Image from 'next/image';
import service1 from '@/assets/images/service1.png';
import service2 from '@/assets/images/service2.png';
import service3 from '@/assets/images/service3.png';
import service4 from '@/assets/images/service4.png';
import service5 from '@/assets/images/service5.png';
import service6 from '@/assets/images/service6.png';

function Solutionsec() {
  return (
    <>
    <section className="feature-section pt-70 pb-50">
  <div className="container">
    <div className="section-title section-title-lg">
      <small>Reliable AI and Digital Engineering Services</small>
      <h2>Building solutions for speed and scale</h2>
    </div>
    <div className="container">
      <div className="col-12 col-sm-8 m-auto pb-5">
        <div className="about-card">
          <p>Multi-Cloud Solutions using AWS, Google Cloud, and Azure</p>
          <p>
            APIs and pre-trained Models for speed and scale across multiple
            service channels
          </p>
          <p>
            Fully customizable solutions, tailored to fit specific customer
            requirements
          </p>
          <p>Partnership with AI platforms and solutions providers</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 col-lg-4 pb-30">
          <div className="feature-card">
            <div className="feature-card-header">
              <div className="feature-card-thumb feature-card-thumb-green">
                {/* <i class="flaticon-machine-learning-1"></i> */}
                {/* <img src="../assets/images/service1.png" alt="img" /> */}
                <Image src={service1} alt="img" />
              </div>
              <span>Technology Advisory Services</span>
            </div>
            <div className="feature-card-body pb-4 ">
              <p>
                Leverage the full potential of AI, digital and security. We help
                crafting custom blueprint and MVPs for your new business ideas
                or business growth. Realize your business solution and stay
                ahead in the competitive market.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 pb-30">
          <div className="feature-card">
            <div className="feature-card-header">
              <div className="feature-card-thumb feature-card-thumb-yellow">
                {/* <i class="flaticon-voice-recognition"></i> */}
                <Image src={service2} alt="img" />
              </div>
              <span>Rapid Security Evaluation</span>
            </div>
            <div className="feature-card-body  pb-4 ">
              <p>
                Protect your business with our rapid security assessment
                solutions. We identify vulnerabilities and provide actionable
                recommendations to safeguard your data and infrastructure. We
                help to secure your operations promptly and effectively.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 pb-30">
          <div className="feature-card">
            <div className="feature-card-header">
              <div className="feature-card-thumb feature-card-thumb-blue">
                {/* <i class="flaticon-machine-learning"></i> */}
                <Image src={service3} alt="img" />
              </div>
              <span>Fortify your digital infrastructure</span>
            </div>
            <div className="feature-card-body  pb-4 ">
              <p>
                Ensure the robustness of your software ecosystem with our
                comprehensive due-diligence services. We identify potential
                issues in code, design, architecture, practices and processes to
                enhance performance and reliability.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 pb-30">
          <div className="feature-card">
            <div className="feature-card-header">
              <div className="feature-card-thumb feature-card-thumb-green">
                {/* <i class="flaticon-machine-learning-1"></i> */}
                <Image src={service4} alt="img" />
              </div>
              <span>Native Mobile Apps delivery</span>
            </div>
            <div className="feature-card-body  pb-4 ">
              <p>
                Launch feature rich, native mobile applications powered with AI
                for credible user experience. Expand outreach with
                multi-channel, multi-geo apps for target audience, configurable
                releases and operations.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 pb-30">
          <div className="feature-card">
            <div className="feature-card-header">
              <div className="feature-card-thumb feature-card-thumb-blue">
                {/* <i class="flaticon-machine-learning"></i> */}
                <Image src={service5} alt="img" />
              </div>
              <span>Modern Business Applications</span>
            </div>
            <div className="feature-card-body  pb-4 ">
              <p>
                Transform B2B and B2C services with latest technologies. Enhance
                customer experience with automation and integration. Evolve with
                best practices for continuous and reliable business operations.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 pb-30">
          <div className="feature-card">
            <div className="feature-card-header">
              <div className="feature-card-thumb feature-card-thumb-violet">
                {/* <i class="flaticon-processor"></i> */}
                <Image src={service6} alt="img" />
              </div>
              <span>Application Maintenance (L2/L3) Services</span>
            </div>
            <div className="feature-card-body  pb-4 ">
              <p>
                Optimize your business operations with our specialized, tailored
                support, resolving intricate issues and refining performance to
                ensure SLA. Collaborate with us for proficient assistance in
                nurturing and enhancing your critical applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default Solutionsec