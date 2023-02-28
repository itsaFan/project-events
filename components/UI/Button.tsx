import Link from "next/link";
import React, { ReactNode } from "react";
import classes from "./css/Btn.module.css";

type Props = {
  link: string;
  children: ReactNode;
  onClick?: () => void;
};

export default function Button(props: Props) {
  if (props.link) {
    return (
      <div>
        <Link href={props.link} className={classes.btn}>
          {props.children}
        </Link>
      </div>
    );
  }
  return (
    <button className={classes.btn} onClick={props.onClick}>
      {props.children}
    </button>
  );
}
