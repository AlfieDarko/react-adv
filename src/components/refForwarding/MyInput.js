import React from "react";

export default React.forwardRef((props, ref) => <input ref={ref} {...props} />);
