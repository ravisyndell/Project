import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../demo/header'
import Footer from '../demo/footer'
import Link from 'next/link'
import Image from 'next/image'
import profilePic from '../public/images.png'
import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
<link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Jost:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet"></link>
export default class NextJsCarousel extends Component {
  render() {
      return (
          <div>
            <h2>NextJs Carousel - Image one</h2>
            <Carousel>
                <div>
                    <img src="/ChiropracticSlider.png" alt="image1"/>
                    <p className="legend">Chiropractic</p>
                    <p className='sub-des'>A free mind can explore life and happiness to the</p>
                </div>
                <div>
                    <img src="/Life-Coaching-1.png" alt="image2" />
                    <p className="legend">Life Coaching</p>
                    <p className='sub-des'>A free mind can explore life and happiness to the</p>
                </div>
                <div>
                    <img src="/nutritionist.png" alt="image3"/>
                    <p className="legend">Nutritionist</p>
                    <p className='sub-des'>A free mind can explore life and happiness to the</p>
                </div>
                <div>
                    <img src="/psychology.png" alt="image4"/>
                    <p className="legend">Psychology</p>
                    <p className='sub-des'>A free mind can explore life and happiness to the</p>
                </div>
                
            </Carousel>

          </div>

          
      );
  }
};


