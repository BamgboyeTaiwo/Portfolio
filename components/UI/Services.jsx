import React from "react";
import { Container, Row, Col } from "reactstrap";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../styles/services.module.css";
import ServicesItem from "./ServicesItem";
import classs from "../../styles/portfolio-item.module.css";

const Services = () => {
  return (
    <section id="services">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className={`${classes.services__container}`}>
              <div>
                <ServicesItem title="App Development" icon="ri-apps-line" />

                <ServicesItem title="Web Development" icon="ri-computer-line" />
              </div>

              <ServicesItem title="Full-Stack Development" icon="ri-code-s-slash-line" />
            </div>
          </Col>

          <Col lg="6" md="6" className={`${classes.service__title}`}>
            <SectionSubtitle subtitle="What I do" />
            <h3 className="mb-0 mt-4">Better Design,</h3>
            <h3 className="mb-4">Better Experience</h3>
            <p>
              I build Full responsive websites and mobile Applications using latest technologies like ReactJs, React Native
              ,Vue/Nuxtjs, Angular and Django. I am adequately experienced in every aspects of the software development cycle.
              {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non amet
              culpa nobis corporis officiis, numquam cupiditate, enim expedita
              eveniet dolorum, aliquid nesciunt sapiente illo voluptatum!
              Dolores fuga mollitia atque, placeat minima quibusdam accusantium!
              Veniam, non distinctio dolorem rerum laboriosam deleniti. */}
            </p>

            <h1>Skills</h1>
            <div className="sm:hidden lg:block">
              <div className="flex flex-row">
                <span className={`py-1 mx-1 rounded-md bg-[#171f38] border-2 sm:text-sm border-[#01d293] text-white px-3`}>
                  React/Next
                </span>
                <span className={`py-1 mx-1 rounded-md bg-[#171f38] border-2 sm:text-sm border-[#01d293] text-white px-3`}>
                  ReactNative
                </span>
                <span className={`py-1 mx-1 rounded-md bg-[#171f38] border-2 sm:text-sm border-[#01d293] text-white px-3`}>
                  Vue/Nuxt
                </span>
                <span className={`py-1 mx-1 rounded-md bg-[#171f38] border-2 border-[#01d293] text-white px-3`}>Django</span>
                <span className={`py-1 mx-1 rounded-md bg-[#171f38] border-2 border-[#01d293] text-white px-3`}>Angular</span>
              </div>
              <div className="flex mt-[0.5rem] flex-row">
                <span className={`py-1 mx-1 rounded-md bg-[#171f38] border-2 border-[#01d293] text-white px-3`}>Typescript</span>
                <span className={`py-1 mx-1 rounded-md bg-[#171f38] border-2 border-[#01d293] text-white px-3`}>Docker</span>
                <span className={`py-1 mx-1 rounded-md bg-[#171f38] border-2 border-[#01d293] text-white px-3`}>Firebase</span>
                <span className={`py-1 mx-1 rounded-md bg-[#171f38] border-2 border-[#01d293] text-white px-3`}>
                  Mongo/Mongoosedb
                </span>
                <span className={`py-1 mx-1 rounded-md bg-[#171f38] border-2 border-[#01d293] text-white px-3`}>MySQL</span>
              </div>
              <div className="flex mt-[0.5rem] flex-row">
                <span className={`py-1 mx-1 rounded-md bg-[#171f38] border-2 border-[#01d293] text-white px-3`}>
                  Node/express
                </span>
                <span className={`py-1 mx-1 rounded-md bg-[#171f38] border-2 border-[#01d293] text-white px-3`}>Php</span>
                <span className={`py-1 mx-1 rounded-md bg-[#171f38] border-2 border-[#01d293] text-white px-3`}>python</span>
                <span className={`py-1 mx-1 rounded-md bg-[#171f38] border-2 border-[#01d293] text-white px-3`}>Git/Github</span>
                <span className={`py-1 mx-1 rounded-md bg-[#171f38] border-2 border-[#01d293] text-white px-3`}>React</span>
              </div>
            </div>

            <div className="sm:block lg:hidden">
              <div className="flex flex-row">
                <span className={`py-1 mx-1 rounded-md bg-[#171f38] border-2 sm:text-sm border-[#01d293] text-white px-3`}>
                  React/Next
                </span>
                <span className={`py-1 mx-1 rounded-md bg-[#171f38] border-2 sm:text-sm border-[#01d293] text-white px-3`}>
                  ReactNative
                </span>
                <span className={`py-1 mx-1 rounded-md bg-[#171f38] border-2 sm:text-sm border-[#01d293] text-white px-3`}>
                  Vue/Nuxt
                </span>
                <span className={`py-1 mx-1 rounded-md bg-[#171f38] border-2 border-[#01d293] text-white px-3`}>Django</span>
              </div>
              
              <div className="flex mt-[0.5rem] flex-row">
                <span className={`py-1 mx-1 rounded-md bg-[#171f38] border-2 border-[#01d293] text-white px-3`}>Angular</span>
                <span className={`py-1 mx-1 rounded-md bg-[#171f38] border-2 border-[#01d293] text-white px-3`}>Typescript</span>
                <span className={`py-1 mx-1 rounded-md bg-[#171f38] border-2 border-[#01d293] text-white px-3`}>Docker</span>
                <span className={`py-1 mx-1 rounded-md bg-[#171f38] border-2 border-[#01d293] text-white px-3`}>Firebase</span>
              </div>
              <div className="flex mt-[0.5rem] flex-row">
                <span className={`py-1 mx-1 rounded-md bg-[#171f38] border-2 border-[#01d293] text-white px-3`}>MySQL</span>
                <span className={`py-1 mx-1 rounded-md bg-[#171f38] border-2 border-[#01d293] text-white px-3`}>
                  Node/express
                </span>
                <span className={`py-1 mx-1 rounded-md bg-[#171f38] border-2 border-[#01d293] text-white px-3`}>Php</span>
                <span className={`py-1 mx-1 rounded-md bg-[#171f38] border-2 border-[#01d293] text-white px-3`}>python</span>
              </div>

              <div className="flex mt-[0.5rem] flex-row">

                <span className={`py-1 mx-1 rounded-md bg-[#171f38] border-2 border-[#01d293] text-white px-3`}>Git/Github</span>
                <span className={`py-1 mx-1 rounded-md bg-[#171f38] border-2 border-[#01d293] text-white px-3`}>React</span>
                <span className={`py-1 mx-1 rounded-md bg-[#171f38] border-2 border-[#01d293] text-white px-3`}>
                  Mongo/Mongoosedb
                </span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services;
