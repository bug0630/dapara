import React from "react";
import Header from "../components/header/Header";
import HeaderNav from "../components/header/HeaderNav";
import { useMediaQuery } from "react-responsive";
import Flicking, { ViewportSlot } from "@egjs/react-flicking";
import { AutoPlay, Arrow, Pagination } from "@egjs/flicking-plugins";
import "@egjs/react-flicking/dist/flicking.css";
import Panel from "../components/carousel/Panel";
import "./main.scss";
import BottomNav from "../components/header/BottomNav";
import Control from "../components/carousel/Control";

export default function Main() {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 786px)" });
  const images = require.context("../assets/img", false, /\.(png|jpe?g|svg)$/);
  const plugins = [
    new AutoPlay({
      duration: 5000,
      direction: "NEXT",
      stopOnHover: false,
      animationDuration: 1000,
    }),
    new Pagination({ type: "fraction" }),
    new Arrow(),
  ];
  const defaultBanners = [
    images("./banner1.png"),
    images("./banner2.png"),
    images("./banner3.png"),
  ];

  const smallBanners = [
    images("./banner1-2.png"),
    images("./banner2-2.png"),
    images("./banner3-2.png"),
  ];

  return (
    <div className="main">
      <Header />
      <HeaderNav></HeaderNav>
      {isSmallScreen ? (
        <Flicking plugins={plugins} align="prev" circular={true}>
          {smallBanners.map((banner, index) => (
            <Panel key={index} index={index} imageSrc={banner} />
          ))}
          <ViewportSlot>
            <div className="flicking-pagination"></div>
            <Control></Control>
          </ViewportSlot>
        </Flicking>
      ) : (
        ""
      )}
      {isSmallScreen ? (
        ""
      ) : (
        <Flicking plugins={plugins} align="prev" circular={true}>
          {defaultBanners.map((banner, index) => (
            <Panel key={index} index={index} imageSrc={banner} />
          ))}
          <ViewportSlot>
            <div className="flicking-pagination "></div>
            <Control></Control>
          </ViewportSlot>
        </Flicking>
      )}
      <section className="list"></section>
      <BottomNav></BottomNav>
    </div>
  );
}