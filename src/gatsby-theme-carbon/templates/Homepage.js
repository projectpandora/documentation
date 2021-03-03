import React from 'react';
import { HomepageBanner, HomepageCallout } from 'gatsby-theme-carbon';
import HomepageTemplate from 'gatsby-theme-carbon/src/templates/Homepage';
import { calloutLink } from './Homepage.module.scss';

import Carbon from '../../images/carbon.jpg';

const FirstLeftText = () => <p>Overview</p>;

const FirstRightText = () => (
  <p>
    Pandora is a <strong>reconnaissance platform</strong> for security engineers
    and bug hunters. It supports many useful features for daily activities
    <a className={calloutLink} href="https://platform.projectpandora.xyz">
      Pandora Dashboard →
    </a>
  </p>
);

const SecondLeftText = () => <p>Get integrated?</p>;

const SecondRightText = () => (
  <p>
    You can use our public API to integrate into your current system. If there
    aren't enough to satisfy your need, feel free to <a href="/">contact us</a>.
    <a className={calloutLink} href="https://developers.projectpandora.xyz">
      API Reference →
    </a>
  </p>
);

const BannerText = () => <h1>Project Pandora</h1>;

const customProps = {
  Banner: <HomepageBanner renderText={BannerText} image={Carbon} />,
  FirstCallout: (
    <HomepageCallout
      backgroundColor="#030303"
      color="white"
      leftText={FirstLeftText}
      rightText={FirstRightText}
    />
  ),
  SecondCallout: (
    <HomepageCallout
      leftText={SecondLeftText}
      rightText={SecondRightText}
      color="white"
      backgroundColor="#061f80"
    />
  ),
};

// spreading the original props gives us props.children (mdx content)
function ShadowedHomepage(props) {
  return <HomepageTemplate {...props} {...customProps} />;
}

export default ShadowedHomepage;
