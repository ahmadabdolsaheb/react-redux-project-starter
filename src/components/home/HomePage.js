import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Adminstration</h1>
        <p>React,Readux</p>
        <link to="about" className= "btn btn-primary btn-lg">Learn more</link>
      </div>
    );
  }
}

export default HomePage;
