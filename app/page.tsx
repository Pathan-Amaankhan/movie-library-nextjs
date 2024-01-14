import Movie from "@/app/components/movies/movie";
import {getMovies} from "@/app/movies/utils";
import MovieData from "@/app/components/movies/interface";

export default function Home() {

    const upcomingMovies: Array<MovieData> = getMovies().filter( ( movie: MovieData ) => movie.isUpcomingMovie );

    const trendingMovies: Array<MovieData> = getMovies().filter( ( movie: MovieData ) => movie.isTrendingMovie );

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
