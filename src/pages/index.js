import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Inter } from '@next/font/google';
import styles from '@/styles/Home.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function Home({ events_categories }) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header >
        <nav>
          <Link href='/' passHref>Home</Link>
          <Link href='/events' passHref>Events</Link>
          <Link href='/about-us' passHref>About Us</Link>
        </nav>
      </header>
      <main className={styles.main}>
        {events_categories.map(ev =>
          <Link href={`/events/${ev.id}`} key={ev.id} passHref>
              <Image src={ev.image} alt={ev.title} width={200} height={100} style={{ height: '100%' }} />
              <h2>{ev.title}</h2>
              <p>{ev.description}</p>
          </Link>)}
      </main>
      <footer className={styles.footer}>
        <p>©Project</p>
      </footer>
    </>
  );
}
export async function getServerSideProps() {
  const { events_categories } = await import('/data/data.json');
  return {
    props: {
      events_categories: events_categories,
    },
  };
}