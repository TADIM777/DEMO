import React, { Fragment, Component } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import Imagea from "./assets/one.jpg"
import Imageb from "./assets/two.jpg"
import Imagec from "./assets/three.jpg"
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from 'react-responsive-carousel';

import SimpleImageSlider from "react-simple-image-slider";


import Next from "./components/next"
import Connect from "./components/connect"

export default class App extends Component {

  state={
    div1:true,
    next:false,
    connect:false
  }


  render() {
    const images = [
        { url: Imagea },
        { url: Imageb },
        { url: Imagec }
    ];

    if(this.state.next) return <Next/>
    if(this.state.connect) return <Connect/>
    return (
        <div className="card offset-md-3 col-md-6">
          <div className="card-body">
            <SimpleImageSlider
                width={600}
                height={600}
                images={images}
            />
        </div>
        {
          this.state.div1?
          <div className="card-footer">
          <button className="btn btn-danger float-left" onClick={()=>this.setState({next:!this.state.next})}>TOITS</button>
          <button className="btn btn-success float-right"onClick={()=>this.setState({div1:!this.state.div1,div2:!this.state.div2})}>NOICE</button>
          </div>:
          <div className="card-footer">
              <h4 className="text-center text-success">Great choice dude!!!</h4>
              <div className="text-center">
                <button className="btn btn-primary" onClick={()=>this.setState({connect:!this.state.connect})}>CONNECT</button>
              </div>
          </div>
        }
        </div>
    );
}
}
