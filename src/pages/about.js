import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

export default () => (
  <Layout>
    <h1>About Me</h1>
    <p>This is just a simple site to play with Gatsby.</p>
    <Link to="/"><span className="symbol symbol--left">&#9664;</span> back to home</Link>
  </Layout>
);
