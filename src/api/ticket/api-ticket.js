const tickets = [
  {
    id: 1,
    show_time: "14:00",
    order_id: 1,
    movie_id: "now_showing-1",
    seat_id: "A7",
  },
  {
    id: 2,
    show_time: "14:00",
    order_id: 1,
    movie_id: "now_showing-1",
    seat_id: "A8",
  },
];

export const getTicket = async () => {
  return tickets;
};

export const createTicket = async ({ show_time, order_id, movie_id, seat_id }) => {
  return {
    id: `local-${Date.now()}`,
    show_time,
    order_id,
    movie_id,
    seat_id,
  };
};
