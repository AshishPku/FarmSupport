import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TechnologiesPage from "./pages/TechnologiesPage";
import SoilPredictionPage from "./pages/SoilPredictionPage";
import MarketPredictionPage from "./pages/MarketPredictionPage";
import WeatherForecastPage from "./pages/WeatherForecastPage";
import CropRecommendationsPage from "./pages/CropRecommendationsPage";
import SmartFarmingPage from "./pages/SmartFarmingPage";
import PlantDiseasesPage from "./pages/PlantDiseasesPage";
import NotFound from "./components/NotFound";
import Homepage from "./pages/Homepage";
import MerchantsPage from "./pages/MerchantsPage";
export default function FarmSupport() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white font-sans">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/recent-technologies" element={<TechnologiesPage />} />
        <Route path="/soil-prediction" element={<SoilPredictionPage />} />
        <Route path="/weather-forecast" element={<WeatherForecastPage />} />
        <Route
          path="/crop-recommendations"
          element={<CropRecommendationsPage />}
        />
        <Route path="/smart-farming" element={<SmartFarmingPage />} />
        <Route path="/plant-diseases" element={<PlantDiseasesPage />} />
        <Route path="/market-prediction" element={<MarketPredictionPage />} />
        <Route path="/merchants" element={<MerchantsPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}
