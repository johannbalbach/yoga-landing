import React, { Component } from 'react';

import 'aos/dist/aos.css';
import DefaultPage from 'components/innerComponents/defaultPage';
import Homepage from 'components/innerComponents/HomePage/HomePage';
import Directions from 'components/innerComponents/Directions/Directions';
import Price from 'components/innerComponents/Price/Price';
import Schedule from 'components/innerComponents/Schedule/Schedule';

function App() {
    return (
      <div className='App'>
        <section className='section'>
          <Homepage></Homepage>
          <Directions></Directions>
          <Price></Price>
          <Schedule></Schedule>
          <DefaultPage></DefaultPage>
        </section>
      </div>
    );
}

export default App;
