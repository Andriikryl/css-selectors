"use client";
import React from "react";
import style from "./style.module.css";
import clsx from "clsx";

interface CubeProps {
  width: number;
  height: number;
  depth: number;
  className?: string;
  cuboidClass?: string;
  text?: string;
}

export default function Cube({
  width,
  height,
  depth,
  className,
  cuboidClass,
  text,
}: CubeProps) {
  return (
    <div
      className={clsx(style.cuboid, cuboidClass)}
      style={{
        "--width": `${width}px`,
        "--height": `${height}px`,
        "--depth": `${depth}px`,
      }}
    >
      <div className={clsx(style.cuboid__side, className)}>{text}</div>
      <div className={clsx(style.cuboid__side, className)}>{text}</div>
      <div className={clsx(style.cuboid__side, className)}>{text}</div>
      <div className={clsx(style.cuboid__side, className)}>{text}</div>
      <div className={clsx(style.cuboid__side, className)}>{text}</div>
      <div className={clsx(style.cuboid__side, className)}>{text}</div>
    </div>
  );
}
