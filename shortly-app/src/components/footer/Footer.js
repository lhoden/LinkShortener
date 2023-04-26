import * as React from 'react';
import './Footer.css';
import facebookIcon from '../../images/icon-facebook.svg';
import twitterIcon from '../../images/icon-twitter.svg';
import pinterestIcon from '../../images/icon-pinterest.svg';
import instagramIcon from '../../images/icon-instagram.svg';

function Footer() {
  return (
    <>
      <div className="footer-container">
          <div class='footer-link-wrapper'>
            <a href="#" className="logo">LinkSlice</a>
            <div class='footer-link-items'>
              <h2>Features</h2>
              <a href='/'>Link Shortening</a>
              <a href='/'>Branded Links</a>
              <a href='/'>Analytics</a>
            </div> 
            <div class='footer-link-items'>
              <h2>Resources</h2>
              <a href='/'>Blog</a>
              <a href='/'>Developers</a>
              <a href='/'>Support</a>
            </div> 
            <div class='footer-link-items'>
              <h2>Company</h2>
              <a href='/'>About</a>
              <a href='/'>Our Team</a>
              <a href='/'>Careers</a>
              <a href='/'>Contact</a>
            </div> 
            <img src={facebookIcon} />
            <img src={twitterIcon} />
            <img src={pinterestIcon} />
            <img src={instagramIcon} />
          </div>
      </div>
    </>
  )
}

export default Footer;