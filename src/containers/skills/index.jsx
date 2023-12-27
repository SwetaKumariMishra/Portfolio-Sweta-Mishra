// import React, { useState } from "react";
// import {ProgressBarComponent} from '@syncfusion/ej2-react-progressbar'
import { Line } from "rc-progress";
import { AiOutlinePercentage } from "react-icons/ai";
import PageHeaderContent from "../../components/pageHeaderContent";
import { skillsData } from "./utils";
import { Animate, AnimateKeyframes } from "react-simple-animate";
import "./style.scss";


const Skills = () => {

  return (
    <section id="skills" className="skills">
      <PageHeaderContent
        headerText="My Skills"
        icon={<AiOutlinePercentage size={40}/>}
      />

      <div className="skills__content-wrapper">
        {skillsData.map((item, i) => (
          <div key={i} className="skills__content-wrapper__inner-content">
            <Animate
              play
              duration={1}
              delay={0.3}
              start={{
                transform: "translateX(-200px)",
              }}
              end={{
                transform: "translateX(0px)",
              }}
            >
              <div>
                {item.data.map((skillItem, j) => (
                  <AnimateKeyframes
                    play
                    duration={1}
                    keyframes={["opacity : 1", "opacity : 0"]}
                    iterationCount="1"
                  >
                    <div className="progressbar-wrapper" key={j}>
                      <p>{skillItem.skillName} <span className="progressbar-percent">{skillItem.percentage}%</span></p>
                      <Line
                        percent={skillItem.percentage}
                        strokeWidth="1"
                        strokeColor="var(--yellow-theme-main-color)"
                        trailWidth={"2"}
                        strokeLinecap="square"
                      />
                    </div>
                  </AnimateKeyframes>
                ))}
              </div>
            </Animate>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
