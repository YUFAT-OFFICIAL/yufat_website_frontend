import React from 'react';

const ServicesSection = () => (
  <div>
    <section className="services_section">

      <div className="main_section_title">
        <div className="main_section_title_bg">
          <img src="./assets/Home-images/services-title-bg.png" alt="services-title-bg" />
        </div>

        <p className="main_section_title_text">SERVICES</p>
      </div>

      <div className="services_cards_container flex justify-space-between">
        <div className="services_card">
          <div className="services_image_box">
            <img src="./assets/Home-images/techLeap-img.png" alt="techLeap" />
          </div>

          <div className="services_text_box">
            <h1 className="services_text_box_title mb-s">TechLeap</h1>
            <p className="services_text_box_par mb-m">
              Educate the next generation with technological
              advancement in Microsoft Packages, Internet Usage
              and Graphic Design providing skills and knowledge
              needed to thrive in the digital era
            </p>

            <a href="services.html">
              <button className="services_btn" type="button">
                Learn More
                <i
                  className="fa fa-arrow-right services_btn_arrow"
                />
              </button>
            </a>
          </div>
        </div>

        <div className="services_card">
          <div className="services_image_box">
            <img src="./assets/Home-images/Bodaboda-img.png" alt="Bodaboda" />
          </div>

          <div className="services_text_box">
            <h1 className="services_text_box_title mb-s">Digital Boda</h1>
            <p className="services_text_box_par mb-m">
              Facilitate accessible computer lessons in
              remote areas and institutions, including primary
              and secondary schools facing challenges
              in accessing computers leaving no community behind
              in the era of technological transformation
            </p>

            <a href="services.html">
              <button className="services_btn" type="button">
                Learn More
                <i
                  className="fa fa-arrow-right services_btn_arrow"
                />
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default ServicesSection;
