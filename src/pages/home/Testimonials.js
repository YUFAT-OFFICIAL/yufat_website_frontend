import React from 'react';

const Testimonials = () => (
  <div>
    <section className="services_section testimonials_section">
      <div className="main_section_title">
        <div className="main_section_title_bg">
          <img src="./assets/Home-images/testimonies-title-bg.png" alt="testimonies" />
        </div>
        <p className="main_section_title_text">TESTIMONIALS</p>
      </div>

      <div className="testimonials_container mySwiper">
        <div className="testimonials_cards_container swiper-wrapper">

          <div className="testimonial_card swiper-slide">

            <div className="testimonial_image">
              <img src="./assets/Home-images/testimonial images/emmanuel bahanuzi-testimonial.png" alt="emmanuel bahanuzi" />
            </div>

            <h1 className="testimonial_name">Emmanuel Bahanuzi</h1>

            <p className="testimonial_description">
              Yufat has been a beacon of light in my life.
              When I had to leave my home country Rwanda due to War,
              I felt lost. Yufat's training in coding and
              Microsoft applications not only gave me a sense
              of purpose but also the tools to secure a stable job.
              Yufat doesn't just teach skills; they restore dignity
              and hope to refugees like me.
            </p>
          </div>

          {/* <div class="testimonial_card swiper-slide">

                <div class="testimonial_image">
                  <img src="./assets/Home-images/testimonial images/kananura deus-testimonial.png"
                   alt="kananura deus" />
                </div>

                <h1 class="testimonial_name">kananura Deus</h1>

                <p class="testimonial_description">
                  Yufat gave me hope when I needed it the most.
                   As a refugee, I had lost everything.
                   But through their computer skills training,
                    I gained a new lease on life. Learning coding
                    and Microsoft applications not only empowered
                    me but also opened doors to job opportunities.
                     Yufat truly changes lives.
                </p>
              </div> */}

          {/* <div class="testimonial_card swiper-slide">
                <div class="testimonial_image">
                  <img src="./assets/Home-images/testimonial images/mwamba-mercy-testimonial.png"
                   alt="mwamba-mercy" />
                </div>

                <h1 class="testimonial_name">Mwamba Mercy</h1>

                <p class="testimonial_description">
                  Yufat is more than just an organization;
                   it's a lifeline for people like me.
                    Yufat taught me coding and Microsoft Word,
                     helping me develop skills that I can use to rebuild my life.
                      I'll forever be grateful to them.
                </p>
              </div> */}

          {/* <div class="testimonial_card swiper-slide">
                <div class="testimonial_image">
                  <img src="./assets/Home-images/testimonial images/uwase nadinah-testimonial.png"
                  alt="uwase nadinah" />
                </div>

                <h1 class="testimonial_name">Uwase Nadinah</h1>

                <p class="testimonial_description">
                  Yufat's commitment to empowering refugees
                  through computer skills is truly remarkable.
                  As a Rohingya refugee, I faced immense adversity,
                  but Yufat's coding courses provided me with a sense of
                  direction and hope for a better future. I now have the
                  skills to pursue a career and contribute to society.
                </p>
              </div> */}

        </div>
        <div className="swiper-button-next testimonial_arrow_icon" />
        <div className="swiper-button-prev testimonial_arrow_icon" />
        <div className="swiper-pagination" />
      </div>
    </section>

    <section className="donate_section">
      <div className="donate_container">
        <p className="donate_text mb-b">Assisting the Displaced and Vulnerable Children with Computer Education</p>
        <button className="btn donate_btn" type="button">DONATE</button>
      </div>
    </section>
  </div>
);

export default Testimonials;
