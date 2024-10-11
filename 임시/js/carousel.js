const { AutoPlay, Pagination } = window.Flicking.Plugins;

// 공통 Flicking 옵션 설정
const flickingOptions = {
  align: "center",
  circular: true,
  renderOnlyVisible: true,
};

// carousel1에 Flicking 인스턴스 적용
const flicking1 = new Flicking("#carousel1", flickingOptions);

// carousel2에 Flicking 인스턴스 적용
const flicking2 = new Flicking("#carousel2", flickingOptions);
