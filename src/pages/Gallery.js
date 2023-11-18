import React from 'react';

const Gallery = () => (
  <>
    <main>
      <header className="about_header">
        <div
          className="banner about_banner gallery_banner"
          style={{
            background: 'url(assets/Gallery-images/gallery-banner-image.png)',
            backgroundSize: 'cover',
          }}
        >
          <div className="banner-content about_banner_content">
            <h1 className="banner-title mt-s mb-m">GALLERY</h1>
          </div>
        </div>
      </header>

      <section className="gallery_section">
        <div className="grid-container">
          <div className="grid-item grid-item-1">
            <div className="img-container">
              <img src="./assets/Gallery-images/gallery-image-1.png" alt="gallery" />
            </div>

          </div>

          <div className="grid-item grid-item-2">
            <div className="img-container">
              <img src="./assets/Gallery-images/gallery-image-2.png" alt="gallery" />
            </div>
          </div>

          <div className="grid-item grid-item-3">
            <div className="img-container">
              <img src="./assets/Gallery-images/gallery-image-3.png" alt="gallery" />
            </div>
          </div>

          <div className="grid-item grid-item-4">
            <div className="img-container">
              <img src="./assets/Gallery-images/gallery-image-4.png" alt="gallery" />
            </div>
          </div>

          <div className="grid-item grid-item-5">
            <div className="img-container">
              <img src="./assets/Gallery-images/gallery-image-5.png" alt="gallery" />
            </div>
          </div>

          <div className="grid-item grid-item-6">
            <div className="img-container">
              <img src="./assets/Gallery-images/gallery-image-6.png" alt="gallery" />
            </div>
          </div>

          <div className="grid-item grid-item-7">
            <div className="img-container">
              <img src="./assets/Gallery-images/gallery-image-7.png" alt="gallery" />
            </div>
          </div>
        </div>
      </section>
    </main>
  </>
);

export default Gallery;
