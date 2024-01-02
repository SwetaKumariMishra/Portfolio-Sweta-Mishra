import React from "react";
import { AiOutlineDownload } from "react-icons/ai";
import {MdWork} from 'react-icons/md'
import PageHeaderContent from "../../components/pageHeaderContent";
import { data } from "./utils";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import './style.scss'
// import {Sweta_pdf} from '../../../public/Sweta_Mishra.pdf';

const PDF_FILE_URL = "E:/My Portfolio/portfolio-project/public/Sweta_Mishra.pdf";

// const PDF_FILE_URL = "Sweta_Mishra.pdf";

const Resume = () => {
  const downloadFileAtURL = (url)=>{
    const fileName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  }
  return (
    <section id="resume" className="resume">
      <PageHeaderContent
        headerText="My Resume"
        icon={<AiOutlineDownload size={40} onClick={()=>{downloadFileAtURL(PDF_FILE_URL)}} cursor="Pointer" title="Download resume"/>}
        />

      <div className="timeline">
        <div className="timeline__education">
          <h3 className="timeline__education__header-text">Education</h3>
          <VerticalTimeline
            layout={"1-column"}
            lineColor="var(--yellow-theme-main-color)"
          >
            {data.education.map((item, i) => (
              <VerticalTimelineElement
                key={i}
                className="timeline__education__vertical-timeline-element"
                contentStyle={{
                  background: "none",
                  color: '#ffffff',
                  border: '1.5px solid var(--yellow-theme-main-color)'
                }}
                icon= {<MdWork/>}
                iconStyle={{
                  background: '#181818',
                  color: 'var(--yellow-theme-main-color)'
                }}
              >
                <div className="vertical-timeline-element-title-wrapper">
                  <h3 className="vertical-timeline-element-title">
                    {item.title}
                  </h3>

                  <h4 className="vertical-timeline-element-subtitle">
                    {item.subTitle}
                  </h4>
                </div>
                <p>{item.description}</p>
                  <p>{item.date}</p>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
};

export default Resume;
