import React from "react";
import Slider from "react-slick";

export default class HomePageSlider extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 8000,
      centerMode: true,
      centerPadding: "0px"
    };

    return (
      <div>
        <Slider
          ref={slider => (this.slider = slider)}
          {...settings}
          style={{ width: "45em", height: "10em", textAlign: "center" }}
        >
          <div>
            <img
              height="600rem"
              src="https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            />
          </div>
          <div>
            <img
              height="600rem"
              src="https://images.pexels.com/photos/698549/pexels-photo-698549.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            />
          </div>
          <div>
            <img
              height="600rem"
              src="https://lh3.googleusercontent.com/proxy/X2YHSF5X56sIHunRUAk9akuipDrhFsULAw17xJA0z-H9CRjb0rsxBRhW-mH180zGUm0fpgiknsDnTdmdPIdF4iZUXfS0lKZy8dsHgPlARNptgfPpDCeBeD_a31J_LohXAVsghg"
            />
          </div>
        </Slider>
      </div>
    );
  }
}
