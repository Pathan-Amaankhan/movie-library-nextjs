import Movie from "@/app/components/movies/movie";
import {getMoviesData} from "@/app/movies/utils";
import MovieData from "@/app/components/movies/interface";

export default async function Home() {

    const upcomingMoviesData = await getMoviesData( 6, null, null, null, 'upcoming' );

    const upcomingMovies: Array<MovieData> = upcomingMoviesData.movies;

    const trendingMoviesData = await getMoviesData( 6, null, null, null, 'trending' );

    const trendingMovies: Array<MovieData> = trendingMoviesData.movies;

    return (
      <section className='max-w-[1200px] mx-auto my-[120px]'>
          <div className='mb-[120px]'>
              <h3 className='mb-12 border-l-4 border-[#D13223] pl-3'>Upcoming Movies</h3>

              <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
                  { upcomingMovies.map( movie => <Movie movie={ movie } key={ movie.id } /> ) }
              </div>
          </div>

          <div>
              <h3 className='mb-12 border-l-4 border-[#D13223] pl-3'>Trending Now</h3>

              <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
                  { trendingMovies.map( movie => <Movie movie={ movie } key={ movie.id } /> ) }
              </div>
          </div>
      </section>
  )
}
