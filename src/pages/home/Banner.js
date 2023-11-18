import React from 'react';

const Banner = () => (
  <div>
    <div
      className="banner"
      style={{
        background: 'url(assets/Home-images/header-banner.png)',
        backgroundSize: 'cover',
      }}
    >
      <div className="banner-content">
        <p className="banner-par">EMPOWERING THE NEXT GENERATION</p>
        <h1 className="banner-title mt-s mb-m">Nurturing Youth with High-Quality Computer Proficiency</h1>
        <button className="btn banner-btn" type="button">DONATE</button>
      </div>
      <a href="#welcome-section"><span><i className="fa fa-angle-down banner-down-arrow" /></span></a>
    </div>

    <section id="welcome-section" className="welcome_section">
      <div className="welcome_text_content">
        <h1 className="title_psuedo welcome_title mb-s">WELCOME TO YUFAT</h1>
        <p className="welcome_par">
          YUFAT is a community-based refugee Led organization whose
          specific objective is to equip youth and children
          with quality computer skills that go beyond basic knowledge,
          enabling them to utilize the power of technology and
          actively contribute to the transformation of Africa.
        </p>
      </div>

      <div className="welcome_image_container mb-b">
        <img src="./assets/Home-images/welcome-image.png" alt="welcome" />
      </div>
    </section>
  </div>
);

export default Banner;
