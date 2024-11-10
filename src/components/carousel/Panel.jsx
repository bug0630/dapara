import React from "react";

import Card from "../card/Card";

const Panel = React.forwardRef(({ path, imageSrc }, ref) => (
  <div className="panel" ref={ref}>
    <Card path={path} imgSrc={imageSrc} />
  </div>
));

export default Panel;
