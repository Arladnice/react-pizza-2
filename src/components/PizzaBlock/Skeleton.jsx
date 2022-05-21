import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = () => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="133" cy="127" r="125" />
    <rect x="0" y="286" rx="10" ry="10" width="280" height="14" />
    <rect x="0" y="313" rx="10" ry="10" width="275" height="88" />
    <rect x="0" y="423" rx="10" ry="10" width="95" height="30" />
    <rect x="119" y="417" rx="29" ry="29" width="152" height="45" />
  </ContentLoader>
);

export default Skeleton;
