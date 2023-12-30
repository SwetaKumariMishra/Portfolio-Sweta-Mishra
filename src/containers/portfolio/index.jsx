import React from "react";
// import { AiTwotoneProject  } from "react-icons/ai";
import { BiAlignJustify } from "react-icons/bi";
import PageHeaderContent from "../../components/pageHeaderContent";
import {Animate} from 'react-simple-animate';
import './style.scss';


const project = [
  {
    title: "React responsive gym website",
    description: "In this Reactjs project, we make an awesome responsive gym website step-by-step. We use React hooks, modern CSS, framer motion,and many more. For contact, we will use the Email js library to make this site more functional and practical",
    button: "visit",
    link : "https://github.com/SwetaKumariMishra/Fit-Club-using-ReactJS",
  },
  {
    title: "DSA and Problem solving using Java",
    description: "In this section, Data structures in Java are a group of data elements through which data are stored and organized in the computer so they can be used more efficiently",
    button: "visit",
    link: "https://github.com/SwetaKumariMishra/Problem-Solving-in-Java",
  },
  {
    title: "Google Note Clone using JavaScript",
    description: "In this JavaScript project, we create Google Keep App Clone with Local Storage using JavaScript",
    button: "visit",
    link: "https://github.com/SwetaKumariMishra/Projects-using-JavaScript/tree/master/GoogleNoteClone",
  },
  {
    title: "Temperature converter using JavaScript",
    description: "In this JavaScript project, we create an input element that can convert a value from one temperature measurement to another.",
    button: "visit",
    link: "https://github.com/SwetaKumariMishra/Projects-using-JavaScript/tree/master/TempConverter",
  },
  {
    title: "Incerement Counter",
    description: "In this JavaScript project, we build an increment counter on button click",
    button: "visit",
    link: "https://github.com/SwetaKumariMishra/Projects-using-JavaScript/tree/master/IncrementCounter",
  },
  
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="My Portfolio"
        icon={<BiAlignJustify size={40} />}
      />
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
         <div className="container">
      <div className="card-container">
        <div className="cards">
          {
            project.map((item, i)=>
            (
              <div className="card" key={i}>
              <h1>{item.title}</h1>
              <p>{item.description}</p>
              <a href={item.link} target="_blank" rel="noopener noreferrer" className="card-button">{item.button}</a>
            
              </div>
              
            ))
          }
          
        </div>
      
      </div>
      </div>
      </Animate>
    </section>
  );
};

export default Portfolio;
