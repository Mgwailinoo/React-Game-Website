import React from "react";
import HeroCompo from "../HeroCompo";
import Game from "../Game/Game";
import PlatformGame from "../PlatformGame/PlatformGame";
import YearlyGame from "../YearlyGame/YearlyGame";

const Home = () => {
  return (
    <>
      <HeroCompo />
      <PlatformGame />
      <Game />

      <YearlyGame />
    </>
  );
};

export default Home;
