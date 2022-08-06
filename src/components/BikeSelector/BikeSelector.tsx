import { NextPage } from "next";
import Image from "next/image";
import styles from "./BikeSelector.module.css";
import bike1 from "../../assets/bike1.svg";
import bike2 from "../../assets/bike2.svg";
import bike3 from "../../assets/bike3.svg";
import bike4 from "../../assets/bike4.svg";
import { useState } from "react";

const bikes = [
  <Image src={bike1} alt="a bike" key={bike1} />,
  <Image src={bike2} alt="a bike" key={bike2} />,
  <Image src={bike3} alt="a bike" key={bike3} />,
  <Image src={bike4} alt="a bike" key={bike4} />,
];

const defaultStyle = styles.bikeItem;
const activeBikeStyle = styles.bikeShadowInset;
const activeBikeDefault = styles.activeBike;

const gridColors = [
  "#CAA8F5",
  " #9984D4",
  "#592E83",
  "#230C33",
  "#F64740",
  "#A3333D",
  "#291F1E",
  "#477998",
];

const BikeSelector: NextPage = () => {
  const [activeStyle, setActiveStyle] = useState([
    defaultStyle,
    defaultStyle,
    defaultStyle,
    defaultStyle,
  ]);

  const [sliderValue, setSliderValue] = useState(10);

  const setActiveBike = (passedIndex: number) => {
    setActiveStyle((prevState) => {
      return prevState.map((_, index) => {
        if (
          passedIndex === index &&
          prevState[index]?.includes(activeBikeStyle!)
        ) {
          return `${defaultStyle} ${activeBikeDefault}`;
        } else if (passedIndex === index) {
          return `${defaultStyle} ${activeBikeStyle}`;
        } else {
          return defaultStyle;
        }
      });
    });
  };

  return (
    <div className={styles.bikeWrapper}>
      <div className={styles.topInfoContainer}>
        <h1>
          Create <span className={styles.applyBold}>Your</span> Bike
        </h1>
        <p>
          Bike <span className={styles.applyOrange}>Style</span>
        </p>
      </div>
      <div className={styles.bikeContainer}>
        {bikes.map((bike: any, index: number) => {
          return (
            <div
              className={activeStyle[index]}
              key={index}
              onClick={() => {
                setActiveBike(index);
              }}
            >
              {bike}
            </div>
          );
        })}
      </div>
      <div className={styles.slideWrapper}>
        <p className={styles.saddle}>
          Saddle <span className={styles.applyRed}>Height</span>
        </p>
        <div className={styles.slidecontainer}>
          <input
            type="range"
            min="1"
            max="100"
            value={sliderValue}
            className={styles.slider}
            id="myRange"
            onInput={(e: any) => {
              setSliderValue(e.target.value);
            }}
          />
        </div>
        <p className={styles.saddleHeight}>{sliderValue} cm</p>
      </div>
      <div className={styles.center}>
        <p>
          Your <span className={styles.applyPurple}>Color</span>
        </p>
        <div className={styles.colorGrid}>
          {gridColors.map((color: string, _: number) => {
            return (
              <div
                key={color}
                className={styles.colorContainer}
                style={{ backgroundColor: color }}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BikeSelector;
