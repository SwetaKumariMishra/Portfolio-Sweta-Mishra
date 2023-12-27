import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from "react-simple-animate";
import "./style.scss";
import { IoLogoReact } from "react-icons/io5";
import { SiJavascript } from "react-icons/si";
import {
  FaNodeJs,
  FaDatabase,
  FaLinkedin,
  FaInstagramSquare,
  FaFacebook,
  FaGithub,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const personalDetails = [
  {
    label: "Name",
    value: "Sweta Kumari Mishra",
  },
  {
    label: "Age",
    value: "22",
  },
  {
    label: "Address",
    value: "Jorhat, Assam",
  },
  {
    label: "Email",
    value: "mishrasweta1001@gmail.com",
  },
  {
    label: "Contact No",
    value: "+91 7576929227",
  },
];

const jobSummary =
  "Seeking a challenging and rewarding opportunity with an organization of repute which recognizes my true potential and effectively utilizes my excellent technical skills in IT industry Software.";

const About = () => {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />

      <div className="about__content">
        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(-900px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <h3>Front End Developer</h3>
            <p>{jobSummary}</p>
          </Animate>

          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(500px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <h3 className="personalInformationHeaderText">
              Personal Information
            </h3>
            <ul>
              {personalDetails.map((item, i) => (
                <li key={i}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(500px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
          <div className="icons-container">
            <ul>
              <a
                href="https://www.facebook.com/profile.php?id=100015746442071&mibextid=ZbWKwL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li>
                  <FaFacebook
                    size={40}
                    color="var(--yellow-theme-main-color)"
                  />
                </li>
              </a>
              <a
                href="https://www.instagram.com/sweta_mishra476?igsh=OGQ5ZDc2ODk2ZA=="
                target="_blank"
                rel="noopener noreferrer"
              >
                <li>
                  <FaInstagramSquare
                    size={40}
                    color="var(--yellow-theme-main-color)"
                  />
                </li>
              </a>
              <a
                href="https://github.com/SwetaKumariMishra"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li>
                  <FaGithub size={40} color="var(--yellow-theme-main-color)" />
                </li>
              </a>
              <a
                href="https://www.linkedin.com/in/sweta-kumari-mishra-b946051aa/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li>
                  <FaLinkedin
                    size={40}
                    color="var(--yellow-theme-main-color)"
                  />
                </li>
              </a>
              <a
                href="https://x.com/Swetaaaamishraa?t=YYUDCuxZ_oQ9c5ntROQKag&s=09"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li>
                  <FaXTwitter
                    size={40}
                    color="var(--yellow-theme-main-color)"
                  />
                </li>
              </a>
            </ul>
          </div>
          </Animate>
        </div>
        <div className="about__content__servicesWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(600px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <div className="about__content__servicesWrapper__innerContent">
              <div>
                <FaNodeJs size={60} color="var(--yellow-theme-main-color)" />
              </div>
              <div>
                <IoLogoReact size={60} color="var(--yellow-theme-main-color)" />
              </div>
              <div>
                <FaDatabase size={60} color="var(--yellow-theme-main-color)" />
              </div>
              <div>
                <SiJavascript
                  size={60}
                  color="var(--yellow-theme-main-color)"
                />
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};

export default About;
