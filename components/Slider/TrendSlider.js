import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRouter } from "next/router";
import PostCard from "../post/postcard.js";
import TrendBox from "../Trends/trendBox"
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <ArrowForwardIosIcon
      className={"needHover"}
      style={{ ...style,position:"absolute",color:"black",top:"2%",right:"0%",width:20}}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <ArrowBackIosIcon
      className={"needHover"}
      style={{ ...style, position:"absolute",color:"black",top:"2%",left:"0%",width:20,zIndex:200 }}
      onClick={onClick}
    />
  );
}

const Slide = ({ slide_array }) => {
  const router = useRouter();
  const sortTıme = (a, b) => {
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  };
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,

    nextArrow: <SampleNextArrow className={"needHover"}/>,
    prevArrow: <SamplePrevArrow   className={"needHover"}/>,
  };

  const go = (where) => {
    router.push(where);
  };
  return (
    <div className="w100 p2 ">
      <Slider {...settings} arrows={true}>
     
<TrendBox key={1}></TrendBox>
<TrendBox></TrendBox>

<TrendBox></TrendBox>

      </Slider>
    </div>
  );
};

export default Slide;
