import Image from "next/image";
import SpiderFarFromHomeMovieImage from "@/public/assets/images/spider-far-from-home.png";
import JokerMovieImage from "@/public/assets/images/joker.png";
import Movie from "@/app/components/movie";

export default function Home() {

    const upcomingMovies = [
        {
            'id': 1,
            'image': SpiderFarFromHomeMovieImage,
            'name': 'Spiderman: Far From Home',
            'genre': 'Action',
            'releaseDate': '12 Dec 2022',
            'pg': 'pg-13',
        },
        {
            'id': 2,
            'image': JokerMovieImage,
            'name': 'Joker',
            'genre': 'Action',
            'releaseDate': '12 Dec 2022',
            'pg': 'pg-13',
        },
        {
            'id': 3,
            'image': SpiderFarFromHomeMovieImage,
            'name': 'Spiderman: Far From Home',
            'genre': 'Crime',
            'releaseDate': '12 Dec 2022',
            'pg': 'pg-13',
        },
        {
            'id': 4,
            'image': SpiderFarFromHomeMovieImage,
            'name': 'Spiderman: Far From Home',
            'genre': 'Action',
            'releaseDate': '12 Dec 2022',
            'pg': 'pg-13',
        },
        {
            'id': 5,
            'image': SpiderFarFromHomeMovieImage,
            'name': 'Spiderman: Far From Home',
            'genre': 'Action',
            'releaseDate': '12 Dec 2022',
            'pg': 'pg-13',
        },
    ];

    const trendingMovies = [
        {
            'id': 1,
            'image': SpiderFarFromHomeMovieImage,
            'name': 'Spiderman: Far From Home',
            'genre': 'Action',
            'releaseDate': '12 Dec 2022',
            'pg': 'pg-13',
        },
        {
            'id': 2,
            'image': SpiderFarFromHomeMovieImage,
            'name': 'Spiderman: Far From Home',
            'genre': 'Action',
            'releaseDate': '12 Dec 2022',
            'pg': 'pg-13',
        },
        {
            'id': 3,
            'image': SpiderFarFromHomeMovieImage,
            'name': 'Spiderman: Far From Home',
            'genre': 'Action',
            'releaseDate': '12 Dec 2022',
            'pg': 'pg-13',
        },
        {
            'id': 4,
            'image': SpiderFarFromHomeMovieImage,
            'name': 'Spiderman: Far From Home',
            'genre': 'Action',
            'releaseDate': '12 Dec 2022',
            'pg': 'pg-13',
        },
        {
            'id': 5,
            'image': SpiderFarFromHomeMovieImage,
            'name': 'Spiderman: Far From Home',
            'genre': 'Action',
            'releaseDate': '12 Dec 2022',
            'pg': 'pg-13',
        },
        {
            'id': 6,
            'image': SpiderFarFromHomeMovieImage,
            'name': 'Spiderman: Far From Home',
            'genre': 'Action',
            'releaseDate': '12 Dec 2022',
            'pg': 'pg-13',
        },
    ];

    return (
      <section className='max-w-[1200px] mx-auto'>
          <div className='mb-[120px]'>
              <h3 className='mb-12 border-l-4 border-[#D13223] pl-3'>Upcoming Movies</h3>

              <div className='grid grid-cols-3 gap-6'>
                  { upcomingMovies.map( movie => <Movie movie={ movie } key={ movie.id } /> ) }
              </div>
          </div>

          <div className='mb-[120px]'>
              <h3 className='mb-12 border-l-4 border-[#D13223] pl-3'>Trending Now</h3>

              <div className='grid grid-cols-3 gap-6'>
                  { trendingMovies.map( movie => <Movie movie={ movie } key={ movie.id } /> ) }
              </div>
          </div>
      </section>
  )
}
