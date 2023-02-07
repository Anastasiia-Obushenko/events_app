import React from 'react';

const EventsPage = ({ events_categories }) => {
  return (
    <div>
      <h1>Events Page</h1>
      {events_categories.map(ev => {
        <a href={`/events/${ev.id}`} key={ev.id}>
          <Image src={ev.image} alt={ev.title} width={200} height={100} style={{ height: '100%' }} />
          <h2>{ev.title}</h2>
        </a>;
      })}

    </div>
  );
};

export default EventsPage;

export async function getSaticProps() {
  const { events_categories } = await import('/data/data.json');
  console.log(events_categories);
  return {
    props: {
      events_categories: events_categories,
    },
  };
}