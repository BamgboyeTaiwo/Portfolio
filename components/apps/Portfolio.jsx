import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import classes from "../../styles/portfolio.module.css";
import PortfolioItem from "../UI/PortfolioItem";
import Link from "next/link";

import portfolioData from "../data/portfolio";
import SectionSubtitle from "../UI/SectionSubtitle";

const AppsPortfolio = () => {
  const [filter, setFilter] = useState("Web Design");
  const [data, setData] = useState();
  const [appdata, setappdata] = useState();

  useEffect(() => {
    const filteredData = portfolioData.filter((item) => item.category === "Mobile App");
    // setData(filteredData);
    setappdata(filteredData);
    if (filter === "Web Design") {
      const filteredData = portfolioData.filter((item) => item.category === filter);

      setData(filteredData);
    }
  }, [filter]);

  const active = `${classes.tab__btn__active}`;

  return (
    <section id="portfolio">
      <Container>
        <Row>
          <Col lg="6" md="6" className="mb-5">
            <SectionSubtitle subtitle="Mobile App portfolio" />
            <h4 className="mt-4">Some of my recent Apps</h4>
          </Col>

          <Col lg="6" md="6">
            <div className={`${classes.tab__btns} text-end`}>
              <button
                className={` ${filter === "Mobile App" ? active : ""} secondary__btn text-white`}
                onClick={() => setFilter("Mobile App")}
              >
                <Link href='#Mobile_App' className="no-underline" >Mobile App</Link>
              </button>
            </div>
          </Col>

          {/* <h6 className="my-4 " id="Mobile_App">Mobile Apps</h6> */}
          {appdata?.map((item) => (
            <Col lg="4" md="4" sm="6" key={item.id}>
              <PortfolioItem item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default AppsPortfolio;
