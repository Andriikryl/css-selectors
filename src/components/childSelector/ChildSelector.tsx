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

export default function ChildSelector() {
  const [value, setValue] = useState(55);
  function hendelClickValue() {
    setValue((prev) => (prev = 70));
  }
  function hendelClickReset() {
    setValue((prev) => (prev = 55));
  }

  let mainBlockColor = value > 55 ? style.bg__answer : style.bg__colorMain;

  return (
    <SectionWithHeading title="child selector" headingLevel="h3">
      <DescriptionQas>
        How select <span className={style.cube}>cube</span> in the pink{" "}
        <span className={style.cube__pink}>cube</span> ?
      </DescriptionQas>
      <Faq text="The child combinator (>) is placed between two CSS selectors. It matches only those elements matched by the second selector that are the direct children of elements matched by the first." />
      <div className={style.btn__group}>
        <button className={style.btn__button} onClick={hendelClickValue}>
          select <span className={style.cube}>cube</span>
        </button>
        <button onClick={hendelClickReset} className={style.reset__btn}>
          <VisuallyHidden>reset</VisuallyHidden>
          <IconReset />
        </button>
      </div>
      <div className={style.box}>
        <AnimatePresence>
          {value > 55 && (
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
              .pink <span className={style.cube__pink}>cube</span> &gt;{" "}
              <span className={style.cube}>cube</span> &#123; background:
              yellow;&#125;{" "}
            </motion.code>
          )}
        </AnimatePresence>
      </div>
      <div className={style.universal__group}>
        <div className={style.flex__group}>
          <Cube
            width={250}
            height={250}
            depth={250}
            className={style.bg__colorSied}
            cuboidClass={style.cuboid__animation}
          >
            <Cube
              width={value}
              height={value}
              depth={value}
              className={mainBlockColor}
              cuboidClass={style.cuboid__animationLIt}
            />
          </Cube>
        </div>
      </div>
    </SectionWithHeading>
  );
}
