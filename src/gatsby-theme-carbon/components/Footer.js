import React from 'react';
import Footer from 'gatsby-theme-carbon/src/components/Footer';
const logoBlack = require('../../images/logo-black.png');

const Content = ({ buildTime }) => (
  <>
    <p>
      Have questions? Email us at{' '}
      <a href="mailto:theprojectpandora@protonmail.com">
        theprojectpandora@protonmail.com
      </a>
    </p>
    <p>
      <span>Last updated: {buildTime}</span>
      <br />
      <span>Copyright © 2021 ProjectPandora</span>
    </p>
  </>
);

const links = {
  firstCol: [],
  secondCol: [],
};

const CustomFooter = () => (
  <Footer
    Logo={() => <img width="100px" src={logoBlack} alt="Pandora logo" />}
    links={links}
    Content={Content}
  />
);

export default CustomFooter;
