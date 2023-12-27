import React from "react";
// import { AiTwotoneProject  } from "react-icons/ai";
import { BiAlignJustify } from "react-icons/bi";
import PageHeaderContent from "../../components/pageHeaderContent";

const Portfolio = () =>
{
  return(
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText = "My Portfolio"
        icon = {< BiAlignJustify size={40} />}
      />
    </section>
  );
}

export default Portfolio;