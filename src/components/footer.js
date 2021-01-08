import React from 'react';
import styled from '@emotion/styled';

const SiteFooter = styled('footer')`
  background-color: #00233f;
  padding: .5rem calc((100vw - 550px) / 2);
  margin-top: auto;
  * {
    color: #fff;
    font-size: .8rem;
  }
`;

const Footer = () => {
  return (
    <SiteFooter>
      <p>&#9733; This is a footer.</p>
    </SiteFooter>
  )
}

export default Footer;
