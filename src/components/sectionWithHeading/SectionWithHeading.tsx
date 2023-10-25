import React from "react";
import { ReactNode } from "react";
import { Container } from "../container/Container";
import style from "./style.module.css";
import { TsHeading } from "../heading/Heading";
import clsx from "clsx";

interface SectionWithHeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement> {
  title?: string;
  children?: ReactNode;
  headingLevel: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  className?: string;
  subClassName?: string;
}

function SectionWithHeading({
  title,
  children,
  headingLevel,
  className,
  subClassName,
}: SectionWithHeadingProps) {
  return (
    <section className={clsx(style.section, className)}>
      <Container>
        <TsHeading subClassName={subClassName} headingLevel={headingLevel}>
          {title}
        </TsHeading>
        {children}
      </Container>
    </section>
  );
}

export default SectionWithHeading;
