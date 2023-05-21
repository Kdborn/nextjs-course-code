import EventItem from "./event-item";

function EventList(props) {
  const { items } = props;

  return (
    <ul>
      {items.map((event) => (
        <EventItem
          title={event.title}
          image={event.image}
          date={event.date}
          location={event.location}
          id={event.id}
          key={event.id}
        />
      ))}
    </ul>
  );
}

export default EventList;
