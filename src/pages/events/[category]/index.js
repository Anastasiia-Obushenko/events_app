import Image from 'next/image';
import Link from 'next/link';

const EventsCategoryPage = ({ events, id }) => {
    return (
        <div>
            <h1>Events in {id.charAt(0).toUpperCase() + id.slice(1)}</h1>
            {events.map(ev =>
                <Link key={ev.id} href={`/events/${id}/${ev.id}`} passHref>
                        <Image src={ev.images[0].url} width={250} height={150} />
                        <h2>{ev.name}</h2>
                        <p>{ev.description}</p>
                </Link>
            )}
        </div>
    );
};

export default EventsCategoryPage;

export async function getStaticPaths() {
    const { events_categories } = await import('/data/data.json');
    const allPaths = events_categories.map(ev => {
        return {
            params: {
                category: ev.id.toString(),
            }
        };
    });
    return {
        paths: allPaths,
        fallback: false
    };
}

export async function getStaticProps(context) {
    const id = context.params.category;
    const res = await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=${process.env.API_KEY}&city=${id}&locale=*&size=15&sort=date,asc&page=1`);
    const data = await res.json();
    const { events } = data._embedded;
    return {
        props: { events, id },
    };
}