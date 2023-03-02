import Head from "next/head";
import { ReactNode } from "react";
import classes from "./css/error-alert-ui.module.css";


type Props = {
  children: ReactNode;
};

export default function ErrorAlertUI(props: Props) {

  return (
    <>
      <Head>
        <title>Not Found </title>
        <meta name="description" content="No Event Found" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={classes.alert}>{props.children}</div>
    </>
  );
}
