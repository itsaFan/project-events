import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { getFeaturedEvents } from "@/dummy-data";
import EventList from "@/components/events/Event-List";
import PageHead from "@/components/UI/page-title";

export default function Homepage() {
  const featuredEvents = getFeaturedEvents();

  return (
    <>
      <PageHead pageTitle="Homepage" />
      <main>
        <div>
          <h1 className="center">Homepage</h1>
          <EventList items={featuredEvents} />
        </div>
      </main>
    </>
  );
}
