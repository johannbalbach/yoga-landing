import React, { Component } from 'react';

import 'aos/dist/aos.css';
import Homepage from 'components/innerComponents/HomePage/HomePage';
import Directions from 'components/innerComponents/Directions/Directions';
import Price from 'components/innerComponents/Price/Price';
import Schedule from 'components/innerComponents/Schedule/Schedule';
import Experts from 'components/innerComponents/Experts/Experts';
import Feedback from 'components/innerComponents/Feedback/Feedback';
import FAQ from 'components/innerComponents/Faq/Faq';
import Contacts from 'components/innerComponents/Contacts/Contacts';
import Footer from 'components/innerComponents/Contacts/Footer';

function App() {
    return (
      <div className='App'>
        <section className='section'>
          <Homepage></Homepage>
          <Directions></Directions>
          <Price></Price>
          <Schedule></Schedule>
          <Experts></Experts>
          <Feedback></Feedback>
          <FAQ></FAQ>
          <Contacts></Contacts>
          <Footer></Footer>
        </section>
      </div>
    );
}

export default App;
