import React from 'react';

import Header from '../partials/Header';
import LiteHero from '../partials/LiteHero';
import PressLogos from '../partials/PressLogos';
import Features from '../partials/Features';
import Features02 from '../partials/Features02';
import Pricing from '../partials/Pricing';
import Testimonials from '../partials/Testimonials';
import Resources from '../partials/Resources';
import Cta from '../partials/Cta';
import Footer from '../partials/Footer';
import LiteWhat from '../partials/LiteWhat';
import LiteProfit from '../partials/LiteProfit';
import LiteToken from '../partials/LiteToken';
import LiteTokennomic from '../partials/LiteTokennomic';
import LiteKmt from '../partials/LiteKmt';
import LiteBurn from '../partials/LiteBurn';

function Litepaper() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow">

        {/*  Page sections */}
        <LiteHero/>
        {/* <Pricing />
        <Features /> */}
        <LiteWhat />
        <LiteProfit />
        <LiteToken />
        <LiteTokennomic />
        <LiteKmt/>
        {/* <LiteBurn/> */}
        {/* <Testimonials /> */}
        {/* <PressLogos /> */}

        {/* <Resources /> */}


        {/* <Cta /> */}


      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default Litepaper;