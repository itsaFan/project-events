import EventContent from "@/components/event-detail/event-content";
import EventLogistics from "@/components/event-detail/event-logistics";
import EventSummary from "@/components/event-detail/event-summary";
import Button from "@/components/UI/Button";
import ErrorAlertUI from "@/components/UI/error-alert-ui";
import PageHead from "@/components/UI/page-title";
import { getEventById } from "@/dummy-data";
import { useRouter } from "next/router";
import { Fragment } from "react";

export default function EventDetailPage() {
  const router = useRouter();

  const eventId = router.query.eventId;
  const event = getEventById(eventId);

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
      <PageHead pageTitle="Event Detail" />
      <EventSummary title={event.title} />
      <EventLogistics date={event.date} address={event.location} image={event.image} imageAlt={event.title} />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
}
