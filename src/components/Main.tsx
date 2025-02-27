import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import MainImage from '../assets/images/profile/gsb_resume_profile.jpg'
const Main = () => {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={MainImage} alt="고승범 이모지" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/ssg4262" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>고승범</h1>
          <p>Full Stack 개발자</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/ssg4262" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <p>Phone: 010-4262-5265</p>
        </div>
      </div>
    </div>
  );
}

export default Main;