import React, { Component } from 'react';

import 'aos/dist/aos.css';
import './fonts.css';
import DefaultPage from 'components/innerComponents/defaultPage';
import Homepage from 'components/innerComponents/HomePage';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <section className='section'>
          <Homepage></Homepage>
          <DefaultPage></DefaultPage>
        </section>
      </div>
    );
  }
}

export default App;
