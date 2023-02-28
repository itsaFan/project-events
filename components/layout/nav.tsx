import Link from "next/link";
import classes from "./css/nav.module.css";

export default function MainNav() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href="/">itsaFan Event</Link>
      </div>
      <nav className={classes.navigation}>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/events">All Events</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
