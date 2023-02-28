import styles from "@/styles/Home.module.css";
import { getFeaturedEvents } from "@/helpers/api-util";
import EventList from "@/components/events/Event-List";
import PageHead from "@/components/UI/page-title";
import { HomepageProps } from "@/helpers/interface";

export default function Homepage(props: HomepageProps) {
  return (
    <>
      <PageHead pageTitle="Homepage" />
      <main>
        <div>
          <h1 className="center">Homepage</h1>
          <EventList items={props.events} />
        </div>
      </main>
    </>
  );
}

export async function getStaticProps() {
  // console.log("revalidate");
  const featuredEvents = await getFeaturedEvents();
  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 1800
  };
}
