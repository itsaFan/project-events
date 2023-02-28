import EventList from "@/components/events/Event-List";
import Button from "@/components/UI/Button";
import ErrorAlertUI from "@/components/UI/error-alert-ui";
import FilteredEventsTitle from "@/components/UI/event-result-title";
import { getFilteredEvents } from "@/dummy-data";
import { useRouter } from "next/router";
import { Fragment } from "react";

export default function FilteredEventsPage() {
  const router = useRouter();
  const filterData = router.query.slug;
  // console.log(filterData);

  if (!filterData) {
    return <p className="center">loading...</p>;
  }

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  const numYear = +filteredYear; //since url always in string , by adding + will transform it into a number
  const numMonth = +filteredMonth;

  //if the url input is not number will return error or number input wreong
  if (isNaN(numYear) || isNaN(numMonth) || numYear > 2030 || numYear < 2021 || numMonth < 1 || numMonth > 12) {
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

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
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

  return (
    <div>
      {/* <h1 className="center">Events Available</h1> */}
      <FilteredEventsTitle date={date} />
      <EventList items={filteredEvents} />
    </div>
  );
}
