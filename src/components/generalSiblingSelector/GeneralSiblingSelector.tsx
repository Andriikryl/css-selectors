"use client";
import React, { useState } from "react";
import SectionWithHeading from "../sectionWithHeading/SectionWithHeading";
import Cube from "../cube/Cube";
import style from "./style.module.css";
import DescriptionQas from "../descriptionQas/DescriptionQas";
import VisuallyHidden from "../visuallyhidden/VisuallyHidden";
import IconReset from "@/icons/Reset";
import { AnimatePresence, motion } from "framer-motion";
import Faq from "../faq/Faq";

export default function GeneralSiblingSelector() {
  const [value, setValue] = useState(50);
  function hendelClickValue() {
    setValue((prev) => (prev = 200));
  }
  function hendelClickReset() {
    setValue((prev) => (prev = 50));
  }

  let ConfirmColor = value > 50 ? style.confirmColor : "";
  let mainBlockColor = value > 50 ? style.bg__answer : style.bg__colorMain;

  return (
    <SectionWithHeading title="general sibling selectorr" headingLevel="h3">
      <DescriptionQas>
        How select all <span className={style.cube}></span>?
      </DescriptionQas>
      <Faq text="The subsequent-sibling combinator (~) separates two selectors and matches all instances of the second element that follow the first element (not necessarily immediately) and share the same parent element." />
      <div className={style.btn__group}>
        <button className={style.btn__button} onClick={hendelClickValue}>
          select all
        </button>
        <button onClick={hendelClickReset} className={style.reset__btn}>
          <VisuallyHidden>reset</VisuallyHidden>
          <IconReset />
        </button>
      </div>
      <div className={style.box}>
        <AnimatePresence>
          {value > 50 && (
            <motion.code
              className={style.code__box}
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{
                opacity: 0,
                x: -200,
              }}
              transition={{ opacity: { duration: 0.6 }, x: { duration: 1.2 } }}
            >
              <span className={style.cube}> </span> .class-1 ~ div&#123;
              background: yellow;&#125;{" "}
            </motion.code>
          )}
        </AnimatePresence>
      </div>
      <div className={style.universal__group}>
        <div className={style.flex__group}>
          <span>.class-1</span>
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
          <span>div</span>
          <Cube
            width={50}
            height={50}
            depth={50}
            className={mainBlockColor}
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
          <span>div</span>
          <Cube
            width={50}
            height={50}
            depth={50}
            className={mainBlockColor}
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
          <span>div</span>
          <Cube
            width={50}
            height={50}
            depth={50}
            className={mainBlockColor}
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
          <span>div</span>
          <Cube
            width={50}
            height={50}
            depth={50}
            className={mainBlockColor}
            cuboidClass={style.cuboid__animation}
          />
          <Cube
            width={150}
            height={value}
            depth={150}
            className={ConfirmColor}
          />
        </div>
      </div>
    </SectionWithHeading>
  );
}
