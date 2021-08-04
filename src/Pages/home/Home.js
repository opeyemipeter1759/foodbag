import React from "react";
import DefaultLayout from "../../DefaultLayoout/DefaultLayout";
import HeroSession from "./HeroSession";
import Footer from "../../Components/Footer/Footer";
import "./Home.css";

const Home = () => {
  return (
    <DefaultLayout>
      <HeroSession />
      <Footer />
    </DefaultLayout>
  );
};

export default Home;
