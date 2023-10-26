"use client";
import React, { useEffect, useState, useRef, MutableRefObject } from "react";
import styles from "./style.module.css";
import VisuallyHidden from "../visuallyhidden/VisuallyHidden";
import Cube from "../cube/Cube";
import IconCloseCircleOutline from "@/icons/IconCloseCircleOutline";

interface ToastyProps {
  text?: string;
}

export default function Faq({ text }: ToastyProps) {
  const [isShown, setIsShown] = useState(false);
  const handelClickButtonShow = () => {
    setIsShown((prev) => !prev);
  };
  const handelClickButtonClose = () => {
    setIsShown(false);
  };

  const translateX = isShown ? "0%" : "300%";

  return (
    <>
      <button className={styles.buttonOpen} onClick={handelClickButtonShow}>
        <Cube
          width={50}
          height={50}
          depth={50}
          text="?"
          cuboidClass={styles.cuboid__animation}
          className={styles.bg__color}
        />
        <VisuallyHidden>open faq</VisuallyHidden>
      </button>
      <div className={styles.wrapper}>
        <div
          className={styles.character}
          style={{
            transform: `translateX(${translateX})`,
          }}
        >
          <button
            onClick={handelClickButtonClose}
            className={styles.close__btn}
          >
            <VisuallyHidden>close</VisuallyHidden>
            <IconCloseCircleOutline />
          </button>
          <p>{text}</p>
        </div>
      </div>
    </>
  );
}
