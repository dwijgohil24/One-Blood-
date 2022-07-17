import React from 'react'
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import parallax from '../../Images/parallax.jpg'
const particlesInit = async (main) => {
  console.log(main);

  // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
  // starting from v2 you can add only the features you need reducing the bundle size
  await loadFull(main);
};
export default function Contactus() {
  return (
    <>
    <Particles
      id="tsparticles"
      init={particlesInit}

      options={{
        "fullScreen": {
            "enable": true,
            "zIndex": -1
        },
        "particles": {
            "number": {
                "value": 20,    
                "density": {
                    "enable": false,
                    "value_area": 1000
                }
            },
            "color": {
                "value": "#800080"
            },
            "shape": {
                "type": "circle",
                "options": {
                    "sides": 5
                }
            },
            "opacity": {
                "value": 10,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 4,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "rotate": {
                "value": 0,
                "random": true,
                "direction": "clockwise",
                "animation": {
                    "enable": true,
                    "speed": 5,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 600,
                "color": "#000",
                "opacity": 0.4,
                "width": 2
            },
            "move": {
                "enable": true,
                "speed": 2,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": ["grab"]
                },
                "onclick": {
                    "enable": false,
                    "mode": "bubble"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 400,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true,
        "background": {
            
            "image": "",
            "position": "50% 50%",
            "repeat": "no-repeat",
            "size": "cover"
        }
    }}
    />
  <div id="index-banner" className="parallax-container">
    <div className="section no-pad-bot">
      <div className="container">
        <br />
        <br />
        <h1 className="header center white-text">
          <b>Contact Us</b>
        </h1>
        <div className="row center">
          <h5 className="header col s12">
            Connect with us and get regular updates
          </h5>
        </div>
        <div className="row center">
          <a
            href="#expert"
            id="download-button"
            className="btn-large waves-effect waves-light orange accent-3 white-text hoverable"
          >
            <b>Call Now</b>
          </a>
        </div>
        <br />
        <br />
      </div>
    </div>
    <div className="parallax">
      <img src={parallax} />
    </div>
  </div>
  <br />
  <br />
  <div className="container">
    <div className="section">
      {/*   Icon Section   */}
      <div className="row">
        <div className="col s12 m4">
          <div className="icon-block">
            <h2 className="center">
              <i className="fa fa-phone" />
            </h2>
            <h5
              className="center orange accent-3 white-text"
              style={{ fontSize: 21, padding: 8 }}
            >
              <b>CALL US</b>
            </h5>
            <p className="light center" style={{ fontSize: 18 }}>
              <b>999999999</b>
            </p>
          </div>
        </div>
        <div className="col s12 m4">
          <div className="icon-block">
            <h2 className="center">
              <i className="fas fa-envelope" />
            </h2>
            <h5
              className="center orange accent-3 white-text"
              style={{ fontSize: 21, padding: 8 }}
            >
              <b>EMAIL</b>
            </h5>
            <p className="light center" style={{ fontSize: 18 }}>
              <b>oneblood@gmail.com</b>
            </p>
          </div>
        </div>
        <div className="col s12 m4">
          <div className="icon-block">
            <h2 className="center">
              <i className="fa fa-home" />
            </h2>
            <h5
              className="center orange accent-3 white-text"
              style={{ fontSize: 21, padding: 8 }}
            >
              <b>VISIT US</b>
            </h5>
            <p className="light center" style={{ fontSize: 18 }}>
              <b>Dharmsinh Desai University, India</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Get in touch section*/}
  <div className="parallax-container valign-wrapper hide-on-small-only">
    <div className="section no-pad-bot">
      <div className="container">
        <h2 className="header right-align black-text ">
          <b>Get In Touch With Our Team</b>
        </h2>
        <div className="row center">
          <h5 className="header col s12 black-text right-align">
            Get Latest Updates on availiblity of blood.
          </h5>
        </div>
      </div>
    </div>
    <div className="parallax">
      <img src="./assets/parallax.jpg" alt="" />
    </div>
  </div>
  <div className="parallax-container valign-wrapper hide-on-med-and-up">
    <div className="section no-pad-bot">
      <div className="container">
        <h2
          className="header center-align black-text "
          style={{ marginTop: "-70px" }}
        >
          <b>Get In Touch With Our Team</b>
        </h2>
        <div className="row center">
          <h5 className="header col s12 black-text">
            Get Latest Updates on availiblity of blood.
          </h5>
        </div>
      </div>
    </div>
    <div className="parallax">
      <img src="images/contactus2.jpg" alt="" />
    </div>
  </div>
  <br />
  <br />
  {/* form */}
  <div className="container white z-depth-1 form2-out" id="expert">
    <div className="row hide-on-small-only">
      <h4 className="orange-text text-accent-3 col l6 m12">
        <b>Connect With Us</b>
      </h4>
      <h4 className="orange-text text-accent-3 col l6 m12">
        <i
          className="material-icons"
          style={{ fontSize: 35, transform: "translateY(5px)" }}
        >
          telephone
        </i>
        <b> 999999999</b>
      </h4>
    </div>
    <div className="row hide-on-med-and-up">
      <h4
        className="orange-text text-accent-3 col s12 center-align"
        style={{ borderTop: "1px grey solid", paddingTop: 5, marginTop: 0 }}
      >
        <i
          className="material-icons"
          style={{ fontSize: 35, transform: "translateY(5px)" }}
        >
          call
        </i>
        <b> 9999999999</b>
      </h4>
    </div>
    <br />
    <form method="post" action="">
      <div className="row">
        <div className="col l6 m12 s12">
          <div className="row">
            <div className="input-field col s12 form2">
              <input
                id="F_Name"
                name="F_Name"
                type="text"
                className="validate  orange-text text-accent-3"
                required=""
              />
              <label htmlFor="F_Name" className=" orange-text text-accent-3">
                First Name
              </label>
            </div>
            <div className="input-field col s12 form2">
              <input
                id="L_Name"
                name="L_Name"
                type="text"
                className="validate  orange-text text-accent-3"
                required=""
              />
              <label htmlFor="L_Name" className=" orange-text text-accent-3">
                Last Name
              </label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col l6 m12 s12 form2">
              <input
                id="Number"
                name="Number"
                type="text"
                className="validate  orange-text text-accent-3"
                pattern="[0-9]{10}"
                required=""
              />
              <label htmlFor="Number" className=" orange-text text-accent-3">
                Mobile No.
              </label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col l6 m12 s12 form2">
              <input
                id="email"
                name="email"
                type="email"
                className="validate  orange-text text-accent-3"
                required=""
              />
              <label htmlFor="email" className=" orange-text text-accent-3">
                Email ID
              </label>
            </div>
          </div>
          <div className="row">
            <div className="col s12">
              <button
                className="btn btn-large waves-effect waves-dark hoverable white black-text"
                name="submit"
                type="submit"
                id="submit"
                style={{ marginBottom: 20 }}
              >
                <b>SUBMIT</b>
                <i className="material-icons right orange-text text-accent-3">
                  send
                </i>
              </button>
            </div>
          </div>
        </div>
    
      </div>
    </form>
  </div>
  {/* contact section ends */}
</>

  )
}
