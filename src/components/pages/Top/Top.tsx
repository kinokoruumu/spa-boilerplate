import * as React from "react";
import { Link } from "react-router-dom";

interface Props {}

const Top: React.FunctionComponent<Props> = () => {
  return (
    <div>
      <h1>Top Page</h1>
      <Link to={"/hoge"}>/hoge</Link>
    </div>
  );
};

export { Top };
