import React from "react";
import { Link } from "react-router-dom";
export default React.forwardRef(({ path, imageSrc }, ref) => (
  <div className="panel" ref={ref}>
    <Link to={path}>
      <img src={imageSrc} alt={path} />
    </Link>
  </div>
));
