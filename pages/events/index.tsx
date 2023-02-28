import EventList from "@/components/events/Event-List";
import EventSearch from "@/components/events/Event-Search";
import PageHead from "@/components/UI/page-title";
import { getAllEvents } from "@/dummy-data";
import Head from "next/head";
import { useRouter } from "next/router";

export default function EventsPage() {
  const events = getAllEvents();
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
        <EventList items={events} />
      </div>
    </>
  );
}
