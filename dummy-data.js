const DUMMY_EVENTS = [
  {
    id: "e1",
    title: "Seaside Event for Everyone",
    description:
      "A seaside getaway is a perfect escape for anyone looking to relax, unwind and enjoy the beauty of the coast. Whether you prefer to lounge on the beach, swim in the crystal-clear waters, or indulge in delicious seafood cuisine, there is something for everyone. The breathtaking views of the ocean, the refreshing sea breeze, and the calming sound of the waves crashing on the shore create a serene atmosphere that is perfect for a peaceful retreat or a fun-filled family vacation. From romantic strolls on the beach to adventurous water sports, a seaside getaway is an experience that everyone can enjoy.",
    location: "Ahmad Yani Street, Kab. Anambas, Kepulauan Riau",
    date: "2022-12-12",
    image: "images/seaside-event.jpg",
    isFeatured: false,
  },
  {
    id: "e2",
    title: "Countryside Event for Everyone",
    description:
      "Countryside event is a great opportunity for anyone looking to escape the hustle and bustle of the city and immerse themselves in nature. From music festivals and fairs to farmers markets and outdoor activities, there is something for everyone to enjoy in the countryside. The fresh air, rolling hills, and stunning landscapes create a serene atmosphere that is perfect for a relaxing getaway or an adventurous day trip. Visitors can enjoy hiking, biking, horseback riding, and other outdoor activities, or simply sit back and enjoy the beauty of the scenery. With locally sourced food, traditional crafts, and charming rural communities, a countryside event is an experience that everyone can appreciate and enjoy.",
    location: "New Wall Street 5, Kab. Anambas, Kepulauan Riau",
    date: "2023-01-25",
    image: "images/countryside-event.jpg",
    isFeatured: true,
  },
  {
    id: "e3",
    title: "Mountain Event for Everyone",
    description:
      "A mountain event is an exciting opportunity for anyone looking to experience the beauty and adventure of the great outdoors. From hiking and rock climbing to skiing and snowboarding, there are a variety of activities that visitors can enjoy on a mountain getaway. The breathtaking views of the peaks and valleys, the crisp mountain air, and the peaceful serenity of the wilderness create a refreshing and rejuvenating atmosphere that is perfect for a relaxing vacation or an action-packed adventure. Visitors can also explore charming mountain towns and villages, sample delicious local cuisine, and immerse themselves in the rich culture and history of the region. Whether you are a nature lover, an adventure seeker, or just looking for a peaceful escape, a mountain event is an experience that everyone can enjoy.",
    location: "My Street 01, Bandung, Jawa Barat",
    date: "2023-02-14",
    image: "images/mountain-event.jpg",
    isFeatured: true,
  },
  {
    id: "e4",
    title: "Summer Resort Event for Everyone",
    description:
      "A summer resort event is the perfect way to indulge in relaxation and leisure activities. Whether you are seeking a family vacation or a romantic getaway, a summer resort offers a range of activities that everyone can enjoy. From sunbathing and swimming in the crystal-clear waters to playing sports and exploring local attractions, there is never a dull moment. Visitors can also indulge in spa treatments, enjoy delicious cuisine, and experience the local culture and entertainment. With endless options for relaxation and fun, a summer resort event is an experience that everyone can appreciate and enjoy.",
    location: "Resort 14, Okinawa, Japan",
    date: "2023-02-28",
    image: "images/summer-event.jpg",
    isFeatured: false,
  },
];

export function getFeaturedEvents() {
  return DUMMY_EVENTS.filter((event) => event.isFeatured);
}

export function getAllEvents() {
  return DUMMY_EVENTS;
}

export function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter;

  let filteredEvents = DUMMY_EVENTS.filter((event) => {
    const eventDate = new Date(event.date);
    return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
  });

  return filteredEvents;
}

export function getEventById(id) {
  return DUMMY_EVENTS.find((event) => event.id === id);
}
