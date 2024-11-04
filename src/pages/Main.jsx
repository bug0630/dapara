import React from "react";
import Header from "../components/header/Header";
import HeaderNav from "../components/header/HeaderNav";
import { useMediaQuery } from "react-responsive";
import Flicking, { ViewportSlot } from "@egjs/react-flicking";
import { AutoPlay, Arrow, Pagination } from "@egjs/flicking-plugins";
import "@egjs/react-flicking/dist/flicking.css";
import Panel from "../components/carousel/Panel";
import BottomNav from "../components/header/BottomNav";
import Control from "../components/carousel/Control";
import Footer from "../components/footer/Footer";
import "./main.scss";
import Button from "../components/button/Button";
export default function Main() {
  const smallScreen = useMediaQuery({ query: "(max-width: 786px)" });
  const images = require.context("../assets/img", false, /\.(png|jpe?g|svg)$/);
  const plugins = [
    new AutoPlay({
      duration: 5000,
      direction: "NEXT",
      stopOnHover: false,
      animationDuration: 1000,
    }),
    new Pagination({ type: "bullet" }),
    new Arrow(),
  ];
  const productPlugins = [
    new AutoPlay({
      duration: 5000,
      direction: "NEXT",
      stopOnHover: false,
      animationDuration: 0,
    }),
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
  const product = [
    images("./product1.png"),
    images("./product2.png"),
    images("./product3.png"),
    images("./product4.png"),
  ];
  const product2 = [images("./product2-1.png"), images("./product2-2.png")];
  return (
    <div className="main">
      <Header />
      <HeaderNav></HeaderNav>
      <section className="banner">
        {" "}
        {smallScreen ? (
          <Flicking plugins={plugins} align="prev" circular={true}>
            {smallBanners.map((banner, index) => (
              <Panel key={index} index={index} imageSrc={banner} />
            ))}
            <ViewportSlot>
              <Control></Control>
            </ViewportSlot>
          </Flicking>
        ) : (
          ""
        )}
        {smallScreen ? (
          ""
        ) : (
          <Flicking plugins={plugins} align="prev" circular={true}>
            {defaultBanners.map((banner, index) => (
              <Panel key={index} index={index} imageSrc={banner} />
            ))}
            <ViewportSlot>
              <Control></Control>
            </ViewportSlot>
          </Flicking>
        )}
      </section>
      <section className="brand width">
        <h2>오늘의 브랜드</h2>
        <h3>
          다 파라가 엄선한 오늘의 가장 <span className="pink">HOT</span>한 상품
          !
        </h3>
        <div className="product side">
          <ul>
            {product.map((index) => (
              <li key={index}>
                <img src={index} alt="product" />
              </li>
            ))}
          </ul>
          <Flicking
            plugins={productPlugins}
            duration="0"
            align="prev"
            circular={true}
          >
            {product2.map((banner, index) => (
              <Panel key={index} index={index} imageSrc={banner} />
            ))}
            <ViewportSlot>
              <Control></Control>
            </ViewportSlot>
          </Flicking>
        </div>
        <Button text="브랜드 상품"></Button>
      </section>
      <Footer></Footer>
      <BottomNav></BottomNav>
    </div>
  );
}
