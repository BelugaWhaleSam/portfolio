import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(2);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section id='qualification' className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>
      <div className="qualification__container container">
        <div className="qualification__tabs">
          

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            {""}
            Experience
          </div>
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            {""}
            Education
          </div>
        </div>
        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            {/* Education 1  College*/}
            <div className="qualification__data">
              <div className="">
                <h3 className="qualification__title">
                  {" "}
                  Bangalore Institute Of Technology, Bengaluru
                </h3>
                <span className="qualification__subtitle">
                  B.E. Information Science and Engineering
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2020 - 2024
                </div>
              </div>
              <div className="">
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            {/* Education 2  High School*/}
            <div className="qualification__data">
              <div></div>

              <div className="">
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div className="">
                <h3 className="qualification__title">
                  Greenfingers Global School, Navi Mumbai
                </h3>
                <span className="qualification__subtitle">High School</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2011 - 2019
                </div>
              </div>
            </div>

            {/* Education 3 School*/}
            <div className="qualification__data">
              <div className="">
                <h3 className="qualification__title">
                  {" "}
                  The Indian School, New Delhi
                </h3>
                <span className="qualification__subtitle">Middle School</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2004 - 2010
                </div>
              </div>
              <div className="">
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>

          {/* Work Experience */}

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div></div>

              <div className="">
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div className="">
                <h3 className="qualification__title">
                Fifty-Fintech, Bangalore
                </h3>
                <span className="qualification__subtitle">Front-end Developer</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  {" "} June 2023 - Present
                </div>
              </div>
            </div>
            {/* Work 1 */}
            <div className="qualification__data">
              <div className="">
                <h3 className="qualification__title">
                  {" "}
                  Fiverr Freelancing, Remote
                </h3>
                <span className="qualification__subtitle">
                  Blockchain and Web Developer
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  {" "}May 2023 - June 2023
                </div>
              </div>
              <div className="">
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            {/* Work 2 */}
            <div className="qualification__data">
              <div></div>

              <div className="">
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div className="">
                <h3 className="qualification__title">
                  Polygon Guild, Bangalore
                </h3>
                <span className="qualification__subtitle">Guild Lead</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  {" "} Feb 2023 - Present
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div className="">
                <h3 className="qualification__title">
                  {" "}
                  GetBoarded Technology, Portugal
                </h3>
                <span className="qualification__subtitle">
                  Blockchain Developer
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  {" "}Dec 2022 - March 2023
                </div>
              </div>
              <div className="">
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
