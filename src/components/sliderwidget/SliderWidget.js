import React from 'react'
import styled from 'styled-components'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
import '../sliderwidget/SliderWidget.scss'

export default function SliderWidget({sliderData=[]}) {


  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoPlay:true,
  };


 
  return (
    <Carousel {...settings}>
      {
        sliderData.map((data,index)=>(
          <Wrap key={index}>
            <Service>
              <Image>
              <img src={data.Poster} alt=""></img>
              </Image>
              
            </Service>
          </Wrap>
          

        ))
      }
    </Carousel>
  )
}



const Carousel = styled(Slider)`
  margin-top:100px;
  margin-bottom:70px;
  ul li button{
    &:before{
      font-size:10px;
      color:rgb(150, 158,171)
    }
  }

  li.slick-active button::before{
    color:white;
  }
  .slick-list{
    over-flow:visible;
    height:380px;
  }
`
const Wrap = styled.div`
  img{
    width:100%;
    // height:100%;
    // background-size:contain;

  }
`
const Service = styled.div`
  display:flex;
  // border:2px solid #f2f2f2;

`
const Image = styled.div`
  flex:1;
  
`




