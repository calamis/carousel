import React, { Component } from "react";
import Slider from "react-slick";
import fetch from 'isomorphic-unfetch';
import styles from '../sass/main.scss';
const apiURL = 'https://svc.rappler.com/p/topstories';

function Carousel(props) {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="slider">
        <Slider className="main__slider" {...settings} >
        {props.stories.map(story => (
        <div className="slider__item" key={story.id} styles={{ backgroundImage:`url(${story.images[0].full})`, height: '400px', width: '100%'}} >
          <img src={story.images[0].full} />
          <div className="slider__content">
           <h3 className="slider__title">{story.title}</h3>
           <p className="slider__desc">{story.metadesc}</p>
          </div>
        </div>
        ))}
      </Slider>
    </div>
  );
}

Carousel.getInitialProps = async function() {
  const res = await fetch(apiURL);
  const data = await res.json();
  const topStories = Array.from(data);
  return {
    stories: topStories
  };
};

export default Carousel;