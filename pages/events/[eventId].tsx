import EventContent from "@/components/event-detail/event-content";
import EventLogistics from "@/components/event-detail/event-logistics";
import EventSummary from "@/components/event-detail/event-summary";
import Button from "@/components/UI/Button";
import ErrorAlertUI from "@/components/UI/error-alert-ui";
import PageHead from "@/components/UI/page-title";
import { getAllEvents, getEventById, getFeaturedEvents } from "@/helpers/api-util";
import { EventDetailContext, EventDetailPageProps } from "@/helpers/interface";
import { Fragment } from "react";


export default function EventDetailPage(props: EventDetailPageProps) {
  const event = props.eventDetail;

  if (!event) {
    return (
      <Fragment>
        <ErrorAlertUI>
          <p>Sorry, No Event Found</p>
        </ErrorAlertUI>
        <div className="center">
          <Button link="/events">Back to All Events</Button>
        </div>
      </Fragment>
    );
  }

  return (
    <Fragment>
      <PageHead pageTitle={event.title} />
      <EventSummary title={event.title} />
      <EventLogistics date={event.date} address={event.location} image={event.image} imageAlt={event.title} />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
}

export async function getStaticProps(context: EventDetailContext) {
  const eventId = context.params.eventId;
  const event = await getEventById(eventId);

  return {
    props: {
      eventDetail: event,
    },
    revalidate: 10
  };
}

export async function getStaticPaths() {
  const events = await getFeaturedEvents();
  const paths = events.map((event) => ({ params: { eventId: event.id } }));
  return {
    paths: paths,
    //on this function i use getFeaturedEvents to get all the featured event on the database because if i show allevents from the beginning
    //and the event have hundres or thousand of data, it can be redundant
    // so set fallback to true will tell nextJs to dynamically generate a page if it encounter the page that was not pre-generated before.
    // or set fallback to "blocking" will make the page to wait to fetch the data first then render it
    fallback: "blocking",
  };
}
