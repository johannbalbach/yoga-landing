import React, { Component } from 'react';

import 'aos/dist/aos.css';
import DefaultPage from 'components/innerComponents/defaultPage';
import Homepage from 'components/innerComponents/HomePage/HomePage';
import Directions from 'components/innerComponents/Directions/Directions';

function App() {
    return (
      <div className='App'>
        <section className='section'>
          <Homepage></Homepage>
          <Directions></Directions>
          <DefaultPage></DefaultPage>
        </section>
      </div>
    );
}

export default App;
