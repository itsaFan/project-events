import EventItem from "./Event-Item";
import { Event } from "./event";
import classes from "./css/Event-List.module.css";

interface EventListProps {
  items: Event[];
}

export default function EventList(props: EventListProps) {
  const { items } = props;
  return (
    <div>
      <ul className={classes.list}>
        {items.map((event) => (
          <EventItem key={event.id} id={event.id} title={event.title} location={event.location} date={event.date} image={event.image} />
        ))}
      </ul>
    </div>
  );
}

// import EventItem from "./EventItem";

// export default function EventList(props) {
//   const { items } = props;
//   return (
//     <div>
//       <ul>
//         {items.map((event) => (
//           <EventItem key={event.id} id={event.id} title={event.title} location={event.location} date={event.date} image={event.image} />
//         ))}
//       </ul>
//     </div>
//   );
// }
