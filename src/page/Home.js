import { Banner } from "../components/Banner";
import { Navigate } from "../components/Navigate";
import { NowShowingMovieList } from "../components/NowShowingMovieList";
import { UpComingMovieList } from "../components/UpComingMovieList";
import { PromotionList } from "../components/PromotionList";
import { useMovies } from "../context/MovieContext";

const HomePage = () => {

    const { movies } = useMovies();
    const nowShowingMovies = movies.nowShowing || [];
    const upComingMovies = movies.upcoming || [];
    const promotions = movies.promotions || [];
    //const banners = movies.banners || [];

    const movie = movies.movie || [];
    const days = movies.days || [];
    const cinemas = movies.cinemas || [];
    const times = movies.times || [];
  

    return (
        <div className="bg-[#151515] overflow-x-hidden">
            <div className="w-full px-4 md:w-11/12 md:px-0 m-auto pt-6 md:pt-16">
                <Banner/>
            </div>

            <div className="w-full px-4 md:w-11/12 md:px-0 m-auto pt-6 md:pt-10">
                <Navigate  movie = {movie} days = {days} cinemas = {cinemas} times ={times} />
            </div>

            <div className="w-full px-4 md:w-11/12 md:px-0 m-auto justify-center">
                <NowShowingMovieList movies={nowShowingMovies} />
            </div>

            <div className="w-full px-4 md:w-11/12 md:px-0 m-auto justify-center">
                <UpComingMovieList movies={upComingMovies} />
            </div>

            <div className="w-full px-4 md:w-11/12 md:px-0 m-auto justify-center">
                <PromotionList promotions={promotions} />
            </div>
        </div>
    )
}

export { HomePage }
