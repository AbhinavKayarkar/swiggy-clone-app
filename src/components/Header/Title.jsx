import React from "react";
import { Link } from "react-router-dom";

const Title = () => {
  return (
    <Link to="/">
      <img className="h-28"
        src="https://static.timesprime.com/2x/swiggyfree-logo-box.png?v=3"
        alt="swiggy-logo"
      />
    </Link>
  );
};
export default Title;
