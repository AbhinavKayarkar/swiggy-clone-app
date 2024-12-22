import React from "react";
import { Link, useRouteError } from "react-router-dom";

function RoutesErrorPage() {
  const error = useRouteError();
  console.log(error);
  return (
    <div style={{ textAlign: "center" }}>
      <h2>{error?.data}</h2>
      <h3>{error?.status}</h3>
      <p>{error?.statusText}</p>
      <Link to="/">Go to Home</Link>
    </div>
  );
}

export default RoutesErrorPage;
