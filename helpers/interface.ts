export interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  image: string;
  isFeatured: boolean;
}

export interface HomepageProps {
  events: Event[];
}

export interface EventDetailPageProps {
    eventDetail: {
      id: string;
      title: string;
      description: string;
      location: string;
      date: string;
      image: string;
      isFeatured: boolean;
    };
  }

export type EventDetailContext = {
  params: {
    eventId: string;
  };
};

export interface EventsPageProps {
    events: Event[];
}
