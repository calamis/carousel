import React, { Component } from "react";
import Layout from '../components/layout';
import Link from 'next/link';
import Slider from 'react-slick';
import fetch from 'isomorphic-unfetch';
import Carousel from '../components/carousel';

const Index = props => (
    <Layout className="main__layout">
      <h1 className="the__title">Top Stories</h1> 
      <Carousel stories={props.stories}/>
    </Layout>
);

Index.getInitialProps = async function() {
  const res = await fetch('https://svc.rappler.com/p/topstories');
  const data = await res.json();
  const topStories = Array.from(data.data);
  return {
    stories: topStories
  };
};

export default Index;