import React from "react";
import ServicesData from "./ServicesData";

const Services = () => {
  return (
    <>
      <section className="Services topMarign">
        <div className="container">
          <div className="heading">
            <h3>OUR SERVICES</h3>
            <h1>Interactive Services Offered Us</h1>
          </div>

          <div className="contain grid topMarign">
            {ServicesData.map((val) => {
              return (
                <div className="box">
                  <div className="text">
                    <h2>{val.title}</h2>
                    <p>{val.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
