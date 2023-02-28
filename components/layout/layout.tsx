import { Fragment } from "react";
import React, { ReactNode } from "react";
import MainNav from "./nav";

type Props = {
  children: ReactNode;
};

export default function Layout(props: Props) {
  return (
    <Fragment>
      <MainNav />
      <main>{props.children}</main>
    </Fragment>
  );
}
