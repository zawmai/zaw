import * as React from 'react';
import Layout from '../components/layout';
import navLinkText from '../components/navbar.module.css';

const DemosPage = () => {
  return (
    <Layout pageTitle="Check Out My Demos">
      <p>
        <a href="//demos.zawmai.com/wallbox" targetclassName={navLinkText}>Wallbox</a> - EV Charger E-commerce Store Homepage
        <br/>
        <strong>Tech Used</strong>: Bootstrap, SwiperJS, Node, Nginx, Express
      </p>
      <p></p>
    </Layout>
  );
};

export default DemosPage;