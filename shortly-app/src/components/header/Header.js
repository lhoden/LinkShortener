import * as React from 'react';
import "./Header.css";
import Button from '@mui/material/Button';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      openNav: false,
      isMobile: false,
    }
  }
  
  // componentDidMount() {
  //   window.addEventListener("resize", this.resize.bind(this));
  //   this.resize();
  // }

  // resize() {
  //     this.setState({isMobile: window.innerWidth <= 760});
  //     var element = document.getElementById('nav');
  //     if (this.state.isMobile) {
  //       if (this.state.openNav) {
  //         element.style.display = 'block';
  //       } else {
  //         element.style.display = 'none';
  //       }
  //     } else {
  //       element.style.display = 'flex';
  //     }
  // }

  // componentWillUnmount() {
  //     window.removeEventListener("resize", this.resize.bind(this));
  // }

  toggleNav = () => {
    this.setState({openNav: !this.state.openNav});
  }

  render() {
    console.log('open nav', this.state.openNav);
    return (
      <>
        <div className="header">
            <a href="#" className="logo">LinkSlice</a>
            <svg viewBox="0 0 100 80" width="40" height="40" class="menuIcon" fill="#BBBAC0" onClick={this.toggleNav}>
              <rect width="100" height="10"></rect>
              <rect y="30" width="100" height="10"></rect>
              <rect y="60" width="100" height="10"></rect>
            </svg>
            <div className="navigation">
              <ul>
                  <li><a href="#">Features</a></li>
                  <li><a href="#">Pricing</a></li>
                  <li><a href="#">Resources</a></li>
              </ul>
              <ul class="login">
                  <hr className="divider"></hr>
                  <li><a href="#">Login</a></li>
                  <li><Button variant="contained" sx={{borderRadius: 50}}>Sign Up</Button></li>
              </ul>
            </div>
        </div>
    </>
    )
  }
}

export default Header;