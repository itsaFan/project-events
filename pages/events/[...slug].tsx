import EventList from "@/components/events/Event-List";
import Button from "@/components/UI/Button";
import ErrorAlertUI from "@/components/UI/error-alert-ui";
import FilteredEventsTitle from "@/components/UI/event-result-title";
import { Event } from "@/helpers/interface";
import { useRouter } from "next/router";
import { Fragment, useEffect, useState } from "react";
import useSWR from "swr";


//using client-side data fetching - since I want to quickly get to the page and the data shown or the purpose of this page is not important on search engine
export default function FilteredEventsPage() {
  const [loadedEvents, setLoadedEvents] = useState<Event[]>();
  const router = useRouter();

  const filterData = router.query.slug;
  // console.log(filterData);

  const { data, error } = useSWR("https://events-website-database-default-rtdb.firebaseio.com/events.json", (url) => fetch(url).then((res) => res.json()));

  useEffect(() => {
    if (data) {
      const events = [];

      for (const key in data) {
        events.push({
          id: key,
          ...data[key],
        });
      }

      setLoadedEvents(events);
    }
  }, [data]);

  if (!loadedEvents) {
    return <p className="center">Loading...</p>;
  }

  const filteredYear = filterData?.[0] || "";
  const filteredMonth = filterData?.[1] || "";

  const numYear = +filteredYear; //since url always in string , by adding + will transform it into a number
  const numMonth = +filteredMonth;

  //if the url input is not number will return error or number input wreong
  if (isNaN(numYear) || isNaN(numMonth) || numYear > 2030 || numYear < 2021 || numMonth < 1 || numMonth > 12 || error) {
    return (
      <Fragment>
        <ErrorAlertUI>
          <p>
            Invalid Input! <br />
            Please adjust your year and month input
          </p>
        </ErrorAlertUI>
        <div className="center">
          <Button link="/events">Back to All Events</Button>
        </div>
      </Fragment>
    );
  }

  const filteredEvents = loadedEvents.filter((event: Event) => {
    const eventDate = new Date(event.date);
    return eventDate.getFullYear() === numYear && eventDate.getMonth() === numMonth - 1;
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <Fragment>
        <ErrorAlertUI>
          <p>Sorry no event found on this date!</p>
        </ErrorAlertUI>
        <div className="center">
          <Button link="/events">Back to All Events</Button>
        </div>
      </Fragment>
    );
  }

  //note: numMonth - 1 is because month is zero based index, the date constructor function expect the month to begin at index zero not 1
  const date = new Date(numYear, numMonth - 1);
  console.log(filteredEvents);
  return (
    <div>
      {/* <h1 className="center">Events Available</h1> */}
      <FilteredEventsTitle date={date} />
      <EventList items={filteredEvents} />
    </div>
  );
}

// export async function getServerSideProps(context: SlugServerContext) {
//   const { params } = context;
//   const filterData = params.slug;
//   const filteredYear = filterData[0];
//   const filteredMonth = filterData[1];

//   const numYear = +filteredYear; //since url always in string , by adding + will transform it into a number
//   const numMonth = +filteredMonth;

//   //if the url input is not number will return error or number input wreong
//   if (isNaN(numYear) || isNaN(numMonth) || numYear > 2030 || numYear < 2021 || numMonth < 1 || numMonth > 12) {
//     return {
//       // notFound: true, //this will redirect to 404 page if the search input is wrong
//       // redirect: { //or we can redirect it to our customer error page
//       //   destination: 'error'
//       // }
//       props: { hasError: true }, //or use this
//     };
//   }

//   const filteredEvents = await getFilteredEvents({
//     year: numYear,
//     month: numMonth,
//   });

//   return {
//     props: {
//       events: filteredEvents,
//       date: {
//         year: numYear,
//         month: numMonth,
//       },
//     },
//   };
// }
