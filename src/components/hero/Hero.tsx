import React from "react";
import SectionWithHeading from "../sectionWithHeading/SectionWithHeading";
import style from "./style.module.css";
export default function Hero() {
  return (
    <SectionWithHeading
      className={style.hero}
      subClassName={style.title__one}
      headingLevel="h1"
      title="Css selectors"
    ></SectionWithHeading>
  );
}
