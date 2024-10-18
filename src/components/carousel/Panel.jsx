import React from "react";

export default React.forwardRef(({ index, imageSrc }, ref) => (
  <div className="panel" ref={ref}>
    <img src={imageSrc} alt={`Panel ${index + 1}`} />
  </div>
));
