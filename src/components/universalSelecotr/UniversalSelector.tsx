"use client";
import React, { useState } from "react";
import SectionWithHeading from "../sectionWithHeading/SectionWithHeading";
import Cube from "../cube/Cube";
import style from "./style.module.css";
import DescriptionQas from "../descriptionQas/DescriptionQas";
export default function UniversalSelector() {
  const [value, setValue] = useState(50);
  function hendelClickValue() {
    setValue((prev) => (prev = 200));
  }
  function hendelClickReset() {
    setValue((prev) => (prev = 50));
  }

  let ConfirmColor = value > 50 ? style.confirmColor : "";

  return (
    <SectionWithHeading title="universal selector" headingLevel="h2">
      <DescriptionQas>How select all elements?</DescriptionQas>
      <button onClick={hendelClickValue}>inreac</button>
      <button onClick={hendelClickReset}>reset</button>
      <div className={style.universal__group}>
        <div className={style.flex__group}>
          <Cube
            width={50}
            height={50}
            depth={50}
            className={style.bg__colorMain}
            cuboidClass={style.cuboid__animation}
          />
          <Cube
            width={150}
            height={value}
            depth={150}
            className={ConfirmColor}
          />
        </div>
        <div className={style.flex__group}>
          <Cube
            width={50}
            height={50}
            depth={50}
            className={style.bg__colorMain}
            cuboidClass={style.cuboid__animation}
          />
          <Cube
            width={150}
            height={value}
            depth={150}
            className={ConfirmColor}
          />
        </div>
        <div className={style.flex__group}>
          <Cube
            width={50}
            height={50}
            depth={50}
            className={style.bg__colorMain}
            cuboidClass={style.cuboid__animation}
          />
          <Cube
            width={150}
            height={value}
            depth={150}
            className={ConfirmColor}
          />
        </div>
        <div className={style.flex__group}>
          <Cube
            width={50}
            height={50}
            depth={50}
            className={style.bg__colorSied}
            cuboidClass={style.cuboid__animation}
          />
          <Cube width={150} height={50} depth={150} />
        </div>
        <div className={style.flex__group}>
          <Cube
            width={50}
            height={50}
            depth={50}
            className={style.bg__colorSied}
            cuboidClass={style.cuboid__animation}
          />
          <Cube width={150} height={50} depth={150} />
        </div>
      </div>
    </SectionWithHeading>
  );
}
