import Image from 'next/image';
import Link from 'next/link';

const EventsPage = ({ events_categories }) => {
  return (
    <div>
      <h1>Events Page</h1>
      {events_categories.map(ev =>
        <Link href={`/events/${ev.id}`} key={ev.id} passHref>
            <Image src={ev.image} alt={ev.title} width={200} height={100} style={{ height: '100%' }} />
            <h2>{ev.title}</h2>
        </Link>
      )}
    </div>
  );
};

export default EventsPage;

export async function getStaticProps() {
  const { events_categories } = await import('/data/data.json');
  return {
    props: {
      events_categories: events_categories,
    },
  };
}