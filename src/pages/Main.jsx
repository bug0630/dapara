import React from "react";
import Header from "../components/header/Header";
import HeaderNav from "../components/header/HeaderNav";
import { useMediaQuery } from "react-responsive";
import { useState, useEffect } from "react";
import List from "../components/List/List";
import Flicking, { ViewportSlot } from "@egjs/react-flicking";
import { AutoPlay, Arrow, Pagination } from "@egjs/flicking-plugins";
import "@egjs/react-flicking/dist/flicking.css";
import Panel from "../components/carousel/Panel";
import BottomNav from "../components/header/BottomNav";
import Control from "../components/carousel/Control";
import Footer from "../components/footer/Footer";
import "./main.scss";
import Button from "../components/button/Button";
import Tab from "../components/tab/Tab";
export default function Main() {
  const smallScreen = useMediaQuery({ query: "(max-width: 786px)" });
  const images = require.context("../assets/img", false, /\.(png|jpe?g|svg)$/);
  const [plugins, setPlugins] = useState([]);
  const [productPlugins1, setProductPlugins1] = useState([]);
  const [productPlugins2, setProductPlugins2] = useState([]);

  useEffect(() => {
    const bannerAutoPlay = new AutoPlay({
      duration: 5000,
      direction: "NEXT",
      stopOnHover: false,
      animationDuration: 1000,
    });

    const productAutoPlay1 = new AutoPlay({
      duration: 5000,
      direction: "NEXT",
      stopOnHover: false,
      animationDuration: 0,
    });

    const productAutoPlay2 = new AutoPlay({
      duration: 5000,
      direction: "NEXT",
      stopOnHover: false,
      animationDuration: 0,
    });

    setPlugins([
      bannerAutoPlay,
      new Pagination({ type: "bullet" }),
      new Arrow(),
    ]);
    setProductPlugins1([productAutoPlay1, new Arrow()]);
    setProductPlugins2([productAutoPlay2, new Arrow()]);
  }, []);
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
  const sale = [
    images("./sale1.png"),
    images("./sale2.png"),
    images("./sale3.png"),
    images("./sale4.png"),
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
              <Panel
                key={index}
                path={`/banner${index + 1}`}
                imageSrc={banner}
              />
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
            {defaultBanners.map((banner2, index) => (
              <Panel
                key={index}
                path={`/banner2-${index + 1}`}
                imageSrc={banner2}
              />
            ))}
            <ViewportSlot>
              <Control></Control>
            </ViewportSlot>
          </Flicking>
        )}
      </section>
      <section className="brand width sectionPadding">
        <h2>오늘의 브랜드</h2>
        <h3>
          다 파라가 엄선한 오늘의 가장 <span className="pink">HOT</span>한 상품
          !
        </h3>
        <div className="product">
          <List list={product} path="제품" />
          <Flicking
            plugins={productPlugins1}
            duration="0"
            align="prev"
            circular={true}
          >
            {product2.map((product2, index) => (
              <Panel
                key={index}
                path={`/product2-${index + 1}`}
                imageSrc={product2}
              />
            ))}
            <ViewportSlot>
              <Control></Control>
            </ViewportSlot>
          </Flicking>
        </div>
        <Button text="브랜드 상품" path="브랜드"></Button>
      </section>
      <section className="today sectionPadding">
        <h2>오늘의 SALE !</h2>
        <h3>
          한 달에 한 번 찾아오는 다파라의 특별한{" "}
          <span className="blue">SALE</span> 주간 !
        </h3>
        <Tab list={["오늘만 세일", "이번주 세일"]}></Tab>
        {smallScreen ? (
          <Flicking
            plugins={productPlugins2}
            duration={2000}
            align="center"
            circular={true}
          >
            {sale.map((product2, index) => (
              <Panel
                key={index}
                path={`/product2-${index + 1}`}
                imageSrc={product2}
              />
            ))}
            <ViewportSlot>
              <Control />
            </ViewportSlot>
          </Flicking>
        ) : null}
        {smallScreen ? null : <List list={sale} path="세일"></List>}
      </section>
      <Footer></Footer>
      <BottomNav></BottomNav>
    </div>
  );
}
