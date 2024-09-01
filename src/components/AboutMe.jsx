import React from 'react';
import profilePic from '../assets/Me.jpg'; // Replace with the path to your professional picture

function AboutMe() {
  return (
    <div className="about-me">
      <img src={profilePic} alt="Alton Andrews" className="profile-pic" />
      <p>
        Hi, I'm Alton Andrews, a full stack student currently in my fifth trimester. I specialize in both front-end and back-end development, with a strong preference for working with React, Node.js, and Express. After graduating, I aspire to start my own dynamic application company where I plan to create App's that will make a difference in the lives of the users.
        <br />
        Outside of school, I own and operate my own food truck business, I love spending time with my wife and kids, and I'm a huge sneaker head. I am also a UI/UX designer that specializes in business branding and web design.
      </p>
    </div>
  );
}

export default AboutMe;
