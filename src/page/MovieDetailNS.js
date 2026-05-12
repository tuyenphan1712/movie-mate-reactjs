import React, { useState } from "react";
import { SeatMap } from "../components/SeatMap";
import { ComboSelection } from "../components/ComboSelection";
import { Invoice } from "../components/Invoice";
import { MovieSchedule } from "../components/MovieSchedule";
import { MovieInfo } from "../components/MovieInfo";
import { ROUTING_WATCHTRAILER_NS } from "../router";
import { useLocation } from "react-router-dom";
import { useMovies } from "../context/MovieContext";

const MovieDetailNS = () => {
  const { state } = useLocation();
  const { movies } = useMovies();
  const movieId = state?.movieId;

  const movieDetails =
    (movies.nowShowing || []).find((movie) => String(movie.id) === String(movieId)) ||
    (movies.nowShowing || [])[0];

  const daysOfWeek = [
    "Chủ Nhật",
    "Thứ Hai",
    "Thứ Ba",
    "Thứ Tư",
    "Thứ Năm",
    "Thứ Sáu",
    "Thứ Bảy",
  ];

  const formatDate = (date) => {
    const day = daysOfWeek[date.getDay()];
    const dayOfMonth = date.getDate();
    const month = date.getMonth() + 1;
    return `${day} ${dayOfMonth}/${month}`;
  };

  const [selectedSeats, setSelectedSeats] = useState([]);
  const [selectedCombos, setSelectedCombos] = useState({});
  const [selectedSchedule, setSelectedSchedule] = useState(null);
  const [selectedCinema, setSelectedCinema] = useState("MovieMate Nguyễn Du");
  const [selectedTime, setSelectedTime] = useState("14:00");
  const [selectedDate, setSelectedDate] = useState(formatDate(new Date()));

  const handleScheduleSelect = (schedule) => {
    setSelectedSchedule(schedule);
    setSelectedTime(schedule.time);
    setSelectedCinema(schedule.theater);
    setSelectedDate(schedule.date);
  };

  const handleSeatSelection = (seats) => setSelectedSeats(seats);

  const handleComboSelection = (id, qty) =>
    setSelectedCombos({ ...selectedCombos, [id]: qty });

  const handleWatchTrailerClick = () => {
    window.open(ROUTING_WATCHTRAILER_NS, "_blank");
  };

  return (
    <div className="bg-[#151515] text-white min-h-screen">
      <div className="container mx-auto px-4 py-10 ">
        <MovieInfo
          movie={movieDetails?.name || movieDetails?.title || "Tên phim"}
          poster={state?.poster || movieDetails?.poster}
          genres={movieDetails?.genres || []}
          rating={movieDetails?.classify || "N/A"}
          duration={movieDetails?.duration || movieDetails?.time || "N/A"}
          description={movieDetails?.description || "Mô tả phim không có sẵn"}
          producer="MovieMate"
          director={movieDetails?.director || "Không rõ"}
          cast={movieDetails?.actor || "Đang cập nhật"}
          onWatchTrailerClick={handleWatchTrailerClick}
        />

        <div className="mt-10 w-11/12 m-auto">
          <MovieSchedule onScheduleSelect={handleScheduleSelect} />
        </div>

        <div className="mt-10 w-11/12 m-auto ">
          <SeatMap onSeatSelect={handleSeatSelection} />
        </div>

        <div className="mt-10 w-11/12 m-auto grid grid-cols-3 gap-6">
          <div className="col-span-2">
            <ComboSelection onComboSelect={handleComboSelection} />
          </div>
          <div className="col-span-1">
            <Invoice
              selectedSeats={selectedSeats}
              selectedCombos={selectedCombos}
              selectedCinema={selectedCinema}
              selectedMovie={movieDetails?.name || movieDetails?.title}
              selectedTime={selectedTime}
              selectedDate={selectedDate}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export { MovieDetailNS };
