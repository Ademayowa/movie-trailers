import { useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '@/components/Layout';
import Image from 'next/image';
import {
  XIcon,
  ViewListIcon,
  BookmarkIcon,
  StarIcon,
} from '@heroicons/react/solid';
import ReactPlayer from 'react-player/lazy';

export default function Movie({ result }) {
  const BASE_URL_ONE = 'https://image.tmdb.org/t/p/original/';

  const [showPlayer, setShowPlayer] = useState(false);
  const router = useRouter();

  const index = result.videos.results.findIndex(
    (element) => element.type === 'Trailer'
  );

  return (
    <Layout title={result.title || result.original_name}>
      <section className='relative z-50'>
        <div className='relative min-h-[calc(100vh-72px)] max-h-screen'>
          <Image
            src={
              `${BASE_URL_ONE}${result.backdrop_path || result.poster_path}` ||
              `${BASE_URL_ONE}${result.poster_path}`
            }
            layout='fill'
            objectFit='cover'
          />
        </div>

        <div className='absolute inset-y-28 md:inset-y-auto md:bottom-20 inset-x-4 md:inset-x-12 space-y-6 z-50'>
          <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold'>
            {result.title || result.original_name}
          </h1>

          <div className='flex items-center space-x-4'>
            <button
              className='text-xs md:text-base bg-black/30 text-[#f9f9f9] border border-[#f9f9f9] flex items-center justify-center py-2.5 px-6 rounded hover:bg-[#091725] cursor-pointer'
              onClick={() => setShowPlayer(true)}
            >
              <img
                src='/images/play-icon-white.svg'
                alt=''
                className='h-6 md:h-8'
              />
              <span className='uppercase font-medium tracking-wide'>
                Trailer
              </span>
            </button>

            <div className='rounded-full flex items-center justify-center w-11 h-11 cursor-pointer bg-[#091725]'>
              <ViewListIcon className='h-6' />
            </div>

            <div className='rounded-full flex items-center justify-center w-11 h-11 cursor-pointer bg-[#091725]'>
              <BookmarkIcon className='h-6' />
            </div>

            <div className='rounded-full flex items-center justify-center w-11 h-11 cursor-pointer bg-[#091725]'>
              <StarIcon className='h-6' />
            </div>
          </div>

          <p className='text-xs md:text-sm'>
            {result.release_date || result.first_air_date} •{' '}
            {Math.floor(result.runtime / 60)}h {result.runtime % 60}m •{' '}
            {result.genres.map((genre) => genre.name + ' ')}{' '}
          </p>
          <h4 className='text-sm md:text-lg max-w-4xl'>
            {result.overview.length > 180
              ? result.overview.substring(0, 210) + '...'
              : result.overview}
          </h4>
        </div>

        {/* Bg Overlay */}
        {showPlayer && (
          <div className='absolute inset-0 bg-black opacity-50 h-full w-full z-50'></div>
        )}

        <div
          className={`absolute top-3 inset-x-[7%] md:inset-x-[13%] rounded overflow-hidden transition duration-1000 ${
            showPlayer ? 'opacity-100 z-50' : 'opacity-0'
          }`}
        >
          <div className='flex items-center justify-between bg-black text-[#f9f9f9] p-3.5'>
            <span className='font-semibold'>Play Trailer</span>
            <div
              className='cursor-pointer w-8 h-8 flex justify-center items-center rounded-lg opacity-50 hover:opacity-75 hover:bg-[#0F0F0F]'
              onClick={() => setShowPlayer(false)}
            >
              <XIcon className='h-5' />
            </div>
          </div>
          <div className='relative pt-[56.25%]'>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${result.videos?.results[index]?.key}`}
              width='100%'
              height='100%'
              style={{ position: 'absolute', top: '0', left: '0' }}
              controls={true}
              playing={showPlayer}
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.query;
  const BASE_URL = 'https://api.themoviedb.org/3';

  const res = await fetch(
    `${BASE_URL}/movie/${id}?api_key=${process.env.API_KEY}&language=en-US&append_to_response=videos`
  );
  const result = await res.json();

  return {
    props: {
      result,
    },
  };
}
