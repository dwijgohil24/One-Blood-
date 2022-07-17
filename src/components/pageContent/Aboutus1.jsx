import React from 'react'
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
//import videobg from './assets/videobg.mp4'
const particlesInit = async (main) => {
  console.log(main);

  // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
  // starting from v2 you can add only the features you need reducing the bundle size
  await loadFull(main);
};

export default function Aboutus1() {
  return (
    <>
    <br />
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
  <div className="container white z-depth-1">
 
    <br />
    {/* message from founder section starts*/}
    <div className="row">
        
      <div className="col l6 m12 s12">
        <h4 className="left-align orange-text text-accent-3">About Us</h4>
        <br />
        <p>
        Blood donation is a time-consuming process in health care since it takes a long time to identify a donor who is compatible with the patient's blood group. We created  a blood donation Web app as a blood bank solution to connect the requester and the donor at any time and from any location. This application's goal is to provide information about the requested blood as well as the number of available donors in the area. The goal of this research was to create a blood management information system to help with the management of blood donor data and to make/control blood distribution in various parts of the country based on hospital needs.
          <br />
          <br />
          Creating market strategies for blood donation, lobbying, and sensitization of blood donors becomes very difficult without quick and timely access to donor records. The blood management information system has features that allow for easy access to donor records collected across the country. 
          <br />
        </p>
      </div>
      <div className="col l6 s12">
        <img src="./assets/aboutus.jpg" alt="rocket" style={{ width: "100%" }} />
        
      </div>
      
      {/* message from founder section ends*/}
      {/*about us section ends*/}
    </div>
  </div>
  
  
</>
  )
}
