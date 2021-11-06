import React from "react";
import "./ImageSlider.css";
const ImageSlider = () => {
  const sliderOne =
    "https://i.ibb.co/S3D13mT/medicine-transparent-background-22.png";
  const sliderTwo = "https://i.ibb.co/8cTfQ9t/1940374.gif";
  const sliderThree = "https://i.ibb.co/QYDcvWn/1940381.png";
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide m-4"
      data-bs-ride="carousel"
    >
      <h1>Some items from our stock</h1>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={sliderOne} className="d-block mx-auto" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={sliderThree} className="d-block mx-auto" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={sliderTwo} className="d-block  mx-auto" alt="..." />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="">Next</span>
      </button>
    </div>
  );
};

export default ImageSlider;
