import React from "react";
import "./About.css";
import Award from "../../images/Award.jpg"
import Trophy from "../../images/service-8.jpg"

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src={Trophy}
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
        My name is Vikash Chaudhary.
        </p>
        <p className="a-desc">
        I work as an Senior Software Developer in DXC Technology Bangalore office. In April 2019, I began working at DXC Technology as a Senior Software Developer. I also have a Master degree in Master of Computer Application (MCA) from Bangalore Acharya Institute of Technology.
I'm a Dedicated and efficient full stack developer with 8.5+ year-experience, specialized in developing cutting-edge engineering Technologies such as React.Js, Node.Js, Express.Js, JavaScript, HTML5, CSS3, Angular-10., SQL, C# and .NET
        </p>
        <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">DXC Champs Award Q1 FY2023</h4>
            <p className="a-award-desc">
            DXC Champs Award Q1 FY2023.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
