import Head from 'next/head';
import AnimeList from '../components/AnimeList';

export default function Home() {
  return (
    <>
      <Head>
        <title>OtakuVerse - Watch Anime Free</title>
      </Head>
      <main className="bg-gray-900 text-white min-h-screen">
        <h1 className="text-4xl font-bold text-center py-6">Trending Anime</h1>
        <AnimeList />
      </main>
    </>
  );
}
