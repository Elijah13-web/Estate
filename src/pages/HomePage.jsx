import Hero from "../components/Hero";
import HomeServices from "../components/HomeServices";
import HomeWhyUs from "../components/HomeWhyUs";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <HomeServices />
      <HomeWhyUs />
    </div>
  );
};

export default HomePage;
