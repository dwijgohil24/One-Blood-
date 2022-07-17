import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

class Carousel extends Component {
    componentDidMount() {
    const options = {
        duration: 300,
        onCycleTo: () => {
        console.log("New Slide");
        }
    };
    M.Carousel.init(this.Carousel, options);
    }

    render() {
        return (
            <div
            ref={Carousel => {
                this.Carousel = Carousel;
            }}
            
    className="carousel">
       
        
      <a className="carousel-item" href="./">
        <div className="testi">
          <div className="img-area">
            <img src="./assets/People1.png"  alt='he'/> 
          </div>
          <p>
            "Very Easy convinent and fast service , it saved my life"
          </p>
          <h4>Jes Jones</h4>
          <h5>Working Proff.</h5>
        </div>
      </a>
      <a className="carousel-item" href="./">
        <div className="testi">
          <div className="img-area">
            <img src="./assets/People2.png" alt='hee'/>
          </div>
          <p>
            "I was not able to find AB+ blood anywhere near me, finally i got it through here, thanks to fast and easy availiblity checking of this website"
          </p>
          <h4>Smiti Jain</h4>
          <h5>House-Wife</h5>
        </div>
      </a>
      <a className="carousel-item" href="./">
        <div className="testi">
          <div className="img-area">
            <img src="./assets/People3.png" alt='heeee'/>
          </div>
          <p>
            "Good and effficient nearby Blood searching experience."
          </p>
          <h4>James Harlend</h4>
          <h5>Govt. Employee</h5>
        </div>
      </a>
      <a className="carousel-item" href="./">
        <div className="testi">
          <div className="img-area">
            <img src="./assets/People4.png" alt='heeeeee'/>
          </div>
          <p>
          "Easily found the nearby center for required blood at the time of emergency, thanks to One-blood team. "
          </p>
          <h4>Lt. Amarkumar</h4>
          <h5>Retd. General</h5>
        </div>
      </a>
      <a className="carousel-item" href="./">
        <div className="testi">
          <div className="img-area" >
            <img src="./assets/People5.png" alt="yeh he" />
          </div>
          <p>
            "Had a nice and smooth experience, I am amazed by efficient and precise location of nearby hospitals with required blood i got during emergency."
          </p>
          <h4>Jessica Jones</h4>
          <h5>Web Developer</h5>
        </div>
      </a>
    </div>
        );
    }
}
export default Carousel;


