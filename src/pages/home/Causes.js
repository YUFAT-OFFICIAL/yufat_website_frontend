import React from 'react';

const Causes = () => (
  <div>
    <section className="causes_section pt-b">
      <h1 className="title_psuedo section_title causes_title">CAUSES</h1>
      <div className="causes_card_container flex justify-space-between">
        <div className="causes_card">
          <h3 className="causes_card_title mb-s">Computer Literacy</h3>
          <p className="causes_card_text">
            YUFAT's focus on training in
            Microsoft
            packages, internet usage, graphics design, and
            Computer Aided Learning (CAL) promotes computer
            literacy. This is essential in a world where
            technology plays an increasingly significant role
            in various aspects of life
          </p>
        </div>

        <div className="causes_card">
          <h3 className="causes_card_title mb-s">Supporting Refugee Settlements</h3>
          <p className="causes_card_text">
            YUFAT's presence and initiatives, particularly
            in Kyaka II refugee settlement, provide support and
            educational opportunities to refugee communities. This
            support helps enhance their resilience, integration,
            and overall well-being
          </p>
        </div>
      </div>
    </section>
  </div>
);

export default Causes;
