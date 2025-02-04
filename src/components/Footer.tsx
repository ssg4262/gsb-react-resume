import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

const Footer = ()=> {
  return (
    <footer>
      <div>
        <a href="https://github.com/ssg4262" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      <p>A portfolio built by <a href="https://https://github.com/ssg4262" target="_blank" rel="noreferrer">고승범</a></p>
    </footer>
  );
}

export default Footer;