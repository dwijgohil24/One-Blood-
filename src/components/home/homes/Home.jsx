import React from "react";
import Typewriter from "typewriter-effect";
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
const Home = () => {
  return (
    <>
      <section className="home">
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            fullScreen: {
              enable: true,
              zIndex: -1,
            },
            particles: {
              number: {
                value: 10,
                density: {
                  enable: false,
                  value_area: 800,
                },
              },
              color: {
                value: "#ff0000",
              },
              shape: {
                type: "star",
                options: {
                  sides: 5,
                },
              },
              opacity: {
                value: 10,
                random: false,
                anim: {
                  enable: false,
                  speed: 1,
                  opacity_min: 0.1,
                  sync: false,
                },
              },
              size: {
                value: 4,
                random: false,
                anim: {
                  enable: false,
                  speed: 40,
                  size_min: 0.1,
                  sync: false,
                },
              },
              rotate: {
                value: 0,
                random: true,
                direction: "clockwise",
                animation: {
                  enable: true,
                  speed: 5,
                  sync: false,
                },
              },
              line_linked: {
                enable: true,
                distance: 600,
                color: "#000",
                opacity: 0.4,
                width: 2,
              },
              move: {
                enable: true,
                speed: 2,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200,
                },
              },
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: ["grab"],
                },
                onclick: {
                  enable: false,
                  mode: "bubble",
                },
                resize: true,
              },
              modes: {
                grab: {
                  distance: 400,
                  line_linked: {
                    opacity: 1,
                  },
                },
                bubble: {
                  distance: 400,
                  size: 40,
                  duration: 2,
                  opacity: 8,
                  speed: 3,
                },
                repulse: {
                  distance: 200,
                },
                push: {
                  particles_nb: 4,
                },
                remove: {
                  particles_nb: 2,
                },
              },
            },
            retina_detect: true,
            background: {
              image: "",
              position: "50% 50%",
              repeat: "no-repeat",
              size: "cover",
            },
          }}
        />
        <div className="container flex">
          <div className="left ">
            <div className="img">
              <img src="./assets/home.png" alt="" />
            </div>
          </div>
          <div className="right topMarign">
            <h1>
              Welcome To <br />
              One Blood
            </h1>
            <h2>
              Making Blood donations
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Easier.")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("convinient.")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("Faster.")
                    .start();
                }}
              />
            </h2>

            <div className="SocailIcon">
              <i className="fab fa-facebook-f facebook"></i>
              <i className="fab fa-instagram instagram"></i>
              <i className="fab fa-twitter twitter"></i>
              <i className="fab fa-youtube youtube"></i>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
