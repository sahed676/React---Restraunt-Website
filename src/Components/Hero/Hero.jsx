import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP,
  HeroBtn,
} from "./HeroElements";
import Slidebar from "../Slidebar/Slidebar";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <HeroContainer>
      <Navbar toggle={toggle} />
      <Slidebar isOpen={isOpen} toggle={toggle} />
      <HeroContent>
        <HeroItems>
          <HeroH1>Greatest Pizza Ever</HeroH1>
          <HeroP>Ready within 60 seconds</HeroP>
          <HeroBtn>Place Order</HeroBtn>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
