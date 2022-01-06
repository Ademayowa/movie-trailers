import Head from 'next/head';
import Header from './Header';

export default function Layout({ title, description, keywords, children }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content='description' />
        <meta name='keywords' content='keywords' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />
      {children}
    </>
  );
}

Layout.defaultProps = {
  title: 'Watch the latest Movie Trailers',
  description: 'Movies, Tv shows and Videos',
};
