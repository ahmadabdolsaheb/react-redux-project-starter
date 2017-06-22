import React from 'react';
import {Link} from 'react-router';

class AboutPage extends React.Component {
  render() {
    return (
      <div >
        <h1>About</h1>
        <p>about page</p>
        <link to="/" className= "btn btn-primary btn-lg">HomePage</link>
      </div>
    );
  }
}

export default AboutPage;
