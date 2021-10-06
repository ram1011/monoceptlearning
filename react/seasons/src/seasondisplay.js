import React from "react";
import "./SeasonDisplay.css";
const seasonConfig = {
  summer: {
    text: " let's hit the beach",
    iconName: "sun",
  },
  winter: {
    text: " it is so cold",
    iconName: "snowflake",
  },
};
const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  }
  return lat > 0 ? "winter" : "summer";
};
const SeasonsDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];
  return (
    <div className={`season-display ${season}`}>
      <i className={`massive ${iconName} icon icon-left `}></i>
      <h1> {text}</h1>
      <i className={`massive ${iconName} icon icon-right `}></i>
    </div>
  );
};
export default SeasonsDisplay;
