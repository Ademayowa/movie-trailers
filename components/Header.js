import Image from 'next/image';
import {
  HomeIcon,
  SearchIcon,
  PlusIcon,
  StarIcon,
} from '@heroicons/react/solid';
import { useRouter } from 'next/router';

export default function Header() {
  const router = useRouter();

  return (
    <header className='header'>
      <Image
        src='/images/logo.svg'
        alt=''
        width={80}
        height={80}
        className='cursor-pointer'
        onClick={() => router.push('/')}
      />

      <div className='ml-auto flex items-center space-x-6'>
        <a className='header-link group' onClick={() => router.push('/')}>
          <HomeIcon className='h-4' />
          <span className='span'>Home</span>
        </a>
        <a className='header-link group'>
          <img src='/images/movie-icon.svg' alt='' className='h-5' />
          <span className='span'>Movies</span>
        </a>
        {/* <a className='header-link group'>
          <img src='/images/series-icon.svg' alt='' className='h-5' />
          <span className='span'>Tv Shows</span>
        </a> */}
      </div>
    </header>
  );
}
