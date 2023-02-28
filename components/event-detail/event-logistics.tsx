import classes from "./css/event-logistics.module.css";
import LogisticsItem from "./logistics-item";
import DateIcon from "../icons/date-icon";
import AddressIcon from "../icons/address-icon";

type Props = {
  date: string;
  address: string;
  image: string;
  imageAlt: string;
};

export default function EventLogistics(props: Props) {
  const { date, address, image, imageAlt } = props;

  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const addressText = address.replace(", ", "\n");

  return (
    <section className={classes.logistics}>
      <div className={classes.image}>
        <img src={`/${image}`} alt={imageAlt} />
      </div>
      <ul className={classes.list}>
        <LogisticsItem icon={DateIcon}>
          <time>{humanReadableDate}</time>
        </LogisticsItem>
        <LogisticsItem icon={AddressIcon}>
          <address>{addressText}</address>
        </LogisticsItem>
      </ul>
    </section>
  );
}
