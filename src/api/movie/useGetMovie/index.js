import {useQuery} from "@tanstack/react-query";
import {getMovie} from "../api-movie";

export const QK_GET_MOVIE = "GET_MOVIES";

const useGetMovies = () => {

    const {data = [], error, isFetching } = useQuery({
        queryKey: [QK_GET_MOVIE],
        queryFn: () => {
            return getMovie()
        },
        initialData: [],
    })

    console.log("Movie data:", data);

    return {
        data,
        error,
        isFetching
    }
}

export { useGetMovies }
