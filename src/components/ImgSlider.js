import React from 'react'
import styled from 'styled-components'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'

const ImgSlider = () => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    }
  return (
    <Carousel {...settings}>
        <Wrap>
            <a href="/">
                <img src="/imgs/slider-badging.jpg" alt="" />
            </a>
        </Wrap>

        <Wrap>
            <a href="/">
                <img src="/imgs/slider-scale.jpg" alt="" />
            </a>
        </Wrap>

        <Wrap>
            <a href="/">
                <img src="/imgs/slider-badag.jpg" alt="" />
            </a>
        </Wrap>

        <Wrap>
            <a href="/">
                <img src="/imgs/slider-scales.jpg" alt="" />
            </a>
        </Wrap>

    </Carousel>

  )
}

const Carousel = styled(Slider)`
    //text-align: center;
    margin-top: 20px;

    & > button{
        opacity: 0;
        height: 100%;
        width: 5vw;
        z-index: 1;

        &:hover{
            opacity: 1;
            height: 100%;
            transition: opacity 0.2s ease 0s;
        }
    }

    ul li button{
        &:before{
            font-size: 15px;
            color: rgb(150, 158, 171);

        }
    }

    .slick-dots li.slick-active button:before{
        color: white;
    }

    .slick-list{
        overflow: initial; //gives the effect where you can see the next slide already
    }
    
    .slick-prev{
        left: -75px;
    }

    .slick-next{
        right: -75px;
    }

    
`

const Wrap = styled.div`
    border-radius: 5px;
    cursor: pointer;
    position: relative;

    a{
        border-radius: 5px;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0/ 73%) 0px 16px 10px -10px;
        cursor: pointer;
        display: block;
        position: relative;
        padding: 5px;

        img{
            height: 100%;
            width: 100%;
        }

        &:hover{
            padding: 0;
            border: 4px solid rgba(249, 249, 249, 0.8);
            transition-duration: 300ms;
            

        }
    }
`

export default ImgSlider