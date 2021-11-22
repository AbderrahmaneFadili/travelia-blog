import React, { Component } from "react";
import TitleWrapper from "../components/TitleWrapper/TitleWrapper";
import Gallery from "react-photo-gallery";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        {
          src: "https://images.pexels.com/photos/347141/pexels-photo-347141.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          width: 4,
          height: 3,
        },
        {
          src: "https://images.pexels.com/photos/4254555/pexels-photo-4254555.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          width: 4,
          height: 3,
        },
        {
          src: "https://images.pexels.com/photos/3757144/pexels-photo-3757144.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          width: 4,
          height: 3,
        },
        {
          src: "https://images.pexels.com/photos/3889855/pexels-photo-3889855.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          width: 4,
          height: 3,
        },
        {
          src: "https://images.pexels.com/photos/3225528/pexels-photo-3225528.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          width: 4,
          height: 3,
        },
        {
          src: "https://images.pexels.com/photos/4388167/pexels-photo-4388167.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          width: 4,
          height: 3,
        },
      ],
    };
  }
  render() {
    return (
      <>
        <TitleWrapper>
          <h1 className="text-5xl text-center leading-8">
            Travelia is a Blog for showing Posts about
            <br />
            <br /> travel
          </h1>
        </TitleWrapper>
        {/* Gallery */}
        <div className="max-w-screen-lg text-center mx-auto mb-10">
          <h1 className="text-6xl my-9">Gallery</h1>
          <Gallery photos={this.state.images} />
        </div>

        {/* Quote */}
        <div className="mb-9">
          <h1 className="text-6xl my-9 text-center">Quote</h1>
          <blockquote className="text-center text-3xl">
            Life is a journey, not a destination
          </blockquote>
        </div>
      </>
    );
  }
}

export default About;
