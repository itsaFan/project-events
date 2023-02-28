import classes from "./css/event-content.module.css"
import React, { ReactNode } from 'react';

type Props = {
    children: ReactNode;
}


export default function EventContent(props: Props) {
    return (
      <section className={classes.content}>
        {props.children}
      </section>
    );
  }