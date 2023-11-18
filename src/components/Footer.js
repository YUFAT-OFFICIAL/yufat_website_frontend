import React from 'react';

function Footer() {
  return (
    <>
      <footer>
        <div className="sub_footer">
          <div className="footer_logo_column">
            <div className="footer_logo">
              <img src="./assets/Home-images/yufat-logo.png" alt="yufat-logo" />
            </div>
            <p className="footer_column_text">
              Empowering Refugees Through the Power of Technology
            </p>

            <div className="footer_social_links">
              <a href="www.google.com">
                <img src="./assets/Home-images/footer-facebook -icon.png" alt="facebook icon" />
              </a>
              <a href="www.google.com">
                <img src="./assets/Home-images/footer-instagram-icon.png" alt="instagram icon" />
              </a>
              <a href="www.google.com">
                <img src="./assets/Home-images/footer-twitter-icon.png" alt="twitter icon" />
              </a>
            </div>

            <button className="btn donate_btn" type="button">DONATE</button>

          </div>

          <div className="footer_quick_links">
            <h1 className="footer_title">QUICK LINKS</h1>

            <ul className="footer_links">
              <li><a className="footer_link" href="www.google.com">HOME</a></li>
              <li><a className="footer_link" href="www.google.com">ABOUT</a></li>
              <li><a className="footer_link" href="www.google.com">SERVICES</a></li>
              <li><a className="footer_link" href="www.google.com">TEAM</a></li>
              <li><a className="footer_link" href="www.google.com">GALLERY</a></li>
              <li><a className="footer_link" href="www.google.com">CONTACT</a></li>
            </ul>
          </div>

          <div className="footer_contact">
            <h1 className="footer_title">CONTACT</h1>
            <p>
              <i className="fa fa-location-arrow" />
              {' '}
              kyaka II, Kyegegwa
            </p>
            <p>
              <i className="fa fa-phone" />
              +256 760 - 752 - 828
            </p>
            <p>
              <i className="fa fa-envelope" />
              youthunitedyufat@gmail.com
            </p>
          </div>

          <div className="footer_gallery">
            <h1 className="footer_title">GALLERY</h1>
            <div className="footer_images">
              <a href="www.google.com"><img src="./assets/Home-images/Footer-Gallery-1.png" className="footer_images" alt="Gallery1" /></a>
              <a href="www.google.com"><img src="./assets/Home-images/Footer-Gallery-2.png" className="footer_images" alt="Gallery2" /></a>
              <a href="www.google.com"><img src="./assets/Home-images/Footer-Gallery-3.png" className="footer_images" alt="Gallery3" /></a>
              <a href="www.google.com"><img src="./assets/Home-images/Footer-Gallery-4.png" className="footer_images" alt="Gallery4" /></a>
              <a href="www.google.com"><img src="./assets/Home-images/Footer-Gallery-5.png" className="footer_images" alt="Gallery5" /></a>
              <a href="www.google.com"><img src="./assets/Home-images/Footer-Gallery-6.png" className="footer_images" alt="Gallery6" /></a>
              <a href="www.google.com"><img src="./assets/Home-images/Footer-Gallery-7.png" className="footer_images" alt="Gallery7" /></a>
              <a href="www.google.com"><img src="./assets/Home-images/Footer-Gallery-8.png" className="footer_images" alt="Gallery8" /></a>
              <a href="www.google.com"><img src="./assets/Home-images/Footer-Gallery-9.png" className="footer_images" alt="Gallery9" /></a>
            </div>
          </div>
        </div>

        <h2 className="footer_yufat_name title_psuedo">YOUTH UNITED FOR AFRICAN TRANSFORMATION</h2>
      </footer>
    </>
  );
}

export default Footer;
