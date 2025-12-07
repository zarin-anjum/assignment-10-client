import React from "react";
import Slider from "../../components/Slider/Slider";
import LatestCrops from "../../components/LatestCrops/LatestCrops";
import HowItWorks from "../../components/HowItWorks/HowItWorks";
import Blogs from "../../components/Blogs/Blogs"
import SuccessStories from "../../components/SuccessStories/SuccessStories";
import PlatformHighlights from "../../components/PlatformHighlights/PlatformHighlights";

const Home = () => {
  return (
    <div className="bg-linear-to-b from-gray-50 to-green-50">
      <Slider></Slider>
      <LatestCrops></LatestCrops>
      <HowItWorks></HowItWorks>
      <Blogs></Blogs>
      <SuccessStories></SuccessStories>
      <PlatformHighlights></PlatformHighlights>
    </div>
  );
};

export default Home;
