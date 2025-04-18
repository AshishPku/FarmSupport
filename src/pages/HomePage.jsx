import React from "react";
import Merchants from "./../components/Merchants";
import Technologies from "./../components/Technologies";
import SoilPrediction from "./../components/SoilPrediction";
import MarketPrediction from "./../components/MarketPrediction";
import HeroSection from "./../components/HeroSection";
import WeatherForecast from "./../components/WeatherForecast";
import CropRecommendations from "./../components/CropRecommendations";
import SmartFarming from "./../components/SmartFarming";
import PlantDiseases from "./../components/PlantDiseases";
import Features from "./../components/Features";
import SubFooter from "./../components/SubFooter";
const Homepage = () => {
  return (
    <>
      <HeroSection />
      <Features />
      <Technologies />
      <SoilPrediction />
      <WeatherForecast />
      <CropRecommendations />
      <SmartFarming />
      <PlantDiseases />
      <MarketPrediction />
      <Merchants />
      <SubFooter />
    </>
  );
};

export default Homepage;
