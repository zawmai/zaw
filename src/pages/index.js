import * as React from 'react';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Zaw Mai - Home Page">
      <p>Hi Sandra!</p>
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Wall wraffiti of a cat popping out its head from the right side of the wall and saying 'hello'"
        src="https://source.unsplash.com/qHMf-I-JAXo"
      />
      <StaticImage
        alt="Selfie shot of Zaw Mai at Washington Park in Portland, Oregon"
        src="../images/selfie.jpg"
      />
    </Layout>
  );
}

export default IndexPage