import EventList from "@/components/events/Event-List";
import EventSearch from "@/components/events/Event-Search";
import PageHead from "@/components/UI/page-title";
import { getAllEvents } from "@/helpers/api-util";
import { EventsPageProps } from "@/helpers/interface";
import Head from "next/head";
import { useRouter } from "next/router";

export default function EventsPage(props: EventsPageProps) {
  const pageAllEvents = props.events
  
  const router = useRouter();
  function findEventsHandler(year: String, month: String) {
    const fullPath = `events/${year}/${month}/`;
    router.push(fullPath);
  }

  return (
    <>
      <PageHead pageTitle="All Events" />
      <div>
        <h1 className="center">Display All Events page</h1>
        <EventSearch onSearchEvent={findEventsHandler} />
        <EventList items={pageAllEvents} />
      </div>
    </>
  );
}


export async function getStaticProps() {
  const allEvents = await getAllEvents()
  return {
    props: {
      events: allEvents
    }, revalidate: 30
  }
}
