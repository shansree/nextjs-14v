import React from "react";
import Image from "next/image";
import ai1 from "@/assets/images/ai1.png";
import ai2 from "@/assets/images/ai2.png";
import ai3 from "@/assets/images/ai3.png";
import ai4 from "@/assets/images/ai4.png";
import ai5 from "@/assets/images/ai5.png";
import ai6 from "@/assets/images/ai6.png";
import ai7 from "@/assets/images/ai7.png";
// import ai1 from '@/assets/images/ai1.png';

function Aisection() {
  return (
    <>
      <section className="service-section bg-light-blue position-relative ">
        <div className="container  pt-5 pb-5 ">
          <div className="section-title section-title-lg">
            <span>Pushing Boundaries of Whats Possible</span>

            <h2>Supercharging Customer Experience with AI</h2>
          </div>
          <div className="row ">
            <div className="col-md-6 col-lg-4 pb-30">
              <div className="service-card">
                <div className="service-card-thumb">
                  <Image src={ai1} alt="ai" />
                </div>
                <div className="service-card-body pt-3">
                  <h3>Interactive Chat Assistants</h3>
                  <p>
                    Enhance customer engagement with intelligent chatbots with
                    conversational intelligence for customer engagements.
                    Natural language processing for trading and commerce, Jobs
                    and education portals.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 pb-30">
              <div className="service-card">
                <div className="service-card-thumb">
                  <Image src={ai2} alt="ai" />
                </div>
                <div className="service-card-body pt-3">
                  <h3>AI for Analytics and Reporting</h3>
                  <p>
                    Unlock insights with predictive analytics, data intelligence
                    and reporting dashboards. Data-driven decision enablers for
                    retail brands, fintech startups, and manufacturing
                    companies.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 pb-30">
              <div className="service-card">
                <div className="service-card-thumb">
                  <Image src={ai3} alt="ai" />
                </div>
                <div className="service-card-body pt-3">
                  <h3>Visual recognition for KYC</h3>
                  <p>
                    Streamlining operations with advanced recognition of images
                    and videos. Secure access. Faster customer onboarding, API
                    based multi-channel integration.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 pb-30">
              <div className="service-card">
                <div className="service-card-thumb">
                  <Image src={ai4} alt="ai" />
                </div>
                <div className="service-card-body pt-3">
                  <h3>Autopilot Customer Services</h3>
                  <p>
                    AI-powered customer support for handling inquiries with
                    interactive response, rich customer platforms with automated
                    services provisioning.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 pb-30">
              <div className="service-card">
                <div className="service-card-thumb">
                  <Image src={ai5} alt="ai" />
                </div>
                <div className="service-card-body pt-3">
                  <h3>Fraud Discovery and Prevention</h3>
                  <p>
                    Apply AI-powered fraud discovery, recommendations and
                    forecasts, detect suspicious activities to prevent
                    unauthorized access, deep learning for identifying
                    fraudulent patterns.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 pb-30">
              <div className="service-card">
                <div className="service-card-thumb">
                  <Image src={ai6} alt="ai" />
                </div>
                <div className="service-card-body pt-3">
                  <h3>AI-powered Cybersecurity</h3>
                  <p>
                    AI cybersecurity solutions for real-time threat detection
                    and response, Integrate with enterprise security platforms
                    and tools for advanced protection.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 pb-30">
              <div className="service-card">
                <div className="service-card-thumb">
                  <Image src={ai7} alt="ai" />
                </div>
                <div className="service-card-body pt-3">
                  <h3>AI Solution Architecture</h3>
                  <p>
                    Building scalability to sustain usage demands with multiple
                    deployment options, cluster integration, third-party
                    connectivity, connectors for audit and processing
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 pb-30">
              <div className="service-card">
                <div className="service-card-thumb">
                  <Image src={ai4} alt="ai" />
                </div>
                <div className="service-card-body pt-3">
                  <h3>Real-time risk and compliance</h3>
                  <p>
                    Stay ahead with real-time compliance and risk dashboard.
                    Automate workflows with AI-powered monitoring and
                    visualization for enterprise wide actionable insights.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 pb-30">
              <div className="service-card">
                <div className="service-card-thumb">
                  <Image src={ai5} alt="ai" />
                </div>
                <div className="service-card-body pt-3">
                  <h3>Robust connected DataOps with AI</h3>
                  <p>
                    Easy interface for multi-format data ingestion, processing,
                    workflow automation, backup and recovery for business
                    continuity
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Aisection;
