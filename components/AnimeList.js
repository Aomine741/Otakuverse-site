import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function AnimeList() {
  const [anime, setAnime] = useState([]);

  useEffect(() => {
    fetch('https://api.consumet.org/anime/gogoanime/top-airing')
      .then(res => res.json())
      .then(data => setAnime(data.results || []));
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
      {anime.map((item, index) => (
        <Link key={index} href={`/anime/${item.id}`}>
          <div className="bg-gray-800 p-2 rounded hover:bg-gray-700 transition">
            <img src={item.image} alt={item.title} className="rounded w-full" />
            <h2 className="text-sm mt-2">{item.title}</h2>
          </div>
        </Link>
      ))}
    </div>
  );
}
