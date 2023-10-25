import React from "react";
import { ReactNode } from "react";
import { Container } from "../container/Container";
import style from "./style.module.css";
import { TsHeading } from "../heading/Heading";

interface SectionWithHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  title?: string;
  children?: ReactNode;
  headingLevel:  "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" ;
}

function SectionWithHeading({
  title,
  children,
  headingLevel,
}: SectionWithHeadingProps) {
  return (
    <section className={style.section}>
      <Container>
        <TsHeading headingLevel={headingLevel}>{title}</TsHeading>
        {children}
      </Container>
    </section>
  );
}

export default SectionWithHeading;
