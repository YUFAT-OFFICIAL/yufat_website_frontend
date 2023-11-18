import React from 'react';
import Servicestech from './Servicestech';

function Services() {
  return (
    <>
      <main>
        <header className="about_header">
          <div
            className="banner about_banner services_banner"
            style={{
              background: 'url(assets/Services-images/services-header-title.png)',
              backgroundSize: 'cover',
            }}
          >
            <div className="banner-content about_banner_content">
              <h1 className="banner-title mt-s mb-m">SERVICES</h1>
            </div>
          </div>
        </header>
        <Servicestech />
      </main>
    </>
  );
}

export default Services;
