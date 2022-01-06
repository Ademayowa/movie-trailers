import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Slider from '@/components/Slider';
import Brands from '@/components/Brands';
import MoviesCollection from '@/components/MoviesCollection';
import ShowCollection from '@/components/ShowCollection';

export default function Home({
  popularMovies,
  popularShows,
  top_ratedMovies,
  top_ratedShows,
}) {
  return (
    <Layout title='Watch the best Movie Trailers'>
      <main className='main'>
        <Slider />
        <Brands />
        <MoviesCollection results={popularMovies} title='Popular Movies' />
        <ShowCollection results={popularShows} title='Popular Shows' />
        <MoviesCollection results={top_ratedMovies} title='Top Rated Movies' />
        <ShowCollection results={top_ratedShows} title='Top Rated Shows' />
      </main>
    </Layout>
  );
}

export async function getServerSideProps() {
  const BASE_URL = 'https://api.themoviedb.org/3';

  const [
    popularMoviesRes,
    popularShowsRes,
    top_ratedMoviesRes,
    top_ratedShowsRes,
  ] = await Promise.all([
    fetch(
      ` ${BASE_URL}/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`
    ),

    fetch(
      `${BASE_URL}/tv/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`
    ),
    fetch(
      `${BASE_URL}/movie/top_rated?api_key=${process.env.API_KEY}&language=en-US&page=1`
    ),
    fetch(
      `${BASE_URL}/tv/top_rated?api_key=${process.env.API_KEY}&language=en-US&page=1`
    ),
  ]);

  const [popularMovies, popularShows, top_ratedMovies, top_ratedShows] =
    await Promise.all([
      popularMoviesRes.json(),
      popularShowsRes.json(),
      top_ratedMoviesRes.json(),
      top_ratedShowsRes.json(),
    ]);

  return {
    props: {
      popularMovies: popularMovies.results,
      popularShows: popularShows.results,
      top_ratedMovies: top_ratedMovies.results,
      top_ratedShows: top_ratedShows.results,
    },
  };
}
