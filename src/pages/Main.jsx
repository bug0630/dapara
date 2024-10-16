import React from "react";
import Header from "../components/header/Header";
import { useMediaQuery } from "react-responsive";
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import Panel from "../components/carousel/Panel";
import "./main.scss";

export default function Main() {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 786px)" });
  const images = require.context("../assets/img", false, /\.(png|jpe?g|svg)$/);

  // 이미지 이름을 배열로 정의
  const bannerNames = [
    { default: "banner1.png", small: "banner1-2.png" },
    { default: "banner2.png", small: "banner2-2.png" },
    { default: "banner3.png", small: "banner3-2.png" },
  ];
  const banners = bannerNames.map((banner) => ({
    default: images(`./${banner.default}`),
    small: images(`./${banner.small}`),
  }));

  return (
    <div className="main">
      <Header />
      <Flicking align="prev" circular={true}>
        {banners.map((banner, index) => (
          <Panel
            key={index}
            index={index}
            imageSrc={isSmallScreen ? banner.small : banner.default}
          />
        ))}
      </Flicking>
    </div>
  );
}
