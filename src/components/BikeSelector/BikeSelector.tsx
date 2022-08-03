import { NextPage } from "next";
import Image from "next/image";
import styles from "./BikeSelector.module.css";
import bike1 from "../../assets/bike1.svg";
import bike2 from "../../assets/bike2.svg";
import bike3 from "../../assets/bike3.svg";
import bike4 from "../../assets/bike4.svg";
import { useState } from "react";

const bikes = [
  <Image src={bike1} alt="a bike" key={bike1} className={styles.google} />,
  <Image src={bike2} alt="a bike" key={bike2} className={styles.google} />,
  <Image src={bike3} alt="a bike" key={bike3} className={styles.google} />,
  <Image src={bike4} alt="a bike" key={bike4} className={styles.google} />,
];

const defaultStyle = styles.bikeItem;
const activeBikeStyle = styles.activeBike;

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
      return prevState.map((_, index) =>
        passedIndex === index
          ? (prevState[index] = `${defaultStyle} ${activeBikeStyle}`)
          : (prevState[index] = defaultStyle)
      );
    });
  };

  return (
    <div>
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
          Your <span className={styles.applyGreen}>Color</span>
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
