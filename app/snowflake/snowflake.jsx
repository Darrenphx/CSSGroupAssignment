"use client";
import React from "react";
import Snowfall from "react-snowfall";

const snowflake1 = document.createElement("img")
snowflake1.src = "/photos/ghost-8250317_640.png"

const images = [snowflake1]
export default function SnowfallClient() {
  return (
    <Snowfall
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
        
      }}
      color="red"
      snowflakeCount={10}
      images={images}
      radius={[15,25]}
      opacity={[0.05,0.3]}
      rotationSpeed={[1]}
      
    />
  );
}
