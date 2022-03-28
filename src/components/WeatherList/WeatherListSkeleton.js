import React from "react";
import ContentLoader from "react-content-loader";

export const WeatherListSkeleton = (props) => (
  <ContentLoader
    speed={2}
    width={800}
    height={200}
    viewBox="0 0 800 200"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="0" rx="5" ry="5" width="200" height="200" />
    <rect x="210" y="0" rx="5" ry="5" width="200" height="200" />
    <rect x="420" y="0" rx="5" ry="5" width="200" height="200" />
  </ContentLoader>
);
