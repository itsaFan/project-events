import React, { ReactNode } from 'react';
import classes from "./css/logistics-item.module.css";

type Props = {
    icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    children: ReactNode;
}

export default function LogisticsItem(props: Props) {
  const { icon: Icon } = props;

  return (
    <li className={classes.item}>
      <span className={classes.icon}>
        <Icon />
      </span>
      <span className={classes.content}>{props.children}</span>
    </li>
  );
}