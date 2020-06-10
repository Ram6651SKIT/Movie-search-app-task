import React from 'react';
import { Link } from 'react-router-dom';
import appTitle from '../helpers';

const Jumbotron = props => (
  <section className="jumbotron text-center home-bg">
    <div className="container">
      <div className="row text-center">
        <div className="col-lg-12 homeFont">
          {appTitle}
        </div>
      </div>
      <div className="row text-center">
        <div className="col-lg-12">
          <p className="homeText">
           Movie Search Application 
          </p>
          <br />
        </div>
      </div>
      <div className="row text-center">
        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12" />
        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
          <Link to="/firstTab" className="btn btn-block btn-lg jumboButton">
         First Tab
          </Link>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
          <Link to="/secondtab" className="btn btn-block btn-lg jumboButton">
          Second Tab
          </Link>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12" />
      </div>
    </div>
  </section>
);


export default Jumbotron;
