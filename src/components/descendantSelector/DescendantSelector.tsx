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

export default function DescendantSelector() {
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
    <SectionWithHeading title="descendant selector" headingLevel="h3">
      <DescriptionQas>
        How select all <span className={style.cube}></span> in the .container
        box?
      </DescriptionQas>
      <Faq text="The descendant combinator — typically represented by a single space character — combines two selectors such that elements matched by the second selector are selected if they have an ancestor (parent, parent's parent, parent's parent's parent, etc.) element matching the first selector. Selectors that utilize a descendant combinator are called descendant selectors." />
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
              <span className={style.cube}> </span>.container .cube&#123;
              background: yellow;&#125;{" "}
            </motion.code>
          )}
        </AnimatePresence>
      </div>
      <div className={style.universal__group}>
        <span>.container</span>
        <div className={style.flex__group}>
          <span>.cube</span>
          <Cube
            width={50}
            height={50}
            depth={50}
            className={mainBlockColor}
            cuboidClass={style.cuboid__animation}
          />
          <span>.cube</span>
          <Cube
            width={50}
            height={50}
            depth={50}
            className={mainBlockColor}
            cuboidClass={style.cuboid__animation}
          />
          <span>.cube</span>
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
