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

export default function MultipleSelector() {
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
    <SectionWithHeading title="multiple selectors" headingLevel="h2">
      <DescriptionQas>
        How select all <span className={style.cube}> .class.class-2</span>?
      </DescriptionQas>
      <Faq text="Chain two or more classes or IDs to select the element(s) that have all the specified classes/IDs:" />
      <div className={style.btn__group}>
        <button className={style.btn__button} onClick={hendelClickValue}>
          select class.class-2
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
              <span className={style.cube}> </span> .class.class-2&#123;
              background: yellow;&#125;{" "}
            </motion.code>
          )}
        </AnimatePresence>
      </div>
      <div className={style.universal__group}>
        <div className={style.flex__group}>
          <span>#btn-color</span>
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
          <span>.class-1</span>
          <Cube
            width={50}
            height={50}
            depth={50}
            cuboidClass={style.cuboid__animation}
          />
          <Cube width={150} height={50} depth={150} />
        </div>
        <div className={style.flex__group}>
          <span>.class.class-2</span>
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
