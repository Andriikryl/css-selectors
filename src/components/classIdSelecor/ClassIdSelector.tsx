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

export default function ClassIdSelector() {
  const [valueClass, setValueClass] = useState(50);
  const [valueID, setValueId] = useState(50);
  function hendelClickValueClass() {
    setValueClass((prev) => (prev = 150));
  }
  function hendelClickResetClass() {
    setValueClass((prev) => (prev = 50));
  }
  function hendelClickValueID() {
    setValueId((prev) => (prev = 250));
  }
  function hendelClickResetID() {
    setValueId((prev) => (prev = 50));
  }

  let ConfirmColor = valueClass > 50 ? style.confirmColor : "";
  let mainBlockColor = valueClass > 50 ? style.bg__answer : style.bg__colorSied;

  let ConfirmColorId = valueID > 50 ? style.confirmColor : "";
  let mainBlockColorId = valueID > 50 ? style.bg__answer : style.confirmColor;

  return (
    <SectionWithHeading title="class selector / ID selector" headingLevel="h3">
      <DescriptionQas>
        How select <span className={style.cube__two}>.supper-class</span>?
      </DescriptionQas>
      <DescriptionQas>
        How select <span className={style.cube__id}>#mega-id</span>?
      </DescriptionQas>
      <Faq text="The CSS class selector matches elements based on the contents of their class attribute. The CSS ID selector matches an element based on the value of the element's id attribute. In order for the element to be selected, its id attribute must match exactly the value given in the selector." />
      <div className={style.btn__group}>
        <button className={style.btn__button} onClick={hendelClickValueClass}>
          select .supper-class
        </button>
        <button onClick={hendelClickResetClass} className={style.reset__btn}>
          <VisuallyHidden>reset</VisuallyHidden>
          <IconReset />
        </button>
      </div>
      <div className={style.btn__group}>
        <button className={style.btn__button} onClick={hendelClickValueID}>
          select #mega-id
        </button>
        <button onClick={hendelClickResetID} className={style.reset__btn}>
          <VisuallyHidden>reset</VisuallyHidden>
          <IconReset />
        </button>
      </div>
      <div className={style.box}>
        <AnimatePresence>
          {valueClass > 50 && (
            <motion.code
              className={style.code__box}
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{
                opacity: 0,
                x: -200,
              }}
              transition={{
                opacity: { duration: 0.6 },
                x: { duration: 1.2 },
              }}
            >
              <span className={style.cube__two}>.supper-class</span> &#123;
              background: yellow;&#125;{" "}
            </motion.code>
          )}
        </AnimatePresence>
      </div>
      <div className={style.box}>
        <AnimatePresence>
          {valueID > 50 && (
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
              <span className={style.cube__id}>#mega-id</span> &#123;
              background: yellow;&#125;{" "}
            </motion.code>
          )}
        </AnimatePresence>
      </div>
      <div className={style.universal__group}>
        <div className={style.flex__group}>
          <span>p</span>
          <Cube
            width={50}
            height={50}
            depth={50}
            cuboidClass={style.cuboid__animation}
          />
          <Cube width={150} height={50} depth={150} />
        </div>
        <div className={style.flex__group}>
          <span>.supper-class</span>
          <Cube
            width={50}
            height={50}
            depth={50}
            className={mainBlockColor}
            cuboidClass={style.cuboid__animation}
          />
          <Cube
            width={150}
            height={valueClass}
            depth={150}
            className={ConfirmColor}
          />
        </div>
        <div className={style.flex__group}>
          <span>section</span>
          <Cube
            width={50}
            height={50}
            depth={50}
            className={style.bg__colorSiedTwo}
            cuboidClass={style.cuboid__animation}
          />
          <Cube width={150} height={50} depth={150} />
        </div>
        <div className={style.flex__group}>
          <span>#mega-id</span>
          <Cube
            width={50}
            height={50}
            depth={50}
            className={mainBlockColorId}
            cuboidClass={style.cuboid__animation}
          />
          <Cube
            width={150}
            height={valueID}
            depth={150}
            className={ConfirmColorId}
          />
        </div>
        <div className={style.flex__group}>
          <span>h5</span>
          <Cube
            width={50}
            height={50}
            depth={50}
            className={style.bg__colorSiedFour}
            cuboidClass={style.cuboid__animation}
          />
          <Cube width={150} height={50} depth={150} />
        </div>
      </div>
    </SectionWithHeading>
  );
}
