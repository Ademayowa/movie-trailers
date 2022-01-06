import ShowThumbnail from './ShowThumbnail';

export default function ShowCollection({ title, results }) {
  return (
    <div className='flex flex-col space-y-2 my-8 px-8 max-w-[1400px] mx-auto'>
      <h2 className='font-semibold'>{title}</h2>
      <div className='flex space-x-6 overflow-y-hidden overflow-x-scroll p-2 -m-2'>
        {results.map((result) => (
          <ShowThumbnail key={result.id} result={result} />
        ))}
      </div>
    </div>
  );
}
